import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Twitter, Mail, MoveRight, ArrowDown, Sparkles, Code, Rocket, Star } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'NEBULA',
    subtitle: 'Dashboard',
    description: 'Real-time analytics with 3D visualization',
    tags: ['React', 'Three.js', 'WebGL'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    color: '#00fff5',
  },
  {
    id: 2,
    title: 'SYNTH',
    subtitle: 'Commerce',
    description: 'Immersive shopping experience',
    tags: ['Next.js', 'Stripe', 'Motion'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    color: '#ff00ff',
  },
  {
    id: 3,
    title: 'QUANTUM',
    subtitle: 'Notes',
    description: 'AI-powered note organization',
    tags: ['React', 'OpenAI', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80',
    color: '#ffff00',
  },
];

const skills = [
  { icon: Code, title: 'Frontend Wizardry', items: ['React/Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
  { icon: Rocket, title: 'DevOps & Cloud', items: ['Docker & CI/CD', 'AWS/Vercel', 'Serverless', 'Performance Tuning'] },
  { icon: Star, title: 'Architecture', items: ['System Design', 'Microservices', 'Database Modeling', 'Security Best Practices'] },
];

function FloatingOrbs() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <motion.div
        animate={{
          x: [0, 100, 50, 0],
          y: [0, 50, 100, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px]"
      />
      <motion.div
        animate={{
          x: [0, -80, -40, 0],
          y: [0, 80, 40, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/3 -right-32 w-80 h-80 bg-purple-500/20 rounded-full blur-[100px]"
      />
      <motion.div
        animate={{
          x: [0, 60, -60, 0],
          y: [0, -40, 60, 0],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 left-1/3 w-72 h-72 bg-pink-500/15 rounded-full blur-[100px]"
      />
    </div>
  );
}

function Marquee({ children, reverse = false }: { children: React.ReactNode; reverse?: boolean }) {
  return (
    <div className="flex overflow-hidden whitespace-nowrap">
      <motion.div
        animate={{ x: reverse ? ['0%', '-50%'] : ['-50%', '0%'] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="flex shrink-0"
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}

function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? 'py-4' : 'py-8'
      }`}
      data-testid="navigation"
    >
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <div className={`flex items-center justify-between transition-all duration-500 ${
          scrolled ? 'px-6 py-4 rounded-full bg-black/60 backdrop-blur-xl border border-white/10' : ''
        }`}>
          <motion.a
            href="#"
            className="relative group"
            whileHover={{ scale: 1.05 }}
            data-testid="logo"
          >
            <span className="font-display text-3xl font-black tracking-tighter">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">A</span>
              <span className="text-white">LEX</span>
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-500" />
          </motion.a>

          <div className="hidden md:flex items-center gap-2">
            {['Work', 'About', 'Skills', 'Contact'].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.5 }}
                className="relative px-6 py-3 text-sm font-medium text-white/60 hover:text-white transition-all group overflow-hidden"
                data-testid={`nav-${item.toLowerCase()}`}
              >
                <span className="relative z-10">{item}</span>
                <span className="absolute inset-0 bg-white/5 scale-0 group-hover:scale-100 rounded-full transition-transform duration-300" />
              </motion.a>
            ))}
          </div>

          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2 px-6 py-3 bg-white text-black text-sm font-semibold rounded-full hover:bg-cyan-400 transition-colors"
            data-testid="btn-lets-talk"
          >
            Let's Talk
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
}

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

  return (
    <section ref={ref} className="min-h-screen relative overflow-hidden" data-testid="hero-section">
      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 max-w-[1800px] mx-auto px-6 md:px-12 pt-40 pb-20 min-h-screen flex flex-col"
      >
        <div className="flex-1 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-sm">
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex items-center gap-2"
              >
                <Sparkles size={16} className="text-cyan-400" />
              </motion.span>
              <span className="text-sm font-medium text-cyan-400">Available for exciting projects</span>
            </div>
          </motion.div>

          <div className="space-y-2">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <h1 className="font-display text-[12vw] md:text-[10vw] lg:text-[9vw] font-black leading-[0.85] tracking-tighter">
                <span className="text-white">CREATIVE</span>
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden flex items-center gap-4 md:gap-8"
            >
              <h1 className="font-display text-[12vw] md:text-[10vw] lg:text-[9vw] font-black leading-[0.85] tracking-tighter text-transparent stroke-text">
                FULLSTACK
              </h1>
              
              <motion.div
                style={{ rotate }}
                className="hidden lg:flex shrink-0 w-28 h-28 rounded-full bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 items-center justify-center"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                  className="w-24 h-24 rounded-full bg-black flex items-center justify-center"
                >
                  <ArrowDown size={32} className="text-white" />
                </motion.div>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <h1 className="font-display text-[12vw] md:text-[10vw] lg:text-[9vw] font-black leading-[0.85] tracking-tighter">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">DEVELOPER</span>
              </h1>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 flex flex-col md:flex-row items-start md:items-center gap-8"
          >
            <p className="text-lg md:text-xl text-white/50 max-w-md leading-relaxed">
              I transform ideas into <span className="text-white">stunning digital experiences</span> that captivate users and drive results.
            </p>

            <div className="flex gap-4">
              <motion.a
                href="#work"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-semibold text-black"
                data-testid="btn-explore-work"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Work
                  <MoveRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-12 right-12 hidden xl:block"
        >
          <div className="relative">
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-72 p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10"
              data-testid="stats-card"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-xs font-mono text-white/40">STATUS: ONLINE</span>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Years', value: '5+' },
                  { label: 'Projects', value: '50+' },
                  { label: 'Clients', value: '30+' },
                  { label: 'Awards', value: '12' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">
                      {stat.value}
                    </div>
                    <div className="text-xs text-white/40 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-b from-cyan-500/20 to-purple-500/20 -z-10 blur-xl opacity-50" />
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0">
        <div className="py-6 border-t border-white/5 bg-black/20 backdrop-blur-sm overflow-hidden">
          <Marquee>
            <div className="flex items-center gap-16 px-8">
              {['REACT', 'NEXT.JS', 'TYPESCRIPT', 'THREE.JS', 'FRAMER MOTION', 'TAILWIND', 'FIGMA', 'WEBGL'].map((tech) => (
                <span key={tech} className="text-xl font-display font-bold text-white/20 whitespace-nowrap">
                  {tech} <span className="text-cyan-500/50">✦</span>
                </span>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
      data-testid={`project-card-${project.id}`}
    >
      <div className="relative aspect-[16/10] rounded-3xl overflow-hidden bg-white/5 cursor-pointer">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        />
        
        <motion.div
          className="absolute inset-0"
          animate={{ opacity: isHovered ? 0.9 : 0.6 }}
          style={{ background: `linear-gradient(to top, black, transparent)` }}
        />
        
        <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
          <motion.div
            animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-2 mb-4"
          >
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 text-xs font-mono bg-white/10 backdrop-blur-sm text-white rounded-full"
              >
                {tag}
              </span>
            ))}
          </motion.div>
          
          <div className="flex items-end justify-between gap-4">
            <div>
              <motion.p
                animate={{ y: isHovered ? -10 : 0 }}
                transition={{ duration: 0.5 }}
                className="text-sm uppercase tracking-[0.2em] mb-2"
                style={{ color: project.color }}
              >
                {project.subtitle}
              </motion.p>
              <h3 className="font-display text-4xl md:text-6xl font-black text-white">
                {project.title}
              </h3>
            </div>
            
            <motion.div
              animate={{ scale: isHovered ? 1 : 0, rotate: isHovered ? 0 : 45 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{ backgroundColor: project.color }}
            >
              <ArrowUpRight size={28} className="text-black" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Work() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="work" className="py-32 relative" data-testid="work-section">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20"
        >
          <div>
            <span className="text-sm font-mono text-cyan-400 uppercase tracking-[0.3em]">Selected Work</span>
            <h2 className="font-display text-5xl md:text-7xl font-black mt-4">
              Featured<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Projects</span>
            </h2>
          </div>
          <p className="text-white/50 max-w-md text-lg">
            A curated selection of projects that showcase my passion for creating exceptional digital experiences.
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  return (
    <section id="about" className="py-32 relative overflow-hidden" data-testid="about-section">
      <motion.div
        style={{ x }}
        className="absolute top-1/2 -translate-y-1/2 left-0 right-0 text-[20vw] font-display font-black text-white/[0.02] whitespace-nowrap pointer-events-none select-none"
      >
        FRONTEND DEVELOPER
      </motion.div>

      <div className="max-w-[1800px] mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center"
        >
          <div className="space-y-8">
            <div>
              <span className="text-sm font-mono text-cyan-400 uppercase tracking-[0.3em]">About Me</span>
              <h2 className="font-display text-5xl md:text-6xl font-black mt-4 leading-tight">
                Engineering Complete<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
                  Digital Solutions
                </span>
              </h2>
            </div>
            
            <div className="space-y-6 text-lg text-white/60 leading-relaxed">
              <p>
                I'm a <span className="text-white font-medium">Fullstack Engineer</span> who builds robust, scalable, and visually stunning applications from the ground up. With 5+ years of experience, I bridge the gap between complex backend systems and delightful frontend interfaces.
              </p>
              <p>
                My philosophy? <span className="text-white font-medium">Fullstack is about ownership.</span> I take pride in understanding the entire stack, from database optimization to the final pixel on the screen, ensuring every layer of the application works in perfect harmony.
              </p>
            </div>

            <div className="flex gap-4">
              {[
                { icon: Github, href: 'https://github.com', label: 'github' },
                { icon: Twitter, href: 'https://x.com', label: 'twitter' },
                { icon: Linkedin, href: 'https://linkedin.com', label: 'linkedin' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-cyan-400 hover:border-cyan-400/30 transition-colors"
                  data-testid={`about-social-${label}`}
                >
                  <Icon size={22} />
                </motion.a>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
            animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,255,245,0.2),transparent_50%)]" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-12">
                  <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 p-1">
                    <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                      <span className="font-display text-4xl font-black">AC</span>
                    </div>
                  </div>
                  
                  <div className="font-mono text-sm text-white/40 space-y-2">
                    <p><span className="text-cyan-400">const</span> developer = {'{'}</p>
                    <p className="pl-4">name: <span className="text-pink-400">"Alex Chen"</span>,</p>
                    <p className="pl-4">role: <span className="text-pink-400">"Fullstack Dev"</span>,</p>
                    <p className="pl-4">stack: [<span className="text-pink-400">"React"</span>, <span className="text-pink-400">"Node.js"</span>],</p>
                    <p className="pl-4">coffee: <span className="text-primary">true</span>,</p>
                    <p className="pl-4">available: <span className="text-primary">true</span></p>
                    <p>{'}'};</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute inset-0 border border-white/10 rounded-[2rem]" />
            </div>
            
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-8 rounded-full border border-dashed border-white/10 pointer-events-none"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-32 relative" data-testid="skills-section">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-mono text-cyan-400 uppercase tracking-[0.3em]">Expertise</span>
          <h2 className="font-display text-5xl md:text-7xl font-black mt-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Arsenal</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/30 hover:bg-white/[0.05] transition-all duration-500 cursor-pointer"
              data-testid={`skill-card-${i}`}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <skill.icon size={28} className="text-cyan-400" />
              </div>
              
              <h3 className="font-display text-xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">
                {skill.title}
              </h3>
              
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-white/40 text-sm flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-cyan-400/50" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="py-32 relative overflow-hidden" data-testid="contact-section">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <span className="text-sm font-mono text-cyan-400 uppercase tracking-[0.3em]">Connection</span>
              <h2 className="font-display text-6xl md:text-8xl font-black mt-4 leading-none">
                READY TO<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
                  INITIATE?
                </span>
              </h2>
            </div>
            
            <p className="text-xl text-white/50 max-w-md leading-relaxed">
              Whether you have a specific project in mind or just want to explore possibilities, my inbox is always open for groundbreaking ideas.
            </p>

            <div className="space-y-6">
              {[
                { icon: Mail, label: 'Email', value: 'hello@alexchen.dev', href: 'mailto:hello@alexchen.dev' },
                { icon: Twitter, label: 'Twitter', value: '@alexchen_dev', href: 'https://x.com' },
                { icon: Github, label: 'Github', value: 'alexchen-dev', href: 'https://github.com' },
              ].map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-6 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-cyan-400 group-hover:text-black transition-all duration-300">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-white/40 uppercase tracking-widest">{item.label}</p>
                    <p className="text-lg font-medium text-white group-hover:text-cyan-400 transition-colors">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 p-1 rounded-[2.5rem] bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-3xl overflow-hidden">
              <div className="bg-black/40 p-8 md:p-12 rounded-[2.4rem] space-y-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-display font-bold">Drop a message</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Name</label>
                      <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Email</label>
                      <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Message</label>
                    <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors resize-none" placeholder="What's on your mind?" />
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-black font-bold rounded-xl shadow-[0_0_30px_rgba(0,255,245,0.2)] hover:shadow-[0_0_50px_rgba(0,255,245,0.4)] transition-all duration-500"
                >
                  SEND TRANSMISSION
                </motion.button>
              </div>
            </div>
            
            {/* Background elements for the form */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-cyan-500/20 rounded-full blur-[100px] -z-10" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 border-t border-white/10" data-testid="footer">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-white/40">
            © 2026 Alex Chen. Designed & Built with 💜
          </p>
          
          <div className="flex items-center gap-6">
            {[
              { icon: Github, href: 'https://github.com', label: 'github' },
              { icon: Twitter, href: 'https://x.com', label: 'twitter' },
              { icon: Linkedin, href: 'https://linkedin.com', label: 'linkedin' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-white/40 hover:text-cyan-400 transition-colors"
                data-testid={`footer-social-${label}`}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
          
          <p className="text-sm text-white/40 font-mono">
            <span className="text-cyan-400">{'</'}</span>built with passion<span className="text-cyan-400">{'>'}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      <FloatingOrbs />
      <Navigation />
      <Hero />
      <Work />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
