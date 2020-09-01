//PANIER

//panier de l'user
let panier = JSON.parse(localStorage.getItem("panier"));

//affichage du nombre d'article dans le panier
function nombreIndexPanier() {
    let indexPanier = document.getElementById("indexPanier");
    indexPanier.textContent = Panier.lenght;
}

function nombreProduitPanier() {
    let produitPanier = document.getElementById("produitPanier");
    produitPanier.textContent = panier.lenght;
}

//verification et initialisation du panier

if (localStorage.getItem("panier")) {
    console.log(panier);
}else{
    console.log("le panier va être initialisé");
    let panierInit = [];
    localStorage.setItem("panier", JSON.stringify(panierInit));
}



//ajout au panier

ajoutPanier = () => {
    let acheter = document.getElementById("ajout_panier");
    acheter.addEventListener("click", async function () {
        const ajout = await getAllMeubles();
        panier.push(ajout);
        localStorage.setItem("panier", JSON.stringify(panier));
        console.log("Le produit a été ajouté au panier");
        alert("Cet article a été ajouté dans votre panier");
        loaction.reload();
    });
};