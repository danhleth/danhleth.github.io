import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TopNavigation } from './components/TopNavigation';
import { AboutPage } from './pages/AboutPage';
import { PublicationsPage } from './pages/PublicationsPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { PhotographyPage } from './pages/PhotographyPage';
import { FloatingShapes } from './components/FloatingShapes';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState('about');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }

    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'about';
      
      // Check if it's a project detail page
      if (hash.startsWith('project/')) {
        const projectId = hash.replace('project/', '');
        setSelectedProjectId(projectId);
        setCurrentPage('project-detail');
      } else {
        setSelectedProjectId(null);
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const handleProjectClick = (projectId: string) => {
    window.location.hash = `project/${projectId}`;
  };

  const handleBackToProjects = () => {
    window.location.hash = 'projects';
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'publications':
        return <PublicationsPage key="publications" />;
      case 'projects':
        return <ProjectsPage key="projects" onProjectClick={handleProjectClick} />;
      case 'project-detail':
        return selectedProjectId ? (
          <ProjectDetailPage 
            key={`project-${selectedProjectId}`}
            projectId={selectedProjectId}
            onBack={handleBackToProjects}
          />
        ) : null;
      case 'photography':
        return <PhotographyPage key="photography" />;
      default:
        return <AboutPage key="about" />;
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#1a1a1a] overflow-hidden">
      <FloatingShapes />
      <TopNavigation 
        isDarkMode={isDarkMode} 
        toggleDarkMode={toggleDarkMode}
        currentPage={currentPage}
      />
      <main className="relative z-10 pt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <AnimatePresence mode="wait">
            {renderPage()}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

