import { motion } from 'framer-motion';

const principles = [
  {
    japanese: '合',
    romaji: 'Ai',
    meaning: 'Harmony',
    description:
      'The art of blending with and redirecting force rather than meeting it head-on. Every technique begins with accepting and harmonising with the incoming energy.',
  },
  {
    japanese: '気',
    romaji: 'Ki',
    meaning: 'Spirit / Energy',
    description:
      'The life energy that flows through all living things. Training in Aikido cultivates an awareness of Ki — learning to extend, receive, and unify it with a partner.',
  },
  {
    japanese: '道',
    romaji: 'Do',
    meaning: 'The Way',
    description:
      'Aikido is not merely a fighting system but a path of self-cultivation. Consistent practice on the mat gradually shapes how one moves, thinks, and relates to others off the mat.',
  },
];

const milestones = [
  { year: '2026', event: 'First step onto the mat — Shoshinsha (beginner) mind.' },
  { year: 'Future', event: 'Continuing the journey — one breath, one technique at a time.' },
];

const concepts = [
  { term: 'Uke', definition: 'The attacker who receives the technique and learns to fall safely.' },
  { term: 'Nage', definition: 'The practitioner applying the technique.' },
  { term: 'Irimi', definition: 'Entering — moving directly into the attacker\'s space.' },
  { term: 'Tenkan', definition: 'Turning — pivoting to redirect incoming force.' },
  { term: 'Musubi', definition: 'Connection — the subtle blending of energy between partners.' },
  { term: 'Zanshin', definition: 'Continuing awareness maintained after a technique is complete.' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function AikidoPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="pt-16 lg:pt-0"
    >
      {/* ── Page heading ── */}
      <motion.h1
        className="text-3xl mb-4 text-[#333333] dark:text-white relative inline-block"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.15 }}
      >
        aikido
        <motion.div
          className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-accent to-transparent"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ delay: 0.5, duration: 0.8 }}
        />
      </motion.h1>

      {/* ── Intro ── */}
      <motion.p
        className="mt-6 mb-10 text-[#333333] dark:text-gray-300 leading-relaxed text-justify max-w-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <span className="text-accent">合気道</span> — Aikido — is a modern Japanese martial art founded by{' '}
        <mark>Morihei Ueshiba</mark> (植芝 盛平, O-Sensei) in the early twentieth century. Rather than
        pursuing strength or competition, Aikido seeks{' '}
        <span className="text-accent">harmony between mind, body, and partner</span>. Circular movements,
        joint locks, and throws redirect an opponent's momentum without relying on brute force — making the
        art accessible at every age and applicable beyond the dojo.
      </motion.p>

      {/* ── Three characters (AI · KI · DO) ── */}
      <motion.section
        className="mb-14"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          className="text-2xl mb-6 text-[#333333] dark:text-white"
          variants={itemVariants}
        >
          The three characters
        </motion.h2>

        <div className="grid sm:grid-cols-3 gap-6">
          {principles.map((p) => (
            <motion.div
              key={p.romaji}
              variants={itemVariants}
              className="border border-[#333333]/10 dark:border-white/10 p-6 group hover:border-accent/40 transition-colors duration-300"
            >
              <p className="text-5xl mb-2 text-accent/80 group-hover:text-accent transition-colors duration-300 leading-none">
                {p.japanese}
              </p>
              <p className="text-xs uppercase tracking-widest text-[#333333]/40 dark:text-gray-500 mb-1">
                {p.romaji}
              </p>
              <p className="font-medium text-[#333333] dark:text-white mb-3">{p.meaning}</p>
              <p className="text-sm text-[#333333]/70 dark:text-gray-400 leading-relaxed text-justify">
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>


      {/* ── My journey ── */}
      <motion.section
        className="mb-14"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-2xl mb-6 text-[#333333] dark:text-white">My journey on the mat</h2>

        <div className="relative pl-6 border-l border-[#333333]/10 dark:border-white/10 space-y-8">
          {milestones.map((m, i) => (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.45 + i * 0.08 }}
              className="relative"
            >
              {/* Timeline dot */}
              <span className="absolute -left-[25px] top-1 w-3 h-3 rounded-full border-2 border-accent bg-white dark:bg-[#1a1a1a]" />

              <p className="text-xs uppercase tracking-widest text-accent mb-1">{m.year}</p>
              <p className="text-[#333333] dark:text-gray-300 text-sm leading-relaxed">{m.event}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ── Glossary ── */}
      <motion.section
        className="mb-14"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.55 }}
      >
        <h2 className="text-2xl mb-6 text-[#333333] dark:text-white">A few key concepts</h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {concepts.map((c, i) => (
            <motion.div
              key={c.term}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.07 }}
              className="flex gap-4 items-start"
            >
              <span className="mt-0.5 text-accent font-medium min-w-[80px] text-sm">{c.term}</span>
              <p className="text-sm text-[#333333]/70 dark:text-gray-400 leading-relaxed">{c.definition}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ── Quote ── */}
      <motion.blockquote
        className="border-l-4 border-accent pl-6 my-12 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <p className="italic text-[#333333]/80 dark:text-gray-400 leading-relaxed mb-2">
          "The purpose of training is to tighten up the slack, toughen the body, and polish the spirit."
        </p>
        <footer className="text-xs uppercase tracking-widest text-accent">
          — Morihei Ueshiba, O-Sensei
        </footer>
      </motion.blockquote>

      {/* ── Reflection ── */}
      <motion.section
        className="mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.75 }}
      >
        <h2 className="text-2xl mb-4 text-[#333333] dark:text-white">Why Aikido?</h2>
        <div className="space-y-4 text-[#333333] dark:text-gray-300 text-justify max-w-3xl">
          <p>
            As someone who spends most of his time thinking about{' '}
            <span className="text-accent">machine learning systems</span> and{' '}
            <span className="text-accent">human-centric design</span>, I found Aikido to be an unexpectedly
            complementary practice. Both domains ask the same question in different languages:{' '}
            <mark>how do you work with what exists rather than against it?</mark>
          </p>
          <p>
            Aikido has taught me the value of <span className="text-accent">patience</span>,{' '}
            <span className="text-accent">presence</span>, and{' '}
            <span className="text-accent">continuous learning from failure</span> — a falling technique
            mastered is a mistake understood. These are qualities I try to carry back to the keyboard.
          </p>
        </div>
      </motion.section>

      {/* ── Footer ── */}
      <motion.footer
        className="mt-16 pt-8 border-t border-[#333333]/10 dark:border-white/10 text-sm text-[#333333]/40 dark:text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.85 }}
      >
        CC BY-NC-SA 4.0 {new Date().getFullYear()}-PRESENT © Danh Le
      </motion.footer>
    </motion.div>
  );
}
