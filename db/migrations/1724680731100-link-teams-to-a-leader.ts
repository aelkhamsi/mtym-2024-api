import { MigrationInterface, QueryRunner } from 'typeorm';

export class LinkTeamsToALeader1724680731100 implements MigrationInterface {
  name = 'LinkTeamsToALeader1724680731100';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`teams\` ADD \`leaderId\` int NULL`);
    await queryRunner.query(
      `ALTER TABLE \`teams\` ADD UNIQUE INDEX \`IDX_6d5c85d3f2602450d1e615afae\` (\`leaderId\`)`,
    );
    await queryRunner.query(
      `CREATE UNIQUE INDEX \`REL_6d5c85d3f2602450d1e615afae\` ON \`teams\` (\`leaderId\`)`,
    );
    await queryRunner.query(
      `ALTER TABLE \`teams\` ADD CONSTRAINT \`FK_6d5c85d3f2602450d1e615afae9\` FOREIGN KEY (\`leaderId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`teams\` DROP FOREIGN KEY \`FK_6d5c85d3f2602450d1e615afae9\``,
    );
    await queryRunner.query(
      `DROP INDEX \`REL_6d5c85d3f2602450d1e615afae\` ON \`teams\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`teams\` DROP INDEX \`IDX_6d5c85d3f2602450d1e615afae\``,
    );
    await queryRunner.query(`ALTER TABLE \`teams\` DROP COLUMN \`leaderId\``);
  }
}
