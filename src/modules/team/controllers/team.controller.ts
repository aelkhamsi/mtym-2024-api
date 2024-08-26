import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  UnauthorizedException,
  Put,
  Req,
} from '@nestjs/common';
import { TeamService } from '../services/team.service';
import { CreateTeamDto } from '../dto/create-team.dto';
import { UpdateTeamDto } from '../dto/update-team.dto';
import { cleanString } from 'src/utils/string';

@Controller('mtym-api/teams')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Post()
  async create(@Body() createTeamDto: CreateTeamDto) {
    const { name } = createTeamDto;
    const cleanName = cleanString(name);

    const teams = await this.teamService.findAll();
    const teamExists = teams?.find(
      (team) => cleanString(team?.name) == cleanName,
    );
    if (teamExists) {
      throw new UnauthorizedException('Team with this name already exists');
    }

    const team = await this.teamService.create(createTeamDto);

    return {
      team: team,
      statusCode: 200,
    };
  }

  @Get()
  async findAll() {
    const teams = await this.teamService.findAll();

    return {
      teams: teams,
      statusCode: 200,
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const team = await this.teamService.findOneById(+id);
    if (!team) {
      throw new NotFoundException();
    }

    return {
      team: team,
      statusCode: 200,
    };
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateTeamDto: UpdateTeamDto) {
    const update = await this.teamService.update(+id, updateTeamDto);

    return {
      id: id,
      update: update,
      statusCode: 200,
    };
  }

  @Put('join/:id')
  async addUser(@Req() request: Request, @Param('id') id: string) {
    const userId = request['user'].id;
    const update = await this.teamService.addUser(+id, +userId);

    return {
      id: id,
      update: update,
      statusCode: 200,
    };
  }

  @Put('unjoin/:id')
  async removeUser(@Req() request: Request, @Param('id') id: string) {
    const userId = request['user'].id;
    const update = await this.teamService.removeUser(+id, +userId);

    return {
      id: id,
      update: update,
      statusCode: 200,
    };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teamService.remove(+id);
  }
}
