import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Code } from 'lucide-react';
import { marked } from 'marked';
import markedKatex from 'marked-katex-extension';
import 'katex/dist/katex.min.css';
import { getProjectById } from '../data/projects';

interface ProjectDetailPageProps {
  projectId: string;
  onBack: () => void;
}

export function ProjectDetailPage({ projectId, onBack }: ProjectDetailPageProps) {
  const project = getProjectById(projectId);
  const [markdownContent, setMarkdownContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadMarkdown() {
      if (!project) return;
      
      if (project.markdownFile) {
        try {
          const response = await fetch(`/projects/${project.markdownFile}`);
          if (response.ok) {
            const text = await response.text();
            // Configure marked with KaTeX extension for math rendering
            marked.use(markedKatex({
              throwOnError: false,
              output: 'html'
            }));
            marked.setOptions({
              breaks: true,
              gfm: true,
            });
            const html = await marked(text);
            setMarkdownContent(html);
          } else {
            // Fallback to fullDescription if markdown file not found
            setMarkdownContent(project.fullDescription || '');
          }
        } catch (error) {
          console.error('Error loading markdown:', error);
          setMarkdownContent(project.fullDescription || '');
        }
      } else {
        setMarkdownContent(project.fullDescription || '');
      }
      
      setIsLoading(false);
    }

    loadMarkdown();
  }, [project]);

  if (!project) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="py-12"
      >
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[#333333] dark:text-gray-300 hover:text-accent transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          <span>Back to Projects</span>
        </button>
        <div className="text-center text-[#333333] dark:text-gray-300">
          <h2 className="text-2xl mb-4">Project not found</h2>
          <p>The project you're looking for doesn't exist.</p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="py-12"
    >
      {/* Back button */}
      <motion.button
        onClick={onBack}
        className="flex items-center gap-2 text-[#333333] dark:text-gray-300 hover:text-accent transition-colors mb-8"
        whileHover={{ x: -4 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <ArrowLeft size={20} />
        <span>Back to Projects</span>
      </motion.button>

      {/* Hero section with gradient background */}
      <motion.div
        className={`relative p-8 md:p-12 mb-8 bg-gradient-to-br ${project.gradient} border border-gray-200 dark:border-gray-800 overflow-hidden`}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
      >
        <div className="relative z-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {project.status && (
              <span className={`text-xs px-3 py-1 border ${
                project.status === 'completed' 
                  ? 'border-green-500/50 text-green-600 dark:text-green-400 bg-green-500/10' 
                  : project.status === 'ongoing'
                  ? 'border-accent/50 text-accent bg-accent/10'
                  : 'border-gray-500/50 text-gray-600 dark:text-gray-400 bg-gray-500/10'
              }`}>
                {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
              </span>
            )}
            <span className="text-xs px-3 py-1 border border-gray-300 dark:border-gray-700 text-[#333333] dark:text-gray-400 bg-white/50 dark:bg-black/30">
              {project.year}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl mb-4 text-[#333333] dark:text-white">
            {project.title}
          </h1>
          
          <p className="text-lg text-[#333333]/80 dark:text-gray-300 mb-6">
            {project.description}
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3">
            {project.link && project.link !== '#' && (
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-accent text-white hover:bg-accent/90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={16} />
                <span>View Publication</span>
              </motion.a>
            )}
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-700 text-[#333333] dark:text-gray-300 hover:border-accent hover:text-accent transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={16} />
                <span>GitHub</span>
              </motion.a>
            )}
            {project.demo && (
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-700 text-[#333333] dark:text-gray-300 hover:border-accent hover:text-accent transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={16} />
                <span>Live Demo</span>
              </motion.a>
            )}
          </div>
        </div>

        {/* Decorative gradient overlay */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-accent/20 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-burgundy/20 to-transparent blur-3xl" />
      </motion.div>

      {/* Main content grid */}
      <div className="grid lg:grid-cols-5 gap-8">
        {/* Main column - Description */}
        <motion.div
          className="lg:col-span-4 space-y-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          {/* Overview Section - Always show if markdownFile or fullDescription exists */}
          {(project.markdownFile || project.fullDescription) && (
            <div>
              <h2 className="text-2xl mb-4 text-[#333333] dark:text-white">Overview</h2>
              {isLoading ? (
                <div className="flex items-center justify-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent"></div>
                </div>
              ) : markdownContent ? (
                <div 
                  className="prose prose-lg dark:prose-invert max-w-none
                    prose-headings:text-[#333333] dark:prose-headings:text-white
                    prose-p:text-[#333333] dark:prose-p:text-gray-300
                    prose-strong:text-[#333333] dark:prose-strong:text-white
                    prose-code:text-accent prose-code:bg-[#F5F5F7] dark:prose-code:bg-[#0f0f0f]
                    prose-pre:bg-[#F5F5F7] dark:prose-pre:bg-[#0f0f0f]
                    prose-a:text-accent hover:prose-a:underline
                    prose-table:border prose-table:border-gray-200 dark:prose-table:border-gray-800
                    prose-th:bg-[#F5F5F7] dark:prose-th:bg-[#0f0f0f]
                    prose-td:border prose-td:border-gray-200 dark:prose-td:border-gray-800"
                  dangerouslySetInnerHTML={{ __html: markdownContent }}
                />
              ) : project.fullDescription ? (
                <div className="prose dark:prose-invert max-w-none">
                  {project.fullDescription.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="text-[#333333] dark:text-gray-300 mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              ) : (
                <p className="text-[#333333] dark:text-gray-300">No content available.</p>
              )}
            </div>
          )}

          {/* Technologies */}
          {project.technologies && project.technologies.length > 0 && (
            <div>
              <h2 className="text-2xl mb-4 text-[#333333] dark:text-white flex items-center gap-2">
                <Code size={24} />
                <span>Technologies</span>
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <motion.span
                    key={idx}
                    className="px-3 py-1.5 bg-[#F5F5F7] dark:bg-[#0f0f0f] border border-gray-200 dark:border-gray-800 text-[#333333] dark:text-gray-300 text-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + idx * 0.05 }}
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: 'rgba(180, 151, 90, 0.1)',
                      borderColor: 'rgba(180, 151, 90, 0.5)'
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          )}

          {/* Images gallery placeholder */}
          {project.images && project.images.length > 0 && (
            <div>
              <h2 className="text-2xl mb-4 text-[#333333] dark:text-white">Gallery</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.images.map((image, idx) => (
                  <motion.div
                    key={idx}
                    className="aspect-video bg-[#F5F5F7] dark:bg-[#0f0f0f] border border-gray-200 dark:border-gray-800"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + idx * 0.1 }}
                  >
                    <img src={image} alt={`${project.title} - ${idx + 1}`} className="w-full h-full object-cover" />
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>

        {/* Sidebar - Metadata */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          {/* Project Info Card */}
          <div className="p-6 bg-[#F5F5F7] dark:bg-[#0f0f0f] border border-gray-200 dark:border-gray-800">
            <h3 className="text-lg mb-4 text-[#333333] dark:text-white">Project Info</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Calendar size={20} className="text-accent mt-1 flex-shrink-0" />
                <div>
                  <div className="text-sm text-[#333333]/60 dark:text-gray-500">Timeline</div>
                  <div className="text-[#333333] dark:text-gray-300">{project.year}</div>
                </div>
              </div>

              {project.collaborators && project.collaborators.length > 0 && (
                <div className="flex items-start gap-3">
                  <Users size={20} className="text-accent mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-sm text-[#333333]/60 dark:text-gray-500 mb-2">Collaborators</div>
                    <ul className="text-sm space-y-1">
                      {project.collaborators.map((collab, idx) => (
                        <li key={idx} className="text-[#333333] dark:text-gray-300">
                          {collab}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Tags */}
          <div className="p-6 bg-[#F5F5F7] dark:bg-[#0f0f0f] border border-gray-200 dark:border-gray-800">
            <h3 className="text-lg mb-4 text-[#333333] dark:text-white">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-sm bg-white dark:bg-[#1a1a1a] text-[#333333]/80 dark:text-gray-400 border border-gray-200 dark:border-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
