import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'teams' })
export class Team {
  constructor(partial: Partial<Team>) {
    Object.assign(this, partial);
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', default: '' })
  name: string;

  @Column({ type: 'varchar', default: '' })
  slogan: string;

  @Column({ type: 'varchar', default: '' })
  mentorFullname: string;
}