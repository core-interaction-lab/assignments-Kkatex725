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

const showCoords = (event, offset) => {
// 获取鼠标位置
let mouseX = event.clientX
let mousey = event.clientY
// 获取屏幕中心点位置
let halfWidth = window.innerWidth / 2
let halfHeight = window.innerHeight / 2
// 计算鼠标位置与中心点的偏移量
let x = mouseX - halfWidth
let y = mousey - halfHeight

// 计算元素需要偏移的距离，*-1是因为需要反向偏移
let  transX = x * -1 * offset / halfWidth
let  transY = y * -1 * offset / halfHeight

let coords = [transX,transY]
return coords
}