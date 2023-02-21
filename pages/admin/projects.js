// import { projects } from "../../data";
import { useState, useEffect } from "../../lib";
import ProjectGallery from "../../component/ProjectGallery";
const AdminProjectsPage = () => {
    // Bước 1: Khởi tạo biến data và hàm setData, giá trị là 1 mảng rỗng
    const [projects, setProjects] = useState([]);

    // Bước 3: Lấy dữ liệu từ localStorage và gán vào biến data
    useEffect(() => {
        fetch("http://localhost:3000/projects")
            .then((response) => response.json())
            .then(( data ) => setProjects(data));
    }, []);
    // chức năng xóa

    useEffect(() => {
        const btns = document.querySelectorAll(".btn-remove");
        for (let btn of btns) {
            // Viết sự kiện cho từng button remove
            btn.addEventListener("click", function () {
                // Lấy id từ data-id của button
                const id = btn.dataset.id;
                // Lọc ra các phần tử có id khác với id của button
                //=> chức năng xóa
                fetch(`http://localhost:3000/projects/${id}`, {
                    method: "DELETE",
                }).then(() => {
                    // lọc ra các phần tử có id khác với id của button 
                    const newProjects = projects.filter((project) => project.id != id);
                    // sau đó gán lại cho biến data
                    setProjects(newProjects);
                })
            });
        }
    });
    // Bước 2: Hiển thị ra ngoài màn hình
    return `<div class="container pt-5">
                <h1>Quản lý dự án</h1>
                <button class="btn btn-success m-2 "><a class="link-warning text-decoration-none" href="/admin/projects/add">Thêm</a></button>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên dự án</th>
                            <th>Ảnh</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        ${projects
            .map(function (project, index) {
                return `
                                <tr>
                                    <td>${index + 1}</td>
                                    <td>${project.name}</td>
                                    <td>
                                        <button data-id="${project.id}" class="btn btn-danger btn-remove">
                                            Xóa
                                        </button>
                                        <a class="btn btn-info" href="/admin/projects/${project.id}/edit">Sửa</a>
                                    </td>
                                </tr>
                            `;
            })
            .join("")}
                        
                    </tbody>
                </table>
    </div>`;
};

export default AdminProjectsPage;
