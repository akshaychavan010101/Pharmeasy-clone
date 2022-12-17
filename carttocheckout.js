let stored = JSON.parse(localStorage.getItem("stored"))||[];

let productDisplay = document.getElementById("productDisplay")


let totalitems = document.getElementById("totalitems");

function displayFromproducts() {
    productDisplay.innerHTML = null;
    totalitems.innerText = stored.length;

    stored.forEach((element, index) => {
        let bigdiv = document.createElement("div");

        let imgdiv = document.createElement("div");
        let proimg = document.createElement("img");
        proimg.setAttribute("src",element.image);
        imgdiv.append(proimg);




        let descdiv = document.createElement("div");
        let name = document.createElement("h3");
        name.innerText = element.name;

        let price = document.createElement("p");
        price.innerText = "Price ₹ "+element.price;

        let mrp = document.createElement("p");
        mrp.innerText = "MRP ₹ "+element.mrp;

        let desc = document.createElement("p");
        desc.innerText = "Discount: 30%";

        let detail = document.createElement("p");
        detail.innerText = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis exercitationem adipisci minima quidem nobis corporis!"





        let Remove = document.createElement("button");
        Remove.innerText = "Remove";

        Remove.addEventListener("click",()=>{
            stored.splice(index,1);
            displayFromproducts(stored)
            localStorage.setItem("stored",JSON.stringify(stored));
        })

        descdiv.append(name,price,mrp,desc,detail,Remove);


        bigdiv.append(imgdiv,descdiv)
        productDisplay.append(bigdiv);

    });

}
displayFromproducts();


let Proceedbutton = document.getElementById("Proceedbutton");
Proceedbutton.addEventListener("click",()=>{
    window.location.assign("http://127.0.0.1:5500/checkout.html")
})