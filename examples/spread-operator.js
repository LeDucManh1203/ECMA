const person = {
    name: "john",
    age: 30,
    child: {
        name: "Kiên",
    },
};

// Shalldow coppy -> coppy nông
// == sử dụng pread operator để coppy object
const person2 = {
    ...person,
    address: "Main Street",
};
console.log (person2);
// == sử dụng Object.assign để coppy object
const person3 = Object.assign({address: "Main Street"}, person);
console.log (person3);

// deep coppy -> coppy sâu
const person4 = JSON.parse(JSON.stringify(person));
const person5 = structuredClone(person);

// Sử dụng deep coppy để thay đổi giá trị B
person5.child.name = "Mạnh";
console.log("person 1: " ,person);
console.log("person 2: ", person5);

// == Sử dụng spread-operator coppy phần tử mảng
const products = ["Product A", "Product B"];
// products.push("product C");
const newProducts = [...products, "Product C"];
console.log("products: ",products);
console.log("newproducts: ",newProducts);

/*lưu ý: muốn đổi tham chiếu thì phải deep,
tham trị là 1 ô nhớ
tham chiếu là vị trí bên trong ô nhớ đó
không nên dùng push
*/ 


