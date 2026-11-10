import React, { useRef, useEffect, useState } from 'react';

const IconCloud = ({ images, className }) => {
    const canvasRef = useRef(null);
    const animationFrameRef = useRef(0);
    const imageCanvasesRef = useRef([]);
    const imagesLoadedRef = useRef([]);

    const [imagePositions, setImagePositions] = useState([]);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 });
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [targetRotation, setTargetRotation] = useState(null);

    const slugs = images || [
        "typescript", "javascript", "react", "html5", "css3",
        "nodedotjs", "nextdotjs", "firebase", "git", "github",
        "visualstudiocode", "figma", "tailwindcss", "vite"
    ];

    const imageUrls = slugs.map(slug => `https://cdn.simpleicons.org/${slug}`);

    function easeOutCubic(t) {
        return 1 - Math.pow(1 - t, 3);
    }

    // Load images
    useEffect(() => {
        imagesLoadedRef.current = new Array(imageUrls.length).fill(false);

        const newImageCanvases = imageUrls.map((url, idx) => {
            const offscreen = document.createElement('canvas');
            offscreen.width = 40;
            offscreen.height = 40;
            const offCtx = offscreen.getContext('2d');
            if (!offCtx) return offscreen;

            const img = new Image();
            img.crossOrigin = 'anonymous';
            img.src = url;
            img.onload = () => {
                offCtx.clearRect(0, 0, offscreen.width, offscreen.height);
                offCtx.beginPath();
                offCtx.arc(20, 20, 20, 0, Math.PI * 2);
                offCtx.closePath();
                offCtx.clip();
                offCtx.drawImage(img, 0, 0, 40, 40);
                imagesLoadedRef.current[idx] = true;
            };

            return offscreen;
        });

        imageCanvasesRef.current = newImageCanvases;
    }, [imageUrls.length]);

    // Calculate positions
    useEffect(() => {
        const count = imageUrls.length;
        if (count === 0) {
            setImagePositions([]);
            return;
        }

        const newPositions = [];
        const offset = 2 / count;
        const increment = Math.PI * (3 - Math.sqrt(5));

        for (let i = 0; i < count; i++) {
            const y = i * offset - 1 + offset / 2;
            const r = Math.sqrt(1 - y * y);
            const phi = i * increment;
            const x = Math.cos(phi) * r;
            const z = Math.sin(phi) * r;

            newPositions.push({
                x: x * 100,
                y: y * 100,
                z: z * 100,
                scale: 1,
                opacity: 1,
                id: i,
            });
        }
        setImagePositions(newPositions);
    }, [imageUrls.length]);

    const handleMouseDown = (e) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        imagePositions.forEach((icon) => {
            const cosX = Math.cos(rotation.x);
            const sinX = Math.sin(rotation.x);
            const cosY = Math.cos(rotation.y);
            const sinY = Math.sin(rotation.y);

            const rotatedX = icon.x * cosY - icon.z * sinY;
            const rotatedZ = icon.x * sinY + icon.z * cosY;
            const rotatedY = icon.y * cosX + rotatedZ * sinX;

            const screenX = canvas.width / 2 + rotatedX;
            const screenY = canvas.height / 2 + rotatedY;

            const scale = (rotatedZ + 200) / 300;
            const radius = 20 * scale;
            const dx = x - screenX;
            const dy = y - screenY;

            if (dx * dx + dy * dy < radius * radius) {
                const targetX = -Math.atan2(icon.y, Math.sqrt(icon.x * icon.x + icon.z * icon.z));
                const targetY = Math.atan2(icon.x, icon.z);
                const distance = Math.sqrt(Math.pow(targetX - rotation.x, 2) + Math.pow(targetY - rotation.y, 2));
                const duration = Math.min(2000, Math.max(800, distance * 1000));

                setTargetRotation({
                    x: targetX,
                    y: targetY,
                    startX: rotation.x,
                    startY: rotation.y,
                    distance,
                    startTime: performance.now(),
                    duration,
                });
                return;
            }
        });

        setIsDragging(true);
        setLastMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseMove = (e) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });

        if (isDragging) {
            const deltaX = e.clientX - lastMousePos.x;
            const deltaY = e.clientY - lastMousePos.y;

            setRotation(prev => ({
                x: prev.x + deltaY * 0.002,
                y: prev.y + deltaX * 0.002
            }));

            setLastMousePos({ x: e.clientX, y: e.clientY });
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    // Animation loop
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;
            const dx = mousePos.x - centerX;
            const dy = mousePos.y - centerY;
            const maxDistance = Math.sqrt(centerX * centerX + centerY * centerY);
            const distance = Math.sqrt(dx * dx + dy * dy);
            const speed = 0.003 + (distance / maxDistance) * 0.01;

            if (targetRotation) {
                const { startX, startY, x: tx, y: ty, startTime, duration } = targetRotation;
                const elapsed = performance.now() - startTime;
                const progress = Math.min(1, elapsed / duration);
                const eased = easeOutCubic(progress);

                setRotation({
                    x: startX + (tx - startX) * eased,
                    y: startY + (ty - startY) * eased
                });

                if (progress >= 1) {
                    setTargetRotation(null);
                }
            } else if (!isDragging) {
                setRotation(prev => ({
                    x: prev.x + (dy / canvas.height) * speed,
                    y: prev.y + (dx / canvas.width) * speed
                }));
            }

            imagePositions.forEach((icon, index) => {
                const cosX = Math.cos(rotation.x);
                const sinX = Math.sin(rotation.x);
                const cosY = Math.cos(rotation.y);
                const sinY = Math.sin(rotation.y);

                const rotatedX = icon.x * cosY - icon.z * sinY;
                const rotatedZ = icon.x * sinY + icon.z * cosY;
                const rotatedY = icon.y * cosX + rotatedZ * sinX;

                const scale = (rotatedZ + 200) / 300;
                const opacity = Math.max(0.2, Math.min(1, (rotatedZ + 150) / 200));

                ctx.save();
                ctx.translate(centerX + rotatedX, centerY + rotatedY);
                ctx.scale(scale, scale);
                ctx.globalAlpha = opacity;

                if (imageCanvasesRef.current[index] && imagesLoadedRef.current[index]) {
                    ctx.drawImage(imageCanvasesRef.current[index], -20, -20, 40, 40);
                }
                ctx.restore();
            });

            animationFrameRef.current = requestAnimationFrame(animate);
        }

        animationFrameRef.current = requestAnimationFrame(animate);

        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [imagePositions, rotation, isDragging, mousePos, targetRotation]);

    return (
        <canvas
            ref={canvasRef}
            width="500"
            height="500"
            className={`rounded-lg ${className || ''}`}
            role="img"
            aria-label="Interactive 3D Icon Cloud"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
        />
    );
};

export default IconCloud;
