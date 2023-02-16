import { useEffect, router, useState } from "../../lib";
// import { projects } from "../../data";

const AdminEditProjectPage = ({ id }) => {

    const [project, setProjects] = useState({});
    // tìm project theo id
    // const currentProject = projects.find((project) => project.id == id);

    useEffect(() => {
        fetch(`http://localhost:3000/projects/${id}`)
        .then((res) => res.json())
        .then((data) => setProjects(data));
    },[]);

    useEffect(() => {
        const form = document.getElementById("form-add");
        const projectName = document.getElementById("project-name");
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            // tạo project mới
            const formData = {
                // id: currentProject.id,
                name: projectName.value,
            };
            fetch(`http://localhost:3000/projects/${id}`,{
                method: "PUT",
                headers:{
                    "content-type":"application/json",
                },
                body: JSON.stringify(formData),
            }).then(()=> router.navigate("/admin/projects"));
            });

        });
    return `<div class="container">
            <h1>Thêm sản phẩm</h1>
                <form action="" id="form-add">
                    <div class="form-group">
                        <label for="" class="form-label">Tên dự án</label>
                        <input type="text" class="form-control" id="project-name" value="${project.name}" />
                    </div>
                    <button class="btn btn-primary">Cập nhật</button>
                </form>
    </div>`;
};

export default AdminEditProjectPage;
