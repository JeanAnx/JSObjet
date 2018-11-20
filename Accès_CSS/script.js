'use strict'

var div = document.querySelector('#style');
console.log(div);
// div.style.backgroundColor = "brown";

div.style.marginLeft = "auto";
div.style.marginRight = "auto";
div.style.marginTop = "10em";

div.removeAttribute('id');
div.setAttribute('class','green');

