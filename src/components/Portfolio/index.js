import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'Unearthly Venues',
      description: 'Project',
      link: "https://safe-garden-63694.herokuapp.com/",
      repo: "https://github.com/graybishop/the-web-spinners"
    },
    {
      name: 'Budget-Tracker',
      description: 'MERN Stack',
      link: "https://floating-fjord-19190.herokuapp.com/",
      repo: "https://github.com/sgfiles/Budget-Tracker"
    },
    {
      name: 'Easy_Stack',
      description: 'HTML/CSS/JavaScript/Api',
      link: "https://modesttom.github.io/user-friendly-stack/",
      repo: "https://github.com/ModestTom/user-friendly-stack"
    },
    {
      name: 'Code Quiz',
      description: 'JavaScript/CSS/HTML',
      link: "https://sgfiles.github.io/Code-Quiz/",
      repo: "https://github.com/sgfiles/Code-Quiz"
    },
    {
      name: 'Note-Taker',
      description: 'React/JavaScript/CSS',
      link: "https://sheralyns-note-taker.herokuapp.com/",
      repo: "https://github.com/sgfiles/Note-Taker"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;