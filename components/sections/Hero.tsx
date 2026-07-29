'use client';

import { useEffect, useRef } from 'react';
import { Reveal } from '@/components/Reveal';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface StarParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  decay: number;
  color: string;
  spikes: number;
}

export function Hero() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: StarParticle[] = [];
    const colors = [
      '#FF8A00', // orange
      '#FFA800', // gold
      '#FFD600', // yellow
      '#FFFFFF', // white
      '#FF5C00', // dark orange
    ];

    const resizeCanvas = () => {
      const rect = section.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Spawn 2-3 stars per mouse move event
      for (let i = 0; i < 2; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 2 + 1;
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.5, // slight upward float
          size: Math.random() * 8 + 4,
          alpha: 1,
          decay: Math.random() * 0.02 + 0.015,
          color: colors[Math.floor(Math.random() * colors.length)],
          spikes: Math.random() > 0.5 ? 4 : 5,
        });
      }
    };

    section.addEventListener('mousemove', handleMouseMove);

    const drawStar = (
      c: CanvasRenderingContext2D,
      cx: number,
      cy: number,
      spikes: number,
      outerRadius: number,
      innerRadius: number,
      color: string,
      alpha: number
    ) => {
      let rot = (Math.PI / 2) * 3;
      let x = cx;
      let y = cy;
      const step = Math.PI / spikes;

      c.save();
      c.globalAlpha = alpha;
      c.fillStyle = color;
      c.beginPath();
      c.moveTo(cx, cy - outerRadius);
      for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        c.lineTo(x, y);
        rot += step;

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        c.lineTo(x, y);
        rot += step;
      }
      c.lineTo(cx, cy - outerRadius);
      c.closePath();
      c.fill();
      c.restore();
    };

    const updateAndDraw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        drawStar(ctx, p.x, p.y, p.spikes, p.size, p.size / 2, p.color, p.alpha);
      }

      animationFrameId = requestAnimationFrame(updateAndDraw);
    };

    updateAndDraw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      section.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#0c0d12] pt-24 sm:pt-32 min-h-screen flex flex-col justify-between"
    >
      {/* Canvas for Magical Star Splashes */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-40" />

      {/* Grid Backdrop */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_0%,#000_60%,transparent_100%)]" />

      {/* Glow Behind Text */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-orange-600/10 blur-[120px] pointer-events-none mix-blend-screen z-0" />

      {/* Main Content */}
      <div className="container-x relative z-30 text-center flex flex-col items-center flex-grow mt-4 lg:mt-8">
        {/* Top Accent Subtitle in Serif Italic */}
        <Reveal delay={0}>
          <p className="font-serif italic text-sm sm:text-base md:text-lg text-neutral-300 tracking-wide mb-3">
            Be Found Where Your Customers Are Searching
          </p>
        </Reveal>

        {/* Main Bold Headline */}
        <Reveal delay={100}>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-tight text-white leading-[1.1] max-w-4xl mx-auto mb-4 lg:mb-6">
            Grow Your Business With Us <br className="hidden sm:block" />
            <span className="text-gradient relative inline-block">
              Your Trusted Agency in Tamil Nadu
              {/* Decorative sparkles next to text like in reference */}
              <div className="absolute -right-8 lg:-right-12 top-1/2 -translate-y-1/2 text-orange-400 opacity-80 hidden md:block scale-75 lg:scale-100">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="animate-pulse">
                  <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" />
                </svg>
              </div>
            </span>
          </h1>
        </Reveal>

        {/* Paragraph Description */}
        <Reveal delay={200}>
          <p className="max-w-2xl mx-auto text-xs sm:text-sm lg:text-[15px] leading-relaxed text-neutral-300 font-normal mb-6">
            Today&apos;s customers search online before choosing a product or service. At Inymart Labs, a leading digital marketing agency in Tamil Nadu &amp; Tiruchirappalli, we help businesses improve visibility, generate quality leads, and achieve long-term growth through result-driven marketing, ORM, and high-ROI strategies tailored for your success.
          </p>
        </Reveal>

        {/* Centered Elegant Icons Badges (No BG, Orange Border, Reference matching) */}
        <Reveal delay={250}>
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 text-[11px] sm:text-xs lg:text-[13px] font-medium text-neutral-300 mb-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 px-3 py-1.5 hover:bg-orange-500/10 transition-colors">
              <CheckCircle2 className="h-3.5 w-3.5 text-orange-500" /> Get a Free Consultation
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 px-3 py-1.5 hover:bg-orange-500/10 transition-colors">
              <CheckCircle2 className="h-3.5 w-3.5 text-orange-500" /> Talk to Our Experts
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 px-3 py-1.5 hover:bg-orange-500/10 transition-colors">
              <CheckCircle2 className="h-3.5 w-3.5 text-orange-500" /> Start Your Digital Growth Today
            </span>
          </div>
        </Reveal>

        {/* Primary Pill Button */}
        <Reveal delay={300}>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ff7000] to-[#e64000] px-6 lg:px-8 py-3 lg:py-4 text-xs lg:text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:scale-[1.05] shadow-[0_0_20px_rgba(255,112,0,0.4)] hover:shadow-[0_0_30px_rgba(255,112,0,0.6)]"
          >
            START YOUR DIGITAL GROWTH TODAY
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>

      {/* Left Showcase Image (Woman with curly hair) */}
      <div className="hidden lg:block absolute left-8 xl:left-16 2xl:left-24 top-[15%] w-[240px] xl:w-[280px] 2xl:w-[320px] aspect-[4/5] rounded-[24px] overflow-hidden border-[5px] border-[#ff7000] shadow-[0_0_30px_rgba(255,112,0,0.2)] animate-float-left z-20 transform -rotate-[10deg] origin-center pointer-events-none">
        <img
          src="/images/hero_left.png"
          alt="Digital Art Concept Left"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Showcase Image (Astronaut Cat) */}
      <div className="hidden lg:block absolute right-8 xl:right-16 2xl:right-24 top-[15%] w-[240px] xl:w-[280px] 2xl:w-[320px] aspect-[4/5] rounded-[24px] overflow-hidden border-[5px] border-[#ff7000] shadow-[0_0_30px_rgba(255,112,0,0.2)] animate-float-right z-20 transform rotate-[10deg] origin-center pointer-events-none">
        <img
          src="/images/hero_right.png"
          alt="Digital Art Concept Right"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Background Curved Floor Dome */}
      <div className="absolute inset-x-0 bottom-0 z-10 overflow-hidden h-[200px] md:h-[250px] pointer-events-none">
        <div className="absolute w-[150%] h-[800px] left-[-25%] top-[10%] bg-[#050608] rounded-[100%] shadow-[0_-30px_80px_rgba(249,115,22,0.08)] border-t border-orange-500/10"></div>
      </div>

      {/* Center Phone Container */}
      <div className="relative w-full h-[220px] sm:h-[260px] md:h-[300px] lg:h-[320px] z-20 pointer-events-none max-w-[1600px] mx-auto mt-4">
        
        {/* Center Hand holding phone */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-30 w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[460px] flex justify-center animate-float-phone">
          <img
            src="/images/hero_phone.png"
            alt="Inymart Labs Digital Growth Mobile Analytics Dashboard"
            className="w-full h-auto object-contain transition-transform duration-500 hover:scale-[1.02] pointer-events-auto cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
}
