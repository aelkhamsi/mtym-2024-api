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
  @IsNotEmpty()
  identityCardNumber: string;

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
  emergencyContactName: string;

  @IsString()
  @IsNotEmpty()
  emergencyContactPhoneNumber: string;

  /* Education */
  @IsString()
  @IsNotEmpty()
  lastYearEducationLevel: string;

  @IsString()
  @IsNotEmpty()
  educationProgram: string;

  @IsString()
  @IsNotEmpty()
  establishment: string;

  @IsString()
  @IsNotEmpty()
  fieldOfStudy: string;

  /* Competition */
  @IsString()
  @IsNotEmpty()
  hasPreviouslyParticipated: string;

  @IsString()
  @IsOptional()
  previousCompetitions: string;

  @IsString()
  @IsNotEmpty()
  hasPreviouslyParticipatedInMmc: string;

  @IsString()
  @IsOptional()
  previousResultsInMmc: string;

  @IsString()
  @IsNotEmpty()
  motivations: string;

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
  regulationsUrl: string;

  @IsString()
  @IsOptional()
  gradesUrl: string;
}
