import React, { useEffect, useState } from 'react';
import ParticlesBg from '../ParticlesBg/ParticlesBg';

const HomeBackground = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const checkDarkMode = () => {
            const isDarkClass = document.documentElement.classList.contains('dark');
            const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setIsDarkMode(isDarkClass || isSystemDark);
        };

        checkDarkMode();

        const observer = new MutationObserver(checkDarkMode);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleMediaChange = (e) => {
            if (!document.documentElement.classList.contains('dark') && !document.documentElement.classList.contains('light')) {
                setIsDarkMode(e.matches);
            }
        };
        mediaQuery.addEventListener('change', handleMediaChange);

        return () => {
            observer.disconnect();
            mediaQuery.removeEventListener('change', handleMediaChange);
        };
    }, []);

    const particlesColor = isDarkMode ? "#FFFFFF" : "#000000";

    return (
        <div className="home-bg flex h-full w-full flex-col items-center justify-center overflow-hidden bg-white dark:bg-black absolute inset-0 -z-10">
            <div className="relative h-40 w-[40rem]">
                <div className="absolute inset-x-20 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm" />
                <div className="absolute inset-x-20 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
                <div className="absolute inset-x-60 top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm" />
                <div className="absolute inset-x-60 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent" />

                <ParticlesBg
                    color={particlesColor}
                    quantity={100}
                    staticity={50}
                    ease={50}
                    className="size-full"
                />

                <div className="absolute inset-0 size-full bg-white [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)] dark:bg-black" />
            </div>
        </div>
    );
};

export default HomeBackground;
