import { projects } from "../data";

const ProjectList = () => {
    return `<div class = "project">
${projects
            .map((projects) => {
                return `<div class="project-item">
    <a href = "/project/${projects.id}">List nhes ${projects.name}</a></div>`;
            })
            .join("")}
</div>`;
};
export default ProjectList;