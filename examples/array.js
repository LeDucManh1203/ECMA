const projects = ["Project A", "Project B", "Project C"];

let result0 = "";
let result1 = "";
let result2 = "";
for (let i = 0; i < projects.length; i++) {
    result0 += `${projects[i]} ,`;
    
}
console.log("result: ", result0);


// for ... in

for (let index in projects){
    result1 += `${projects[index]} ,`;
}
console.log("result for in:", result1);

// for ... of

for (let value of projects) {
    result2 += `${value} ,`;
}
console.log("result for of: ", result2);

// method map

const result3 = projects.map(function (item) {
    return `${item} ,`
})
    .join("");

console.log("result method map:",result3);
