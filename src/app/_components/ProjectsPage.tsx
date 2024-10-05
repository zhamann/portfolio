import Projects from "./Projects";

export default function ProjectsPage() {
  return (
    <main className="relative flex h-svh flex-col justify-center gap-4 bg-slate-950 py-8 text-white md:py-0">
      <div className="px-4 text-center md:px-16 md:text-start">
        <div className="text-6xl font-semibold">
          My <span className="text-indigo-500">Projects</span>
        </div>
      </div>
      <Projects />
    </main>
  );
}
