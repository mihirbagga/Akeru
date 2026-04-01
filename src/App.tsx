import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Menu, X, Lightbulb, Grid, UserCheck, ShieldCheck, PenTool } from 'lucide-react';
import clsx from 'clsx';

// Constants
const NAV_LINKS = [
  { name: 'Products', href: '#products' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const COLLECTIONS = [
  { id: 1, title: 'Downlights', image: 'https://images.unsplash.com/photo-1628190772093-2736b412b1bb?auto=format&fit=crop&w=1000&q=80' },
  { id: 2, title: 'Spot Lights', image: 'https://images.unsplash.com/photo-1540932239986-30128078f3ea?auto=format&fit=crop&w=1000&q=80' },
  { id: 3, title: 'Track Lights', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80' },
  { id: 4, title: 'Magnetic Systems', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=80' },
  { id: 5, title: 'Profile Lights', image: 'https://images.unsplash.com/photo-1507643179773-3e975d7ac515?auto=format&fit=crop&w=1000&q=80' },
  { id: 6, title: 'Surface Cylinders', image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1000&q=80' },
];

const PROJECTS = [
  { id: 1, title: 'Living Spaces', image: 'https://images.unsplash.com/photo-1600607688969-a5bfcd64bd2b?auto=format&fit=crop&w=1000&q=80', span: 'col-span-1' },
  { id: 2, title: 'Retail Stores', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80', span: 'col-span-1' },
  { id: 3, title: 'Outdoor Facades', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80', span: 'col-span-1' },
  { id: 4, title: 'Corporate Offices', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80', span: 'col-span-1 md:col-span-2' },
  { id: 5, title: 'Reliable Execution', image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80', span: 'col-span-1' },
];

const BENEFITS = [
  { id: 1, title: 'Premium Products', desc: 'Crafted from high-grade materials.', icon: <Lightbulb className="w-8 h-8 mx-auto mb-4 text-[#C69C6D]" strokeWidth={1} /> },
  { id: 2, title: 'Modern Minimal Design', desc: 'Seamlessly integrated.', icon: <Grid className="w-8 h-8 mx-auto mb-4 text-[#C69C6D]" strokeWidth={1} /> },
  { id: 3, title: 'Expert Consultation', desc: 'Professional lighting advice.', icon: <UserCheck className="w-8 h-8 mx-auto mb-4 text-[#C69C6D]" strokeWidth={1} /> },
  { id: 4, title: 'Reliable Execution', desc: 'On-time delivery and support.', icon: <ShieldCheck className="w-8 h-8 mx-auto mb-4 text-[#C69C6D]" strokeWidth={1} /> },
  { id: 5, title: 'Design Applications', desc: 'Versatile for all spaces.', icon: <PenTool className="w-8 h-8 mx-auto mb-4 text-[#C69C6D]" strokeWidth={1} /> },
];

const AuroraBackground = () => (
  <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden mix-blend-screen">
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.03, 0.08, 0.03],
        x: [0, 100, 0],
        y: [0, -50, 0],
      }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-[#C69C6D] rounded-full blur-[150px]"
    />
    <motion.div
      animate={{
        scale: [1, 1.3, 1],
        opacity: [0.02, 0.06, 0.02],
        x: [0, -80, 0],
        y: [0, 80, 0],
      }}
      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-[#b28b61] rounded-full blur-[180px]"
    />
  </div>
);

// --- Components ---

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={clsx(
      'fixed w-full z-50 transition-all duration-500 py-6 px-6 md:px-12',
      isScrolled ? 'bg-[#050505]/95 backdrop-blur-md' : 'bg-transparent'
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between relative h-8">
        {/* Left Spacer */}
        <div className="flex-1"></div>

        {/* Centered Logo */}
        <a href="#" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-2xl tracking-[0.2em] text-white uppercase opacity-90">
          AKERU
        </a>

        {/* Right Section */}
        <div className="flex-1 flex justify-end items-center">
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-12">
            {NAV_LINKS.map(link => (
              <a key={link.name} href={link.href} className="text-xs uppercase tracking-widest text-white/50 hover:text-[#C69C6D] transition-colors font-light">
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button className="text-white hover:text-[#C69C6D] md:hidden" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-[#0A0A0A] z-50 flex flex-col items-center justify-center space-y-8"
          >
            <button className="absolute top-8 right-6 text-white hover:text-[#C69C6D]" onClick={() => setIsMobileMenuOpen(false)}>
              <X className="w-8 h-8" />
            </button>
            <a href="#" className="font-serif text-2xl tracking-[0.2em] text-[#C69C6D] uppercase mb-8">
              AKERU
            </a>
            {NAV_LINKS.map(link => (
              <a 
                key={link.name} 
                href={link.href} 
                className="font-sans text-lg tracking-widest uppercase text-white/80 hover:text-[#C69C6D] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-transparent flex flex-col justify-end pb-32">
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-[#050505]/60 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop" 
          alt="Architectural Lighting"
          className="w-full h-full object-cover img-luxury-filter scale-105 opacity-80"
        />
      </motion.div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/80 tracking-widest text-sm md:text-base mb-4 font-light"
        >
          Lighting Solutions
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-4xl md:text-6xl font-serif leading-tight mb-12 text-white opacity-95"
        >
          Architectural Lighting<br />for Modern Spaces
        </motion.h1>

        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 1, delay: 0.6 }}
           className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <a href="#products" className="w-48 py-3 border border-white/40 text-sm tracking-widest text-white hover:bg-white hover:text-black transition-all duration-300 font-light">
            Explore Catalogue
          </a>
          <a href="#contact" className="w-48 py-3 bg-[#C69C6D] text-black text-sm tracking-widest font-medium hover:bg-[#b28b61] transition-all duration-300">
            Get a Quote
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function Collections() {
  return (
    <section id="products" className="relative z-10 py-24 px-6 md:px-12 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[#C69C6D] font-serif text-xl tracking-wider mb-2">Our Collection</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-16">
          {COLLECTIONS.map((product) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative aspect-video group overflow-hidden bg-[#0A0A0A]"
            >
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-700 group-hover:scale-105 img-luxury-filter"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-transparent to-transparent pointer-events-none" />
              <h3 className="absolute bottom-6 left-0 right-0 text-center text-white/90 font-serif text-xl tracking-wide">
                {product.title}
              </h3>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center">
            <a href="#" className="inline-block px-8 py-3 border border-white/20 text-xs tracking-widest text-white/70 hover:border-[#C69C6D] hover:text-[#C69C6D] transition-all duration-300">
              Download Catalogue
            </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative z-10 py-24 px-6 md:px-12 bg-transparent border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-white/60 text-xs tracking-[0.2em] font-sans mb-8">ABOUT AKERU</h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
            <h3 className="text-3xl md:text-5xl font-serif text-white/90 leading-tight mb-8">
              Lighting is not just illumination.<br />
              It is <span className="italic">architecture</span>. It is mood. It is experience.
            </h3>
            
            <p className="text-white/50 text-sm max-w-2xl mx-auto font-light leading-relaxed mb-12">
              At AKERU, we create lighting solutions designed to seamlessly integrate into spaces, enhancing both aesthetics and functionality.
            </p>
            
            <a href="#products" className="inline-block px-10 py-3 border border-[#C69C6D] text-[#C69C6D] text-xs tracking-widest hover:bg-[#C69C6D] hover:text-black transition-all duration-300">
              Download Catalogue
            </a>
        </motion.div>

        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1 }}
           className="relative aspect-video w-full"
        >
          <img 
            src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1600&auto=format&fit=crop" 
            alt="About Architecture" 
            className="w-full h-full object-cover opacity-80 img-luxury-filter"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}

function FeaturedProjects() {
  return (
    <section id="projects" className="relative z-10 py-24 px-6 md:px-12 bg-transparent border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-white/60 text-xs tracking-[0.2em] font-sans mb-4">FEATURED PROJECTS</h2>
          <p className="text-2xl font-serif text-[#C69C6D]">Inspiration for luxury lighting.</p>
        </div>

        {/* 3x top, 2x bottom grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12">
          {PROJECTS.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={clsx("relative aspect-video md:aspect-[4/3] group overflow-hidden bg-[#0A0A0A]", project.span)}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 img-luxury-filter"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />
              <h3 className="absolute bottom-6 left-0 right-0 text-center text-white/80 font-serif text-lg tracking-wide">
                {project.title}
              </h3>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
            <a href="#" className="inline-block px-10 py-3 border border-white/20 text-xs tracking-widest text-white/70 hover:border-white hover:text-white transition-all duration-300">
              View All Projects
            </a>
        </div>
      </div>
    </section>
  );
}

function WhyAkeru() {
  return (
    <section className="relative z-10 py-32 px-6 md:px-12 bg-transparent border-t border-white/5 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-white/60 text-xs tracking-[0.2em] font-sans mb-8">WHY AKERU</h2>
          <h3 className="text-3xl md:text-5xl font-serif text-white/90 mb-20">Precision Lighting. Timeless Design.</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-8 mb-16">
             {BENEFITS.slice(0, 3).map((benefit, i) => (
                <motion.div 
                  key={benefit.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  {benefit.icon}
                  <h4 className="text-white/90 text-sm font-medium tracking-wide mb-2">{benefit.title}</h4>
                  <p className="text-white/40 text-xs font-light px-4">{benefit.desc}</p>
                </motion.div>
             ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-8 max-w-2xl mx-auto">
             {BENEFITS.slice(3, 5).map((benefit, i) => (
                <motion.div 
                   key={benefit.id}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1 }}
                >
                   {benefit.icon}
                   <h4 className="text-white/90 text-sm font-medium tracking-wide mb-2">{benefit.title}</h4>
                   <p className="text-white/40 text-xs font-light px-4">{benefit.desc}</p>
                </motion.div>
             ))}
          </div>
        </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="relative z-10 bg-transparent border-t border-white/5 py-24 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="font-serif text-2xl tracking-[0.2em] text-white opacity-80 mb-12">AKERU</h2>
        
        <h3 className="text-3xl md:text-4xl font-serif text-white/90 mb-4">Planning a lighting project?</h3>
        <p className="text-white/50 font-light text-sm mb-12">Let's connect and discuss your lighting needs.</p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-24">
          <a href="#" className="w-48 py-3 border border-white/40 text-sm tracking-widest text-white hover:bg-white hover:text-black transition-all duration-300 font-light">
            Get a Quote
          </a>
          <a href="#" className="w-48 py-3 bg-[#C69C6D] text-black text-sm tracking-widest font-medium hover:bg-[#b28b61] transition-all duration-300">
            WhatsApp Us
          </a>
        </div>

        <h2 className="font-serif text-2xl tracking-[0.2em] text-white/60 mb-8">AKERU</h2>
        
        <div className="flex flex-wrap justify-center gap-6 mb-16 text-xs text-white/50 tracking-widest">
            <a href="#" className="hover:text-[#C69C6D] transition-colors">Catalogue Download</a>
            <a href="#" className="hover:text-[#C69C6D] transition-colors">Products</a>
            <a href="#" className="hover:text-[#C69C6D] transition-colors">About</a>
            <a href="#" className="hover:text-[#C69C6D] transition-colors">Projects</a>
            <a href="#" className="hover:text-[#C69C6D] transition-colors">Contact</a>
        </div>

        <p className="text-[10px] text-white/30 tracking-widest">
           &copy; {new Date().getFullYear()} AKERU Lighting. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="bg-[#050505] text-white min-h-screen font-sans selection:bg-[#C69C6D] selection:text-black relative overflow-hidden">
      <AuroraBackground />
      <Navbar />
      <Hero />
      <Collections />
      <About />
      <FeaturedProjects />
      <WhyAkeru />
      <Footer />
    </div>
  );
}
