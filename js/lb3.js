var liArr = document.getElementsByTagName('li');
var boxDiv = document.getElementsByClassName('box');
var leftSpan = document.getElementById('left');
var rightSpan = document.getElementById('right');
var imgArr = document.getElementsByClassName('content');
var timer;
var index = 0;
timer = setInterval(autoChange,3000);
// noinspection JSAnnotator
boxDiv[0].onmouseenter = function () {
    clearInterval(timer);
};
leftSpan.onclick = function () {
    index--;
    if(index<0)
    {
        index=imgArr.length-1;
    }
    changeColoAndOpacity();
}
rightSpan.onclick = function () {
    index++;
    if(index>imgArr.length-1)
    {
        index=0;
    }

    changeColoAndOpacity();
}
boxDiv[0].onmouseleave = function (ev) {
    timer = setInterval(autoChange,3000);
};
for (var i=0;i<liArr.length;i++)
{
    liArr[i].num=i;
    liArr[i].onclick = function () {
    index = this.num;
        changeColoAndOpacity();
};
}

function autoChange()
{
    index++;
    if(index > imgArr.length-1)
    {
        index = 0;
    }
    changeColoAndOpacity();
}
// function opacityChange()
// {
//
// }
// function pointChange()
// {
//     // for(var i=0;i<liArr.length;i++)
//     // {
//     //     liArr[i].style.backgroundColor = "black";
//     // }
//     // liArr[index].style.backgroundColor = "red";
// }
function changeColoAndOpacity() {
    for (var i=0; i<=imgArr.length-1; i++)
    {
        imgArr[i].style.opacity =0;
        liArr[i].style.backgroundColor = "black";
    }
    imgArr[index].style.opacity=1;
    liArr[index].style.backgroundColor = "#6f85b8";
}
