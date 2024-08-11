import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTeamsTable1723380462462 implements MigrationInterface {
    name = 'CreateTeamsTable1723380462462'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`teams\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL DEFAULT '', \`slogan\` varchar(255) NOT NULL DEFAULT '', \`mentorFullname\` varchar(255) NOT NULL DEFAULT '', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`teams\``);
    }
}
