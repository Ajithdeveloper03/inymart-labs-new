'use client';

import { useEffect, useRef } from 'react';
import { Reveal } from '@/components/Reveal';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { usePopup } from '@/components/providers/PopupProvider';

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
  const { openPopup } = usePopup();

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
      className="relative w-full overflow-hidden bg-[#0c0d12] pt-[140px] sm:pt-[150px] lg:pt-[160px] pb-4 lg:pb-8 flex flex-col justify-center min-h-[600px] lg:min-h-[650px]"
    >
      {/* Canvas for Magical Star Splashes */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-40" />
      {/* Grid Backdrop (top area) - subtle visible white grid lines on dark background */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px] opacity-[1] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_80%,transparent_100%)]" />

      {/* Floating Glowing Gradient Blur Orbs/Blobs for Futuristic Aesthetics */}
      <div className="absolute top-[5%] left-[10%] w-[350px] h-[350px] rounded-full bg-orange-600/20 blur-[110px] pointer-events-none mix-blend-screen animate-float-slow z-0" />
      <div className="absolute top-[25%] right-[5%] w-[400px] h-[400px] rounded-full bg-blue-600/15 blur-[120px] pointer-events-none mix-blend-screen animate-float-slower z-0" />
      <div className="absolute bottom-[20%] left-[15%] w-[300px] h-[300px] rounded-full bg-pink-600/15 blur-[90px] pointer-events-none mix-blend-screen animate-float-slow z-0" />
      <div className="absolute top-[5%] right-[30%] w-[250px] h-[250px] rounded-full bg-rose-500/10 blur-[80px] pointer-events-none mix-blend-screen animate-float-slow z-0" />
      {/* Main Content & Side Images Flex Container */}
      <div className="w-full px-0 relative z-30 flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between flex-grow gap-6 lg:gap-4 max-w-[2000px] mx-auto mt-2 lg:mt-4">
        
        {/* Left Showcase Image (Mobile: Stacked Below Text, Desktop: Left Side) */}
        <div className="hidden lg:block order-2 lg:order-1 w-full max-w-[240px] sm:max-w-[280px] lg:max-w-[180px] xl:max-w-[290px] 2xl:max-w-[260px] aspect-[4/5] rounded-[28px] overflow-hidden border-[5px] border-[#ff7000] shadow-[0_0_30px_rgba(255,112,0,0.2)] animate-float-left z-20 pointer-events-none mt-2 lg:mt-24 xl:mt-20 2xl:mt-16 rotate-[10deg] lg:rotate-[12deg] origin-bottom-right lg:absolute lg:-left-6 xl:-left-16 2xl:-left-12 lg:top-1/4 xl:top-[15%]">
          <img
            src="/images/hero_left.png"
            alt="Digital Art Concept Left"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Center Text Content */}
        <div className="order-1 lg:order-2 flex flex-col items-center text-center w-full max-w-[1000px] lg:max-w-[600px] xl:max-w-[1000px] 2xl:max-w-[940px] px-4 sm:px-4 lg:mx-auto lg:relative lg:z-30 overflow-hidden sm:overflow-visible -mt-8 sm:-mt-12 lg:-mt-16 2xl:-mt-4">
          {/* Top Accent Subtitle in Serif Italic */}
          <Reveal delay={0}>
            <p className="font-serif italic text-sm sm:text-base md:text-lg text-neutral-300 tracking-wide mb-2 mt-2">
              Be Found Where Your Customers Are Searching
            </p>
          </Reveal>

          {/* Main Bold Headline */}
          <Reveal delay={100}>
            <h1 className="font-display text-[2rem] leading-[1.05] sm:text-[3rem] md:text-[3.25rem] lg:text-[2.75rem] xl:text-[3.25rem] 2xl:text-[3.2rem] font-extrabold tracking-tight text-white sm:leading-[1.15] md:leading-[1.1] mb-2 lg:mb-4 w-full lg:max-w-[600px] xl:max-w-[1000px] 2xl:max-w-[940px] mx-auto break-words">
              Grow Your Business With Us <br className="hidden sm:block" />
              <span className="text-gradient relative inline-block whitespace-normal lg:whitespace-nowrap mt-1 sm:mt-0">
                Your Trusted Agency in Tamil Nadu
              </span>
            </h1>
          </Reveal>

          {/* Main Paragraph Description */}
          <Reveal delay={200}>
            <p className="text-sm sm:text-base md:text-[1.05rem] lg:text-base xl:text-lg leading-relaxed text-neutral-300 font-normal mb-4 max-w-[98%] md:max-w-[85%] lg:max-w-[500px] xl:max-w-[860px] 2xl:max-w-[800px] mx-auto text-justify sm:text-center">
              Today&apos;s customers search online before choosing a product or service. At Inymart Labs, a leading digital marketing agency in Tamil Nadu &amp; Tiruchirappalli, we help businesses improve visibility, generate quality leads, and achieve long-term growth through result-driven marketing, ORM, and high-ROI strategies tailored for your success.
            </p>
          </Reveal>

          {/* Centered Elegant Icons Badges */}
          <Reveal delay={250}>
            <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 text-[10px] sm:text-xs lg:text-[13px] font-medium text-neutral-300 mb-4 w-full pb-1 px-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-500/30 px-3 py-1.5 hover:bg-orange-500/10 transition-colors">
                <CheckCircle2 className="h-3.5 w-3.5 text-orange-500 shrink-0 flex-none" />
                <span className="whitespace-nowrap">Get a Free Consultation</span>
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-500/30 px-3 py-1.5 hover:bg-orange-500/10 transition-colors">
                <CheckCircle2 className="h-3.5 w-3.5 text-orange-500 shrink-0 flex-none" />
                <span className="whitespace-nowrap">Talk to Our Experts</span>
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-500/30 px-3 py-1.5 hover:bg-orange-500/10 transition-colors">
                <CheckCircle2 className="h-3.5 w-3.5 text-orange-500 shrink-0 flex-none" />
                <span className="whitespace-nowrap">Start Your Digital Growth Today</span>
              </span>
            </div>
          </Reveal>

          {/* Main CTA Button */}
          <Reveal delay={300}>
            <div className="relative group mt-4 lg:mt-0 mb-4 lg:mb-0">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 opacity-20 blur transition duration-500 group-hover:opacity-40"></div>
              <button
                onClick={openPopup}
                className="relative flex items-center justify-center whitespace-nowrap gap-1.5 sm:gap-2 rounded-full bg-gradient-to-r from-[#ff7000] to-[#e64000] px-4 sm:px-6 lg:px-8 py-3 lg:py-4 text-[10px] sm:text-xs lg:text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:scale-[1.05] shadow-[0_0_20px_rgba(255,112,0,0.4)] hover:shadow-[0_0_30px_rgba(255,112,0,0.6)] w-full sm:w-auto"
              >
                START YOUR DIGITAL GROWTH TODAY
                <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </Reveal>
        </div>

        {/* Right Showcase Image (Mobile: Stacked Below Text, Desktop: Right Side) */}
        <div className="hidden lg:block order-3 lg:order-3 w-full max-w-[240px] sm:max-w-[280px] lg:max-w-[180px] xl:max-w-[290px] 2xl:max-w-[260px] aspect-[4/5] rounded-[28px] overflow-hidden border-[5px] border-[#ff7000] shadow-[0_0_30px_rgba(255,112,0,0.2)] animate-float-right z-20 pointer-events-none mt-2 lg:mt-24 xl:mt-20 2xl:mt-16 -rotate-[10deg] lg:-rotate-[12deg] origin-bottom-left lg:absolute lg:-right-6 xl:-right-16 2xl:-right-12 lg:top-1/4 xl:top-[15%]">
          <img
            src="/images/hero_right.png"
            alt="Digital Art Concept Right"
            className="w-full h-full object-cover"
          />
        </div>

      </div>

      {/* Background Curved Floor Dome */}
      <div className="absolute inset-x-0 bottom-0 z-10 overflow-hidden h-[200px] md:h-[250px] pointer-events-none">
        <div className="absolute w-[150%] h-[800px] left-[-25%] top-[10%] bg-[#050608] rounded-[100%] shadow-[0_-30px_80px_rgba(249,115,22,0.08)] border-t border-orange-500/10"></div>
      </div>

      {/* Center Phone Container */}
      <div className="relative w-full h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px] z-20 pointer-events-none max-w-[1600px] mx-auto mt-8 sm:mt-12 lg:mt-16">
        
        {/* Center Hand holding phone */}
        <div className="absolute bottom-[-1rem] left-1/2 -translate-x-1/2 z-30 w-full max-w-[260px] sm:max-w-[300px] md:max-w-[360px] lg:max-w-[420px] xl:max-w-[480px] flex justify-center animate-float-phone">
          <img
            src="/images/hero_phone.png"
            alt="Inymart Labs Digital Growth Mobile Analytics Dashboard"
            className="w-full h-auto object-contain transition-transform duration-500 hover:scale-[1.02] pointer-events-auto cursor-pointer"
          />
        </div>

        {/* Bottom Fade Overlay to smoothly blend the cut-off hand */}
        <div className="absolute bottom-[-1rem] left-0 right-0 h-16 sm:h-20 lg:h-28 bg-gradient-to-t from-[#050608] via-[#050608]/80 to-transparent z-40 pointer-events-none" />
      </div>
    </section>
  );
}
