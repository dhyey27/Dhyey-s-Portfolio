import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import navbar from "../assets/portfolio/navbar.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
      title: "Array Destruct",
      link: "https://github.com/dhyey27/Snapiify",
    },
    {
      id: 2,
      src: reactParallax,
      title: "React Parallax",
      link: "https://github.com/dhyey27/SAID",
    },
    {
      id: 3,
      src: navbar,
      title: "Navbar",
      link: "https://github.com/dhyey27/Nifty-50-Price-Predictor",
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, title, link }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              {/* Wrap each image in an anchor tag */}
              <a href={link} target="_blank" rel="noopener noreferrer">
                <img
                  src={src}
                  alt={title}
                  className="rounded-md duration-200 hover:scale-105"
                />
              </a>
              <div className="flex items-center justify-center">
                {/* Additional content if needed */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
