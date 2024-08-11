import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateApplicationsTable1723391049774 implements MigrationInterface {
    name = 'UpdateApplicationsTable1723391049774'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`applications\` DROP COLUMN \`cpgeGradeTrimesterOne\``);
        await queryRunner.query(`ALTER TABLE \`applications\` DROP COLUMN \`cpgeGradeTrimesterTwo\``);
        await queryRunner.query(`ALTER TABLE \`applications\` DROP COLUMN \`cpgeRankingTrimesterOne\``);
        await queryRunner.query(`ALTER TABLE \`applications\` DROP COLUMN \`cpgeRankingTrimesterTwo\``);
        await queryRunner.query(`ALTER TABLE \`applications\` DROP COLUMN \`educationProgram\``);
        await queryRunner.query(`ALTER TABLE \`applications\` DROP COLUMN \`emergencyContactName\``);
        await queryRunner.query(`ALTER TABLE \`applications\` DROP COLUMN \`emergencyContactPhoneNumber\``);
        await queryRunner.query(`ALTER TABLE \`applications\` DROP COLUMN \`establishment\``);
        await queryRunner.query(`ALTER TABLE \`applications\` DROP COLUMN \`fieldOfStudy\``);
        await queryRunner.query(`ALTER TABLE \`applications\` DROP COLUMN \`hasPreviouslyParticipatedInMmc\``);
        await queryRunner.query(`ALTER TABLE \`applications\` DROP COLUMN \`lastYearEducationLevel\``);
        await queryRunner.query(`ALTER TABLE \`applications\` DROP COLUMN \`nonCpgeAverageScienceGrades\``);
        await queryRunner.query(`ALTER TABLE \`applications\` DROP COLUMN \`nonCpgeAverageThreeBestScienceGrades\``);
        await queryRunner.query(`ALTER TABLE \`applications\` DROP COLUMN \`nonCpgeOverallAverage\``);
        await queryRunner.query(`ALTER TABLE \`applications\` DROP COLUMN \`previousResultsInMmc\``);
        await queryRunner.query(`ALTER TABLE \`applications\` ADD \`guardianFullName\` varchar(255) NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE \`applications\` ADD \`guardianPhoneNumber\` varchar(255) NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE \`applications\` ADD \`relationshipWithGuardian\` varchar(255) NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE \`applications\` ADD \`specialConditions\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`applications\` ADD \`educationLevel\` varchar(255) NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE \`applications\` ADD \`educationField\` varchar(255) NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE \`applications\` ADD \`highschool\` varchar(255) NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE \`applications\` ADD \`averageGrade\` varchar(255) NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE \`applications\` ADD \`mathAverageGrade\` varchar(255) NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE \`applications\` ADD \`ranking\` varchar(255) NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE \`applications\` ADD \`mathRanking\` varchar(255) NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE \`applications\` ADD \`hasPreviouslyParticipatedInMtym\` varchar(255) NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE \`applications\` ADD \`parentalAuthorizationUrl\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`applications_status\` CHANGE \`status\` \`status\` varchar(255) NOT NULL DEFAULT 'DRAFT'`);
        await queryRunner.query(`ALTER TABLE \`applications_status\` CHANGE \`cnieStatus\` \`cnieStatus\` varchar(255) NOT NULL DEFAULT 'DRAFT'`);
        await queryRunner.query(`ALTER TABLE \`applications_status\` CHANGE \`schoolCertificateStatus\` \`schoolCertificateStatus\` varchar(255) NOT NULL DEFAULT 'DRAFT'`);
        await queryRunner.query(`ALTER TABLE \`applications_status\` CHANGE \`regulationsStatus\` \`regulationsStatus\` varchar(255) NOT NULL DEFAULT 'DRAFT'`);
        await queryRunner.query(`ALTER TABLE \`applications_status\` CHANGE \`gradesStatus\` \`gradesStatus\` varchar(255) NOT NULL DEFAULT 'DRAFT'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`applications_status\` CHANGE \`gradesStatus\` \`gradesStatus\` varchar(255) NOT NULL DEFAULT 'PENDING'`);
        await queryRunner.query(`ALTER TABLE \`applications_status\` CHANGE \`regulationsStatus\` \`regulationsStatus\` varchar(255) NOT NULL DEFAULT 'PENDING'`);
        await queryRunner.query(`ALTER TABLE \`applications_status\` CHANGE \`schoolCertificateStatus\` \`schoolCertificateStatus\` varchar(255) NOT NULL DEFAULT 'PENDING'`);
        await queryRunner.query(`ALTER TABLE \`applications_status\` CHANGE \`cnieStatus\` \`cnieStatus\` varchar(255) NOT NULL DEFAULT 'PENDING'`);
        await queryRunner.query(`ALTER TABLE \`applications_status\` CHANGE \`status\` \`status\` varchar(255) NOT NULL DEFAULT 'PENDING'`);
        await queryRunner.query(`ALTER TABLE \`applications\` DROP COLUMN \`parentalAuthorizationUrl\``);
        await queryRunner.query(`ALTER TABLE \`applications\` DROP COLUMN \`hasPreviouslyParticipatedInMtym\``);
        await queryRunner.query(`ALTER TABLE \`applications\` DROP COLUMN \`mathRanking\``);
        await queryRunner.query(`ALTER TABLE \`applications\` DROP COLUMN \`ranking\``);
        await queryRunner.query(`ALTER TABLE \`applications\` DROP COLUMN \`mathAverageGrade\``);
        await queryRunner.query(`ALTER TABLE \`applications\` DROP COLUMN \`averageGrade\``);
        await queryRunner.query(`ALTER TABLE \`applications\` DROP COLUMN \`highschool\``);
        await queryRunner.query(`ALTER TABLE \`applications\` DROP COLUMN \`educationField\``);
        await queryRunner.query(`ALTER TABLE \`applications\` DROP COLUMN \`educationLevel\``);
        await queryRunner.query(`ALTER TABLE \`applications\` DROP COLUMN \`specialConditions\``);
        await queryRunner.query(`ALTER TABLE \`applications\` DROP COLUMN \`relationshipWithGuardian\``);
        await queryRunner.query(`ALTER TABLE \`applications\` DROP COLUMN \`guardianPhoneNumber\``);
        await queryRunner.query(`ALTER TABLE \`applications\` DROP COLUMN \`guardianFullName\``);
        await queryRunner.query(`ALTER TABLE \`applications\` ADD \`previousResultsInMmc\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`applications\` ADD \`nonCpgeOverallAverage\` varchar(255) NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE \`applications\` ADD \`nonCpgeAverageThreeBestScienceGrades\` varchar(255) NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE \`applications\` ADD \`nonCpgeAverageScienceGrades\` varchar(255) NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE \`applications\` ADD \`lastYearEducationLevel\` varchar(255) NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE \`applications\` ADD \`hasPreviouslyParticipatedInMmc\` varchar(255) NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE \`applications\` ADD \`fieldOfStudy\` text NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`applications\` ADD \`establishment\` varchar(255) NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE \`applications\` ADD \`emergencyContactPhoneNumber\` varchar(255) NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE \`applications\` ADD \`emergencyContactName\` varchar(255) NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE \`applications\` ADD \`educationProgram\` varchar(255) NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE \`applications\` ADD \`cpgeRankingTrimesterTwo\` varchar(255) NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE \`applications\` ADD \`cpgeRankingTrimesterOne\` varchar(255) NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE \`applications\` ADD \`cpgeGradeTrimesterTwo\` varchar(255) NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE \`applications\` ADD \`cpgeGradeTrimesterOne\` varchar(255) NOT NULL DEFAULT ''`);
    }

}
