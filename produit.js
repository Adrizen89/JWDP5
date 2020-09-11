var maRequete = new Request('http://localhost:3000/api/furniture/');

fetch(maRequete)
.then(response => response.json())
.then(response =>{
    console.log(response)
    response.forEach(element => {

        
        let detailProduit = document.getElementById('detailProduit');

        let container = document.createElement('article');
        detailProduit.append(container);

        let img = document.createElement('img');
        img.src = element.imageUrl;
        container.append(img);

        let contentDescription = document.createElement('p');
        contentDescription.textContent = element.description;
        contentDescription.setAttribute("class", "content");
        container.append(contentDescription);

        let divPrecision = document.createElement('div');
        divPrecision.setAttribute("class", "precision");
        container.append(divPrecision);

        let titleProduit = document.createElement('h2');
        titleProduit.textContent = element.name;
        divPrecision.append(titleProduit);

        let prixProduit = document.createElement('p');
        prixProduit.textContent = element.price / 1000 + "0€" ;
        prixProduit.setAttribute("class", "prix");
        divPrecision.append(prixProduit);

        let formulaire = document.createElement('select');
        let option = document.createElement('option');
        formulaire.setAttribute("id", "choixOption");
        option.textContent = element.varnish;
        divPrecision.append(formulaire);
        formulaire.append(option);

        let btnAjoutPanier = document.createElement('button');
        btnAjoutPanier.textContent = "Ajouter au panier !";
        btnAjoutPanier.setAttribute("type", "submit");
        btnAjoutPanier.setAttribute("class", "btn_ajoutPanier");
        divPrecision.append(btnAjoutPanier);
});
});