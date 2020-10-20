// json is to store data (to easily share infos)

{
    const data = `{"random": 69,"random float": 89.65,"bool": true}`
    // JSON.parse turn json data into a js object
    let parsedData = JSON.parse(data);
    console.log(parsedData);
}

{
    let parsedData = { 
        random: 69, 
        'random float': 89.65, 
        bool: true 
    }
    // JSON.stringtify turn parsed data into json string
    let data = JSON.stringify(parsedData);
    console.log(data);
}

