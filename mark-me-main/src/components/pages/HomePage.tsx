// HPI 1.6-V
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Video, Megaphone, Play, BarChart, Globe } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Image } from '@/components/ui/image';

// --- Utility Components for Motion & Interaction ---

/**
 * AnimatedElement: Uses IntersectionObserver for performant scroll reveals.
 * Adheres to the "Unfolding Narrative" case study.
 */
type AnimatedElementProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
};

const AnimatedElement: React.FC<AnimatedElementProps> = ({ 
  children, 
  className, 
  delay = 0,
  threshold = 0.1 
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        // Add a small delay via style if needed, or just let CSS handle it
        setTimeout(() => {
            element.classList.add('is-visible');
        }, delay);
        observer.unobserve(element);
      }
    }, { threshold });

    observer.observe(element);
    return () => observer.disconnect();
  }, [delay, threshold]);

  return (
    <div ref={ref} className={`opacity-0 translate-y-8 transition-all duration-1000 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 ${className || ''}`}>
      {children}
    </div>
  );
};

/**
 * ParallaxImage: Uses CSS variables driven by IntersectionObserver for smooth, jank-free parallax.
 */
const ParallaxImage: React.FC<{ src: string; alt: string; className?: string; speed?: number }> = ({ 
  src, 
  alt, 
  className,
  speed = 15 // Percentage of movement
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress: 0 when entering bottom, 1 when leaving top
      const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
      
      // Clamp between 0 and 1 for safety, though CSS handles overflow
      const clampedProgress = Math.min(Math.max(progress, 0), 1);
      
      element.style.setProperty('--scroll-progress', clampedProgress.toString());
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calc

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={ref} className={`overflow-hidden relative ${className}`}>
      <div 
        className="w-full h-[120%] absolute top-[-10%] left-0 will-change-transform"
        style={{ 
          transform: `translateY(calc(var(--scroll-progress, 0.5) * ${-speed}%))` 
        }}
      >
        <Image 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover"
          width={1200}
        />
      </div>
    </div>
  );
};

// --- Main Page Component ---

