import { projects } from "../data";

const ProjectList = () => {
    return `<div class = "project">
${projects
            .map((projects) => {
                return `<div class="project-item">
    <a href = "/project/${projects.id}">${projects.name}</a></div>`;
            })
            .join("")}
</div>`;
};
export default ProjectList;