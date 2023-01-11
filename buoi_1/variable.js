/* 
1. Khai báo biến với var, let và const
2. Cách tên biến: danh từ và bắt buộc là tiếng anh
*/

var a = 1;
var a = 2;

let b = 1;
b = 2;

const c = 1; // number, string, boolean -> tham trị
const handsome = true;
const productItem = {id: 1, name: "Product A"};

const isMarried = true;
const isLogged = true;

const productList = ["Product A", "Product B"];
const productListEL = document.querySelector("#productList");

let result = "";
for (let i = 0; i < productList.length; i++){
    result += "<div>"+ productList[i] +"</div>";
}
productListEL.innerHTML = result;