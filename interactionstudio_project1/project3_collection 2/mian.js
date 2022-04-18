let spanHtml = ``
window.onload = function() {
    let db = {
        id: 'apptnUxtmjLkLZ6j4',
        table: 'Table 1',
        apiKey: 'keyYyetpQtrLZYVWE',
        maxRecords: 100,
    };
    let innerHtml = ``

    const airtableUrl = `https://api.airtable.com/v0/${db.id}/${db.table}?maxRecords=${db.maxRecords}&view=Grid%20view&api_key=${db.apiKey}`;
    fetch(airtableUrl).then((data) => {
        return data.json()
    }).then(res => {
        let { records } = res
        console.log(res);
        // console.log(records);
        for(let i = 0; i < records.length; i++){
            innerHtml = innerHtml + `
                    <div class="swiper-slide ${i == 0 ? ' swiper-slide-center none-effect': ''}">
                    <div class="swiper-text">${records[i].fields.year}</div>
                        <a href="javascript:;">
                            <img src="${records[i].fields.image[0].url}" about="" title="">
                        </a>
                        <div class="swiper-title">${records[i].fields.filmname}</div>
                        <div class="swiper-smTitle">${records[i].fields.filmmaker}</div>
                        <div class="swiper-text">${records[i].fields.country}</div>
                        <div class="swiper-text">${records[i].fields.genre}</div>
                        <div class="swiper-text">${records[i].fields.Date}</div>
                        <div class="swiper-text">${records[i].fields.description}</div>
                    </div>
                  `
        }
        for(let i = 0; i < records.length; i++){
            spanHtml = spanHtml + `<button class="swiper-pagination-bullet">${records[i].fields.year}</button>`
        }
        document.querySelector(".swiper-wrapper").innerHTML = innerHtml
        var swiper = new Swiper('.swiper-container',{
            // autoplay: 3000, //是否自动滚动
            autoplay: false, //是否自动滚动
            speed: 500,      //滚动速速
            autoplayDisableOnInteraction: true,
            loop: true,
            centeredSlides: true,
            slidesPerView: 3, //当前选中
            pagination: '.swiper-pagination',
            paginationClickable: true,
            prevButton: '.swiper-button-prev', // 左右切换
            nextButton: '.swiper-button-next', // 左右切换
            onInit: function(swiper) {
                swiper.slides[3].className = "swiper-slide swiper-slide-active"; //当前选中 状态
            },
            breakpoints: {
                100: {
                    slidesPerView: 0,
                }
            }
        });
        document.querySelector(".btns").innerHTML = spanHtml
        setInterval(function () {
            document.querySelector(".btns").innerHTML = spanHtml
        },3000)

    })
    window.onresize = function () {
        document.querySelector(".btns").innerHTML = spanHtml
    }
}
