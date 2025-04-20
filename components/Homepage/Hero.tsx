'use client';

import { clsx } from 'clsx';
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

type Props = {
    className?: string;
};

const HomepageHero: React.FC = ({ className }: Props) => {

    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // GSAP animation for SVG
        const wordList = document.querySelector('[data-looping-words-list]');
        const words = Array.from(wordList.children);
        const totalWords = words.length;
        const wordHeight = 100 / totalWords; // Offset as a percentage
        const edgeElement = document.querySelector('[data-looping-words-selector]');
        let currentIndex = 0;

        const updateEdgeWidth = () => {
            const centerIndex = (currentIndex + 1) % totalWords;
            const centerWord = words[centerIndex];
            const centerWordWidth = centerWord.getBoundingClientRect().width;
            const listWidth = wordList.getBoundingClientRect().width;
            const percentageWidth = (centerWordWidth / listWidth) * 100;
            gsap.to(edgeElement, {
                width: `${percentageWidth}%`,
                duration: 0.5,
                ease: 'Expo.easeOut',
            });
        }
        const moveWords = () => {
            currentIndex++;
            gsap.to(wordList, {
                yPercent: -wordHeight * currentIndex,
                duration: 1.2,
                ease: 'elastic.out(1, 0.85)',
                onStart: updateEdgeWidth,
                onComplete: function () {
                    if (currentIndex >= totalWords - 3) {
                        wordList.appendChild(wordList.children[0]);
                        currentIndex--;
                        gsap.set(wordList, { yPercent: -wordHeight * currentIndex });
                        words.push(words.shift());
                    }
                }
            });
        }

        updateEdgeWidth();
        gsap.timeline({ repeat: -1, delay: 1 })
            .call(moveWords)
            .to({}, { duration: 2 })
            .repeat(-1);

    }, { scope: container });

    return (
        <div ref={container} className={clsx("relative flex items-center justify-center ", className)}>
            <div className="absolute inset-0 w-full h-screen bg-cover bg-center bg-no-repeat bg-black opacity-90" />
            <div className="relative z-10 flex items-center justify-center w-full h-full text-white">
                <section className="cloneable">
                    <div className="looping-words">
                        <div className="looping-words__containers">
                            <ul data-looping-words-list="" className="looping-words__list">
                                <li className="looping-words__list">
                                    <p className="looping-words__p">science</p>
                                </li>
                                <li className="looping-words__list">
                                    <p className="looping-words__p">code</p>
                                </li>
                                <li className="looping-words__list">
                                    <p className="looping-words__p">open source</p>
                                </li>
                                <li className="looping-words__list">
                                    <p className="looping-words__p flex items-center"><Image
                                        src={iconImg} alt='sciwork logo' className='w-[8vw] h-[8vw]' />sciwork</p>
                                </li>
                            </ul>
                        </div>
                        <div className="looping-words__fade"></div>
                        <div data-looping-words-selector="" className="looping-words__selector">
                            <div className="looping-words__edge"></div>
                            <div className="looping-words__edge is--2"></div>
                            <div className="looping-words__edge is--3"></div>
                            <div className="looping-words__edge is--4"></div>
                        </div>
                    </div>
                </section>
            </div>
            {/* 新增 scroll down for more info 的動畫 */}
            <div className="absolute bottom-10 w-full text-center">
                <p className="text-white text-lg">Scroll down for more info</p>
                <div className="mt-2 animate-bounce">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="white" className="w-6 h-6 mx-auto">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default HomepageHero;