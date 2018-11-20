'use strict'

var date = new Date();
console.log(date);

console.log(date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear());

/* = */ console.log(date.toLocaleDateString());


var string = new String("Lorem ipsum");
console.log(string);

var chaine = "Nouveau Lorem ipsum";

var newChaine = new String(chaine);
console.log(newChaine);

// FONCTION REPLACE
var result = newChaine.replace('ipsum' , 'chaton'); /* Remplace 'ipsum' par 'chaton' */
console.log(result);

console.log(result.toUpperCase());
console.log(result.toLowerCase());
console.log(result.length);


// FONCTION SPLIT
var img = "monimage.png";
var resultImg = img.split('.'); // SCINDE UNE CHAÎNE VIA UN SÉPARATEUR DÉFINI
console.log(resultImg);

var monArray = new Array();
var monArray2 = [];

var monTableau = {
    valeur1 : 10,
    valeur2 : 50,
}

console.log(monTableau);

var monTableau2 = [
    nom => 'Annaix',
    prenom => 'Jean',

]

console.log(monTableau2);


var person = {
    nom: 'Annaix',
    prenom: 'Jean',
}

var rand = Math.random()*10;
console.log(rand);
console.log(Math.round(rand));


