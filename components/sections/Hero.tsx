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
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#090a0f] via-[#121526] to-[#090a0f] pt-24 sm:pt-28 lg:pt-32 pb-0"
    >
      {/* Canvas for Magical Star Splashes */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-30" />
      {/* Grid Backdrop (top area) - subtle visible white grid lines on dark background */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px] opacity-[1] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_80%,transparent_100%)]" />

      {/* Plus marks at grid intersections (aligned to the 32px grid lines) */}
      <div className="absolute inset-0 z-0 opacity-90 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_80%,transparent_100%)] pointer-events-none select-none">
        {/* Left side aligned pluses */}
        {[
          { x: 3, y: 2 },
          { x: 7, y: 6 },
          { x: 12, y: 4 },
          { x: 16, y: 9 },
          { x: 5, y: 13 },
          { x: 22, y: 5 },
          { x: 10, y: 17 },
          { x: 18, y: 21 },
          { x: 6, y: 25 },
          { x: 14, y: 29 },
          { x: 23, y: 14 },
          { x: 9, y: 34 },
          { x: 15, y: 32 },
        ].map((pos, idx) => (
          <div
            key={`left-${idx}`}
            className="absolute text-[28px] font-light text-white/85 -translate-x-1/2 -translate-y-1/2 leading-none"
            style={{
              left: `${pos.x * 32}px`,
              top: `${pos.y * 32}px`,
            }}
          >
            +
          </div>
        ))}
        {/* Right side aligned pluses */}
        {[
          { x: 4, y: 4 },
          { x: 9, y: 2 },
          { x: 15, y: 7 },
          { x: 21, y: 3 },
          { x: 7, y: 11 },
          { x: 13, y: 16 },
          { x: 19, y: 20 },
          { x: 26, y: 10 },
          { x: 5, y: 23 },
          { x: 11, y: 27 },
          { x: 24, y: 29 },
          { x: 8, y: 33 },
          { x: 16, y: 35 },
        ].map((pos, idx) => (
          <div
            key={`right-${idx}`}
            className="absolute text-[28px] font-light text-white/85 -translate-x-1/2 -translate-y-1/2 leading-none"
            style={{
              right: `${pos.x * 32}px`,
              top: `${pos.y * 32}px`,
            }}
          >
            +
          </div>
        ))}
      </div>

      {/* Floating Glowing Gradient Blur Orbs/Blobs for Futuristic Aesthetics */}
      <div className="absolute top-[10%] left-[10%] w-[350px] h-[350px] rounded-full bg-orange-600/20 blur-[110px] pointer-events-none mix-blend-screen animate-float-slow z-0" />
      <div className="absolute top-[35%] right-[5%] w-[400px] h-[400px] rounded-full bg-blue-600/15 blur-[120px] pointer-events-none mix-blend-screen animate-float-slower z-0" />
      <div className="absolute bottom-[20%] left-[15%] w-[300px] h-[300px] rounded-full bg-pink-600/15 blur-[90px] pointer-events-none mix-blend-screen animate-float-slow z-0" />
      <div className="absolute top-[5%] right-[30%] w-[250px] h-[250px] rounded-full bg-rose-500/10 blur-[80px] pointer-events-none mix-blend-screen animate-float-slow z-0" />
      <div className="absolute top-[50%] right-[15%] w-[320px] h-[320px] rounded-full bg-orange-500/15 blur-[100px] pointer-events-none mix-blend-screen animate-float-slow z-0" />
      <div className="absolute bottom-[10%] right-[25%] w-[380px] h-[380px] rounded-full bg-amber-500/15 blur-[110px] pointer-events-none mix-blend-screen animate-float-slower z-0" />
      <div className="absolute bottom-[5%] left-[5%] w-[350px] h-[350px] rounded-full bg-violet-600/10 blur-[105px] pointer-events-none mix-blend-screen animate-float-slower z-0" />

      {/* Curved Orangish Gradient Shape behind the image, placed starting high (above 40% of the bottom) */}
      <div className="absolute inset-x-0 bottom-0 h-[650px] z-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 600"
          className="absolute bottom-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="orangeFlowGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(255, 146, 60, 0)" />
              <stop offset="35%" stopColor="rgba(254, 146, 60, 0.08)" />
              <stop offset="75%" stopColor="rgba(253, 120, 50, 0.15)" />
              <stop offset="100%" stopColor="rgba(249, 115, 22, 0.25)" />
            </linearGradient>
          </defs>
          {/* Curve where left/right are at the same level, and the middle curves upward */}
          <path
      fill="url(#orangeFlowGrad)"
      d="
        M0 0
        H1440
        V520
        Q720 250 0 520
        Z
      "
    />
        </svg>
      </div>

      {/* Left Showcase Image (tilted, matching Leonardo.Ai style, positioned on the side of the hero content - increased height with float animation) */}
      <div className="hidden xl:block absolute -left-16 2xl:-left-6 top-[45%] w-[260px] 2xl:w-[320px] aspect-[4/4.8] rounded-3xl overflow-hidden border-[6px] border-orange-500/80 shadow-2xl animate-float-left z-20">
        <img
          src="/new/images/hero_left.png"
          alt="Digital Art Concept Left"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Showcase Image (tilted, matching Leonardo.Ai style, positioned on the side of the hero content - increased height with float animation) */}
      <div className="hidden xl:block absolute -right-16 2xl:-right-6 top-[45%] w-[260px] 2xl:w-[320px] aspect-[4/4.8] rounded-3xl overflow-hidden border-[6px] border-orange-600/80 shadow-2xl animate-float-right z-20">
        <img
          src="/new/images/hero_right.png"
          alt="Digital Art Concept Right"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container-x mt-4 relative z-10 text-center flex flex-col items-center">
        {/* Top Accent Subtitle in Serif Italic */}
        <Reveal delay={0}>
          <p className="font-serif italic text-base sm:text-lg md:text-xl text-neutral-300 tracking-wide">
            Be Found Where Your Customers Are Searching
          </p>
        </Reveal>
 
        {/* Main Bold Headline */}
        <Reveal delay={100}>
          <h1 className="mt-2 font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.1] max-w-5xl mx-auto">
            Grow Your Business With Us <br className="hidden sm:block" />
            <span className="text-orange-500">Your Trusted Agency in Tamil Nadu</span>
          </h1>
        </Reveal>
 
        {/* Paragraph Description: Shortened to 4-5 lines with minimal text size */}
        <Reveal delay={200}>
          <div className="mt-2 max-w-3xl mx-auto text-xs sm:text-sm font-sans leading-relaxed text-neutral-300 font-normal space-y-2">
            <p>
              Today&apos;s customers search online before choosing a product or service. Whether it&apos;s Google Search, Google Maps, AI-powered search platforms, or social media, your business needs to be visible where your customers are looking. At Inymart Labs, a trusted Digital Marketing Agency in Tamil Nadu &amp; Tiruchirappalli, we help businesses improve visibility, generate quality leads, and achieve long-term growth through result-driven digital marketing and ORM strategies. With 10+ years of experience since 2016 and 50+ satisfied clients, we deliver customised solutions that create measurable success. The average cost of hiring a digital marketing company in Tamil Nadu typically ranges from INR 20,000 to INR 1,00,000 per month, depending on scope and scale, though costs vary based on your specific requirements.
            </p>
            
          </div>
        </Reveal>
 
        {/* Centered Elegant Icons Badges */}
        <Reveal delay={250}>
          <div className="mt-4 flex flex-col items-center font-sans">
            {/* <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-orange-500 font-sans">Ready to Grow Your Business?</h3> */}
            <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 text-[11px] sm:text-xs font-semibold text-neutral-200">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-950/40 border border-orange-500/30 px-3 py-1 text-orange-200">
                <CheckCircle2 className="h-3.5 w-3.5 text-orange-500" /> Get a Free Consultation
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-950/40 border border-orange-500/30 px-3 py-1 text-orange-200">
                <CheckCircle2 className="h-3.5 w-3.5 text-orange-500" /> Talk to Our Experts
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-50/10 border border-orange-500/20 px-3 py-1 text-orange-200">
                <CheckCircle2 className="h-3.5 w-3.5 text-orange-500" /> Start Your Digital Growth Today
              </span>
            </div>
          </div>
        </Reveal>

        {/* Primary Pill Button - Futuristic Orange Button */}
        <Reveal delay={300}>
          <div className="mt-6 flex justify-center">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-orange-600 px-7 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-orange-500 hover:scale-[1.02] shadow-lg shadow-orange-600/20"
            >
              START YOUR DIGITAL GROWTH TODAY
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>

        {/* Centerpiece Hero Showcase Visual */}
        <Reveal delay={400} className="relative mt-8 sm:mt-10 w-full flex justify-center">
          <div className="relative mx-auto w-full group flex justify-center items-end max-w-7xl px-4 sm:px-6 lg:px-8">
            
            {/* Center Hand holding phone container (reduced height with float animation) */}
            <div className="relative z-10 w-full max-w-3xl flex justify-center pb-0 animate-float-phone">
              <img
                src="/new/images/hero_phone.png"
                alt="Inymart Labs Digital Growth Mobile Analytics Dashboard"
                className="relative z-10 w-full h-auto max-h-[400px] sm:max-h-[480px] md:max-h-[550px] lg:max-h-[600px] object-contain transition-transform duration-500 hover:scale-[1.01]"
                style={{
                  WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)',
                  maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)',
                }}
                loading="eager"
              />

              {/* Dark Overlay Gradient for smooth bottom hand cutting transition (reduced height) */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-10 sm:h-16 bg-gradient-to-t from-[#090a0f] via-[#090a0f]/80 to-transparent"
              />
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
}
