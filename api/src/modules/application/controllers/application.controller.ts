import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
  Request,
  ForbiddenException,
} from '@nestjs/common';
import { ApplicationService } from '../services/application.service';
import { SerializedApplication } from '../entities/serialized-application.entity';
import { CreateApplicationDto } from '../dto/create-application.dto';
import { UpdateApplicationDto } from '../dto/update-application.dto';
import { RolesGuard } from 'src/guards/roles.guard';
import { ADMIN_ROLE } from 'src/constants';
import { Roles } from 'src/decorators/roles.decorator';
import { UserService } from 'src/modules/user/services/user.service';
import { ApplicationStatusService } from '../services/application-status.service';
import { UpdateApplicationStatusDto } from '../dto/update-application-status.dto';
import { SerializedUser } from 'src/modules/user/entities/serialized-user';
import { Status } from '../entities/application-status.entity';

@Controller('sc-api/applications')
export class ApplicationController {
  constructor(
    private readonly applicationService: ApplicationService,
    private readonly userService: UserService,
    private readonly applicationStatusService: ApplicationStatusService,
  ) {}

  @Get('user/:id')
  @HttpCode(200)
  @UseGuards(RolesGuard)
  @Roles(ADMIN_ROLE)
  async findByUserId(@Param('id', ParseIntPipe) id: number) {
    const user = await this.userService.findOneById(id);
    if (!user) {
      throw new NotFoundException();
    }

    const applicationStatus =
      await this.applicationStatusService.findOneByApplicationId(
        user.application.id,
      );

    user.application.status = applicationStatus;
    return new SerializedApplication(user.application);
  }

  @Get()
  @HttpCode(200)
  @UseGuards(RolesGuard)
  @Roles(ADMIN_ROLE)
  async findAll() {
    const applications = await this.applicationService.findAll();

    return {
      applications: applications
        .map((application) => ({
          ...application,
          user: new SerializedUser(application?.user),
        }))
        .map((application) => new SerializedApplication(application)),
      statusCode: 200,
    };
  }

  @Get(':id')
  @HttpCode(200)
  @UseGuards(RolesGuard)
  @Roles(ADMIN_ROLE)
  async findOneById(@Param('id', ParseIntPipe) id: number) {
    const application = await this.applicationService.findOneById(id);
    if (!application) {
      throw new NotFoundException();
    }

    return new SerializedApplication(application);
  }

  @Post()
  @HttpCode(200)
  async create(
    @Body() createApplicationDto: CreateApplicationDto,
    @Request() req,
  ) {
    if (req['user'].id !== createApplicationDto.userId) {
      throw new ForbiddenException();
    }

    const user = await this.userService.findOneById(req['user'].id);
    if (!user) {
      throw new ForbiddenException();
    }

    const userApplication = user?.application;
    if (userApplication) {
      await this.applicationService.delete(userApplication?.id);
    }

    const application = await this.applicationService.create(
      createApplicationDto,
    );

    return {
      id: application.id,
      statusCode: 200,
    };
  }

  @Put(':id')
  @HttpCode(200)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateApplicationDto: UpdateApplicationDto,
    @Request() req,
  ) {
    const userId = req['user'].id;
    const application = await this.applicationService.findOneByUserId(userId);

    if (id !== application?.id) {
      throw new ForbiddenException();
    }

    const update = await this.applicationService.update(
      id,
      updateApplicationDto,
    );

    const applicationStatus = application?.status;
    if (applicationStatus.status === 'NOTIFIED') {
      this.applicationStatusService.update(applicationStatus?.id, {
        ...applicationStatus,
        status: 'UPDATED',
      });
    }

    return {
      id: id,
      update: update,
      statusCode: 200,
    };
  }

  @Put('status/:id')
  @HttpCode(200)
  @UseGuards(RolesGuard)
  @Roles(ADMIN_ROLE)
  async updateStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateApplicationStatusDto: UpdateApplicationStatusDto,
  ) {
    const application = await this.applicationService.findOneById(id);
    if (!application) {
      throw new NotFoundException();
    }

    const update = await this.applicationStatusService.update(
      application.status.id,
      updateApplicationStatusDto,
    );

    return {
      id: id,
      update: update,
      statusCode: 200,
    };
  }

  @Delete(':id')
  @HttpCode(200)
  @UseGuards(RolesGuard)
  @Roles(ADMIN_ROLE)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.applicationService.delete(id);
  }
}
