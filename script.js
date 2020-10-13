const node = document.getElementById("chiffre");
if(localStorage.getItem("cpt")){
    node.textContent = localStorage.getItem("cpt");
}
else{
    node.textContent = 0;
}

const maRequete = new Request('http://localhost:3000/api/furniture/');

fetch(maRequete)
.then(response => response.json())
.then(response =>{
    console.log(response)
    afficherMeubles(response);
});


function afficherMeubles(response){
    response.forEach(element => {
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
        prixProduit.textContent = element.price / 1000 +"0€"
        produitContainer.append(prixProduit);

        let savoirPlus = document.createElement('a');
        savoirPlus.textContent = "En savoir plus "
        savoirPlus.href = "produit.html?id="+element._id
        produitContainer.append(savoirPlus);
    });
}


