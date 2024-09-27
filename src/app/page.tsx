import Links from "./_components/Links";
import Grid from "./_components/Grid";

export default function HomePage() {
  return (
    <main className="relative flex min-h-svh flex-col justify-center gap-12 bg-slate-950 px-4 py-8 text-white md:flex-row md:gap-16 md:px-16 md:py-0">
      <div className="flex items-center justify-center md:grow">
        <div className="flex flex-col justify-center gap-4 text-center md:justify-start md:text-start">
          <div className="text-6xl font-semibold">
            Zac <span className="text-indigo-500">Hamann</span>
          </div>
          <div className="text-sm font-light md:text-xl">
            Self-taught Fullstack Developer with a passion for pushing the
            boundaries of what&apos;s possible and a commitment to making a
            tangible impact.
          </div>
          <Links />
        </div>
      </div>
      <div className="flex items-center justify-center md:shrink-0">
        <Grid />
      </div>
    </main>
  );
}
