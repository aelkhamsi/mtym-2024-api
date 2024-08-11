import {
  educationLevelLabels,
  educationProgramLabels,
  regionLabels,
} from '../labels';

export const columns = [
  { header: 'Id', key: 'id', width: 5 },
  { header: 'First Name', key: 'first-name', width: 15 },
  { header: 'Last Name', key: 'last-name', width: 15 },
  { header: 'Email', key: 'email', width: 25 },
  { header: 'Date of Birth', key: 'dob', width: 15 },
  { header: 'CNIE', key: 'cnie', width: 12 },
  { header: 'City', key: 'city', width: 15 },
  { header: 'Region', key: 'region', width: 20 },
  { header: 'Phone number', key: 'phone-number', width: 17 },
  {
    header: 'Emergency contact full name',
    key: 'emergency-contact-full-name',
    width: 20,
  },
  {
    header: 'Emergency contact phone number',
    key: 'emergency-contact-phone-number',
    width: 20,
  },
  { header: 'Education level', key: 'education-level', width: 10 },
  { header: 'Education program', key: 'education-program', width: 20 },
  { header: 'School / University', key: 'establishment', width: 20 },
  { header: 'Field of Study', key: 'field-of-study', width: 20 },
  {
    header: '[cpge] Math grade trimester 1',
    key: 'cpge-math-grade-1',
    width: 15,
  },
  {
    header: '[cpge] Math grade trimester 2',
    key: 'cpge-math-grade-2',
    width: 15,
  },
  {
    header: '[cpge] Math ranking trimester 1',
    key: 'cpge-math-ranking-1',
    width: 15,
  },
  {
    header: '[cpge] Math ranking trimester 2',
    key: 'cpge-math-ranking-2',
    width: 15,
  },
  {
    header: '[not cpge] Average grade 3 best scientific subjects',
    key: 'noncpge-average-three-best-scientific-subjects',
    width: 15,
  },
  {
    header: '[not cpge] Average all scientific subjects',
    key: 'noncpge-average-scientific-subjects',
    width: 15,
  },
  {
    header: '[not cpge] Average Overall',
    key: 'noncpge-overall-average',
    width: 15,
  },
  {
    header: 'Have you participated in competitions before ?',
    key: 'has-previously-participated',
    width: 15,
  },
  { header: 'Achieved result', key: 'achieved-result', width: 20 },
  {
    header: 'Have you participated in MMC before ?',
    key: 'has-previously-participated-in-mmc',
    width: 15,
  },
  { header: 'MMC ranking', key: 'mmc-ranking', width: 20 },
  { header: 'Motivations', key: 'id', width: 30 },
  { header: 'Comments', key: 'id', width: 30 },
  { header: 'CNIE', key: 'cnie', width: 10 },
  { header: 'School certificate', key: 'school-certificate', width: 10 },
  { header: 'Grades', key: 'grades', width: 10 },
  { header: 'Regulations', key: 'regulations', width: 10 },
  { header: 'Status', key: 'status', width: 15 },
];

