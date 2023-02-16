
import { useEffect, router } from "../../lib";
// import { projects } from "../../data";

const AdminAddProjectPage = () => {
   
    // const projects = JSON.parse(localStorage.getItem("projects")) || [];
    useEffect(() => {
        const form = document.getElementById("form-add");
        const projectName = document.getElementById("project-name");

        form.addEventListener("submit", function (e) {
            // Chặn sự kiện reload sau khi submit
            e.preventDefault();
            // thêm phần tử vào mảng projects
            const formData ={
                name: projectName.value
            }
            // projects.push(formData);
            fetch("http://localhost:3000/projects",{
                method: "POST",
                headers:{
                    "content-type": "application/json"
                },
                body: JSON.stringify(formData),
            }).then(()=>   router.navigate("/admin/projects"));

            // chuyển hướng về trang admin/projects
          
        });
    });
    return `<div class="container">
            <h1>Thêm sản phẩm</h1>
                <form action="" id="form-add">
                    <div class="form-group">
                        <label for="" class="form-label">Tên dự án</label>
                        <input type="text" class="form-control" id="project-name" />
                    </div>
                    <button class="btn btn-primary m-2">Thêm</button>
                </form>
    </div>`;
};

export default AdminAddProjectPage;
