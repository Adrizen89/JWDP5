fetch("http://localhost:3000/api/furniture/")
.then(response => response.json())
.then(response =>{
    console.log(response)
    response.forEach(element => {
        
        let detailProduit = document.getElementById('detailProduit');

        let container = document.createElement('article');
});
});