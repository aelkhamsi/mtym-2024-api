import { ForbiddenException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TeamAccessCode } from '../entities/team-access-code.entity';
import { v4 as uuidv4 } from 'uuid';
import { TeamService } from './team.service';

@Injectable()
export class TeamAccessCodeService {
  constructor(
    @InjectRepository(TeamAccessCode)
    private readonly teamAccessCodeRepository: Repository<TeamAccessCode>,
    private readonly teamService: TeamService,
  ) {}

  async create(teamId: number) {
    // generate access code
    const uuid = await uuidv4().slice(-6);
    const accessCode = await this.teamAccessCodeRepository.create({
      accessCode: uuid,
    });

    // link access code to team
    const team = await this.teamService.findOneById(teamId);
    if (!team) {
      throw new ForbiddenException("The team doesn't exist");
    }
    accessCode.team = team;

    this.teamAccessCodeRepository.save(accessCode);
    return accessCode;
  }

  async check(accessCode: string, teamId: number) {
    const team = await this.teamService.findOneById(teamId);
    if (!team) {
      throw new ForbiddenException("The team doesn't exist");
    }

    return this.teamAccessCodeRepository
      .createQueryBuilder('teamAccessCode')
      .andWhere('teamAccessCode.accessCode = :accessCode', { accessCode })
      .andWhere('teamAccessCode.teamId = :teamId', { teamId })
      .getOne();
  }

  async delete(id: number) {
    return this.teamAccessCodeRepository.delete({ id });
  }
}
