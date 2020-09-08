fetch("http://localhost:3000/api/furniture/")
.then(reponse => reponse.json())
.then(reponse => {
    console.log(reponse)
    reponse.forEach(element => {
        let main = document.getElementById('main');

        let produitContainer = document.createElement('article');
        main.append(produitContainer);

        let img = document.createElement('img'); 
        img.src = element.imageUrl;
        produitContainer.append(img);
        
        let nameProduit = document.createElement('h2');
        nameProduit.textContent = element.name
        produitContainer.append(nameProduit);

        let prixProduit = document.createElement('p');
        prixProduit.textContent =  element.price+"€"
        produitContainer.append(prixProduit);


        let savoirPlus = document.createElement('a');
        savoirPlus.textContent = "En savoir plus"
        savoirPlus.href = "produit.html?id="+element._id
        produitContainer.append(savoirPlus);
    });
})

/*
let title = document.createElement('h1');

//img
let img1 = document.createElement('img');
let img2 = document.createElement('img');
let img3 = document.createElement('img');
//Produits
let listeProduit = document.createElement('section');
let produit1 = document.createElement('article');
let produit2 = document.createElement('article');
let produit3 = document.createElement('article');
let nameProduit1 = document.createElement('h2');
let nameProduit2 = document.createElement('h2');
let nameProduit3 = document.createElement('h2');
//Prix
let prix1 = document.createElement('p');
let prix2 = document.createElement('p');
let prix3 = document.createElement('p');
//En savoir plus
let savoirPlus1 = document.createElement('a');
let savoirPlus2 = document.createElement('a');
let savoirPlus3 = document.createElement('a');

title.textContent = ('Orinoco');
//Texte Produits
nameProduit1.textContent = ('Table en Chêne');
nameProduit2.textContent = ('Table');
nameProduit3.textContent = ('Chaise en Chêne');
//Texte Prix
prix1.textContent = ('99€');
prix2.textContent = ('119€');
prix3.textContent = ('149€');
//Texte En Savoir Plus
savoirPlus1.textContent = ('En savoir plus...');
savoirPlus2.textContent = ('En savoir plus...');
savoirPlus3.textContent = ('En savoir plus...');

//Ajout Atttribut
savoirPlus1.setAttribute("href", "produit.html");
savoirPlus2.setAttribute("href", "produit.html");
savoirPlus3.setAttribute("href", "produit.html");

img1.setAttribute("class", "img1");
img2.setAttribute("class", "img2");
img3.setAttribute("class", "img3");

//img
img1.src = "images/oak_1.jpg";
img2.src = "images/oak_2.jpg";
img3.src = "images/oak_3.jpg";


header.append(title);
//Incorporation Produits
main.append(listeProduit);
listeProduit.append(produit1, produit2, produit3);

produit1.append(img1);
produit2.append(img2);
produit3.append(img3);

produit1.append(nameProduit1);
produit2.append(nameProduit2);
produit3.append(nameProduit3);
//Incorporation Prix
produit1.append(prix1);
produit2.append(prix2);
produit3.append(prix3);
//Incorporation En Savoir Plus
produit1.append(savoirPlus1);
produit2.append(savoirPlus2);
produit3.append(savoirPlus3);

*/