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
    

    const panier = JSON.parse(localStorage.getItem("panier")) 
    if(panier){
            response.forEach(element => {
            let main = document.getElementById("main-panier");
            let img = document.createElement('img');
            img.src = response.imageUrl;
            main.append(img);
            });
    }
    else{
            alert("votre panier est vide !")
    }


        
});          
