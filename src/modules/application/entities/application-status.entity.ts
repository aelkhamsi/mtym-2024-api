import { Application } from './application.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export type Status =
  | 'PENDING'
  | 'NOTIFIED'
  | 'UPDATED'
  | 'VALIDATED'
  | 'ACCEPTED'
  | 'REFUSED'
  | 'WAITLIST';

export type FileStatus = 'PENDING' | 'VALID' | 'NOT_VALID';

@Entity({ name: 'applications_status' })
export class ApplicationStatus {
  constructor(partial: Partial<ApplicationStatus>) {
    Object.assign(this, partial);
  }

  /* Personal Informations */
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Application, (application) => application.status)
  @JoinColumn()
  application: Application;

  /* Global status */
  @Column({ type: 'varchar', default: 'PENDING' })
  status: Status;

  /* Files status */
  @Column({ type: 'varchar', default: 'PENDING' })
  cnieStatus: FileStatus;

  @Column({ type: 'varchar', default: 'PENDING' })
  schoolCertificateStatus: FileStatus;

  @Column({ type: 'varchar', default: 'PENDING' })
  regulationsStatus: FileStatus;

  @Column({ type: 'varchar', default: 'PENDING' })
  gradesStatus: FileStatus;

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
