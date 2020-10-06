

const node = document.getElementById("chiffre");
if(localStorage.getItem("cpt")){
    node.textContent = localStorage.getItem("cpt");
}
else{
    node.textContent = 0;
}

const orderId = JSON.parse(localStorage.getItem("orderId"));
let main = document.getElementById('main-confirmation');
                orderId.forEach(element => {

                    

                    
                    let container = document.createElement('article');
                    main.append(container);

                    let id = document.createElement('p');
                    id.textContent = element.orderId;
                    container.append(id);
                });


