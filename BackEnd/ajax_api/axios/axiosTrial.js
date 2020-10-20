// axios - a library for making requests
// axios.get only come back when everything is resolved
try {
    axios = require('axios'); // this is for backend code
} catch (e) {
    console.log("RUN ON BROWSER");
}

axios.get(`https://api.cryptonator.com/api/ticker/btc-usd`)
    .then(res => {
        console.log(res.data.ticker.price);
    })
    .catch(e => {
        console.log("error", e);
    });


//
const fetchBitcoinPrice = async () => {
    try {
        const res = await axios.get(`https://api.cryptonator.com/api/ticker/btc-usd`);
        console.log(res.data.ticker.price);
    } catch (e) {
        console.log("ERROR", e);
    }
}

fetchBitcoinPrice();

// setting header
const getDadJoke = async () => {
    const config = { headers: { Accept: 'application/json' } };
    const res = await axios.get(`https://icanhazdadjoke.com/`, config);
    return res.data.joke;
}

console.log(getDadJoke());

try {
    var button = document.querySelector("button");
    button.addEventListener('click', async () => {
        var joke = await getDadJoke();
        var ul = document.querySelector('ul');
        const newLI = document.createElement('li');
        newLI.append(joke);
        ul.append(newLI);
    });
} catch (e) {
    console.log("NOTHING IS WRONG");
}