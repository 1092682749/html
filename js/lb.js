var boxDiv = document.getElementById('box');
var contentDiv = document.getElementById('content');
var rightDiv = document.getElementById('right');
var leftDiv = document.getElementById('left');
var liArr = document.getElementsByTagName('li');
var index = 0;
var flag = true;
leftDiv.onclick = function () {
    if(flag)
    {
        flag = false;
        setTimeout(function () {
            flag = true;
        },1000);
    }else
    {
        return;
    }
    if(index == 3)
    {
        index = 0;
        contentDiv.style.left = 0;
    }
    scroll(1);

};
rightDiv.onclick = function () {
    if(flag)
    {
        flag = false;
        setTimeout(function () {
            flag = true;
        },1000);
    }else
    {
        return;
    }
    if (index == 0)
    {
        index = 3;
        contentDiv.style.left = -350 * index +'px';
    }
    scroll(-1)
};
var timer;
function scroll(n)
{
    var t = 0;
    var b = -200 * index;
    var c = 200 * (-n);
    var d = 100;
    index += n;
    function move() {
        t++;
        contentDiv.style.left = Tween.Bounce.easeInOut(t,b.c,d)+'px';
        if(t == d)
        {
            clearInterval(timer);
            changeDot();
        }
    }
    clearInterval(timer);
    timer = setInterval(move, 10);
}
// var p = document.getElementById('ww');
// p.innerHTML="1111111111111";