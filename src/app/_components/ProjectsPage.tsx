import Projects from "./Projects";

export default function ProjectsPage() {
  return (
    <main className="relative flex h-svh flex-col justify-center gap-8 bg-slate-950 px-4 py-8 text-white md:gap-12 md:px-16 md:py-0">
      <div className="text-center md:text-start">
        <div className="text-6xl font-semibold">
          My <span className="text-indigo-500">Projects</span>
        </div>
      </div>
      <Projects />
    </main>
  );
}
