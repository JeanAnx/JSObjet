// LES VARIABLES ***********************************
var body = document.querySelector('body');
var divDisplay = document.querySelector('#display');
console.log(divDisplay);

var button = document.querySelector('#boutonFormulaire');
var inputFirstName = document.querySelector('#fname');
var inputName = document.querySelector("#lname");
var inputEmail = document.querySelector('#email');
var inputMessage = document.querySelector('#message');
console.log(button);

var inputList = [inputFirstName,inputName];
var regexInput = /([^A-Za-zÉÈÀéèêëàäâôöç\s\-])/;
var regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

var form = document.querySelector('form');
var warningDiv = document.createElement('div');
body.insertBefore(warningDiv,document.querySelector('form'));

var errorMessage = document.createElement('h2');

// LES FONCTIONS ***********************************

function changeBG(element) {
    element.style.backgroundColor = "rgba(248,137,47,0.4)";
}

function clearBG(element) {
    element.style.backgroundColor = "white";
};

function checkIfEmpty(input) {
    if (input.value == "") {
        console.log("on blur");
        console.log('champ vide');
        changeBG(input);
        return false;
        } else {
            clearBG(input);
            return true;     
    }
}

function checkString(input) {

    var value = input.value;
    console.log(value);

    if (regexInput.test(value)) {
        console.log(regexInput.test(value));
        console.log('not ok');
        changeBG(input);
        return false;
        
        } else {
           
            console.log('ok');
            clearBG(input);
            return true;
        }
}

function checkLengthInput(input) {
    var length = input.value.length;
    console.log(length);

    if (length < 3 || length > 25) {
        console.log('Champ invalide');
        changeBG(input);
        return false;
        
            } else {
            
            clearBG(input);
            console.log('clear');
            return true;
    }
}

function checkMail(input) {

    var value = input.value;
    if (!regexEmail.test(input.value)) {
        changeBG(input);
        return false;
    } else {
        clearBG(input);
        return true;
    }
}

function checkMessage(textarea){

    var length = textarea.value.length;

    if (length < 5 || length > 500) {
        changeBG(textarea);
        return false;
        } else {
            clearBG(textarea);
            return true;
        }
}


// FONCTION POUR VÉRIFICATION APRÈS CLIC

function checkNames(input) {
    if (checkIfEmpty(input) && checkString(input) && checkLengthInput(input) ) {
        return true;
        } else {           
            return false;
        }
}


// LES ÉVÈNEMENTS ET LES BOUCLES **************************************

    // Je crée un objet et son constructeur

function user (fname,lname,email,message) {

    this.prenom = fname;
    this.nom = lname;
    this.email = email;
    this.message = message;

    this.display = function(){
        
        console.log('display');
        var newDiv = document.createElement('div');
        newDiv.setAttribute('class','card')
        divDisplay.appendChild(newDiv);

        var userTitle = document.createElement('h3');
        userTitle.innerHTML = this.prenom + ' ' + this.nom;
        newDiv.appendChild(userTitle);

        var userEmail = document.createElement('h5');
        userEmail.innerHTML = this.email;
        newDiv.appendChild(userEmail);

        var userMessage = document.createElement('p');
        userMessage.innerHTML = this.message;
        newDiv.appendChild(userMessage);

        var eraseButton = document.createElement('input');
        eraseButton.setAttribute('type','button');
        eraseButton.setAttribute('value','Supprimer');
        newDiv.appendChild(eraseButton);

        eraseButton.addEventListener('click',function(){
            console.log('erase');
            console.log(this);
            var parent = this.parentNode;
            parent.remove();
        })

    }
}

for (let theInput of inputList) {
    theInput.addEventListener('blur',function(){
        if (checkIfEmpty(theInput)) {
            if (checkLengthInput(theInput)) {
                checkString(theInput);
            }
        }
    })
};

inputEmail.addEventListener('blur',function(){
    console.log('checkEmail');
    if (checkIfEmpty(this)) {
        if (checkLengthInput(this)) {
            checkMail(this);
        }
    }
    
});

inputMessage.addEventListener('blur',function(){
    checkMessage(this);
});

button.addEventListener('click',function(){

    if (checkNames(inputFirstName) && checkNames(inputName) && checkMail(inputEmail) && checkMessage(inputMessage)) {
        
        errorMessage.innerHTML = "";

    // JE RÉCUPÈRE LES VALEURS DES INPUTS

        console.log(inputFirstName.value);
        console.log(inputName.value);
        console.log(inputEmail.value);
        console.log(inputMessage.value);

        var firstName = inputFirstName.value;
        var lastName = inputName.value;
        var userEmail = inputEmail.value;
        var userMessage = inputMessage.value;

    // Je crée un nouvel objet user 

        var thisUser = new user(firstName,lastName,userEmail,userMessage);
        console.log(thisUser);
        thisUser.display();
            } else {
                errorMessage.setAttribute('class','warning');
                errorMessage.innerHTML = "Veuillez remplir tous les champs du formulaire";
                warningDiv.appendChild(errorMessage);
    }
});

function checkForm() {
    
    if (checkNames(inputFirstName) && checkNames(inputName) && checkMail(inputEmail) && checkMessage(inputMessage)) {
        return true;
    } else {
        return false;
    } 
}