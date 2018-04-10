var aArr = document.querySelectorAll("li a");
var img = document.getElementById('show');
var text = document.getElementById('text');
// for (var i=0; i < aArr.length; i++)
// {
//     // aArr[i].onclick = "return false"
//     aArr[i].onclick = function () {
//         var href = this.getAttribute("href");
//         img.setAttribute("src",href);
//     }
// }
function shopPic (a)
{
    var href=a.getAttribute("href");
    img.setAttribute('src',href);
    var showText = a.getAttribute('title');
    text.firstChild.nodeValue=showText;
    console.log(text.childNodes.length);
}
function countBodyChildren() {
    var body = document.getElementsByTagName('body')[0];
    alert(body.childNodes.length);
    console.log(body.childNodes);
    for (var i=0; i<body.childNodes.length;i++)
    {
       var type = body.childNodes[i].nodeType;
       console.log(type);
    }
}
// window.onload=countBodyChildren;