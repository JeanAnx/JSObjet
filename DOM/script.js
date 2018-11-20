'use strict'

console.log(document.readyState);


var divTitle = document.querySelector('#title');
console.log(divTitle);
console.log(divTitle.firstElementChild.innerHTML); // Je récupère le premier élément de ma div et son contenu

var titre = document.querySelector("div>h2");
console.log(titre.innerHTML);

var titres = document.querySelectorAll('h2');
console.log(titres);

for (let titre of titres) {
    console.log(titre);
}   

document.addEventListener("DOMContentLoaded", function(){
    console.log(document.readyState);
});

// JE RÉCUPÈRE TOUTES LES IMAGES LÀ
var imgList = document.querySelectorAll('div img');
console.log(imgList);

// ET LÀ JE CHANGE L'ATTRIBUT SRC LÀ, LA SOURCE QUOI HEIN
for (let img of imgList) {
    console.log(img);
    img.setAttribute("src","img/1.jpg");
    img.setAttribute("class","pics");
}

// MODIFICATION DU PREMIER TITRE
titre.innerText = "Mon nouveau texte de titre";

// CRÉATION D'UNE DIV DANS LE BODY AVEC APPENDCHILD

var body = document.querySelector('body'); // I RECUP THE BODY

var div = document.createElement("div"); // JE CRÉE UNE DIV
div.setAttribute('id','paragraphe');

var content = '<p>Paragraphe inséré : Super paragraphe</p><p>Super paragraphe bis</p>'; // J'AJOUTE DU CONTENU À CETTE DIV
div.innerHTML = content;

body.appendChild(div); // ET JE LA CRÉE À LA FIN DU BODY

var gallery = document.querySelector('#gallery');

body.insertBefore(div,gallery);


// JE CRÉE DES LIENS DANS UNE NAV À L'AIDE D'UNE BOUCLE

var nav = document.querySelector('#nav');

for (let i = 0 ; i <= 10 ; i++) {
    var thisBalise = document.createElement('a');
    thisBalise.textContent = 'Lien ' + i;
    thisBalise.setAttribute('href','lien${i}');
    nav.appendChild(thisBalise);
}