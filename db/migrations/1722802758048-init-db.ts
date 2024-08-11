import { MigrationInterface, QueryRunner } from "typeorm";

export class InitDb1722802758048 implements MigrationInterface {
    name = 'InitDb1722802758048'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`applications_status\` (\`id\` int NOT NULL AUTO_INCREMENT, \`status\` varchar(255) NOT NULL DEFAULT 'PENDING', \`cnieStatus\` varchar(255) NOT NULL DEFAULT 'PENDING', \`schoolCertificateStatus\` varchar(255) NOT NULL DEFAULT 'PENDING', \`regulationsStatus\` varchar(255) NOT NULL DEFAULT 'PENDING', \`gradesStatus\` varchar(255) NOT NULL DEFAULT 'PENDING', \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`applicationId\` int NULL, UNIQUE INDEX \`REL_de155f8fdccaf125d1e792fd27\` (\`applicationId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`applications\` (\`id\` int NOT NULL AUTO_INCREMENT, \`firstName\` varchar(255) NOT NULL DEFAULT '', \`lastName\` varchar(255) NOT NULL DEFAULT '', \`dateOfBirth\` timestamp NOT NULL, \`identityCardNumber\` varchar(255) NOT NULL DEFAULT '', \`city\` varchar(255) NOT NULL DEFAULT '', \`region\` varchar(255) NOT NULL DEFAULT '', \`phoneNumber\` varchar(255) NOT NULL DEFAULT '', \`emergencyContactName\` varchar(255) NOT NULL DEFAULT '', \`emergencyContactPhoneNumber\` varchar(255) NOT NULL DEFAULT '', \`lastYearEducationLevel\` varchar(255) NOT NULL DEFAULT '', \`educationProgram\` varchar(255) NOT NULL DEFAULT '', \`establishment\` varchar(255) NOT NULL DEFAULT '', \`fieldOfStudy\` text NOT NULL, \`cpgeGradeTrimesterOne\` varchar(255) NOT NULL DEFAULT '', \`cpgeGradeTrimesterTwo\` varchar(255) NOT NULL DEFAULT '', \`cpgeRankingTrimesterOne\` varchar(255) NOT NULL DEFAULT '', \`cpgeRankingTrimesterTwo\` varchar(255) NOT NULL DEFAULT '', \`nonCpgeAverageThreeBestScienceGrades\` varchar(255) NOT NULL DEFAULT '', \`nonCpgeAverageScienceGrades\` varchar(255) NOT NULL DEFAULT '', \`nonCpgeOverallAverage\` varchar(255) NOT NULL DEFAULT '', \`hasPreviouslyParticipated\` varchar(255) NOT NULL DEFAULT '', \`previousCompetitions\` text NULL, \`hasPreviouslyParticipatedInMmc\` varchar(255) NOT NULL DEFAULT '', \`previousResultsInMmc\` text NULL, \`motivations\` text NOT NULL, \`comments\` text NULL, \`cnieUrl\` varchar(255) NULL, \`schoolCertificateUrl\` varchar(255) NULL, \`regulationsUrl\` varchar(255) NULL, \`gradesUrl\` varchar(255) NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`userId\` int NULL, \`statusId\` int NULL, UNIQUE INDEX \`REL_90ad8bec24861de0180f638b9c\` (\`userId\`), UNIQUE INDEX \`REL_2ccfa45ebf6c44b5f26a1a87ff\` (\`statusId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`identifier\` varchar(255) NOT NULL DEFAULT '', \`firstName\` varchar(255) NOT NULL DEFAULT '', \`lastName\` varchar(255) NOT NULL DEFAULT '', \`email\` varchar(255) NOT NULL DEFAULT '', \`password\` varchar(255) NOT NULL DEFAULT '', \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`applicationId\` int NULL, UNIQUE INDEX \`REL_315a6ad486c15783fb06517691\` (\`applicationId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`admin_users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`username\` varchar(255) NOT NULL DEFAULT '', \`password\` varchar(255) NOT NULL DEFAULT '', \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`applications_status\` ADD CONSTRAINT \`FK_de155f8fdccaf125d1e792fd277\` FOREIGN KEY (\`applicationId\`) REFERENCES \`applications\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`applications\` ADD CONSTRAINT \`FK_90ad8bec24861de0180f638b9cc\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`applications\` ADD CONSTRAINT \`FK_2ccfa45ebf6c44b5f26a1a87ffe\` FOREIGN KEY (\`statusId\`) REFERENCES \`applications_status\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD CONSTRAINT \`FK_315a6ad486c15783fb065176918\` FOREIGN KEY (\`applicationId\`) REFERENCES \`applications\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP FOREIGN KEY \`FK_315a6ad486c15783fb065176918\``);
        await queryRunner.query(`ALTER TABLE \`applications\` DROP FOREIGN KEY \`FK_2ccfa45ebf6c44b5f26a1a87ffe\``);
        await queryRunner.query(`ALTER TABLE \`applications\` DROP FOREIGN KEY \`FK_90ad8bec24861de0180f638b9cc\``);
        await queryRunner.query(`ALTER TABLE \`applications_status\` DROP FOREIGN KEY \`FK_de155f8fdccaf125d1e792fd277\``);
        await queryRunner.query(`DROP TABLE \`admin_users\``);
        await queryRunner.query(`DROP INDEX \`REL_315a6ad486c15783fb06517691\` ON \`users\``);
        await queryRunner.query(`DROP TABLE \`users\``);
        await queryRunner.query(`DROP INDEX \`REL_2ccfa45ebf6c44b5f26a1a87ff\` ON \`applications\``);
        await queryRunner.query(`DROP INDEX \`REL_90ad8bec24861de0180f638b9c\` ON \`applications\``);
        await queryRunner.query(`DROP TABLE \`applications\``);
        await queryRunner.query(`DROP INDEX \`REL_de155f8fdccaf125d1e792fd27\` ON \`applications_status\``);
        await queryRunner.query(`DROP TABLE \`applications_status\``);
    }

}
