import Header from "../component/Header"; 
import ProjectList from "../component/ProjectList";
const ProjectsPage = () => {
    return `
    ${Header()}
   
    <div class = "project">
   ${ProjectList()}
    </div>

    `;
};
export default ProjectsPage;
