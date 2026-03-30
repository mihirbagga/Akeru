import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Phone, Menu, X } from 'lucide-react';
import clsx from 'clsx';

// Constants
const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Philosophy', href: '#philosophy' },
  { name: 'Our Range', href: '#range' },
  { name: 'Contact', href: '#contact' },
];

const RANGE_PRODUCTS = [
  { id: 1, title: 'DOWNLIGHTS', desc: 'Precision Recessed Lighting', image: 'dwn.jpg' },
  { id: 2, title: 'SPOT LIGHTS', desc: '', image: 'spt.jpeg' },
  { id: 3, title: 'TRACK LIGHTS', desc: '(PREMIUM)', image: 'two.jpg' },
  { id: 4, title: 'MAGNETIC SYSTEMS', desc: '', image: 'athree.jpg' },
  { id: 5, title: 'PROFILE / LINEAR LIGHTS', desc: '', image: 'track.jpeg' },
  { id: 6, title: 'SURFACE CYLINDERS', desc: '', image: 'athree.jpg' },
  { id: 7, title: 'INGROUND LIGHTS', desc: '', image: 'track.jpeg' },
  { id: 8, title: 'WATERPROOF LIGHTS', desc: '', image: 'spt.jpeg' },
];

// --- Components ---

const Logo = () => (
  <div className="w-16 h-16 bg-[#0B0B0B] border border-white/10 rounded-full flex items-center justify-center text-white tracking-[0.2em] text-xs font-sans font-medium hover:border-gold transition-colors shadow-[0_0_15px_rgba(0,0,0,0.5)]">
    AKERU
  </div>
);

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
      'fixed w-full z-50 transition-all duration-500 py-3 px-6 md:px-12',
      isScrolled ? 'bg-black/90 backdrop-blur-lg border-b border-white/5' : 'bg-transparent'
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#">
          <Logo />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {NAV_LINKS.map(link => (
            <a key={link.name} href={link.href} className="text-xs uppercase tracking-[0.15em] text-lightgray hover:text-gold transition-colors font-medium">
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white hover:text-gold" onClick={() => setIsMobileMenuOpen(true)}>
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-[#0B0B0B] z-50 flex flex-col items-center justify-center space-y-8"
          >
            <button className="absolute top-8 right-6 text-white hover:text-gold" onClick={() => setIsMobileMenuOpen(false)}>
              <X className="w-8 h-8" />
            </button>
            <div className="mb-8"><Logo /></div>
            {NAV_LINKS.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans text-xl tracking-[0.2em] uppercase hover:text-gold transition-colors"
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
  const y = useTransform(scrollY, [0, 1000], [0, 250]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
          alt="Luxury Architecture"
          className="w-full h-full object-cover img-luxury-filter scale-105"
        />
      </motion.div>

      <div className="relative z-10 text-center px-6 mt-20 flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-9xl font-serif leading-none mb-4 text-gold"
        >
          AKERU
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex items-center space-x-4 mb-4"
        >
          <div className="h-[1px] w-12 md:w-24 bg-gold"></div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lightgray tracking-[0.3em] text-xs md:text-sm uppercase whitespace-nowrap"
          >
            Lighting Solutions
          </motion.p>
          <div className="h-[1px] w-12 md:w-24 bg-gold"></div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-white tracking-[0.1em] text-sm md:text-lg uppercase mt-20 mb-20 md:mt-32 md:mb-24"
        >
          Architectural and Residential<br className="md:hidden" /> Lights
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <p className="text-xl md:text-3xl font-light tracking-wider uppercase text-white">
            Light That <span className="font-serif italic text-gold capitalize normal-case">Shapes Spaces</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-12 bg-[#080808]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="md:w-1/2"
        >
          <div className="relative aspect-[3/4]">
            <img
              src="../src/assets/about.png"
              alt="Craftsmanship"
              className="w-full h-full object-cover img-luxury-filter"
            />
            {/* Glowing line detail to match image 3 */}
            <div className="absolute top-[20%] right-0 w-[60%] h-[2px] bg-gradient-to-l from-gold to-transparent opacity-80 shadow-[0_0_10px_#C9A96E]" />
            <div className="absolute bottom-[40%] right-0 w-[80%] h-[2px] bg-gradient-to-l from-gold to-transparent opacity-60 shadow-[0_0_10px_#C9A96E]" />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="md:w-1/2 flex flex-col justify-center h-full"
        >
          <h2 className="text-gold uppercase tracking-[0.2em] font-serif text-3xl md:text-4xl mb-6 flex items-center">
            About Akeru
          </h2>
          <div className="h-[2px] w-24 bg-gold/50 mb-10"></div>

          <div className="space-y-8 text-lightgray/90 leading-relaxed font-light text-sm md:text-base mb-16">
            <p>
              AKERU is a lighting solutions brand focused on creating modern, elegant, and functional lighting for architectural, residential, and commercial spaces.
            </p>
            <p>
              We believe lighting is not just illumination — it shapes the way spaces are experienced.
            </p>
            <p>
              From concept to execution, we deliver lighting that enhances design, mood, and functionality.
            </p>
          </div>

          <div className="relative mb-24">
            <p className="text-2xl md:text-3xl font-light tracking-wide uppercase text-white flex items-center">
              Light that <span className="font-serif italic text-gold capitalize normal-case ml-3">Shapes Spaces</span>
            </p>
            {/* Swoosh accent under cursive */}
            <svg className="absolute w-32 h-6 -bottom-4 right-[20%] text-gold/40" viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 15Q40 -5 95 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>

          <p className="text-lightgray/70 tracking-[0.1em] text-sm uppercase">
            Crafting Light. Defining Spaces.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function Philosophy() {
  return (
    <section id="philosophy" className="py-32 px-6 md:px-12 bg-[#0c0c0c] border-y border-white/5 relative overflow-hidden">
      {/* Background dark abstract element to reflect Image 4 */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-30 pointer-events-none mix-blend-screen overflow-hidden">
        <div className="absolute top-[20%] -right-[20%] w-[1000px] h-[500px] border border-white/10 rounded-[100%] rotate-45 transform bg-black shadow-[inset_0_0_100px_#C9A96E20]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0c] to-transparent z-10" />
      </div>

      <div className="max-w-7xl mx-auto relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-2xl"
        >
          <h2 className="text-gold uppercase tracking-[0.2em] font-serif text-3xl md:text-4xl leading-relaxed mb-12">
            Our Lighting <br /> Philosophy
          </h2>

          <div className="space-y-8 text-lightgray/90 leading-relaxed font-light text-base md:text-lg mb-16">
            <p>
              At AKERU, lighting is not just about illumination — it is about shaping spaces, enhancing architecture, and creating experiences.
            </p>
            <p>
              We focus on precision, minimalism, and performance to deliver lighting solutions that integrate seamlessly with modern design.
            </p>
            <p>
              Every product is carefully selected to balance aesthetics, efficiency, and functionality.
            </p>
          </div>

          <div className="relative inline-block mt-8">
            <p className="text-2xl font-light tracking-wide uppercase text-white flex items-center">
              Light that <span className="font-serif italic text-gold capitalize normal-case ml-2">Shapes Spaces</span>
            </p>
            {/* Swoosh accent under cursive */}
            <svg className="absolute w-24 h-4 -bottom-3 right-0 text-gold/40" viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 15Q40 -5 95 10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Collections() {
  return (
    <section id="range" className="py-32 px-6 md:px-12 bg-black">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold uppercase tracking-[0.2em] font-serif text-4xl md:text-5xl mb-6"
          >
            OUR RANGE
          </motion.h2>
          <div className="h-[1px] w-full max-w-sm mx-auto bg-white/20 mb-8"></div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lightgray/80 tracking-widest text-sm uppercase font-light"
          >
            Architectural Lighting Solutions
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-px bg-white/10 border border-white/10">
          {RANGE_PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer bg-black relative aspect-[16/9] overflow-hidden flex flex-col items-center justify-end"
            >
              <img
                src={`../src/assets/${product.image}`}
                alt={product.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 img-luxury-filter opacity-40 group-hover:opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />

              <div className="relative z-10 text-center pb-10 px-6 transform transition-transform duration-500 group-hover:-translate-y-4">
                <h4 className="text-xl md:text-2xl tracking-widest uppercase mb-1 font-sans text-white group-hover:text-gold transition-colors">{product.title}</h4>
                {product.desc && (
                  <>
                    <div className="h-[1px] w-12 mx-auto bg-white/20 my-3"></div>
                    <p className="text-xs text-lightgray/60 font-light tracking-widest uppercase">{product.desc}</p>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <div className="flex items-center justify-center space-x-6">
            <div className="h-[1px] w-16 md:w-32 bg-gold/50"></div>
            <p className="text-xl font-light tracking-wide uppercase text-white">
              Light that <span className="font-serif italic text-gold capitalize normal-case ml-2">Shapes Spaces</span>
            </p>
            <div className="h-[1px] w-16 md:w-32 bg-gold/50"></div>
          </div>
        </div>

      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-32 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-gold uppercase tracking-widest">Connect</h2>
          <p className="text-lightgray/70 font-light mb-12">Reach out to our lighting specialists to shape your next architectural project.</p>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-full text-gold">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-lightgray/50 mb-1">Showroom</p>
                <p className="font-light">Delhi NCR</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-full text-gold">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-lightgray/50 mb-1">Phone</p>
                <p className="font-light">+91 9217567234</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-full text-gold">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-lightgray/50 mb-1">Email</p>
                <p className="font-light">hello@akeru.in</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-[#0A0A0A] p-8 md:p-12 border border-white/5 shadow-2xl"
        >
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] text-lightgray/50">Name</label>
              <input type="text" className="w-full bg-transparent border-b border-lightgray/20 py-2 text-white font-light focus:outline-none focus:border-gold transition-colors" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] text-lightgray/50">Email</label>
              <input type="email" className="w-full bg-transparent border-b border-lightgray/20 py-2 text-white font-light focus:outline-none focus:border-gold transition-colors" placeholder="john@example.com" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] text-lightgray/50">Inquiry / Project Details</label>
              <textarea rows={4} className="w-full bg-transparent border-b border-lightgray/20 py-2 text-white font-light focus:outline-none focus:border-gold transition-colors resize-none" placeholder="Tell us about your space..." />
            </div>
            <button className="btn-primary w-full uppercase tracking-widest text-xs mt-4">Send Inquiry</button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-black py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
        <div className="col-span-1 md:col-span-2 flex flex-col items-center md:items-start">
          <div className="mb-8 scale-90 origin-left">
            <Logo />
          </div>
          <p className="text-lightgray/50 text-xs font-light tracking-wide leading-relaxed max-w-sm">
            Setting the standard for luxury architectural and residential lighting. Precision, minimalism, and performance.
          </p>
        </div>

        <div>
          <h4 className="font-sans text-xs uppercase tracking-widest text-gold mb-6">Explore</h4>
          <ul className="space-y-4">
            {NAV_LINKS.map(link => (
              <li key={link.name}>
                <a href={link.href} className="text-xs uppercase tracking-widest text-lightgray/60 hover:text-white transition-colors">{link.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-sans text-xs uppercase tracking-widest text-gold mb-6">Social</h4>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-lightgray/60 hover:border-gold hover:text-gold transition-all duration-300">
              <span className="text-[10px] uppercase tracking-widest font-medium">IG</span>
            </a>
            <a href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-lightgray/60 hover:border-gold hover:text-gold transition-all duration-300">
              <span className="text-[10px] uppercase tracking-widest font-medium">IN</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-[10px] uppercase tracking-widest text-lightgray/40">
        <p>&copy; {new Date().getFullYear()} AKERU LIGHTING SOLUTIONS. ALL RIGHTS RESERVED.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-gold selection:text-black">
      <Navbar />
      <Hero />
      <About />
      <Philosophy />
      <Collections />
      <Contact />
      <Footer />
    </div>
  );
}
