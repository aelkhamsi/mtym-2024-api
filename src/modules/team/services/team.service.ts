import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTeamDto } from '../dto/create-team.dto';
import { UpdateTeamDto } from '../dto/update-team.dto';
import { Team } from '../entities/team.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserService } from 'src/modules/user/services/user.service';

@Injectable()
export class TeamService {
  constructor(
    private readonly userService: UserService,
    @InjectRepository(Team)
    private teamRepository: Repository<Team>,
  ) {}

  async create(createTeamDto: CreateTeamDto) {
    const team = await this.teamRepository.create(createTeamDto);
    return this.teamRepository.save(team);
  }

  findAll() {
    return this.teamRepository
      .createQueryBuilder('team')
      .leftJoinAndSelect('team.users', 'user')
      .leftJoinAndSelect('user.application', 'application')
      .leftJoinAndSelect('application.status', 'status')
      .getMany();
  }

  findOneById(id: number) {
    return this.teamRepository
      .createQueryBuilder('team')
      .leftJoinAndSelect('team.users', 'user')
      .leftJoinAndSelect('user.application', 'application')
      .leftJoinAndSelect('application.status', 'status')
      .where('team.id = :id', { id })
      .getOne();
  }

  findOneByName(name: string) {
    return this.teamRepository
      .createQueryBuilder('team')
      .leftJoinAndSelect('team.users', 'user')
      .leftJoinAndSelect('user.application', 'application')
      .leftJoinAndSelect('application.status', 'status')
      .where('team.name = :name', { name })
      .getOne();
  }

  async addUser(id: number, userId: number) {
    const user = await this.userService.findOneById(userId);
    const team = (await this.findOneById(id)) as Team;
    if (!user || !team) {
      throw new NotFoundException('The user or team does not exist');
    }
    team.users = [...team.users, user];
    return await this.teamRepository.save(team);
  }

  async removeUser(id: number, userId: number) {
    const team = (await this.findOneById(id)) as Team;
    if (!team) {
      throw new NotFoundException('The team does not exist');
    }
    team.users = team.users.filter((user) => user?.id != userId);
    return await this.teamRepository.save(team);
  }

  update(id: number, updateTeamDto: UpdateTeamDto) {
    return this.teamRepository.update({ id }, updateTeamDto);
  }

  remove(id: number) {
    return this.teamRepository.delete({ id });
  }
}
