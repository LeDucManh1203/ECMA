import "bootstrap/dist/css/bootstrap.min.css";
import { render, router } from "./lib";
import AboutPage from "./pages/about";

// phần admin
import AdminProjectsPage from "./pages/admin/projects";
import AdminAddProjectsPage from "./pages/admin/projects-add";
import AdminEditProjectPage from "./pages/admin/projects-edit";
//

import ContactPage from "./pages/contact";
import DetailProjectPage from "./pages/detail-project";
import HomePage from "./pages/home";
import NotFound from "./pages/not-found";
import PostsPage from "./pages/posts";
import ProjectsPage from "./pages/project";


const app = document.querySelector("#app");


router.on("/", () => render(HomePage, app));
router.on("/about", () => render(AboutPage, app));
router.on("/contact", () => render(ContactPage, app));
router.on("/projects", () => render(ProjectsPage, app));
router.on("/project/:id", (params) => render(() => DetailProjectPage(params), app));
router.on("/posts", () => render(PostsPage, app));
router.notFound(() => render(NotFound, app));

// admin page
router.on("/admin/projects", () => render(AdminProjectsPage, app));
router.on("/admin/projects/add", () => render(AdminAddProjectsPage, app));
router.on("/admin/projects/:id/edit", ({ data }) => render(() => AdminEditProjectPage(data), app));
router.resolve();