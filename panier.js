const node = document.getElementById("chiffre");
if(localStorage.getItem("cpt")){
    node.textContent = localStorage.getItem("cpt");
}
else{
    node.textContent = 0;
}
var maRequete = new Request('http://localhost:3000/api/furniture/');

fetch(maRequete)
.then(response => response.json())
.then(response =>{
    console.log(response)
    
                let mainPanier = document.getElementById('main-panier');

                let listeProduits = document.createElement('section');
                let produit = document.createElement('article');
                let prixTotal = document.createElement('article');

                let img = document.createElement('img');
                let titleProduit = document.createElement('h3');
                let prixProduit = document.createElement('p');
                let annuler = document.createElement('button');


                mainPanier.append(listeProduits);
                listeProduits.append(produit);

                produit.append(img);
                produit.append(titleProduit);
                produit.append(prixProduit);
                produit.append(annuler);

                
});