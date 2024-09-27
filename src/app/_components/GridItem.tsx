import Image from "next/image";

interface GridItemProps {
  title: string;
  src: string;
  className: string;
}

export default function GridItem({ title, src, className }: GridItemProps) {
  return (
    <div
      className={`flex items-center justify-center gap-2 rounded-lg bg-slate-900 p-2 shadow transition-all duration-300 ease-in-out hover:z-10 hover:scale-110 md:gap-4 ${className}`}
    >
      <div className="flex items-center justify-center">
        <div className="relative h-7 w-7 md:h-10 md:w-10">
          <Image
            src={src}
            alt="Logo"
            fill
            style={{ objectFit: "fill" }}
            sizes="2.5rem"
          />
        </div>
      </div>
      <div className="text-xs font-semibold md:text-base">{title}</div>
    </div>
  );
}
