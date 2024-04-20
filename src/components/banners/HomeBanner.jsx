import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useSelector } from "react-redux";

gsap.registerPlugin(ScrollTrigger);

function HomeBanner() {
    const containerRef = useRef(null);
    const { device_details } = useSelector((state) => state.page_details);

    useEffect(() => {
        const container = containerRef.current;
        const elements = container.querySelectorAll('.animate-me');

        gsap.fromTo(
            elements,
            { opacity: 0, y: 100, fontSize: device_details.isMobile ? '5rem':'10rem' },
            {
                opacity: 1,
                y: 0,
                fontSize: (index, target) => {
                    const fontSizeMap = {
                        h1: device_details.isMobile?'1rem':'2rem',
                        p: device_details.isMobile?'0.5rem':'1rem',
                    };
                    const tagName = target.tagName.toLowerCase();
                    return fontSizeMap[tagName];
                },
                duration: 1,
                scrollTrigger: {
                    trigger: elements,
                    start: 'top 80%',
                    end: 'top 20%',
                    scrub: true,
                },
            }
        );
    }, []);

    return (
        <div ref={containerRef} className="container mx-auto p-4 md:p-0 mt-24 bg-cover bg-center rounded-xl flex flex-col justify-center items-center bgcustome">
            <h1 className='text-3xl md:text-5xl animate-me'>Welcome to this website</h1>
            <p className='text-lg md:text-xl mt-3 animate-me'>Lorem ipsum</p>
        </div>
    )
}

export default HomeBanner;
