import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, UnauthorizedException, Put, Req } from '@nestjs/common';
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

    const teams = await this.findAll();
    const teamExists = teams.find(team => cleanString(team?.name) == cleanName)
    if (teamExists) throw new UnauthorizedException('Team with this name already exists');

    return this.teamService.create(createTeamDto);
  }

  @Get()
  findAll() {
    return this.teamService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const team = await this.teamService.findOneById(+id);
    if (!team) {
      throw new NotFoundException();
    }
    
    return team;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTeamDto: UpdateTeamDto) {
    return this.teamService.update(+id, updateTeamDto);
  }

  @Put('join/:id')
  addUser(@Req() request: Request, @Param('id') id: string) {
    const userId = request['user'].id;
    return this.teamService.addUser(+id, +userId);
  }

  @Put('unjoin/:id')
  removeUser(@Req() request: Request, @Param('id') id: string) {
    const userId = request['user'].id;
    console.log('userId', userId)
    return this.teamService.removeUser(+id, +userId);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teamService.remove(+id);
  }
}
