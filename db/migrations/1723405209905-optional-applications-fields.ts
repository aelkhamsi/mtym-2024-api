import { MigrationInterface, QueryRunner } from "typeorm";

export class OptionalApplicationsFields1723405209905 implements MigrationInterface {
    name = 'OptionalApplicationsFields1723405209905'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`applications\` CHANGE \`dateOfBirth\` \`dateOfBirth\` timestamp NULL`);
        await queryRunner.query(`ALTER TABLE \`applications\` CHANGE \`motivations\` \`motivations\` text NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`applications\` CHANGE \`motivations\` \`motivations\` text NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`applications\` CHANGE \`dateOfBirth\` \`dateOfBirth\` timestamp NOT NULL`);
    }

}
