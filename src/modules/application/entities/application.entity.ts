import { User } from 'src/modules/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ApplicationStatus } from './application-status.entity';

@Entity({ name: 'applications' })
export class Application {
  constructor(partial: Partial<Application>) {
    Object.assign(this, partial);
  }

  /* Personal Informations */
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User, (user) => user.application)
  @JoinColumn()
  user: User;

  @OneToOne(
    () => ApplicationStatus,
    (applicationStatus) => applicationStatus.application,
  )
  @JoinColumn()
  status: ApplicationStatus;

  @Column({ type: 'varchar', default: '' })
  firstName: string;

  @Column({ type: 'varchar', default: '' })
  lastName: string;

  @Column({ type: 'timestamp' })
  dateOfBirth: Date;

  @Column({ type: 'varchar', default: '' })
  identityCardNumber: string;

  @Column({ type: 'varchar', default: '' })
  city: string;

  @Column({ type: 'varchar', default: '' })
  region: string;

  @Column({ type: 'varchar', default: '' })
  phoneNumber: string;

  @Column({ type: 'varchar', default: '' })
  emergencyContactName: string;

  @Column({ type: 'varchar', default: '' })
  emergencyContactPhoneNumber: string;

  /* Education */
  @Column({ type: 'varchar', default: '' })
  lastYearEducationLevel: string;

  @Column({ type: 'varchar', default: '' })
  educationProgram: string;

  @Column({ type: 'varchar', default: '' })
  establishment: string;

  @Column({ type: 'text' })
  fieldOfStudy: string;

  @Column({ type: 'varchar', default: '' })
  cpgeGradeTrimesterOne: string;

  @Column({ type: 'varchar', default: '' })
  cpgeGradeTrimesterTwo: string;

  @Column({ type: 'varchar', default: '' })
  cpgeRankingTrimesterOne: string;

  @Column({ type: 'varchar', default: '' })
  cpgeRankingTrimesterTwo: string;

  @Column({ type: 'varchar', default: '' })
  nonCpgeAverageThreeBestScienceGrades: string;

  @Column({ type: 'varchar', default: '' })
  nonCpgeAverageScienceGrades: string;

  @Column({ type: 'varchar', default: '' })
  nonCpgeOverallAverage: string;

  /* Competition */
  @Column({ type: 'varchar', default: '' })
  hasPreviouslyParticipated: string;

  @Column({ type: 'text', nullable: true })
  previousCompetitions: string;

  @Column({ type: 'varchar', default: '' })
  hasPreviouslyParticipatedInMmc: string;

  @Column({ type: 'text', nullable: true })
  previousResultsInMmc: string;

  @Column({ type: 'text' })
  motivations: string;

  @Column({ type: 'text', nullable: true })
  comments: string;

  /* Files */
  @Column({ type: 'varchar', nullable: true })
  cnieUrl: string;

  @Column({ type: 'varchar', nullable: true })
  schoolCertificateUrl: string;

  @Column({ type: 'varchar', nullable: true })
  regulationsUrl: string;

  @Column({ type: 'varchar', nullable: true })
  gradesUrl: string;

  /* createAt & updatedAt */
  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updatedAt: Date;
}
