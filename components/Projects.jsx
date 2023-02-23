import React from "react";
import boutImg from "../public/assets/projects/boutd.png";
import daftarImg from "../public/assets/projects/pendaftaran-telkom.png";
import tdormImg from "../public/assets/projects/tdorm.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <h2 className="flex py-4 justify-center">My Portofolio</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="boutD"
            backgroundImg={boutImg}
            projectUrl="/boutd"
            tech="Next Js"
          />
          <ProjectItem
            title="web telkom"
            backgroundImg={daftarImg}
            projectUrl="/pendaftaran-telkom"
            tech="Html Css Js"
          />
          <ProjectItem
            title="T-Dorm"
            backgroundImg={tdormImg}
            projectUrl="/tdorm"
            tech="Figma"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
