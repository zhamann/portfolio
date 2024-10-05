import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const mdBreakpoint = 768;

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        const isBelowMd = window.innerWidth < mdBreakpoint;

        // use containerCenter if below 'md', otherwise use containerStart
        const containerPosition = isBelowMd
          ? container.scrollLeft + container.offsetWidth / 2
          : container.scrollLeft;

        const closestCard = Array.from(container.children).reduce(
          (closest, card, index) => {
            const cardElement = card as HTMLElement;
            const cardCenter = cardElement.offsetLeft;
            const distance = Math.abs(containerPosition - cardCenter);

            if (distance < closest.distance) {
              return { index, distance };
            }

            return closest;
          },
          { index: 0, distance: Infinity },
        );

        setActiveIndex(closestCard.index);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex shrink-0 items-stretch gap-4 overflow-x-auto py-6 pe-8 ps-[50vw] md:gap-8 md:pe-16 md:ps-16"
    >
      {projects.map((project, index) => (
        <a
          key={index}
          href={project.href}
          className={`flex -translate-x-1/2 flex-col rounded-lg border transition-transform duration-300 ease-in-out md:translate-x-0 ${
            index === activeIndex
              ? "z-10 scale-105 border-indigo-500"
              : "border-slate-800"
          }`}
        >
          <div className="flex items-center justify-center overflow-hidden rounded-t-xl">
            <div className="relative h-44 w-80 md:h-52 md:w-96">
              <Image
                src={project.src}
                alt="Logo"
                fill
                style={{ objectFit: "fill" }}
                sizes="24rem"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1 p-4">
            <div className="text-base font-semibold md:text-lg">
              {project.title}
            </div>
            <div className="text-sm font-light md:text-base">
              {project.desc}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

const projects = [
  {
    title: "TDEE Calculator",
    desc: "This Next.js project provides a simple way to calculate basal metabolic rate (BMR) and total daily energy expenditure (TDEE).",
    href: "https://tdee-calc.vercel.app",
    src: "/projects/tdee.png",
  },
  {
    title: "Coming soon.",
    desc: "This is the project description",
    href: "https://github.com/zhamann",
    src: "/icons/nextjs.svg",
  },
  {
    title: "Coming soon.",
    desc: "This is the project description",
    href: "https://github.com/zhamann",
    src: "/icons/nextjs.svg",
  },
  {
    title: "Coming soon.",
    desc: "This is the project description",
    href: "https://github.com/zhamann",
    src: "/icons/nextjs.svg",
  },
  {
    title: "Coming soon.",
    desc: "This is the project description",
    href: "https://github.com/zhamann",
    src: "/icons/nextjs.svg",
  },
  {
    title: "Coming soon.",
    desc: "This is the project description",
    href: "https://github.com/zhamann",
    src: "/icons/nextjs.svg",
  },
  {
    title: "Coming soon.",
    desc: "This is the project description",
    href: "https://github.com/zhamann",
    src: "/icons/nextjs.svg",
  },
];
