import { Module } from '@nestjs/common';
import { TeamService } from './services/team.service';
import { TeamController } from './controllers/team.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Team } from './entities/team.entity';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forFeature([Team]),
  ],
  controllers: [TeamController],
  providers: [TeamService],
})
export class TeamModule {}
