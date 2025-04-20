'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import MotionPathPlugin from 'gsap/MotionPathPlugin';
import ScrollTrigger from 'gsap/ScrollTrigger';

import "./Hero.css"; // Import your CSS file for styles

gsap.registerPlugin(useGSAP, MotionPathPlugin, ScrollTrigger); // register the MotionPathPlugin

// ------- Kudos to Osmo [https://osmo.supply/] ------- //

const HomepageDescription: React.FC = () => {

    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // --- ORANGE PANEL ---
        gsap.from(".line-2", {
            scrollTrigger: {
                trigger: ".orange",
                scrub: true,
                pin: true,
                start: "top top",
                end: "+=100%"
            },
            scaleX: 0,
            transformOrigin: "left center",
            ease: "none"
        });
    }, { scope: container });

    return (
        <div ref={container} className="relative flex items-center justify-center w-full h-screen bg-cover bg-center bg-no-repeat bg-black opacity-70">
            <section className="cloneable panel orange">
                <span className="line line-2"></span>
                <p>This orange panel gets pinned when its top edge hits the top of the viewport, then the line animation is linked with the scroll position until it has traveled 100% of the viewport height, then the orange panel is unpinned and normal scrolling resumes. Padding is added automatically to push the rest of the content down so that it catches up with the scroll when it unpins. You can set <code>pinSpacing: false</code> to prevent that if you prefer.</p>
            </section>
        </div>
    );
}

export default HomepageDescription;