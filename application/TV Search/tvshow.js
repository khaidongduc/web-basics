try {
    axios = require('axios');
} catch (e) {
    console.log("NOTHING IS WRONG, PROCEED");
}


const imgContainer = document.querySelector('.image-container');
var form = document.querySelector('#search-form');

const fetchMovies = async function (e) {
    e.preventDefault();
    const userInput = form.elements.query.value;
    const res = await axios.get(`http://api.tvmaze.com/search/shows`,
        { params: { q: userInput } }
    );
    makeImages(res.data);
    form.elements.query.value = "";
}

form.addEventListener('submit', fetchMovies);
form.elements.query.addEventListener('keypress', (e) => {
    if(e.which == 13) fetchMovies();
})


const makeLink = (result) => {
    var img = document.createElement('img');
    img.src = result.show.image.medium;
    img.addEventListener('click', function () {
        window.open(result.show.url);
    });
    imgContainer.append(img);
}

const makeImages = (shows) => {
    imgContainer.innerHTML = "";
    for (let result of shows) {
        if (result.show.image) makeLink(result);
    }
}
