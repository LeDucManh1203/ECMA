// rest parameter

const add = (x, y, ...numbers) => {
    console.log("x", x);
    console.log("y", x);
    console.log(numbers);
};
add(1, 2, 3, 4, 5);

const showObject = ({a, b, ...other}) => {
    console.log("a ",a);
    console.log("b ",b);
    console.log("other ",other);
}
showObject({a: 1, b: 2, c: 3, d: 4});