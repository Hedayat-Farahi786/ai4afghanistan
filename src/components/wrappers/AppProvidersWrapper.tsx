'use client';
import Aos from 'aos';
import {ReactNode, useEffect, useState} from 'react';
import Loader from '../Loader';
import ScrollToTop from '../ScrollToTop';


const AppProvidersWrapper = ({children}: { children: ReactNode }) => {
    const [loading, setLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        Aos.init();
        
        const timer = setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => setLoading(false), 300);
        }, 800);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div style={{
                opacity: fadeOut ? 0 : 1,
                transition: 'opacity 0.3s ease-out'
            }}>
                <Loader />
            </div>
        );
    }

    return (
        <>
            {children}
            <ScrollToTop />
        </>
    )
};

export default AppProvidersWrapper;
