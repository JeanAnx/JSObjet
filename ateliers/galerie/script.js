'use strict'

console.log('Fichier chargé');

// Je récup the body
var body = document.querySelector('body');
console.log(body);

// Je crée mes DIV
var divGlobal = document.createElement('div');
console.log(divGlobal);
divGlobal.style.textAlign = "center";
body.appendChild(divGlobal); // Je place la Globale dans le body

// je crée un titre tiens
var titre = document.createElement('h1');
titre.innerText = "Immortels Jackson Five";
divGlobal.appendChild(titre);
console.log(titre);

var divDisplay = document.createElement('div');
console.log(divDisplay);

var divGalerie = document.createElement('div');
console.log(divGalerie);


// Je mets la 2ème div sous le titre
divDisplay.setAttribute('id','display');
divDisplay.style.height = "300px";
divDisplay.style.margin = "auto";
divDisplay.style.marginTop = "30px";
divGlobal.appendChild(divDisplay);

// Je rajoute la 3ème div (image) dans la div globale
divGalerie.setAttribute('id','galerie');
divGalerie.style.display = 'flex';
divGalerie.style.justifyContent = "center";
divGlobal.appendChild(divGalerie);

// Je crée les images avec une boucle
for ( let i = 1 ; i <= 5 ; i++ ) {
    var baliseImg = document.createElement('img');
    baliseImg.setAttribute('src','img/' + i + '.jpg');
    baliseImg.setAttribute('class','pic');
    baliseImg.setAttribute('alt',"Image" + i);
    baliseImg.style.opacity = "0.6";
    baliseImg.style.height = "200px";
    baliseImg.style.padding = "20px";
    baliseImg.style.transition = "all 0.2s ease";
    divGalerie.appendChild(baliseImg);
    baliseImg.addEventListener('mouseover',function(){
        this.style.opacity = "1";
        this.style.transform = "scale(1.1)";   
    })
    baliseImg.addEventListener('mouseout',function(){
        this.style.opacity = "0.6";
        this.style.transform = "scale(1)";
    })

}

// Je crée une img vide dans le Display

var imgDisplay = document.createElement('img');
divDisplay.appendChild(imgDisplay);

// Je récupère toutes les images 
var imgList = document.querySelectorAll('.pic');
console.log(imgList);

for (let img of imgList) {
    img.addEventListener('click',function(){
        var imgSrc = img.getAttribute('src');
        console.log(imgSrc);
        imgDisplay.setAttribute('src',imgSrc);
        imgDisplay.style.width = "215px";
        console.log(imgDisplay);
    });

}

// document.addEventListener('mousemove',function(event){
    
//     var mouseX = event.clientX;
//     var mouseY = event.clientY;
//     console.log(mouseX + " " + mouseY);
// })







