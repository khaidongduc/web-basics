// async functions always return a promise
// if the function returns value, the promises 
// will be resolved with that value
// if the function throw an exception, the promise will be rejected

async function hello() {
    return "Hello";
}
const sing = async () => {
    return "LA LA LA LA";
}

const bark = async function () {
    throw new Error("bark");
}

sing()
    .then((data) => {
        console.log("resolved 1");
        console.log(data);
        return hello();
    })
    .then((data) => {
        console.log("resolved 2");
        console.log(data);
        return bark();
    })
    .then((data) => {
        console.log("resolved 3");
    })
    .catch((err) => {
        console.log("Timeout");
        console.log(err);
    })