export const rowFactory = (applications: any[], configService) => {
  const awsBucketName = configService.get('AWS_BUCKET_NAME');
  const awsBucketRegion = configService.get('AWS_BUCKET_REGION');

  return applications.map((application: any) => ({
    id: application?.id,
    firstName: application?.user?.firstName,
    lastName: application?.user?.lastName,
    email: application?.user?.email,
    dateOfBirth: new Date(application?.dateOfBirth),
    identityCardNumber: application?.identityCardNumber,
    city: application?.city,
    region: regionLabels[application?.region],
    phoneNumber: application?.phoneNumber,
    emergencyContactName: application?.emergencyContactName,
    emergencyContactPhoneNumber: application?.emergencyContactPhoneNumber,

    lastYearEducationLevel:
      educationLevelLabels[application?.lastYearEducationLevel],
    educationProgram: educationProgramLabels[application?.educationProgram],
    establishment: application?.establishment,
    fieldOfStudy: application?.fieldOfStudy,
    cpgeGradeTrimesterOne: application?.cpgeGradeTrimesterOne,
    cpgeGradeTrimesterTwo: application?.cpgeGradeTrimesterTwo,
    cpgeRankingTrimesterOne: application?.cpgeRankingTrimesterOne,
    cpgeRankingTrimesterTwo: application?.cpgeRankingTrimesterTwo,
    nonCpgeAverageThreeBestScienceGrades:
      application?.nonCpgeAverageThreeBestScienceGrades,
    nonCpgeAverageScienceGrades: application?.nonCpgeAverageScienceGrades,
    nonCpgeOverallAverage: application?.nonCpgeOverallAverage,

    hasPreviouslyParticipated: application?.hasPreviouslyParticipated,
    previousCompetitions: application?.previousCompetitions,
    hasPreviouslyParticipatedInMmc: application?.hasPreviouslyParticipatedInMmc,
    previousResultsInMmc: application?.previousResultsInMmc,
    motivations: application?.motivations,
    comments: application?.comments,

    cnieUrl: {
      text: 'link',
      hyperlink: `https://${awsBucketName}.s3.${awsBucketRegion}.amazonaws.com/${application?.cnieUrl}`,
    },
    schoolCertificateUrl: {
      text: 'link',
      hyperlink: `https://${awsBucketName}.s3.${awsBucketRegion}.amazonaws.com/${application?.schoolCertificateUrl}`,
    },
    gradesUrl: {
      text: 'link',
      hyperlink: `https://${awsBucketName}.s3.${awsBucketRegion}.amazonaws.com/${application?.gradesUrl}`,
    },
    regulationsUrl: {
      text: 'link',
      hyperlink: `https://${awsBucketName}.s3.${awsBucketRegion}.amazonaws.com/${application?.regulationsUrl}`,
    },

    status: application?.status?.status,
  }));
};

export const styleSheet = (sheet) => {
  // personal informations style
  for (let i = 2; i <= 11; i++) {
    sheet.getColumn(i).fill = {
      type: 'pattern',
      pattern: 'solid',
      bgColor: { argb: 'FFFDDB' },
      fgColor: { argb: 'FFFDDB' },
    };
  }

  // education style
  for (let i = 12; i <= 22; i++) {
    sheet.getColumn(i).fill = {
      type: 'pattern',
      pattern: 'solid',
      bgColor: { argb: 'E4FFDE' },
      fgColor: { argb: 'E4FFDE' },
    };
  }

  // competition style
  for (let i = 23; i <= 28; i++) {
    sheet.getColumn(i).fill = {
      type: 'pattern',
      pattern: 'solid',
      bgColor: { argb: 'F8E3E6' },
      fgColor: { argb: 'F8E3E6' },
    };
  }

  // uploads style
  for (let i = 29; i <= 32; i++) {
    sheet.getColumn(i).fill = {
      type: 'pattern',
      pattern: 'solid',
      bgColor: { argb: 'DAEAF6' },
      fgColor: { argb: 'DAEAF6' },
    };

    sheet.getColumn(i).font = {
      underline: true,
      color: { argb: 'FF0000FF' },
    };
  }

  // header style
  sheet.getRow(1).height = 70;
  sheet.getRow(1).font = {
    size: 11.5,
    bold: true,
    color: { argb: 'FFFFFF' },
  };
  sheet.getRow(1).fill = {
    type: 'pattern',
    pattern: 'solid',
    bgColor: { argb: '272163' },
    fgColor: { argb: '272163' },
  };
  sheet.getRow(1).alignment = {
    vertical: 'middle',
    horizontal: 'center',
    wrapText: true,
  };
  sheet.getRow(1).border = {
    top: { style: 'thin', color: { argb: 'FFFFFF' } },
    left: { style: 'thin', color: { argb: 'FFFFFF' } },
    bottom: { style: 'thin', color: { argb: 'FFFFFF' } },
    right: { style: 'thin', color: { argb: 'FFFFFF' } },
  };
};
