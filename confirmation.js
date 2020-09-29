

const node = document.getElementById("chiffre");
if(localStorage.getItem("cpt")){
    node.textContent = localStorage.getItem("cpt");
}
else{
    node.textContent = 0;
}

fetch("http://localhost:3000/api/furniture")
            .then(response => response.json())
            .then(response =>{
                console.log(response);

                response.forEach(element => {

                    const orderId = JSON.parse(localStorage.getItem("orderId"));

                    let main = document.getElementById('main-confirmation');
                    let container = document.createElement('article');
                    main.append(container);

                    let id = document.createElement('p');
                    id.textContent = response._id;
                    container.append(id);
                });

            });

