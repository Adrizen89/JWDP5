//Chiffre du Panier 
const node = document.getElementById("chiffre");
if (localStorage.getItem("cpt")) {
    node.textContent = localStorage.getItem("cpt");
}
else {
    node.textContent = 0;
}
//recupération des données du panier
const panier = JSON.parse(localStorage.getItem("panier"))

let main = document.getElementById('main-panier');
const produit = [];
let total = 0;

//Affichage du panier
panier.forEach(element => {

    total += element.price;
    produit.push(element._id);

    let container = document.createElement('article');
    main.append(container);

    let img = document.createElement('img');
    img.src = element.imageUrl;
    container.append(img);

    let nameProduit = document.createElement('h2');
    nameProduit.textContent = element.name
    container.append(nameProduit);

    let prixProduit = document.createElement('p');
    prixProduit.textContent = element.price / 1000 + "0€"
    container.append(prixProduit);

});

//Formulaire
let divName = document.createElement("div");
let divFirstName = document.createElement("div");
let divMail = document.createElement("div");
let divAdresse = document.createElement("div");
let divVille = document.createElement("div");

let formulaire = document.createElement('form');
formulaire.setAttribute("id", "myForm");
formulaire.setAttribute("method", "post");
main.append(formulaire);

formulaire.append(divName);

let myName = document.createElement('label');
myName.textContent = "Votre Nom :";
myName.setAttribute("for", "name");
let name = document.createElement('input');
name.setAttribute("id", "name");
name.setAttribute("name", "user_name");
name.setAttribute("placeholder", "Berard");
name.setAttribute("required", "required");
divName.append(myName);
divName.append(name);

formulaire.append(divFirstName);

let myFirstName = document.createElement('label');
myFirstName.textContent = "Votre Prénom :";
myFirstName.setAttribute("for", "firstName");
let firstName = document.createElement('input');
firstName.setAttribute("id", "firstName");
firstName.setAttribute("name", "user_firstName");
firstName.setAttribute("placeholder", "Adrien");
firstName.setAttribute("required", "required");
divFirstName.append(myFirstName);
divFirstName.append(firstName);

formulaire.append(divMail);

let myMail = document.createElement('label');
myMail.textContent = "Votre adresse Mail :";
myMail.setAttribute("for", "mail");
let mail = document.createElement('input');
mail.setAttribute("id", "mail");
mail.setAttribute("name", "user_mail");
mail.setAttribute("type", "email");
mail.setAttribute("placeholder", "adrien@hotmail.fr");
mail.setAttribute("required", "required");
divMail.append(myMail);
divMail.append(mail);

formulaire.append(divAdresse);

let myAdress = document.createElement('label');
myAdress.textContent = "Votre Adresse :";
myAdress.setAttribute("for", "adress");
let adress = document.createElement('input');
adress.setAttribute("id", "adress");
adress.setAttribute("name", "user_adress");
adress.setAttribute("placeholder", "2 rue du théâtre");
adress.setAttribute("required", "required");
divAdresse.append(myAdress);
divAdresse.append(adress);

formulaire.append(divVille);

let myTown = document.createElement('label');
myTown.textContent = "Votre Ville :";
myTown.setAttribute("for", "town");
let town = document.createElement('input');
town.setAttribute("id", "town");
town.setAttribute("name", "user_town");
town.setAttribute("placeholder", "Auxerre");
town.setAttribute("required", "required");
divVille.append(myTown);
divVille.append(town);



let btnSubmit = document.createElement('input');
btnSubmit.setAttribute("type", "submit");
btnSubmit.setAttribute("value", "Commander !");
btnSubmit.setAttribute("id", "btnSubmit");
btnSubmit.setAttribute("href", "confirmation.html");
formulaire.append(btnSubmit);


//envoi du formulaire
window.addEventListener("load", function () {
    function sendData() {
        const contact = {};
        const lastName = document.getElementById("name").value;
        const firstName = document.getElementById("firstName").value;
        const address = document.getElementById("adress").value;
        const city = document.getElementById("town").value;
        const email = document.getElementById("mail").value;

        contact.lastName = lastName;
        contact.firstName = firstName;
        contact.address = address;
        contact.city = city;
        contact.email = email;

        fetch("http://localhost:3000/api/furniture/order", {
            method: 'POST', headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ contact: contact, products: produit })
        })
            .then(response => response.json())
            .then(response => {
                localStorage.setItem("orderId", response.orderId);
                localStorage.setItem("total", total);
                document.location.href = "confirmation.html?orderId=" + response.orderId;
            })

    }
    var form = document.getElementById("myForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        sendData();

    });
});






