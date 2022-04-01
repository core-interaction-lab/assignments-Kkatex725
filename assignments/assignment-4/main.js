const fetchMovies = async() => {
  const response =await fetch('https://api.airtable.com/v0/appUk9cAzj44s71LF/Projects?api_key=keyYyetpQtrLZYVWE').then(data=>data.json())
  
  console.log (response) ;

  const moviesContainer=document.getElementById ('movies-container');

  response.records.forEach(movie=>{
     console.log(movie.fields);
     const articleEl = document.createElement('article');
     const titleEl= document . createElement('div');
     const genreEl= document . createElement('div');
     const imbdUrlEl= document . createElement('a');
     const releaseDateEl= document . createElement('div');
     const descriptionEl= document . createElement('div');
     const posterEl= document . createElement('img');
     
      //=创建元素；
     titleEl. innerHTML = movie.fields.Name;

     genreEl. innerHTML = movie.fields.Tags;
     
     imbdUrlEl. href = movie.fields.URL;
     imbdUrlEl. innerHTML = "IMDB Page";
     imbdUrlEl. target= "_blank";
     imbdUrlEl. classList.add("imdb-link");

     posterEl.innerHTML = movie.fields.Posters;
     posterEl.href = movie.fields.Posters;
    
     releaseDateEl.innerHTML = movie.fields.Date;
     descriptionEl.innerHTML = movie.fields.Description;
     
     articleEl.append(titleEl, genreEl,imbdUrlEl, releaseDateEl, descriptionEl);
     moviesContainer.appendChild(articleEl);
   } );
   //创建元素源；=后面需要与数据库创建的标签完全一致；

   const linkTags = document.querySelectorAll('.imdb-link');
   console.log(linkTags);
   linkTags.forEach((link,index)=> {
     const linkColor=link.style.color;

     link.id= "my-link";
     link.addEventListener('mousehover', (evt) =>{
       link.style.color= "green";
       });

       link.addEventListener('mouseout', evt =>{
       link.style.color= linkColor; 
       });
   });
};
fetchMovies();
