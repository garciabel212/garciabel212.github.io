export interface ExperienceEntry {
  id: string;
  company: string;
  companyShort: string;
  role: string;
  roleSubtitle?: string;
  period: string;
  location: string;
  type: 'full-time' | 'contract';
  current: boolean;
  summary: string;
  responsibilities: ResponsibilityGroup[];
}

export interface ResponsibilityGroup {
  category: string;
  icon: string;
  items: string[];
}

export const experience: ExperienceEntry[] = [
  {
    id: 'dlsg',
    company: 'Digital Library Systems Group / Image Access',
    companyShort: 'DLSG / Image Access',
    role: 'Service Engineer',
    roleSubtitle: 'Sales Engineering Support',
    period: 'October 2022 – Present',
    location: 'Boca Raton, FL (National Travel)',
    type: 'full-time',
    current: true,
    summary:
      'Customer-facing engineering role spanning the full solutions lifecycle — from pre-sales technical consulting and product demonstrations through enterprise deployment, customer training, and long-term technical support. Work directly with IT teams, administrators, and business stakeholders at institutions nationwide.',
    responsibilities: [
      {
        category: 'Customer & Sales Engineering',
        icon: 'Users',
        items: [
          'Technical discovery and requirements gathering with customer IT teams and stakeholders',
          'Product demonstrations and proof-of-concept support for sales opportunities',
          'Solution configuration and deployment planning',
          'Support for pre-sales technical presentations and trade show demonstrations',
          'Cross-functional collaboration between sales, engineering, and customer teams',
        ],
      },
      {
        category: 'Technical Implementation',
        icon: 'Settings',
        items: [
          'On-site hardware and software installations at customer institutions nationwide',
          'Remote system deployments and configuration',
          'Hardware/software integration and validation',
          'Software licensing and deployment management',
          'Customer onboarding and solution handoff',
        ],
      },
      {
        category: 'Infrastructure & Troubleshooting',
        icon: 'Network',
        items: [
          'Network configuration and validation for deployed systems',
          'Windows system diagnostics and application troubleshooting',
          'Remote technical support and escalation management',
          'System diagnostics and root-cause analysis',
          'Preventive and proactive maintenance programs',
        ],
      },
      {
        category: 'Training & Customer Success',
        icon: 'GraduationCap',
        items: [
          'Technical training for customer IT staff, administrators, and end users',
          'Customer onboarding and success documentation',
          'Multi-site deployment coordination and logistics',
          'Long-term account support and relationship management',
        ],
      },
      {
        category: 'Product & Development',
        icon: 'Code2',
        items: [
          'Designed and developed Service Map Planner — internal field-service operations platform',
          'Product testing and quality validation for new hardware/software releases',
          'Technical documentation for deployments and support procedures',
          'Data-quality reporting and operational tooling',
        ],
      },
    ],
  },
  {
    id: 'globenet',
    company: 'GlobeNet Telecom',
    companyShort: 'GlobeNet',
    role: 'Network Operations Center Engineer',
    period: 'December 2021 – September 2022',
    location: 'Boca Raton, FL',
    type: 'full-time',
    current: false,
    summary:
      'NOC engineering role focused on network monitoring, incident response, and infrastructure support for a telecommunications carrier. Developed skills in real-time network diagnostics, escalation management, and system reliability.',
    responsibilities: [
      {
        category: 'Network Operations',
        icon: 'Network',
        items: [
          'Real-time network monitoring and incident detection across carrier infrastructure',
          'Incident triage, escalation, and resolution coordination',
          'System reliability monitoring and alerting',
          'Cross-team communication during network events',
        ],
      },
    ],
  },
];

export interface EducationEntry {
  id: string;
  institution: string;
  degree: string;
  field: string;
  period: string;
  gpa?: string;
  highlights: string[];
}

export const education: EducationEntry[] = [
  {
    id: 'fau-bsce',
    institution: 'Florida Atlantic University',
    degree: 'Bachelor of Science',
    field: 'Computer Engineering',
    period: '2018 – 2022',
    gpa: '3.5',
    highlights: [
      'Computer Engineering curriculum with focus on hardware/software integration',
      'Certificate in Data Science & Analytics (May 2022)',
      'Bilingual: English and Spanish',
    ],
  },
];

export interface CertEntry {
  name: string;
  issuer: string;
  year: string;
  relevant: boolean;
}

export const certifications: CertEntry[] = [
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    year: '2022',
    relevant: true,
  },
];
