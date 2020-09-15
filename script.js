var maRequete = new Request('http://localhost:3000/api/furniture/');

fetch(maRequete)
.then(response => response.json())
.then(response =>{
    console.log(response)
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
});


/*let idFurniture = "";
async function detailFurniture() {
    idFurniture = location.search;
    const detailFurniture = await element();

    let detailProduit = document.getElementById('detailProduit');

    let articleContainer = document.createElement('article');
    detailProduit.append(articleContainer);

    let imgTrue = document.createElement('img');
    imgTrue.src = detailFurniture.imageUrl;
    articleContainer.append(imgTrue);
}*/



