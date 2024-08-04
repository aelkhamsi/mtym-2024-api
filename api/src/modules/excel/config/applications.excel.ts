import { regionLabels } from '../labels';

export const columns = [
  { header: 'Id', key: 'id', width: 5 },
  { header: 'First Name', key: 'first-name', width: 15 },
  { header: 'Last Name', key: 'last-name', width: 15 },
  { header: 'Email', key: 'email', width: 25 },
  { header: 'Date of Birth', key: 'dob', width: 15 },
  { header: 'CNIE', key: 'cnie', width: 12 },
  { header: 'Student Nº (Massar or CNE)', key: 'student-number', width: 12 },
  { header: 'City', key: 'city', width: 15 },
  { header: 'Region', key: 'region', width: 20 },
  { header: 'Phone number', key: 'phone-number', width: 17 },
  {
    header: 'Guardian full name',
    key: 'guardian-full-name',
    width: 20,
  },
  {
    header: 'Guardian phone number',
    key: 'guardian-phone-number',
    width: 20,
  },
  {
    header: 'Relationship with Guardian',
    key: 'relationship-with-guardian',
    width: 20,
  },
  { header: 'Special Conditions', key: 'id', width: 20 },

  { header: 'Highschool', key: 'highschool', width: 15 },
  { header: '[semestre] Moyenne générale', key: 'semester-average-grade', width: 15 },
  { header: '[semestre] Moyenne en Mathématique', key: 'semester-math-average-grade', width: 15 },
  { header: '[semestre] Classement général', key: 'semester-ranking', width: 15 },
  { header: '[semestre] Classement en Mathématique', key: 'semester-math-ranking', width: 15 },
  { header: '[examen] Moyenne générale', key: 'examen-average-grade', width: 15 },
  { header: '[examen] Moyenne en Mathématique', key: 'examen-math-average-grade', width: 15 },
  
  { header: 'Motivations', key: 'id', width: 30 },
  {
    header: 'Have you participated in competitions before ?',
    key: 'has-previously-participated',
    width: 15,
  },
  { header: 'Details of experience', key: 'details-of-experience', width: 20 },
  { header: 'Comments', key: 'id', width: 30 },

  { header: 'Identity document', key: 'identity-document', width: 10 },
  { header: 'School certificate', key: 'school-certificate', width: 10 },
  { header: 'Grades', key: 'grades', width: 10 },
  { header: 'Regulations', key: 'regulations', width: 10 },
  { header: 'Parental authorization', key: 'parental-authorization', width: 10 },

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
    studentNumber: application?.studentNumber,
    city: application?.city,
    region: regionLabels[application?.region],
    phoneNumber: application?.phoneNumber,
    guardianFullName: application?.guardianFullName,
    guardianPhoneNumber: application?.guardianPhoneNumber,
    relationshipWithGuardian: application?.relationshipWithGuardian,
    specialConditions: application?.specialConditions,

    highschool: application?.highschool,
    semesterAverageGrade: application?.semesterAverageGrade,
    semesterMathAverageGrade: application?.semesterMathAverageGrade,
    semesterRanking: application?.semesterRanking,
    semesterMathRanking: application?.semesterMathRanking,
    finalsAverageGrade: application?.finalsAverageGrade,
    finalsMathAverageGrade: application?.finalsMathAverageGrade,

    motivations: application?.motivations,
    hasPreviouslyParticipated: application?.hasPreviouslyParticipated,
    previousCompetitions: application?.previousCompetitions,
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
    parentalAuthorizationUrl: {
      text: 'link',
      hyperlink: `https://${awsBucketName}.s3.${awsBucketRegion}.amazonaws.com/${application?.parentalAuthorizationUrl}`,
    },

    status: application?.status?.status,
  }));
};

export const styleSheet = (sheet) => {
  // personal informations style
  for (let i = 2; i <= 14; i++) {
    sheet.getColumn(i).fill = {
      type: 'pattern',
      pattern: 'solid',
      bgColor: { argb: 'FFFDDB' },
      fgColor: { argb: 'FFFDDB' },
    };
  }

  // education style
  for (let i = 15; i <= 21; i++) {
    sheet.getColumn(i).fill = {
      type: 'pattern',
      pattern: 'solid',
      bgColor: { argb: 'E4FFDE' },
      fgColor: { argb: 'E4FFDE' },
    };
  }

  // competition style
  for (let i = 22; i <= 25; i++) {
    sheet.getColumn(i).fill = {
      type: 'pattern',
      pattern: 'solid',
      bgColor: { argb: 'F8E3E6' },
      fgColor: { argb: 'F8E3E6' },
    };
  }

  // uploads style
  for (let i = 26; i <= 30; i++) {
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
