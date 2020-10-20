/// spread's syntax is ...
// it spread iterable element into separate element
{
    let arr = [1, 2, 3];
    console.log(arr); // [1, 2, 3]
    console.log(...arr); // 1 2 3
}

{
    let str = "Hello ";
    console.log(str); // Hello
    console.log(...str);  // H e l l o
}

// we can use spread to make a copy or merge array
{
    let arr1 = [1, 2, 3, 4];
    let arr2 = [...arr1];
    let mergeArr = [...arr1, ...arr2];

    console.log(arr1 === arr2);
    console.log(mergeArr);
}

// spread on objects
{
    let obj = {
        firstName: "Khai",
        lastName: "Dong"
    };

    console.log({...obj}); // copy the object
    let newObj = {...obj, middleName: "Duc"}; // copy and add onto the new object
    console.log(newObj);

}

{   
    // in combining object, if there are identical keys
    // the one go after in creation will override the before
    let obj1 = {
        firstName: "Khai",
        lastName: "Dong"
    };

    let obj2 = {
        lastName: "Ray"
    };
    let newObj = {...obj1, ...obj2};
    console.log(newObj);
}

{
    // we can pass unlimited number of params to function using spread
    // it will collect all elements and put them into an array 
    let sum = (...args)=>{
        return args.reduce((total, num) => total + num);
    }
    console.log(sum(5, 8, 9, 10));
}