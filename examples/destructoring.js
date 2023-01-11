// object = {key : value}
const person = {
    name: "John",
    age: 30,
    isMarried: true,
    address: {
        street: "Main Street",
    },
}

// const myName = person.name;
// const myAge = person.age;
// const myAddress = person.address;

function showInfo({ name, age, isMarried, address: { street } }){
    console.log("Name " + name + ", " + "Age " + age + ", " + "Married " + isMarried + ", " + "Street " + street);
}
showInfo(person);
// destructuring assignment

function useState(initialState){
    let state = initialState;
    function getState(){
        return state;
    }
    function setState(newState){
        state = newState;
    }
    return [getState, setState];

}
// Giá trị khởi tạo của count là 10
// Setcount có nhiệm vụ thay đổi giá trị của count
const [count, setCount] = useState(20);
console.log("giá trị cũ ", count());
console.log("giá trị mới ", count());