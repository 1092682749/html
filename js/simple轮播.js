(function () {
    var content = document.getElementsByClassName('content')[0];
    var imgArr = document.getElementsByTagName('img');
    var index = 0;
    var pictureArr = ['img/1.png','img/2.jpeg','img/3.jpeg','img/4.png','img/5.jepg','img/6.png'];
    var rafId = null;
    var a = 0;
    var rafId2 = null;
    function animation() {
        rafId2.requestAnimationFrame(animation);
        content.style.left = content.offsetLeft - 5 + "px";
        if(content.offsetLeft % 150 == 0)
        {
            index++;
            if (index<0){
                index = pictureArr.length-1;
            }
            if (index > pictureArr.length - 1)
            {
                index = 0;
            }
            content.style.left = '-150px';
            changePictureArr();
            cancelAnimationFrame(rafId2);
        }

    }
    function calcTime() {
        a++;
        if (a%180 == 0)
        {
            animation();
        }
        rafId = requestAnimationFrame(calcTime);
    }
    rafId = requestAnimationFrame(calcTime);
    function changePictureArr() {
        var leftImg = imgArr[0];
        var middleImg = imgArr[1];
        var rightImg = imgArr[2];
        middleImg.src = pictureArr[judgeIndex(index)];
        leftImg.src = pictureArr[judgeIndex(index-1)];
        rightImg.src = pictureArr[judgeIndex(index+1)];
    }
    changePictureArr();
    function judgeIndex(i)
    {
        if(i<0)
        {
            return pictureArr.length-1;
        }else if(i>pictureArr.length-1){
            return 0;
        }else{
            return i;
        }

    }

})();
var p=document.getElementsByTagName('p');
p.innerHTML="11111";