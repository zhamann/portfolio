"use client";

import { FiGithub, FiLinkedin, FiFileText } from "react-icons/fi";

export default function Links() {
  // function handleDownload(src: string) {
  //   console.log(`Download functionality coming soon... (${src})`);
  // }

  return (
    <div className="flex items-center justify-center gap-2 md:justify-start">
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.href}
          className="rounded-full bg-white p-2 text-slate-950 transition-all duration-300 ease-in-out hover:z-10 hover:scale-110"
        >
          {social.icon}
        </a>
      ))}
      {/* {downloads.map((download, index) => (
        <button
          key={index}
          onClick={() => handleDownload(download.src)}
          className="rounded-full bg-white p-2 text-slate-950 transition-all duration-300 ease-in-out hover:z-10 hover:scale-110"
        >
          {download.icon}
        </button>
      ))} */}
    </div>
  );
}

const socials = [
  { icon: <FiGithub size={20} />, href: "https://github.com/zhamann" },
  {
    icon: <FiLinkedin size={20} />,
    href: "https://www.linkedin.com/in/zhamann",
  },
];
const downloads = [{ icon: <FiFileText size={20} />, src: "/resume.pdf" }];
