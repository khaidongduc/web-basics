
{
    // destructuring from array
    let arr = [2, 3, 4, 5, 6, 7, 8, 9, 10];
    let [firsrtElem, secondElem, thirdElem, ...theRest] = arr;
    console.log(firsrtElem, secondElem, thirdElem);
    console.log(theRest);
}

{
    // destructering from objects
    let obj = {
        firstName: "Khai",
        lastName: "Dong",
        email: "khaidongduc@gmail.com",
        phone: "+84338524989"
    }
    let { email, firstName, lastName, ...theRest } = obj;
    console.log(email, firstName, lastName);
    console.log(theRest);

    // to give a name, we use 
    // {key:newVariable} = obj
    let { email: EMAIL } = obj;
    console.log(EMAIL);

    // to give a default value
    let { firstName: FName, lastName: LName = "Doe", city: City = "Atlantic" } = obj;
    console.log(FName, LName, City);
}

{
    // destructuring params
    let obj = {
        firstName: "Khai",
        lastName: "Dong",
        email: "khaidongduc@gmail.com",
        phone: "+84338524989"
    }
    function fullName({ firstName = 'John', lastName = 'Doe' }) {
        return `${firstName} ${lastName}`;
    }
    console.log(fullName(obj));

}