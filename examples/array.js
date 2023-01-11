const projects = ["Project A", "Project B", "Project C"];

let result = "";

for (let i ; i < projects.length ; i++){
    result += `<div>${projects[i]}</div>`;
    
}
// console.log("result :", result);

// for ... in

// for (let index in projects){
//     result += `<div>${projects[index]}</div>`;
// }
// console.log("result for in :", result);

// for ... of

for (let value of projects){
    result += `${value}`;
}
console.log(result);

// method map

const result2 = projects.map(function(item){
    return `<div>${item}</div>`
})
.join("");

console.log(result2);
