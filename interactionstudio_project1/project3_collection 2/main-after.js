const db = {
    id: 'apptnUxtmjLkLZ6j4',
    table: 'Table 1',
    apiKey: 'keyYyetpQtrLZYVWE',
    maxRecords: 100,
};
 //apikey

const airtableUrl = `https://api.airtable.com/v0/${db.id}/${db.table}?maxRecords=${db.maxRecords}&view=Grid%20view&api_key=${db.apiKey}`;

const fetchMovies = async () => {
    const response = await fetch(airtableUrl).then(data => data.json());
    console.log(response);
  

     //输入名称提取前提：
    const myObject = {
        title:'movie',
        release_date:'334824',
    }
    
    const myArray =[ 'movie',348927 ,'fdiosj'];
    //输入名称提取功能：
    console.log ( myObject.release_date)
 

    //输入数字提取功能；
    console.log ( myArray [2]); 

   

   

    const imgContainer = document.getElementById('img_container')
 


    response.records.forEach((image)=> {
        console.log(image);
       
         //field后缀需与airtable上一致，【】内输入数字序号。
        if (image.fields.image) {
            console.log (image.fields.image[0].url);
            const posterImg = document.createElement ('img');
            posterImg.src = image.fields.image[0].url;
            posterImg . classList.add("before_img");
      
            //posterImg.setAttribute ('src',image.fields.image[0].url);
            imgContainer.appendChild(posterImg);

        }

    });
    


     //电影信息：
    const moviesContainer=document.getElementById ('movies_container');
    
    

    console.log(records1);
        const records1 = response.records.slice(50,100);
    //=创建元素；
    response.records.forEach(movie=>{
       console.log(movie.fields);
       const articleEl = document.createElement('article');
       const titleEl= document . createElement('div');
       const filmmakerEl= document . createElement('div');
       const countryEl= document . createElement('div');
       const releaseDateEl= document . createElement('div');
       const genreEl= document . createElement('div');
       const descriptionEl = document.createElement('div');
       
      //创建元素源；=后面需要与数据库创建的标签完全一致； 
       titleEl. innerHTML = movie.fields.filmname;

       filmmakerEl. innerHTML = movie.fields.filmmaker;  

       countryEl. innerHTML = movie.fields.country;

       releaseDateEl.innerHTML = movie.fields.year;

       genreEl. innerHTML = movie.fields.genre;

       releaseDateEl.innerHTML = movie.fields.Date;

       descriptionEl.innerHTML = movie.fields.description;
      
 //创建css； 
       articleEl. classList.add("stage_before_info");
       titleEl. classList.add("stage_before_filmname");
       filmmakerEl. classList.add("stage_before_filmmaker");
       countryEl. classList.add("stage_before_country");
       releaseDateEl. classList.add("stage_before_date");
       descriptionEl. classList.add("stage_before_description");
      

       
       articleEl.append(titleEl, filmmakerEl,countryEl, releaseDateEl,genreEl,  descriptionEl  );
       moviesContainer.appendChild(articleEl);
       //实施：

     } );
    
     //主菜单：
     const navigationContainer=document.getElementById ('stage_after_navigation');
    
     //=创建元素；
     response.records.forEach(movie=>{
        console.log(movie.fields);
        const navigationEl = document.createElement('article');
        const yearEl= document . createElement('div');
       
       //创建元素源；=后面需要与数据库创建的标签完全一致； 
        yearEl. innerHTML = movie.fields.year;
 
 
        
        navigationEl.append( yearEl, );
        navigationContainer.appendChild(navigationEl);
        //实施：
 
      } );

};

fetchMovies();