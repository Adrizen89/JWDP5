const param = window.location.search
const params = new URLSearchParams(param)
const id = params.get("id")
console.log(id);

var maRequete = new Request('http://localhost:3000/api/furniture/' +id);

fetch(maRequete)
.then(response => response.json())
.then(response =>{
    console.log(response)
    

        let detailProduit = document.getElementById('detailProduit');

                let container = document.createElement('article');
                detailProduit.append(container);

                let img = document.createElement('img');
                img.src = response.imageUrl;
                container.append(img);

                let contentDescription = document.createElement('p');
                contentDescription.textContent = response.description;
                contentDescription.setAttribute("class", "content");
                container.append(contentDescription);

                let divPrecision = document.createElement('div');
                divPrecision.setAttribute("class", "precision");
                container.append(divPrecision);

                let titleProduit = document.createElement('h2');
                titleProduit.textContent = response.name;
                divPrecision.append(titleProduit);

                let select = document.createElement('select');
                response.varnish.forEach(element => {
                        const option = document.createElement('option');
                        option.textContent = element;
                        select.append(option);
                });
                divPrecision.append(select);

                let prixProduit = document.createElement('p');
                prixProduit.textContent = response.price / 1000 + "0€" ;
                prixProduit.setAttribute("class", "prix");
                divPrecision.append(prixProduit);


                let btnAjoutPanier = document.createElement('button');
                btnAjoutPanier.textContent = "Ajouter au panier !";
                btnAjoutPanier.setAttribute("type", "submit");
                btnAjoutPanier.setAttribute("class", "btn_ajoutPanier");
                divPrecision.append(btnAjoutPanier);
   
        
});