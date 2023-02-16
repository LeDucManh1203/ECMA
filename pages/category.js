import Header from "../component/Header";

import { useEffect, useState } from "../lib"

const CategoryPage = () => {
    const [category, setCategory] = useState([]);
    useEffect (()=>{
        fetch(`http://localhost:3000/categoryProjects`)
        .then((rest) => rest.json())
        .then((data) => setCategory(data));
    },[]);
    return `
    ${Header()}
    <h1>Project Page</h1>
    <div class="projects">
    <aside>Lọc theo</aside>
    ${category.map(
        (item)=>`
        <a href="/category/${item.id}">${item.name}</a>
        `)}
    </div>
    `;
};


export default CategoryPage;