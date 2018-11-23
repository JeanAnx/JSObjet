'use strict'

window.addEventListener('load',function(){


    
    var dragged;


    // L'ÉLÉMENT "DRAGGÉ" CHANGE D'OPACITÉ
    document.addEventListener('dragstart',function(event){

        dragged = event.target;
        console.log('dragged');
        event.target.style.opacity = ".5";

    })

    // LORSQU'IL N'EST PLUS DRAGGÉ IL REPREND SON OPACITÉ NORMALE
    document.addEventListener('dragend',function(event){

        event.target.style.opacity = "";
    })

    // LORSQUE L'ÉLÉMENT EST DRAGGÉ AU DESSUS DE LA DROPZONE, CETTE DERNIÈRE CHANGE DE BGCOLOR
    document.addEventListener('dragenter',function(event){
        if (event.target.className == "dropZone") {
            event.target.style.backgroundColor = "pink";
        }
    })

    // ELLE REVIENT À LA NORMALE LORSQUE LE DRAG EST TERMINÉ
    document.addEventListener('dragleave',function(event) {
        if (event.target.className == "dropZone") {
            event.target.style.backgroundColor = "";
        }
    })

    // ON DOIT AJOUTER LE DRAGOVER ET AJOUTER PREVENT DEFAULT (JE NE SAIS PAS PK)
    document.addEventListener('dragover',function(event){
        event.preventDefault();
    })


    // ET LORS DU DÉPÔT SUR LA DROPZONE ON SUPPRIME ÉLÉMENT PARENT DU DRAGGED 
    // ET ON AJOUTE L'IMAGE DANS LA DROPZONE
    document.addEventListener('drop',function(event){
        if (event.target.className == "dropZone") {

            event.target.style.backgroundColor = "";
            // dragged.parentNode.removeChild(dragged);
            event.target.appendChild(dragged);
            console.log(event.target);

        }
    })

})