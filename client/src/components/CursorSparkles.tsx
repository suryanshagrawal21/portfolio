import { useEffect, useRef } from 'react';

const CursorSparkles = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let particles: { x: number, y: number, size: number, speedX: number, speedY: number, life: number }[] = [];
        const mouse = { x: -100, y: -100 };
        let animationFrameId: number;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        // Initial setup
        resize();
        window.addEventListener('resize', resize);

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;

            // Generate 1-3 particles per mouse move event for a glitter effect
            const particleCount = Math.floor(Math.random() * 3) + 1;

            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: mouse.x + (Math.random() - 0.5) * 10,
                    y: mouse.y + (Math.random() - 0.5) * 10,
                    size: Math.random() * 2 + 0.5,
                    speedX: (Math.random() - 0.5) * 0.8,
                    speedY: (Math.random() - 0.5) * 0.8 - 0.5, // Slight upward float
                    life: 1
                });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];

                // Draw star-like glitter point
                ctx.fillStyle = `rgba(255, 255, 255, ${p.life})`;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();

                // Update position and life
                p.x += p.speedX;
                p.y += p.speedY;
                p.life -= 0.015; // Fade out speed
                p.size *= 0.98; // Shrink speed
            }

            // Remove dead particles array
            particles = particles.filter(p => p.life > 0.01);

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-50 pointer-events-none"
            style={{
                mixBlendMode: 'screen',
                filter: 'drop-shadow(0 0 2px rgba(255, 255, 255, 0.8))'
            }}
        />
    );
};

export default CursorSparkles;
