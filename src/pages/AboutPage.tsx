import { motion } from 'framer-motion';
import { Github, Instagram, Mail, Linkedin } from 'lucide-react';
import { ImageWithFallback } from '../components/ImageWithFallback';

export function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="py-12"
    >
      <div className="max-w-[90%]">
      <div className="grid md:grid-cols-[75%_25%] md:gap-12 items-start mb-12">
        {/* Left side - Text content */}
        <div className="min-w-0 overflow-hidden pr-8">
          {/* Name */}
          <motion.h1 
            className="mb-3 text-[#333333] dark:text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Danh Le
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p
            className="mb-8 text-[#333333] dark:text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Meditation · Drink · Work · Love · Repeat
          </motion.p>
        </div>

        {/* Right side - Profile picture */}
        <motion.div
          className="mb-8 md:mb-0 flex-shrink-0 flex justify-center items-start"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="relative group w-48 h-48">
            <ImageWithFallback
              src="/avatar_danhle.jpg"
              alt="Danh Le - Profile photo"
              className="w-full h-full rounded-full object-cover border-4 border-accent/20 dark:border-accent/30 transition-all duration-300 group-hover:border-accent/50"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/0 to-burgundy/0 group-hover:from-accent/10 group-hover:to-burgundy/10 transition-all duration-300" />
          </div>
        </motion.div>
      </div>
      
      {/* Bio paragraphs */}
      <motion.div 
        className="space-y-4 text-[#333333] dark:text-gray-300 mb-12 text-justify"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <p>
          Hi, I'm Danh Le. I am a <mark>Research Engineer</mark> at Air Traffic Management Research Institute (ATMRI), 
          working at the intersection of <mark>machine learning</mark>, <mark>system design</mark>, and <mark>human centric applications</mark>. 
        </p>
        
        <p>
          I am particularly interested in building <span className="text-accent">human-centric AI systems</span> that 
          <span className="text-accent"> support human creativity</span> and <span className="text-accent"> enhance creative workflows</span>. 
          My work explores <span className="text-accent">generative ai</span>, 
          <span className="text-accent"> multimedia applications</span>, and <span className="text-accent"> retrieval systems</span>—
          technologies that empower people to express ideas and create meaningful content. I believe AI should be a tool that 
          amplifies human potential, not replaces it, making creative processes more <span className="text-accent">accessible</span>, 
          <span className="text-accent"> intuitive</span>, and <span className="text-accent"> collaborative</span>.
        </p>


        {/* <p>
          Currently, I'm pursuing <span className="text-accent">ml-infrastructure</span> alongside my research, 
          exploring how to build AI systems that are not only powerful but also <span className="text-accent">reliable</span> and 
          <span className="text-accent"> maintainable</span> in production. Through my hands-on experience with 
          AI practices, I focus on creating systems that serve real human needs 
          while remaining efficient and scalable.
        </p> */}
        
        <p>
          Besides technical work, I also love exploring <span className="text-accent">moments</span>, 
          <span className="text-accent"> patterns</span>, and <span className="text-accent"> stories</span> through photography. 
          Some of my photos can be found on <span className="text-accent">Instagram</span>.
        </p>

         <p className="font-medium text-burgundy dark:text-accent">
          🔔 News: I'm looking for a Ph.D. position in Fall 2026 on the topic of AI/ML for Sciences.
        </p>
      </motion.div>

      {/* Mentors Section */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-2xl mb-4 text-[#333333] dark:text-white">Mentors</h2>
        <ul className="list-disc list-inside space-y-2 text-[#333333] dark:text-gray-300 text-justify">
          <li>
            <a 
              href="https://www.fit.hcmus.edu.vn/~tmtriet/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Assoc Prof. Tran Minh Triet
            </a>, University of Science & John von Neumann Institute, VNU-HCM
          </li>
          <li>
            <a 
              href="https://vinuni.edu.vn/people/duong-nguyen-vu-2/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Prof Vu N. Duong
            </a>, Vice Provost of Graduate Education, VinUniversity
          </li>
          {/* <li>
            <a 
              href="https://tuanluu.github.io/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Assoc Prof. Luu Anh Tuan
            </a>, College of Computing and Data Science, Nanyang Technological University
          </li> */}
          
        </ul>
      </motion.div>

      {/* Education Section */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45 }}
      >
        <h2 className="text-2xl mb-4 text-[#333333] dark:text-white">Education</h2>
        <div className="space-y-2 text-[#333333] dark:text-gray-300 text-justify">
          <p className="font-medium">University of Science, Vietnam National University - Ho Chi Minh City, Vietnam</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>
              BS, Computer Science, 2019-2024, Advisor:{' '}
              <a 
                href="https://www.fit.hcmus.edu.vn/~tmtriet/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                Assoc. Prof. Minh-Triet Tran
              </a>
            </li>
            <li>
              <a 
                href="https://www.ctdb.hcmus.edu.vn/en/academic-programs/advanced-program-in-computer-science/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                Advanced Program in Computer Science
              </a>, one of the ten innovative programs created in a national project 
              to renovate university education by the Vietnamese Ministry of Education
            </li>
            <li>The university is among the <strong>top 2</strong> undergraduate institutes in Vietnam in Computer Science</li>
          </ul>
        </div>
      </motion.div>

    {/* Social links */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <p className="mb-3 text-[#333333] dark:text-gray-300">Find me on</p>
      <div className="flex items-center gap-4 mb-6 flex-wrap">
        <a 
          href="https://github.com/danhleth" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[#333333] dark:text-gray-300 hover:text-accent transition-colors"
        >
          <Github size={18} />
          <span>GitHub</span>
        </a>
        <a 
          href="https://scholar.google.com/citations?user=iRBBpH0AAAAJ&hl" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[#333333] dark:text-gray-300 hover:text-accent transition-colors"
        >
          <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 24a7 7 0 110-14 7 7 0 010 14zm0-24L0 9.5l4.838 3.94A8 8 0 0112 9a8 8 0 017.162 4.44L24 9.5z"/>
          </svg>
          <span>Google Scholar</span>
        </a>
        <a 
          href="https://www.linkedin.com/in/danhleth" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[#333333] dark:text-gray-300 hover:text-accent transition-colors"
        >
          <Linkedin size={18} />
          <span>LinkedIn</span>
        </a>
        <a 
          href="https://www.instagram.com/danhleth/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[#333333] dark:text-gray-300 hover:text-accent transition-colors"
        >
          <Instagram size={18} />
          <span>Instagram</span>
        </a>
      </div>
        
        <p className="text-[#333333] dark:text-gray-300">
          Or mail me at{' '}
          <a 
            // href="mailto:ltdanh034+homepage@gmail.com" 
            className="text-[#333333] dark:text-gray-300 hover:text-accent transition-colors"
          >
            <code className="bg-[#F5F5F7] dark:bg-[#333333] px-2 py-0.5 rounded">ltdanh034 at gmail dot com</code>
          </a>
        </p>
      </motion.div>
      
      {/* Footer */}
      <motion.footer
        className="mt-16 pt-8 border-t border-[#333333]/10 dark:border-white/10 text-sm text-[#333333]/40 dark:text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        CC BY-NC-SA 4.0 {new Date().getFullYear()}-PRESENT © Danh Le
      </motion.footer>
      </div>
    </motion.div>
  );
}
