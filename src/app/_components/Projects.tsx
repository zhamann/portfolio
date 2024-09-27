import Image from "next/image";

export default function Projects() {
  return (
    <div className="flex shrink-0 items-center gap-4 overflow-x-auto pb-4 md:gap-8">
      {projects.map((project, index) => (
        <a
          key={index}
          href={project.href}
          className="flex flex-col gap-4 rounded-lg bg-slate-900 px-4 py-8"
        >
          <div className="flex items-center justify-center px-12">
            <div className="relative h-32 w-32">
              <Image
                src={project.src}
                alt="Logo"
                fill
                style={{ objectFit: "fill" }}
                sizes="2.5rem"
              />
            </div>
          </div>
          <div>
            <div className="font-semibold">{project.title}</div>
            <div className="font-light">{project.desc}</div>
          </div>
        </a>
      ))}
    </div>
  );
}

const projects = [
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
  {
    title: "Coming soon.",
    desc: "This is the project description",
    href: "https://github.com/zhamann",
    src: "/icons/nextjs.svg",
  },
];
