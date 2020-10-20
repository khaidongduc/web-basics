// the original way of sending request via js
// does not support promises (a lot of callbacks)
// clunky syntax

// creation
const myReq = new XMLHttpRequest();

// if load
myReq.onload = function(){
    console.log("Hello World");
    let data = JSON.parse(this.responseText);
    console.log(data.ticker.price);
}

// if failed
myReq.onerror = function(){
    console.log("ERROR");
}

myReq.open('GET', 'https://api.cryptonator.com/api/ticker/btc-usd');
myReq.send();