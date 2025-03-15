"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import iconImg from "@/assets/android-chrome-512x512.png";

const DEFAULT_TITLE = "science, code, and open source.";
// canvas settings
const MIN_WIDTH = 1920;
const FONT_SIZE = 12;
const CHAR_LIST = ["𝜕", "𝛼", "𝜀", "𝜉", "𝜂", "𝜋", "𝜌", "𝜙", ""];

function draw(
  c: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
  drops: number[],
) {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, c.width, c.height);
  ctx.fillStyle = "#0f0";
  ctx.font = FONT_SIZE + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = CHAR_LIST[Math.floor(Math.random() * CHAR_LIST.length)];
    ctx.fillText(text, i * FONT_SIZE, drops[i] * FONT_SIZE);

    if (drops[i] * FONT_SIZE > c.height && Math.random() > 0.99) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

const Banner: React.FC = () => {
  const ref = useRef<HTMLCanvasElement>(null);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [title, setTitle] = useState(DEFAULT_TITLE);

  useEffect(() => {
    const title = document.title;
    setTitle(title.replace("sciwork - ", ""));
  }, [pathname, isHomePage]);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    const drops: number[] = [];
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    if (!canvas.parentElement) return;

    canvas.height = canvas.parentElement.clientHeight;
    canvas.width =
      window.innerWidth > MIN_WIDTH ? window.innerWidth : MIN_WIDTH;
    for (let i = 0; i < (canvas.width / FONT_SIZE) * 2; i++) {
      drops[i] = 0;
    }

    for (let i = 0; i < Math.floor(canvas.height / FONT_SIZE) * 4; i++) {
      draw(canvas, ctx, drops);
    }

    const interval = setInterval(() => draw(canvas, ctx, drops), 300);

    return () => {
      clearInterval(interval);
    };
  }, [ref]);

  return (
    <div className="container mx-auto max-w-full">
      <div className="relative flex h-full w-full flex-col items-center justify-center text-center">
        {isHomePage ? (
          <>
            <div>
              <Image
                className="mt-24 h-40 w-40"
                src={iconImg}
                alt="sciwork icon"
              />
            </div>
            <p className="py-10 font-yk text-3xl text-white md:text-4xl lg:text-5xl">
              {DEFAULT_TITLE}
            </p>
          </>
        ) : (
          <div className="py-10">
            <h2 className="mx-10 mt-12 rounded-sm border-b-2 border-red-700 text-white">
              {title}
            </h2>
          </div>
        )}
        <canvas
          ref={ref}
          id="cover-bg"
          className="absolute left-0 h-full w-full object-cover"
          style={{ zIndex: -9999 }}
        ></canvas>
      </div>
    </div>
  );
};

export default Banner;
