//Chiffre du Panier 
const node = document.getElementById("chiffre");
if(localStorage.getItem("cpt")){
    node.textContent = localStorage.getItem("cpt");
}
else{
    node.textContent = 0;
}

//Affichage de la page confirmation de commande
let container = document.getElementById("main-confirmation");

let article = document.createElement('article');
article.setAttribute("id", "article");
container.append(article);
//Affichage Identifiant de commande 
let divId = document.createElement('div');
divId.setAttribute("class", "identifiant");
article.append(divId);

let textId = document.createElement('p');
textId.textContent = "Votre identifiant est : ";
divId.append(textId);

let id = document.createElement('p');
id.textContent = localStorage.getItem("orderId");
id.setAttribute("class", "id");
divId.append(id);

//Affichage du Prix Total de la commande
let divPrix = document.createElement('div');
divPrix.setAttribute("class", "prixTotal");
article.append(divPrix);

let textPrix = document.createElement('p');
textPrix.textContent = "Le prix total de votre commande est de :";
divPrix.append(textPrix);

let prixTotal = document.createElement('p');
prixTotal.textContent = localStorage.getItem("total") / 1000 +"0€";
prixTotal.setAttribute("class", "prix");
divPrix.append(prixTotal);

let merci = document.createElement('p');
merci.textContent = "Orinoco vous remercie de votre commande !";
merci.setAttribute("class", "merci");
article.append(merci);

                


