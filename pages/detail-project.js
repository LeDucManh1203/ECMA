import Header from "../component/Header";
import { projects } from "../data";
import {router} from "../lib";
const DetailProjectPage = ({data: {id}}) => {
    const currentProject = projects.find((project) => project.id == id);
    if (!currentProject) return router.navigate("/projects");
    // - cai nay de check neu k tim thay fage
    return `
    ${Header()}  
    <h1> ${currentProject.name} </h1>`;
};
export default DetailProjectPage;