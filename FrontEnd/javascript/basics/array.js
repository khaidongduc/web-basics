
{
    let arr = [300, 4, 5, 6];
    arr.push(8); // add to the end
    arr.pop(); // remove from the end

    arr.unshift(8) // add to start
    arr.shift() // remove from start
}

{
    let arr = [300, 4, 5, 6];
    arr.splice(0, 1) // method adds/removes items to/from an array, and returns the removed item(s).
    // array.splice(index, howmany, item1, ....., itemX)
    // index - Required. An integer that specifies at what position to add/remove items, 
    // Use negative values to specify the position from the end of the array
    // howmany - Optional. The number of items to be removed. If set to 0, no items will be removed
    // item1, ..., itemX - Optional. The new item(s) to be added to the array
}

{
    let arr = [300, 4, 5, 6];
    newArr = arr.concat([2, 3]); // merge arrays
    console.log(newArr); // 300 4 5 6 2 3
}

{
    let arr = [300, 4, 5, 6];
    // includes return true if the given value is in the array
    console.log(arr.includes(500)); // false
    console.log(arr.includes(300)); // true
    // we can specify where to start looking
    console.log(arr.includes(300, 1)); // false
}

{
    let arr = [300, 4, 5, 6];
    // indexOf return the index of the value
    // return -1 if it's not inside the array
    console.log(arr.indexOf(300));
    console.log(arr.indexOf(500));
}

{
    let arr = [300, 4, 5, 6];
    // join return a string from the arr
    console.log(arr.join()); // 300,4,5,6
}

{
    let arr = [300, 4, 5, 6];
    // reverse reverse the array
    console.log(arr.reverse());
}

{
    let arr = [300, 4, 5, 6];
    // sort array, values in considered string in sorting
    // therefore, it will yield wrong answer on numbers
    arr.sort();
    console.log(arr);
    // to sort on number, we pass in a function that will defines an alternative sort order. 
    // The function should return a negative, zero, or positive value, depending on the arguments, like:
    // function(a, b){return a-b}
    // When the sort() method compares two values, 
    // it sends the values to the compare function, 
    // and sorts the values according to the returned (negative, zero, positive) value.
    arr.sort(function(a, b){
        return a - b;
    });
    console.log(arr); // 4 5 6 300
}

{
    let arr = [300, 4, 5, 6];
    // forEach - run a function once per item in an array
    arr.forEach(function(item, index){
        console.log(index, item);
    });
}

{
    let arr = [300, 4, 5, 6];
    // map generate an array from the original array
    let newArr = arr.map(function(num){
        return num * 2;
    });
    console.log(newArr); // 600 8 10 12
}

{
    let arr = [300, 4, 5, 6];
    // filter return an array that have the elements of the original array 
    // that are deemed true by the callback funtion
    let newArr = arr.filter((num) => (num % 2 === 0));
    console.log(newArr);
}

{
    let arr = [300, 4, 5, 6];
    // some return true if there is an element in the array that
    // are deemed true by the callback function
    console.log(arr.some((num) => (num > 300))); // false
    console.log(arr.some((num) => (num >= 300))); // true
}

{
    let arr = [300, 4, 5, 6];
    // every return true if all elements in the array
    // is deemed true by the callback function
    console.log(arr.every((num) => (num > 3))); // true
    console.log(arr.every((num) => (num >= 300))); // false
}

{
    let arr = [300, 4, 5, 6]
    // method executes a reducer function (that you provide) 
    // on each element of the array, resulting in single output value.
    console.log(arr.reduce((accumulator, currentValue) => accumulator * currentValue)); // 36000

    // we can add a start value
    console.log(arr.reduce((accumulator, currentValue) => (accumulator * currentValue), 0)); // 0
}