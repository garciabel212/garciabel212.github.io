export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  role: string;
  year: string;
  technologies: string[];
  featured: boolean;
  status: 'active' | 'in-development' | 'concept';
  statusLabel?: string;
  coverColor: string;
  accentColor: string;
  category: 'product' | 'platform' | 'professional' | 'archive';
}

export const projects: Project[] = [
  {
    slug: 'enterprise-deployment',
    title: 'Enterprise Technical Deployment',
    tagline: 'Customer Engineering & Solutions Delivery',
    description:
      'A professional case study documenting my work across technical discovery, product demonstrations, hardware and software implementation, customer training, troubleshooting, and long-term technical support.',
    role: 'Service Engineer / Sales Engineering Support',
    year: '2022–Present',
    technologies: ['Windows', 'Networking', 'Hardware Integration', 'Remote Diagnostics', 'Technical Training'],
    featured: true,
    status: 'active',
    statusLabel: 'Professional Experience',
    coverColor: '#0F0A20',
    accentColor: '#8B5CF6',
    category: 'professional',
  },
  {
    slug: 'service-map-planner',
    title: 'Service Map Planner',
    tagline: 'Internal Field-Service Operations Platform',
    description:
      'An internal operations platform I designed and built to centralize institution records, scanner inventory, software versions, maintenance status, service history, travel planning, and data-quality flags.',
    role: 'Product Design · Workflow Architecture · Frontend Development',
    year: '2023–Present',
    technologies: ['Next.js', 'React', 'TypeScript', 'Firebase', 'Firestore', 'Google Maps'],
    featured: true,
    status: 'active',
    statusLabel: 'Active Internal Tool',
    coverColor: '#0D2040',
    accentColor: '#3B82F6',
    category: 'platform',
  },
  {
    slug: 'scale-garage-studio',
    title: 'Scale Garage Studio',
    tagline: 'Client Product · 3D Configurator · In Development',
    description:
      'A browser-based 3D configurator that allows customers to design custom scale-model garages before manufacturing. The product connects dimensions, materials, lighting, architectural styles, and production preparation in one interactive experience.',
    role: 'Product Design · 3D Frontend Engineering · Interaction Design',
    year: '2024–Present',
    technologies: ['React', 'TypeScript', 'Three.js', 'React Three Fiber', 'WebGL', 'STL'],
    featured: true,
    status: 'in-development',
    statusLabel: 'In Development',
    coverColor: '#0A1A0F',
    accentColor: '#06B6D4',
    category: 'product',
  },
];

export const archiveProjects: Project[] = [];

export function getProjectBySlug(slug: string): Project | undefined {
  return [...projects, ...archiveProjects].find((p) => p.slug === slug);
}
