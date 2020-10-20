average = function(arr){
    var sum = 0;
    arr.forEach(function(item){
        sum += item;
    });
    return sum / arr.length;
}

console.log(average([2, 5, 6, 7, 8, 2.5, 3.14]));