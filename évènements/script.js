'use strict'

// window.onload = function() {
//     console.log(window);
    
// }

window.addEventListener("load", function(){

    var button = document.querySelector('#bouton');
    button.addEventListener('click',function(){

        var inputName = document.querySelector('input');
        console.log(inputName.value);

    })


    var buttonList = document.querySelectorAll('#buttonList button');
    this.console.log(buttonList);

    for (let butt of buttonList) {
        butt.addEventListener('click',function(event){
            console.log(event);
            var displayBloc = document.querySelector('#display');
            console.log(this);
            
            var nameInput = this.innerText;
            console.log(nameInput);

            displayBloc.style.backgroundColor = nameInput;

            // OU AVEC UN SWITCH 
            
            /*

            switch (this.innerText) {
                case "Rouge":
                    displayBloc.style.backgroundColor = "red";
                    break;

                case "Bleu":
                    displayBloc.style.backgroundColor = "blue";
                    break;

                    ... etc
            
                default:
                    break;
            }

            */


        })
    }

})