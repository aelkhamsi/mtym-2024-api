import {
  IsDefined,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateApplicationDto {
  /* Personal informations */
  @IsNumber()
  @IsDefined()
  userId: number;

  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsNotEmpty()
  dateOfBirth: Date;

  @IsString()
  @IsOptional()
  identityCardNumber: string;

  @IsString()
  @IsNotEmpty()
  studentNumber: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsNotEmpty()
  region: string;

  @IsString()
  @IsNotEmpty()
  phoneNumber: string;

  @IsString()
  @IsNotEmpty()
  guardianFullName: string;

  @IsString()
  @IsNotEmpty()
  guardianPhoneNumber: string;

  @IsString()
  @IsNotEmpty()
  relationshipWithGuardian: string;

  @IsString()
  @IsOptional()
  specialConditions: string;

  /* Education */
  @IsString()
  @IsNotEmpty()
  highschool: string;

  @IsString()
  @IsNotEmpty()
  semesterAverageGrade: string;

  @IsString()
  @IsNotEmpty()
  semesterMathAverageGrade: string;

  @IsString()
  @IsNotEmpty()
  semesterRanking: string;

  @IsString()
  @IsNotEmpty()
  semesterMathRanking: string;

  @IsString()
  @IsNotEmpty()
  finalsAverageGrade: string;

  @IsString()
  @IsNotEmpty()
  finalsMathAverageGrade: string;

  /* Competition */
  @IsString()
  @IsNotEmpty()
  motivations: string;

  @IsString()
  @IsNotEmpty()
  hasPreviouslyParticipated: string;

  @IsString()
  @IsOptional()
  previousCompetitions: string;

  @IsString()
  @IsOptional()
  comments: string;

  /* Files */
  @IsString()
  @IsOptional()
  cnieUrl: string;

  @IsString()
  @IsOptional()
  schoolCertificateUrl: string;

  @IsString()
  @IsOptional()
  gradesUrl: string;

  @IsString()
  @IsOptional()
  parentalAuthorizationUrl: string;
}
