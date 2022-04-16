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
        title: 'movie',
        release_date: '334824',
    }

    const myArray = ['movie', 348927, 'fdiosj'];
    //输入名称提取功能：
    console.log(myObject.release_date)


    //输入数字提取功能；
    console.log(myArray[2]);





    //const imgContainer = document.getElementById('img_container')


    /*
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
        
    */

    //电影信息：
    const moviesContainer = document.getElementById('movies_container');
    // const yearsContainer = document.getElementById('years_container');

    // const buildYearSlide = movie => {
    //     const year = document.createElement('li');
    //     year.innerHTML = movie.fields.year;
    //     return year
    // }



    const buildSlide = movie => {
        const yearEl = document.createElement('div');

        //创建元素源；=后面需要与数据库创建的标签完全一致； 
        yearEl.innerHTML = movie.fields.year;


        const imgContainer = document.createElement('div');
        //field后缀需与airtable上一致，【】内输入数字序号。
        if (movie.fields.image) {

            console.log(movie.fields.image[0].url);
            const posterImg = document.createElement('img');
            posterImg.src = movie.fields.image[0].url;
            posterImg.classList.add("before_img");

            //posterImg.setAttribute ('src',image.fields.image[0].url);
            imgContainer.appendChild(posterImg);

        }



        console.log(movie.fields);
        const articleEl = document.createElement('li');
        const titleEl = document.createElement('div');
        const filmmakerEl = document.createElement('div');
        const countryEl = document.createElement('div');
        const releaseDateEl = document.createElement('div');
        const genreEl = document.createElement('div');
        const descriptionEl = document.createElement('div');

        //创建元素源；=后面需要与数据库创建的标签完全一致； 
        titleEl.innerHTML = movie.fields.filmname;

        filmmakerEl.innerHTML = movie.fields.filmmaker;

        countryEl.innerHTML = movie.fields.country;

        releaseDateEl.innerHTML = movie.fields.year;

        genreEl.innerHTML = movie.fields.genre;

        releaseDateEl.innerHTML = movie.fields.Date;

        descriptionEl.innerHTML = movie.fields.description;

        //创建css； 
        articleEl.classList.add("stage_before_info");
        titleEl.classList.add("stage_before_filmname");
        filmmakerEl.classList.add("stage_before_filmmaker");
        countryEl.classList.add("stage_before_country");
        releaseDateEl.classList.add("stage_before_date");
        descriptionEl.classList.add("stage_before_description");
        genreEl.classList.add("stage_before_genre");



        articleEl.append(yearEl, imgContainer, titleEl, filmmakerEl, countryEl, releaseDateEl, genreEl, descriptionEl);
        return articleEl;
    };


    const records1 = response.records.slice(50, 100);
    console.log(records1);
    //=创建元素；
    response.records.forEach(movie => {


        const articleEl = buildSlide(movie);
        moviesContainer.appendChild(articleEl);
        // const yearEle = buildYearSlide(movie);
        // yearsContainer.appendChild(yearEle);
        // //实施：

    });
    
    //主菜单：
    const navigationContainer=document.getElementById ('stage_before_navigation');
   
    //=创建元素；
    response.records.forEach(movie=>{
       console.log(movie.fields);
       const yearEl= document . createElement('a');
       yearEl.setAttribute('href','#' + movie.fields.year) ; 
       const navigationEl = document.createElement('article');
      
      
      //创建元素源；=后面需要与数据库创建的标签完全一致； 
       yearEl. innerHTML = movie.fields.year;
 
 
       
       navigationEl.append( yearEl, );
       navigationContainer.appendChild(navigationEl);
       //实施：
 
     } );

    var mobileSwiper = function (selector) {
        var x0, y0, hasmoved = 0, lock = 0;
        var touchstartHandle = function (e) {
            var touch = e.targetTouches[0], x = touch.pageX, y = touch.pageY;
            x0 = x, y0 = y, hasmoved = 0, lock = 0;
        },
            touchmoveHandle = function (e) {
                if (lock) return;
                var touch = e.targetTouches[0], x = touch.pageX, y = touch.pageY, offsetX = x0 - x, offsetY = y0 - y;
                // 阻止滚动
                hasmoved || (hasmoved = 1, Math.abs(offsetX) > Math.abs(offsetY) && e.preventDefault());
                if (offsetX <= -50) {
                    // 向右
                    console.log("向右");
                    this.queue.unshift(this.queue.pop());
                    lock = 1;
                    swap("right");
                } else if (offsetX >= 50) {
                    // 向左
                    console.log("向左");
                    this.queue.push(this.queue.shift());
                    lock = 1;
                    swap("left");
                }
            }.bind(this)
        var mousedownHandle = function (e) {
            var x = e.clientX, y = e.clientY;
            x0 = x, y0 = y, hasmoved = 0, lock = 0;
        },
            mouseupHandle = function (e) {
                if (lock) return;
                var x = e.clientX, y = e.clientY, offsetX = x0 - x, offsetY = y0 - y;
                // 阻止滚动
                hasmoved || (hasmoved = 1, Math.abs(offsetX) > Math.abs(offsetY) && e.preventDefault());
                if (offsetX <= -50) {
                    // 向右
                    console.log("向右");
                    this.queue.unshift(this.queue.pop());
                    lock = 1;
                    swap("right");
                } else if (offsetX >= 50) {
                    // 向左
                    console.log("向左");
                    this.queue.push(this.queue.shift());
                    lock = 1;
                    swap("left");
                }
            }.bind(this)
        swap = function (orientation) {
            var queue = [].concat(this.queue),
                total = this.virtual.length, // item 总数
                last = total - 1, // 最后一个索引
                collect = 0, // 提取数
                virtual = new Array(total),
                odd = 1;
            // 提取前三个元素与后三个元素
            while (collect < 7 && queue.length > 0) {
                virtual[odd ? queue.shift() : queue.pop()] = css[collect == last && !odd && "right" == orientation ? ++collect : collect++]; // 做一个方向优化
                odd = !odd; // 取反
            }
            // 对比一下数组 
            for (var i = 0; i < total; ++i) {
                virtual[i] != this.virtual[i] && (this.virtual[i] = virtual[i], this.item[i].style.cssText = this.virtual[i] || "visibility: hidden");
            }
        }.bind(this),
            css = [
                "-webkit-transition: -webkit-transform .3s ease; z-index: 4; -webkit-transform: translate3d(0, 0, 10px) scale3d(1, 1, 1); visibility: visible;height: auto;",
                "-webkit-transition: -webkit-transform .3s ease; z-index: 3; -webkit-transform: translate3d(-25vw, 0, 6px) scale3d(.2, .2, 1); visibility: visible;",
                "-webkit-transition: -webkit-transform .3s ease; z-index: 3; -webkit-transform: translate3d(25vw, 0, 6px) scale3d(.2, .2, 1); visibility: visible;",
                "-webkit-transition: -webkit-transform .3s ease; z-index: 2; -webkit-transform: translate3d(-35vw, 0, 2px) scale3d(.15, .15, 1); visibility: visible;",
                "-webkit-transition: -webkit-transform .3s ease; z-index: 2; -webkit-transform: translate3d(35vw, 0, 2px) scale3d(.15, .15, 1); visibility: visible;",
                "-webkit-transition: -webkit-transform .3s ease; z-index: 1; -webkit-transform: translate3d(-44vw, 0, 2px) scale3d(.1, .1, 1); visibility: visible;",
                "-webkit-transition: -webkit-transform .3s ease; z-index: 1; -webkit-transform: translate3d(44vw, 0, 2px) scale3d(.1, .1, 1); visibility: visible;"
            ];

        this.init = function (list) {
            this.container = list;
            this.container.style["-webkit-transform-style"] = "preserve-3d";
            this.item = list.querySelectorAll("li");
            for (var i = 0; i < this.item.length; ++i) { this.item[i].style.visibility = "hidden" }
            this.queue = function (len) { // 索引列表，用于处理切换的序号队列 
                // 一个对应 item 的数组，记录 DOM 信息
                var arr = [];
                for (var i = 0; i < len; ++i) arr[i] = i;
                return arr;
            }(this.item.length);
            this.virtual = new Array(this.item.length); // 与 item 做对应的虚拟DOM
            swap(); // 初始排版
            if (this.item.length <= 1) return;
            this.container.addEventListener("touchstart", touchstartHandle);
            this.container.addEventListener("touchmove", touchmoveHandle);
            this.container.addEventListener("mousedown", mousedownHandle);
            this.container.addEventListener("mouseup", mouseupHandle);
        }

        this.destory = function () {
            this.container.removeEventListener("touchstart", touchstartHandle);
            this.container.removeEventListener("touchmove", touchmoveHandle);
            this.container.removeEventListener("mousedown", mousedownHandle);
            this.container.removeEventListener("mouseup", mouseupHandle);
        }

        // 默认 new 即初始化
        var list = document.querySelector(selector);
        list ? this.init(list) : console.log(selector + " undefined");
    };
    // new mobileSwiper("#years_container");
    new mobileSwiper("#movies_container");
    
};



