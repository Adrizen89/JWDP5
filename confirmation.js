const { response } = require("express");

const node = document.getElementById("chiffre");
if(localStorage.getItem("cpt")){
    node.textContent = localStorage.getItem("cpt");
}
else{
    node.textContent = 0;
}

response.forEach(element => {

    let main = document.getElementById('main-confirmation');

    let container = document.createElement('article');
    main.append(container);

    let id = document.createElement('img');
    id.textContent = element.order_id;
    container.append(id);
});