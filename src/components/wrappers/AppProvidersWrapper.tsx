'use client';
import Aos from 'aos';
import {ReactNode, useEffect} from 'react';
import ScrollToTop from '../ScrollToTop';


const AppProvidersWrapper = ({children}: { children: ReactNode }) => {
    useEffect(() => {
        // Initialize AOS after component mounts (non-blocking)
        const initAos = () => {
            Aos.init({
                once: true, // Animations happen only once
                duration: 800,
                easing: 'ease-in-out',
            });
        };

        // Defer AOS initialization to not block rendering
        if (typeof window !== 'undefined') {
            if (document.readyState === 'complete') {
                initAos();
            } else {
                window.addEventListener('load', initAos);
                return () => window.removeEventListener('load', initAos);
            }
        }
    }, []);

    return (
        <>
            {children}
            <ScrollToTop />
        </>
    )
};

export default AppProvidersWrapper;
