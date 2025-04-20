'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import MotionPathPlugin from 'gsap/MotionPathPlugin';
import ScrollTrigger from 'gsap/ScrollTrigger';

import "./Hero.css"; // Import your CSS file for styles

import Image from "next/image";
import iconImg from "@/assets/android-chrome-512x512.png";

gsap.registerPlugin(useGSAP, MotionPathPlugin, ScrollTrigger); // register the MotionPathPlugin

// ------- Kudos to Osmo [https://osmo.supply/] ------- //

const HomepageDescription: React.FC = () => {

    const container = useRef<HTMLDivElement>(null);

    return (
        <div ref={container} className="relative flex-col items-center justify-center w-full h-screen bg-cover bg-center bg-no-repeat bg-black opacity-70">
            <div className="font-bold text-lg text-center text-white">About sciwork</div>

            <p className="text-center text-white">
                sciwork is a community for researchers and engineers to share and
                discuss computer code for scientific, numerical, and engineering work.
                We believe in the power of openness, and use open source as a means to
                advance software development for computational sciences.

                As information technology blending in every aspect of human activities,
                proficient use of programming languages is a prerequisite for conducting
                most research and engineering work. As the practitioners observed, the
                work evolved into a hierarchy of skills that take years to acquire. We
                need a thorough understanding of the problem to solve as well as the
                mastery of computer programming to deliver reliable solution. It is
                overly challenging since either of both is already complicated. Sciwork
                would like to get involved in the global effort to solve the issue of
                code development entangling with science and engineering.

                Our activities include but are not limited to [coding sprints](sprint),
                hands-on tutorials, and technical talks and
                [conferences](https://conf.sciwork.dev/) (ex, sciwork 2023), on-line or
                off-line. You are welcome to [join us](about.html)!
            </p>
        </div>
    );
}

export default HomepageDescription;