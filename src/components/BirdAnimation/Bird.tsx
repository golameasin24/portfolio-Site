
// src/components/AnimatedBackground.tsx
import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const particlesCount = 80;
    const particles: Particle[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Initialize particles
    for (let i = 0; i < particlesCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        radius: Math.random() * 3 + 1,
      });
    }
    particlesRef.current = particles;

    let animationFrameId: number;

    const animate = () => {
      if (!ctx) return;

      ctx.fillStyle = "#1a173c"; // background color
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((p) => {
        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Draw
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#16f2b3"; // particle color
        ctx.fill();
      });

      // Connect particles with lines
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const dx = particlesRef.current[i].x - particlesRef.current[j].x;
          const dy = particlesRef.current[i].y - particlesRef.current[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particlesRef.current[i].x, particlesRef.current[i].y);
            ctx.lineTo(particlesRef.current[j].x, particlesRef.current[j].y);
            ctx.strokeStyle = `rgba(22,242,179, ${1 - dist / 120})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
};

export default AnimatedBackground;





// import React, { useEffect, useRef } from "react";

// interface Particle {
//   x: number;
//   y: number;
//   vx: number;
//   vy: number;
//   radius: number;
// }

// interface Props {
//   imageUrl: string;
//   width?: number;
//   height?: number;
// }

// const AnimatedBackgroundBehindImage: React.FC<Props> = ({
//   // imageUrl,
//   width = 900,
//   height = 400,
// }) => {
//   const canvasRef = useRef<HTMLCanvasElement | null>(null);
//   const particlesRef = useRef<Particle[]>([]);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     const particlesCount = 60;
//     const particles: Particle[] = [];

//     canvas.width = width;
//     canvas.height = height;

//     // Initialize particles
//     for (let i = 0; i < particlesCount; i++) {
//       particles.push({
//         x: Math.random() * canvas.width,
//         y: Math.random() * canvas.height,
//         vx: (Math.random() - 0.5) * 1.5,
//         vy: (Math.random() - 0.5) * 1.5,
//         radius: Math.random() * 3 + 1,
//       });
//     }
//     particlesRef.current = particles;

//     let animationFrameId: number;

//     const animate = () => {
//       if (!ctx) return;

//       // Clear canvas
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       // Dark background
//       ctx.fillStyle = "#0f172a"; // dark background
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       // Draw particles
//       particles.forEach((p) => {
//         p.x += p.vx;
//         p.y += p.vy;

//         if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
//         if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

//         ctx.beginPath();
//         ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
//         ctx.fillStyle = "rgba(22,242,179,0.8)";
//         ctx.fill();
//       });

//       // Connect particles
//       for (let i = 0; i < particles.length; i++) {
//         for (let j = i + 1; j < particles.length; j++) {
//           const dx = particles[i].x - particles[j].x;
//           const dy = particles[i].y - particles[j].y;
//           const dist = Math.sqrt(dx * dx + dy * dy);
//           if (dist < 100) {
//             ctx.beginPath();
//             ctx.moveTo(particles[i].x, particles[i].y);
//             ctx.lineTo(particles[j].x, particles[j].y);
//             ctx.strokeStyle = `rgba(22,242,179, ${1 - dist / 100})`;
//             ctx.lineWidth = 0.5;
//             ctx.stroke();
//           }
//         }
//       }

//       animationFrameId = requestAnimationFrame(animate);
//     };

//     animate();

//     return () => cancelAnimationFrame(animationFrameId);
//   }, [width, height]);

//   return (
//     <div
//       className="relative"
//       style={{ width, height, overflow: "hidden", borderRadius: "12px" }}
//     >
//       {/* Canvas animation layer (background) */}
//       <canvas
//         ref={canvasRef}
//         className="absolute top-0 left-0 w-full h-full"
//       />

//       {/* Image layer */}
//       {/* <img
//         src={imageUrl}
//         alt="Background"
//         className="absolute top-0 left-0 w-full h-full object-cover"
//       /> */}

//       {/* Optional foreground content */}
//       <div className="relative z-10 flex items-center justify-center h-full text-white">
//         <h1 className="text-2xl font-bold bg-black/40 px-4 py-2 rounded">
//           Image Overlay + Animation Behind ✨
//         </h1>
//       </div>
//     </div>
//   );
// };

// export default AnimatedBackgroundBehindImage;
