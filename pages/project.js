import Header from "../component/Header";

import { projects } from "../data";
const ProjectsPage = () => {
    return `
    ${Header()}
    <h1>Project Page</h1>
    <div class = "project">
    ${projects
            .map((projects) => {
                return `<div class="project-item">
        <a href = "/project/${projects.id}">${projects.name}</a></div>`;
            })
            .join("")}
    </div>

    `;
};
export default ProjectsPage;
