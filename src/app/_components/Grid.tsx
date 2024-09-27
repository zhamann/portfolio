import GridItem from "./GridItem";

export default function Grid() {
  return (
    <div className="grid grid-cols-12 gap-x-4 gap-y-2">
      {technologies.map((item, index) => {
        const positionInRow = (index + 1) % 5;

        let className = "";
        if (positionInRow <= 3) {
          className = "col-span-4";
        } else if (positionInRow == 4) {
          className = "col-span-4 col-start-3";
        } else if (positionInRow == 5) {
          className = "col-span-4";
        }

        return (
          <GridItem
            key={index}
            title={item.title}
            src={item.src}
            className={className}
          />
        );
      })}
    </div>
  );
}

const technologies = [
  { title: "Next.js", src: "/icons/nextjs.svg" },
  { title: "React.js", src: "/icons/reactjs.svg" },
  { title: "Python", src: "/icons/python.svg" },
  { title: "Flask", src: "/icons/flask.svg" },
  { title: "HTML", src: "/icons/html.svg" },
  { title: "CSS", src: "/icons/css.svg" },
  { title: "Javascript", src: "/icons/javascript.svg" },
  { title: "Tailwind CSS", src: "/icons/tailwind.svg" },
  { title: "Git", src: "/icons/git.svg" },
  { title: "SQL", src: "/icons/sql.svg" },
];
