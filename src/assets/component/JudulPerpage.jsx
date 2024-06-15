import React from "react";

const pageData = [
  { mainTitle: "ABOUT ME", shadowTitle: "About Me" },
  { mainTitle: "TECH STACK & TOOLS", shadowTitle: "Tech Stack & Tools" },
  { mainTitle: "PROJECTS", shadowTitle: "Projects" },
  { mainTitle: "EXPERIENCE", shadowTitle: "Experience" },
  { mainTitle: "BLOGS", shadowTitle: "Blogs" },
];

const JudulPerpage = () => {
  return (
    <div>
      {pageData.map((item, index) => (
        <div key={index} className="text-center relative mt-10">
          <h2
            className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-blue-200 to-white"
            style={{
              textShadow: "2px 2px 4px rgba(158, 158, 158, 0.5)",
              transform: "skew(10deg)",
              fontFamily: "'Bungee Outline', sans-serif",
            }}
          >
            ~ {item.mainTitle} ~
          </h2>
          <h2 className="text-3xl font-bold relative -top-8">{item.shadowTitle}</h2>
        </div>
      ))}
    </div>
  );
};

export default JudulPerpage;
