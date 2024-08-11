import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateRelationUserTeam1723386246531 implements MigrationInterface {
    name = 'CreateRelationUserTeam1723386246531'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`teamId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD CONSTRAINT \`FK_d1803064187c8f38e57a9c4984c\` FOREIGN KEY (\`teamId\`) REFERENCES \`teams\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP FOREIGN KEY \`FK_d1803064187c8f38e57a9c4984c\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`teamId\``);
    }

}
