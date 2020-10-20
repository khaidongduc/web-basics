// newer way to make request via JS
// support promises
// however, not supported in IE - not significant

fetch('https://api.cryptonator.com/api/ticker/btc-usd')
    .then((res) => {
        console.log("RESPONSE, WAITING TO PARSE", res);
        return res.json();
    })
    .then((data) => {
        console.log("DATA PARSED");
        console.log(data.ticker.price);
    })
    .catch((e) => {
        console.log("ERROR", e);
    });

// 
const fetchBitcoinPrice = async () => {
    try {
        const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd');
        const data = await res.json();
        console.log(data.ticker.price);
    } catch(e){
        console.log("ERROR");
    }
}

fetchBitcoinPrice();