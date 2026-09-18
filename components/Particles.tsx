
"use client";

import { useEffect, useRef } from "react";

export default function Particles() {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    if (!ctx) return;

    let animation = 0;
    let width = 0;
    let height = 0;

    const colorPalette = [
      "rgba(89,225,255,0.8)",
      "rgba(138,125,255,0.65)",
      "rgba(75,225,188,0.55)",
    ];

    const resize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      const ratio = window.devicePixelRatio || 1;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    class Dot {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      color: string;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.r = Math.random() * 2.2 + 0.8;
        this.color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      }

      step() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    let dots: Dot[] = [];

    const init = () => {
      resize();
      const density = Math.max(40, Math.min(90, Math.floor((width * height) / 20000)));
      dots = Array.from({ length: density }, () => new Dot());
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < dots.length; i++) {
        const a = dots[i];
        a.step();
        a.draw();

        for (let j = i + 1; j < dots.length; j++) {
          const b = dots[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(120, 208, 255, ${0.10 - distance / 1400})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      animation = requestAnimationFrame(render);
    };

    init();
    render();
    window.addEventListener("resize", init);

    return () => {
      cancelAnimationFrame(animation);
      window.removeEventListener("resize", init);
    };
  }, []);

  return <canvas ref={ref} className="absolute inset-0 h-full w-full opacity-80" />;
}
