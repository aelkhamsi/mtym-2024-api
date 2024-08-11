import { Injectable } from '@nestjs/common';
import { CreateTeamDto } from '../dto/create-team.dto';
import { UpdateTeamDto } from '../dto/update-team.dto';
import { Team } from '../entities/team.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TeamService {
  constructor(
    @InjectRepository(Team)
    private teamRepository: Repository<Team>,
  ) {}

  async create(createTeamDto: CreateTeamDto) {
    const team = await this.teamRepository.create(createTeamDto);
    return await this.teamRepository.save(team);
  }

  findAll() {
    return this.teamRepository
      .createQueryBuilder('team')
      .getMany();
  }

  findOneById(id: number) {
    return this.teamRepository
      .createQueryBuilder('team')
      .where('team.id = :id', { id })
      .getOne();
  }

  findOneByName(name: string) {
    return this.teamRepository
      .createQueryBuilder('team')
      .where('team.name = :name', { name })
      .getOne();
  }

  update(id: number, updateTeamDto: UpdateTeamDto) {
    return this.teamRepository.update({ id }, updateTeamDto);
  }

  remove(id: number) {
    return this.teamRepository.delete({ id });
  }
}
