export interface SkillGroup {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  accentColor: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'solutions-eng',
    title: 'Solutions Engineering',
    subtitle: 'Pre-sales & technical consulting',
    icon: 'Presentation',
    accentColor: '#3B82F6',
    skills: [
      'Technical Discovery',
      'Requirements Gathering',
      'Solution Design',
      'Product Demonstrations',
      'Technical Presentations',
      'Proof of Concept Support',
      'Pre-Sales Support',
      'Customer Requirements',
      'Solution Configuration',
      'Trade Show Support',
    ],
  },
  {
    id: 'customer-eng',
    title: 'Customer Engineering',
    subtitle: 'Implementation & support',
    icon: 'Users',
    accentColor: '#06B6D4',
    skills: [
      'Enterprise Implementation',
      'Customer Onboarding',
      'Technical Training',
      'Field Service',
      'Remote Support',
      'Escalation Management',
      'Customer Success',
      'Multi-site Deployments',
      'National Travel',
      'Stakeholder Communication',
    ],
  },
  {
    id: 'systems',
    title: 'Systems & Infrastructure',
    subtitle: 'Hardware, networks, and OS',
    icon: 'Server',
    accentColor: '#8B5CF6',
    skills: [
      'Windows Administration',
      'Network Configuration',
      'Hardware Integration',
      'Software Deployment',
      'System Diagnostics',
      'Remote Diagnostics',
      'Licensing Management',
      'Imaging Systems',
      'Application Troubleshooting',
      'Preventive Maintenance',
    ],
  },
  {
    id: 'development',
    title: 'Software Development',
    subtitle: 'Building web apps & tools',
    icon: 'Code2',
    accentColor: '#10B981',
    skills: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Firebase / Firestore',
      'Three.js / WebGL',
      'React Three Fiber',
      'REST APIs',
      'HTML / CSS',
      'Tailwind CSS',
      'Git / Version Control',
      'Node.js',
    ],
  },
];

export const coreTechBadges = [
  'React', 'Next.js', 'TypeScript', 'Firebase', 'Three.js',
  'Windows', 'Networking', 'Hardware Integration',
  'Customer Engineering', 'Solutions Engineering',
];
