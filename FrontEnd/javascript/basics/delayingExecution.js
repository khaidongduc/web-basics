// setTimeOut() // allows us to run a function once after the interval of time
// pass a callback and a time in ms to delay
// after the delaying time, it will run the function pass into it
{
    console.log("Hello...");
    setTimeout(function () {
        console.log("Are you still there?");
    }, 1000)
    console.log("Bye");
    /// Hello...
    /// Bye
    /// Are you still there?
}

// setInterval() // allows us to run a function every the interval of time
// pass a callback and an interval (in ms)
{
    const id = setInterval(function(){
        console.log("Hello World");
    }, 1000);

    setTimeout(function () {
        clearInterval(id);
    }, 5000)
    // clearInterval is to stop setInterval
}