export default function HomePage() {
  // Canonical Data Sources (Preserved from original)
  const services = [
    {
      id: 'video',
      title: 'Short-Form Video',
      description: 'Engaging Instagram Reels and TikTok content that captures attention and drives engagement for your brand.',
      icon: Video,
      image: "https://static.wixstatic.com/media/31e510_c6f866f44351473eb7e6d63affdd839d~mv2.png?originWidth=768&originHeight=448"
    },
    {
      id: 'ads',
      title: 'Paid Social Ads',
      description: 'Strategic advertising campaigns on Instagram and TikTok that maximize ROI and reach your ideal customers.',
      icon: Megaphone,
      image: "https://static.wixstatic.com/media/31e510_95b84838891d472fb2f0510262c51ef7~mv2.png?originWidth=768&originHeight=448"
    },
    {
      id: 'growth',
      title: 'Local Business Growth',
      description: 'Complete digital presence including content strategy, simple websites, and ongoing optimization.',
      icon: TrendingUp,
      image: "https://static.wixstatic.com/media/31e510_a5904f1b2ed5463992826be1c5732256~mv2.png?originWidth=768&originHeight=448"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-primary font-paragraph selection:bg-pastelblue selection:text-primary overflow-clip">
      <style>{`
        .is-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>

      <Header />

      {/* --- HERO SECTION --- 
          Replicating the structural essence of the inspiration image:
          Asymmetrical grid, central vertical line, offset images, large serif typography.
      */}
      <section className="relative w-full min-h-screen pt-24 pb-20 lg:pt-32 lg:pb-32 flex flex-col justify-center overflow-hidden">
        {/* Background Grid Lines */}
        <div className="absolute inset-0 pointer-events-none z-0 flex justify-center">
          <div className="w-px h-full bg-primary/10"></div>
        </div>
        <div className="absolute inset-0 pointer-events-none z-0 flex justify-between px-6 lg:px-12 max-w-[120rem] mx-auto w-full">
          <div className="w-px h-full bg-primary/5"></div>
          <div className="w-px h-full bg-primary/5"></div>
        </div>

        <div className="w-full max-w-[120rem] mx-auto px-6 lg:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 h-full items-center">
          
          {/* Left Image - Top Aligned */}
          <div className="lg:col-span-4 flex flex-col justify-start h-full pt-0 lg:pt-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="w-full aspect-[3/4] relative overflow-hidden"
            >
              <ParallaxImage 
                src="https://static.wixstatic.com/media/31e510_2368e0558e0b49dda1edac0f4d89a827~mv2.png"
                alt="Camera equipment and production setup"
                className="w-full h-full"
                speed={10}
              />
              {/* Decorative Caption */}
              <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm px-3 py-1 text-xs uppercase tracking-widest border border-primary/10">
                Est. Pasadena
              </div>
            </motion.div>
          </div>

          {/* Center Content - Spanning the divide */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center text-center relative z-20 py-12 lg:py-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
              className="relative"
            >
              <h1 className="font-heading text-6xl lg:text-8xl xl:text-9xl font-bold text-primary leading-[0.9] tracking-tight">
                MARK<br/>
                <span className="italic font-normal text-5xl lg:text-7xl xl:text-8xl block mt-2">Me.</span>
              </h1>
              
              <div className="w-px h-24 bg-primary mx-auto my-8"></div>
              
              <p className="font-heading text-xl lg:text-2xl text-softgraytext italic tracking-wide mb-2">
                Digital Marketing
              </p>
              <p className="font-paragraph text-sm uppercase tracking-[0.2em] text-primary/60">
                Short-Form Video & Paid Social
              </p>
            </motion.div>
          </div>

          {/* Right Image - Bottom/Center Aligned */}
          <div className="lg:col-span-4 flex flex-col justify-end h-full pb-0 lg:pb-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="w-full aspect-square relative overflow-hidden ml-auto lg:w-10/12"
            >
              <ParallaxImage 
                src="https://static.wixstatic.com/media/31e510_a13ce7310d7d4238b4815a5cde2b0098~mv2.png?originWidth=1152&originHeight=1600"
                alt="Analytics and growth strategy"
                className="w-full h-full"
                speed={-5}
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-6 text-right hidden lg:block"
            >
              <Link 
                to="/contact" 
                className="group inline-flex items-center gap-3 text-lg font-heading italic hover:text-secondary transition-colors"
              >
                Start your journey
                <span className="w-8 h-px bg-primary group-hover:bg-secondary transition-colors"></span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- PHILOSOPHY SECTION --- 
          Editorial layout with large typography and whitespace.
      */}
      <section className="w-full py-24 lg:py-40 bg-background relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-pastelblue/20 -z-10"></div>
        
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            <div className="lg:col-span-4">
              <AnimatedElement>
                <div className="w-full h-px bg-primary mb-8"></div>
                <span className="block font-paragraph text-sm uppercase tracking-[0.2em] mb-4 text-softgraytext">
                  Our Philosophy
                </span>
                <h2 className="font-heading text-4xl lg:text-5xl leading-tight mb-8">
                  We don't just post.<br/>
                  <span className="italic text-secondary">We perform.</span>
                </h2>
              </AnimatedElement>
            </div>
            
            <div className="lg:col-span-8">
              <AnimatedElement delay={200}>
                <p className="font-paragraph text-xl lg:text-3xl leading-relaxed text-primary/90 mb-12">
                  In a world of infinite scroll, attention is the only currency that matters. 
                  Based in Pasadena, we help local businesses capture that attention through 
                  <span className="bg-pastelblue/40 px-2 italic">cinematic storytelling</span> and 
                  <span className="bg-secondary/30 px-2 italic">data-driven strategy</span>.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="border-l border-primary/20 pl-6">
                    <h3 className="font-heading text-xl mb-2">Local Focus</h3>
                    <p className="text-softgraytext">Deeply rooted in the Pasadena community, understanding the local market nuances.</p>
                  </div>
                  <div className="border-l border-primary/20 pl-6">
                    <h3 className="font-heading text-xl mb-2">Global Standards</h3>
                    <p className="text-softgraytext">Applying world-class production quality to local business marketing.</p>
                  </div>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </section>

      {/* --- VIRAL GROWTH RESULTS SECTION --- 
          Showcasing real analytics and performance metrics.
      */}
      <section className="w-full py-24 lg:py-40 bg-background relative">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <AnimatedElement>
            <div className="text-center mb-16">
              <h2 className="font-heading text-5xl lg:text-6xl mb-6">
                Viral Growth Results
              </h2>
              <p className="font-paragraph text-lg text-softgraytext max-w-3xl mx-auto">
                Real analytics from real campaigns. See the impact of strategic content and paid advertising.
              </p>
            </div>
          </AnimatedElement>

          <AnimatedElement delay={200}>
            <div className="w-full">
              <Image
                src="https://static.wixstatic.com/media/31e510_6c79d0f967704715b9114f1467091771~mv2.png"
                alt="Viral Growth Results - Analytics Dashboard showing 510K engagement, 494K post views, 9,842 profile views, and 1,784 shares"
                className="w-full h-auto rounded-sm"
                width={1400}
              />
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* --- SERVICES SECTION (Sticky Scroll) --- 
          A sophisticated way to present the core offerings.
      */}
      <section className="w-full py-24 bg-primary text-background relative">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <AnimatedElement>
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-background/20 pb-8">
              <h2 className="font-heading text-5xl lg:text-7xl">
                Expertise
              </h2>
              <p className="font-paragraph text-background/60 text-lg max-w-md text-right mt-4 md:mt-0">
                Curated packages designed for impact.
              </p>
            </div>
          </AnimatedElement>

          <div className="flex flex-col gap-32">
            {services.map((service, index) => (
              <div key={service.id} className="group sticky top-32 bg-primary pt-8 pb-16 border-t border-background/10 transition-all duration-500">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  {/* Number */}
                  <div className="lg:col-span-1 hidden lg:block">
                    <span className="font-heading text-6xl text-background/10 group-hover:text-secondary transition-colors duration-500">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-5">
                    <AnimatedElement threshold={0.2}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 rounded-full border border-background/20 text-secondary">
                          <service.icon className="w-6 h-6" />
                        </div>
                        <span className="text-sm uppercase tracking-widest text-background/60">Service</span>
                      </div>
                      <h3 className="font-heading text-4xl lg:text-5xl mb-6 group-hover:translate-x-4 transition-transform duration-500 ease-out">
                        {service.title}
                      </h3>
                      <p className="font-paragraph text-xl text-background/70 leading-relaxed mb-8 max-w-md">
                        {service.description}
                      </p>
                      <Link 
                        to="/packages" 
                        className="inline-flex items-center gap-2 text-secondary hover:text-white transition-colors border-b border-secondary/30 pb-1 hover:border-white"
                      >
                        Explore Package <ArrowRight className="w-4 h-4" />
                      </Link>
                    </AnimatedElement>
                  </div>

                  {/* Image */}
                  <div className="lg:col-span-6">
                    <AnimatedElement delay={200} threshold={0.2}>
                      <div className="relative w-full aspect-video lg:aspect-[16/10] overflow-hidden rounded-sm">
                        <div className="absolute inset-0 bg-secondary/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-700"></div>
                        <Image 
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-1000 ease-out"
                          width={800}
                        />
                      </div>
                    </AnimatedElement>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROCESS / METRICS SECTION --- 
          Visual break with statistics and process flow.
      */}
      <section className="w-full py-32 bg-pastelblue/30 relative overflow-hidden">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            
            {/* Left: The Process Visual */}
            <div className="relative">
              <AnimatedElement>
                <h2 className="font-heading text-4xl mb-12">The Method</h2>
                <div className="space-y-12 relative">
                  {/* Vertical connecting line */}
                  <div className="absolute left-[19px] top-4 bottom-4 w-px bg-primary/20"></div>
                  
                  {[
                    { title: "Discovery", desc: "Understanding your brand voice and local audience." },
                    { title: "Production", desc: "High-fidelity shooting and editing for maximum retention." },
                    { title: "Distribution", desc: "Strategic posting and ad management across platforms." },
                    { title: "Optimization", desc: "Data-led refinement to improve ROI month over month." }
                  ].map((step, i) => (
                    <div key={i} className="relative flex gap-8 items-start group">
                      <div className="w-10 h-10 rounded-full bg-background border border-primary/20 flex items-center justify-center z-10 shrink-0 group-hover:border-primary transition-colors">
                        <span className="font-heading text-sm">{i + 1}</span>
                      </div>
                      <div>
                        <h3 className="font-heading text-xl mb-2 group-hover:text-secondary transition-colors">{step.title}</h3>
                        <p className="text-softgraytext text-sm leading-relaxed max-w-xs">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedElement>
            </div>

            {/* Right: Large Image & CTA */}
            <div className="relative flex flex-col justify-center">
              <AnimatedElement delay={200}>
                <div className="relative w-full aspect-[4/5] overflow-hidden mb-8">
                  <ParallaxImage 
                    src="https://static.wixstatic.com/media/31e510_e40d3bfdb2124113a0e61cc29d1faa57~mv2.png?originWidth=1152&originHeight=1472"
                    alt="Team working on strategy"
                    className="w-full h-full"
                    speed={8}
                  />
                  <div className="absolute inset-0 border-[12px] border-background/50 pointer-events-none"></div>
                </div>
                <div className="flex justify-between items-end border-t border-primary/20 pt-8">
                  <div>
                    <p className="font-heading text-3xl">Ready to scale?</p>
                    <p className="text-softgraytext">Let's build your roadmap.</p>
                  </div>
                  <Link 
                    to="/process" 
                    className="w-12 h-12 rounded-full border border-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </AnimatedElement>
            </div>

          </div>
        </div>
      </section>

      {/* --- CASE STUDY TEASER --- 
          Horizontal scroll feel within a contained section.
      */}
      <section className="w-full py-32 bg-background">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <AnimatedElement>
            <div className="flex flex-col lg:flex-row justify-between items-end mb-16">
              <h2 className="font-heading text-5xl lg:text-6xl">Selected Works</h2>
              <Link to="/case-studies" className="hidden lg:flex items-center gap-2 text-softgraytext hover:text-primary transition-colors">
                View all case studies <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((item, i) => (
              <AnimatedElement key={i} delay={i * 100} className="group cursor-pointer">
                <div className="w-full aspect-[9/16] relative overflow-hidden mb-6 bg-secondary/10">
                  <Image 
                    src={'https://static.wixstatic.com/media/31e510_70d1b89481c244bc90b5d435d2bb3a2e~mv2.png?originWidth=576&originHeight=960'}
                    alt="Case study thumbnail"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    width={600}
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-background/90 flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                      <Play className="w-6 h-6 text-primary ml-1" />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-start border-t border-primary/10 pt-4">
                  <div>
                    <h3 className="font-heading text-xl mb-1">Client Name {item}</h3>
                    <p className="text-sm text-softgraytext">Instagram Growth Strategy</p>
                  </div>
                  <span className="font-heading text-lg italic text-secondary">+145%</span>
                </div>
              </AnimatedElement>
            ))}
          </div>
          
          <div className="mt-12 lg:hidden text-center">
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-primary font-medium">
              View all case studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- 
          Minimalist, high-impact closing.
      */}
      <section className="w-full py-32 lg:py-48 bg-secondary/20 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedElement>
            <h2 className="font-heading text-5xl lg:text-7xl mb-8 leading-tight">
              Let's make you<br/>
              <span className="italic text-secondary-foreground/60">unforgettable.</span>
            </h2>
            <p className="font-paragraph text-xl text-softgraytext mb-12 max-w-xl mx-auto">
              Schedule a free strategy call to discuss your goals and how we can help you achieve them.
            </p>
            <Link 
              to="/contact" 
              className="inline-block px-12 py-5 bg-primary text-primary-foreground font-heading text-xl hover:bg-primary/90 transition-all hover:px-14 duration-300"
            >
              Book Strategy Call
            </Link>
          </AnimatedElement>
        </div>
      </section>

      <Footer />
    </div>
  );
}