fetchMovies();
























//const db = {
  //  id: 'apptnUxtmjLkLZ6j4',
  //  table: 'Table 1',
   // apiKey: 'keyYyetpQtrLZYVWE',
   // maxRecords: 100,
//};
 //apikey

//const airtableUrl = `https://api.airtable.com/v0/${db.id}/${db.table}?maxRecords=${db.maxRecords}&view=Grid%20view&api_key=${db.apiKey}`;

//const fetchMovies = async () => {
   // const response = await fetch(airtableUrl).then(data => data.json());
   // console.log(response);
  

     //输入名称提取前提：
  //  const myObject = {
   //     title:'movie',
   //     release_date:'334824',
  //  }
    
    //const myArray =[ 'movie',348927 ,'fdiosj'];
    //输入名称提取功能：
   // console.log ( myObject.release_date)
 

    //输入数字提取功能；
   // console.log ( myArray [2]); 

   

   

    //const imgContainer = document.getElementById('img_container')
 

/*
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
    
*/

     //电影信息：
    //const moviesContainer=document.getElementById ('movies_container');
    
    

    

    
//const buildSlide = movie => {
   //const yearEl = document.createElement('div');
       
    //创建元素源；=后面需要与数据库创建的标签完全一致； 
   //yearEl.innerHTML = movie.fields.year;


   // const imgContainer = document.createElement('div');
     //field后缀需与airtable上一致，【】内输入数字序号。
   //  if (movie.fields.image) {
         
   //     console.log (movie.fields.image[0].url);
    //    const posterImg = document.createElement ('img');
    //    posterImg.src = movie.fields.image[0].url;
    //    posterImg . classList.add("before_img");
  
        //posterImg.setAttribute ('src',image.fields.image[0].url);
    //    imgContainer.appendChild(posterImg);

 //}


  // console.log(movie.fields);
  // const articleEl = document.createElement('article');
  // articleEl.setAttribute('id', movie.fields.year) ; 
  // const titleEl= document . createElement('div');
  // const filmmakerEl= document . createElement('div');
  // const countryEl= document . createElement('div');
  //// const releaseDateEl= document . createElement('div');
  // const genreEl= document . createElement('div');
  // const descriptionEl = document.createElement('div');
   
  //创建元素源；=后面需要与数据库创建的标签完全一致； 
   //titleEl. innerHTML = movie.fields.filmname;

   //filmmakerEl. innerHTML = movie.fields.filmmaker;  

   //countryEl. innerHTML = movie.fields.country;

  // releaseDateEl.innerHTML = movie.fields.year;

  // genreEl. innerHTML = movie.fields.genre;

  // releaseDateEl.innerHTML = movie.fields.Date;

  // descriptionEl.innerHTML = movie.fields.description;
  
