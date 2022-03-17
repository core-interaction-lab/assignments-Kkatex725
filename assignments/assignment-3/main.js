function mouseOverPic() //当鼠标移出时，隐藏原图 
{undefined
    if (window.event.toElement.id != "menu-pictureone") bigPic.style.visibility = "hidden";
    //如果鼠标不在img000上的话，将这个区域隐藏 
}
function mouseOutPic(imgSrc) //当鼠标移上小图时，显示原图 
{undefined
    var seeBig = document.getElementById("menu-pictureone"); //得到将要显示原图区域的div element 
    var newImg = document.createElement("https://cdn.glitch.global/c7447df1-5f07-4035-b4b3-84a2b3e5662b/20181101193138-5132-79903.png?v=1647547090445"); //新建一个img element，将原图的src赋给这个element 
    newImg = "<img src=\'" + imgSrc + "\'/>"; //注意这里，是为整个element赋值，我在这个小问题上还花了挺多时间 
    seeBig.innerHTML = newImg; //将原图赋给要显示的区域 
} 
