/// promises provide a way to substitute nested callback
// creation
{
    let fakeReq = (url) => {
        return new Promise((resolve, reject) => {
            const rand = Math.random();
            setTimeout(() => {
                if(rand <= 0.5) resolve("Fake data here");
            }, 1000);
            reject("request error");
        });
    }
    fakeReq("dogs")
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        })
}


/// How promises may work
const fakeRequestPromises = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}
/// first request
// fakeRequestPromises("google.com").
//     then(() => {
//         console.log("It worked");
//         fakeRequestPromises("google.com/page2").
//             then(() => {
//                 console.log("It worked 2");
//                 fakeRequestPromises("google.com/page3").
//                     then(() => {
//                         console.log("It worked 3");
//                     })
//                     .catch(() => {
//                         console.log("Error 3");
//                     });
//             })
//             .catch(() => {
//                 console.log("Error 2");
//             });
//     })
//     .catch(() => {
//         console.log("Error");
//     });

// we can flatten it using request
// the trick is we return a promise in every then()
fakeRequestPromises("page1")
    .then((data) => {
        console.log(data);
        console.log("It work page 1");
        return fakeRequestPromises("page2");
    })
    .then((data) => {
        console.log(data);
        console.log("It work page 2");
        return fakeRequestPromises("page3");
    })
    .then((data) => {
        console.log(data);
        console.log("It work page 3");
    })
    .catch((err) => {
        console.log(err);
        console.log("It failed (somewhere)");
    })


/// color change in html
const delayedColorChange = (color, delay) =>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

delayedColorChange('red', 1000)
    .then(() => delayedColorChange('orange', 1000))
    .then(() => delayedColorChange('blue', 1000))
    .then(() => delayedColorChange('violet', 1000))
    .catch(() => {
        console.log("Failed");
    })

