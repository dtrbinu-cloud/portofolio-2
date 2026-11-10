import React, { useEffect, useRef, useState } from "react";

const Sparkles = ({
    background = "transparent",
    minSize = 0.4,
    maxSize = 1.4,
    particleDensity = 100,
    className = "size-full",
    particleColor = "#FFFFFF",
}) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        let animationId;

        const particles = [];
        const particleCount = particleDensity;

        // Initialize particles
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * (maxSize - minSize) + minSize,
                speedY: Math.random() * 0.5 - 0.25,
                speedX: Math.random() * 0.5 - 0.25,
                opacity: Math.random(),
                opacitySpeed: Math.random() * 0.02 + 0.005,
                direction: Math.random() > 0.5 ? 1 : -1
            });
        }

        const resizeCanvas = () => {
            const parent = canvas.parentElement;
            if (parent) {
                canvas.width = parent.clientWidth;
                canvas.height = parent.clientHeight;
            }
        };

        // Resize observer might be better but window resize is standard
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(p => {
                p.opacity += p.opacitySpeed * p.direction;
                if (p.opacity >= 1) {
                    p.opacity = 1;
                    p.direction = -1;
                } else if (p.opacity <= 0) {
                    p.opacity = 0;
                    p.direction = 1;
                    p.x = Math.random() * canvas.width;
                    p.y = Math.random() * canvas.height;
                }

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = particleColor;
                ctx.globalAlpha = p.opacity;
                ctx.fill();
                ctx.globalAlpha = 1.0;
            });

            animationId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, [minSize, maxSize, particleDensity, particleColor]);

    return (
        <canvas
            ref={canvasRef}
            className={className}
            style={{ background, position: "absolute", inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
        />
    );
};

export default Sparkles;
