var h= document.getElementsByTagName('header')[0];
var n= document.getElementsByTagName('nav')[0];
var c= document.getElementsByTagName('content')[0];
var f= document.getElementsByTagName('footer')[0];
function toggleTheme(theme){
    h.dataset.theme = theme;
    n.dataset.theme = theme;
    c.dataset.theme = theme;
    f.dataset.theme = theme;
}