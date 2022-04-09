const db = {
    id: 'apptnUxtmjLkLZ6j4',
    table: 'Table 1',
    apiKey: 'keyYyetpQtrLZYVWE',
};

const airtableUrl = `https://api.airtable.com/v0/${db.id}/${db.table}?maxRecords=100&view=Grid%20view&api_key=${db.apiKey}`

const fetchMovies = async () => {
    const response = await fetch(airtableUrl).then(data => data.json());
    //console.log(response);
     buildSlideshow(response.records)
     return response.records;
}

const buildSlideshow =  (movies) => {
    console.log(movies);
    console.log(buildSlide(movies[0]));
    const slideshowContainer = document.getElementById('movies-container');
    const prevButton = document. getElementById('prev');
    const nextButton = document. getElementById('next');

const firstMovie = buildSlide (movies[0]);
slideshowContainer.append(firstMovie);


    let currentMovie = 0;

    prevButton.addEventListener('click', () => {
        if(currentMovie === 0){
           currentMovie = movies.length - 1;
        } else {
           currentMovie = currentMovie - 1;
        }

        const movieRecord = movies[currentMovie];

        const slideEl = buildSlide (movieRecord);

        slideshowContainer.innerHTML = '';
        slideshowContainer.append(slideEl);

    });

};

const buildSlide = (movie)=>{
    const movieContainer = document.createElement ('article');
        //field后缀需与airtable上一致，【】内输入数字序号。
        if (movie.fields.image) {
            console.log (movie.fields.image[0].url);
            const posterImg = document.createElement ('img');
            posterImg.src = movie.fields.image[0].url;
            posterImg . classList.add("before_img");
      
            //posterImg.setAttribute ('src',image.fields.image[0].url);
            movieContainer.appendChild(posterImg);

        }
        return movieContainer

}

fetchMovies();