//不同的json数据应用到网站上


const albumContainer = document.getElementById('album-container');//container
 
const fetchContent = (fetchUrl) => {
 return fetch(fetchUrl).then(data => data.json());//获取const url;
 
  //  const response = await fetch(fetchUrl).then(data => data.json());
  // console.log(response);
  //  buildStories (response.data.children);
  //  response.items.forEach(item => {
  //  console.log(item);
  //  buildEpisodes(response); 2
  //  buildAlbums (response.items); 1
};   

//_html
const htmlDecode = (input) =>{
   const e = document.createElement ('div');
   e.innerHTML = input;
   return e.innerText;
}

//data3

const buildStories = stories => {
  stories.forEach(item => {
    console.log(item);
    const container = document.createElement('article');
    const titleEl =  document.createElement('h2');
    const bodyEl =  document.createElement('div');

    titleEl. innerHTML = item.data.title;
    bodyEl. innerHTML = htmlDecode (item.data.selftext_html);

    container.append(titleEl, bodyEl);
    albumContainer.append(container);
   });
};

//data2

const buildEpisodes = episodes =>{
   episodes.forEach(item => {
    console.log(item);
    const imgEl = document.createElement('img');

    imgEl.setAttribute('src',item.image.medium); //image
 
    albumContainer.append(imgEl);
});
}

//data1
const buildAlbums = albums => {

    albums.forEach(item => {
        console.log(item);
        const imgEl = document.createElement('img');
        const nameEl = document.createElement('div');
        const urlEl= document . createElement('a');
        imgEl.setAttribute('src',item.images[0].url);
        nameEl. innerHTML = item.images.name ;
        bodyEl. innerHTML = htmlDecode (item.data.selftext_html);
        urlEl. href = movie.fields.URL;
        urlEl. innerHTML = "IMDB Page";
        
        albumContainer.append(imgEl, nameEl, urlEl);
    });


};

//获取链接并命名
const url1 = 'https://interactionlab.space/data/assignment-4-1.json';
const url2 = 'https://interactionlab.space/data/assignment-4-2.json';
const url3 = 'https://interactionlab.space/data/assignment-4-3.json';



//获取对应data(1):
const main = async() =>{
const response = await fetchContent (url1);
   //全部获取：
   //const response1 = await fetchContent (url1);
   //const response2 = await fetchContent (url2);
   //const response3 = await fetchContent (url3);


   //对应数据显示:
   //输入对应url，wait until;
   //console.log(response);
   buildAlbums (response.items); //1
   //  buildStories (response.data.children);3
   //  buildEpisodes(response); 2


};

main();
