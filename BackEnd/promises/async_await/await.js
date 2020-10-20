// allow us to write asynchronous keyword
const delayedColorChange = (color, delay) =>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            // document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

async function rainbow() {
    await delayedColorChange('red', 1000);
    await delayedColorChange('orange', 1000);
    await delayedColorChange('yellow', 1000);
    return "END OF RAINBOW";
}

rainbow();

// we can resolve error this way
const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 2000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

async function makeTwoRequests() {
    try {
        let data1 = await fakeRequest('/page1');
        console.log(data1);
        let data2 = await fakeRequest('/page2');
        console.log(data2);
    } catch (e) {
        // when fakeRequest is rejected
        console.log("CAUGHT AN ERROR!")
        console.log("error is:", e)
    }
}

makeTwoRequests();