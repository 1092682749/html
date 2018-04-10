var body = document.getElementsByTagName('body')[0];
var pic = document.createElement('img');
var text = document.createTextNode("A pic");
pic.setAttribute("src","img/1.png");
body.appendChild(text);
// body.insertBefore(pic,text);
insertAfter(pic,text)
function insertAfter(newElement,targetElement) {
    var parent = targetElement.parentNode;
    if (targetElement == parent.lastChild)
    {
        parent.appendChild(newElement);
    }else{
        parent.insertBefore(newElement,targetElement.nextNode());
    }
}