//创建css； 
  // articleEl. classList.add("stage_before_info");
   //titleEl. classList.add("stage_before_filmname");
  // filmmakerEl. classList.add("stage_before_filmmaker");
  // countryEl. classList.add("stage_before_country");
  // releaseDateEl. classList.add("stage_before_date");
  // descriptionEl. classList.add("stage_before_description");
  

   
 //  articleEl.append(yearEl, imgContainer, titleEl, filmmakerEl,countryEl, releaseDateEl,genreEl,  descriptionEl  );
////return articleEl;
//};


//const records1 = response.records.slice(50,100);
//console.log(records1);
//=创建元素；
//response.records.forEach(movie=>{

//
  // const articleEl = buildSlide(movie);
  // moviesContainer.appendChild(articleEl);
   //实施：

 //});
   
  //   const navigationContainer=document.getElementById ('stage_before_navigation');
    
   //  //=创建元素；
    // response.records.forEach(movie=>{
    //    console.log(movie.fields);
      //  const navigationEl = document.createElement('article');
    // important   const yearEl= document . createElement('a');
    //important    yearEl.setAttribute('href','#' + movie.fields.year) ; 
       //创建元素源；=后面需要与数据库创建的标签完全一致； 
      //  yearEl. innerHTML = movie.fields.year;
 
 
        
      //  navigationEl.append( yearEl, );
      //  navigationContainer.appendChild(navigationEl);
        //实施：
 
     // } );

       
//};

//fetchMovies();