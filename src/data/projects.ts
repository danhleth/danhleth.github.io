export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  gradient: string;
  year: string;
  status?: 'completed' | 'ongoing' | 'archived';
  markdownFile?: string; // Path to markdown file in public/projects/
  fullDescription?: string; // Fallback if no markdown file
  technologies?: string[];
  collaborators?: string[];
  images?: string[];
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    id: 'lays-imc',
    title: "Lay's New Year IMC",
    description: 'AI pipeline to generate faces on demand. Research and analyze facial features of successful individuals using LoRA algorithm and DreamBooth for image processing and reconstruction.',
    markdownFile: 'lays-imc/lays-imc.md',
    tags: ['AI', 'GenerativeAI', 'DreamBooth'],
    technologies: ['Python', 'PyTorch', 'Stable Diffusion', 'LoRA', 'DreamBooth', 'CUDA'],
    year: '2024',
    status: 'completed',
    gradient: 'from-accent/20 to-burgundy/20',
    link: '#'
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}
