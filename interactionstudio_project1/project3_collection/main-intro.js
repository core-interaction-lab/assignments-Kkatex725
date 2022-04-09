const db = {
    id: 'apptnUxtmjLkLZ6j4',
    table: 'Table 1',
    apiKey: 'keyYyetpQtrLZYVWE',

};
 //apikey

const airtableUrl = `https://api.airtable.com/v0/${db.id}/${db.table}?maxRecords=${db.maxRecords}&view=Grid%20view&api_key=${db.apiKey}`;

   
const fetchMovies = async () => {
    const response = await fetch(airtableUrl).then(data => data.json());
    console.log(response);
   



//主菜单：
    const navigationContainer=document.getElementById ('stage_before_navigation');
    
    //=创建元素；
    response.records.forEach(movie=>{
       console.log(movie.fields);
       const navigationEl = document.createElement('article');
       const yearEl= document . createElement('div');
      
      //创建元素源；=后面需要与数据库创建的标签完全一致； 
       yearEl. innerHTML = movie.fields.year;
       yearEl. classList.add("intro_year");

       
       navigationEl.append( yearEl, );
       navigationContainer.appendChild(navigationEl);
       //实施：

     } );
    
   
      
     window.onload = async () => {
       let body = document.querySelector('body')
       let bg = document.querySelector('#intro_title')
     
     body.addEventListener('mousemove', (event) => {
        bg.style.transform = `translate(${showCoords(event,50)[0]}px, ${showCoords(event,50)[1]}px)`
      })
      body.addEventListener('touchmove', (event) => {
        bg.style.transform = `translate(${touchCoords(event,50)[0]}px, ${touchCoords(event,50)[1]}px)`
      })        
    }

};

fetchMovies();