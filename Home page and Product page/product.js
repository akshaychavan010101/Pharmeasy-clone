//this is to append the data of the product page
let data = [];
let NeedsortData = [];
fetcedData();
function fetcedData() {
    let promise = fetch("https://6398ada7fe03352a94dad946.mockapi.io/pr1");
    promise.then((request) => {
        return request.json();

    })
        .then((res) => {
            data = res;
            NeedsortData = res;
            // console.log(res);
        })
        .catch((error) => {
            console.log(error);
        })
}




let bigDisplay = document.getElementById("bigDisplay");
let category1 = document.getElementById("category1");


let byprice1 = document.getElementById("byprice1");
let byprice2 = document.getElementById("byprice2");
let byprice3 = document.createElement("byprice3");
let byprice4 = document.createElement("byprice1");


let sortby  = document.getElementById("sortby");

category1.addEventListener("click", display); 

function display(){
    bigDisplay.innerHTML = null

    data.forEach((element, index) => {
        if (element.category == "Personal Care") {

            let smalldisplay1 = document.createElement("div");

            let headingCatch = document.getElementById("headingCatch")
            headingCatch.innerText = "Personal Care"
            let img = document.createElement("img");
            img.setAttribute("src", element.image);

            let h5 = document.createElement("h5");
            h5.innerText = element.name;

            let p1 = document.createElement("p");
            p1.innerText = "MRP " + element.mrp;

            let p2 = document.createElement("p");
            p2.innerText = "Price " + element.price

            let addCartbt = document.createElement("button");
            addCartbt.innerText = "Add to Cart"

            smalldisplay1.append(img, h5, p1, p2, addCartbt);
            bigDisplay.append(smalldisplay1);

            sortby.addEventListener("click", () => {
               let sortvalue = sortby.value;
               if(sortvalue == "Price low to high"){
                let x=  data.sort((a,b) => { return a.mrp-b.mrp });
                display(x);
               
               }else if(sortvalue == "Price high to low"){
                let x=  data.sort((a,b) => { return b.mrp-a.mrp });
                display(x);
               }
            })

        }
    })
}






let category2 = document.getElementById("category2");
category2.addEventListener("click", () => {
    bigDisplay.innerHTML = null
    data.forEach((element, index) => {
        if (element.category == "Skin Care") {

            let smalldisplay1 = document.createElement("div");

            let headingCatch = document.getElementById("headingCatch")
            headingCatch.innerText = "Skin Care"
            let img = document.createElement("img");
            img.setAttribute("src", element.image);

            let h5 = document.createElement("h5");
            h5.innerText = element.name;

            let p1 = document.createElement("p");
            p1.innerText = "MRP " + element.mrp;

            let p2 = document.createElement("p");
            p2.innerText = "Price " + element.price

            let addCartbt = document.createElement("button");
            addCartbt.innerText = "Add to Cart"


            smalldisplay1.append(img, h5, p1, p2, addCartbt);
            bigDisplay.append(smalldisplay1);
        }
    })
});



let category3 = document.getElementById("category3");
category3.addEventListener("click", () => {
    bigDisplay.innerHTML = null


    data.forEach((element, index) => {
        if (element.category == "Healthcare Devices") {

            let smalldisplay1 = document.createElement("div");

            let headingCatch = document.getElementById("headingCatch")
            headingCatch.innerText = "Healthcare Devices"
            let img = document.createElement("img");
            img.setAttribute("src", element.image);

            let h5 = document.createElement("h5");
            h5.innerText = element.name;

            let p1 = document.createElement("p");
            p1.innerText = "MRP " + element.mrp;

            let p2 = document.createElement("p");
            p2.innerText = "Price " + element.price

            let addCartbt = document.createElement("button");
            addCartbt.innerText = "Add to Cart"


            smalldisplay1.append(img, h5, p1, p2, addCartbt);
            bigDisplay.append(smalldisplay1);
        }
    })
});


let category4 = document.getElementById("category4");
category4.addEventListener("click", () => {
    bigDisplay.innerHTML = null


    data.forEach((element, index) => {
        if (element.category == "Health Food & Drinks") {

            let smalldisplay1 = document.createElement("div");

            let headingCatch = document.getElementById("headingCatch")
            headingCatch.innerText = "Health Food & Drinks"
            let img = document.createElement("img");
            img.setAttribute("src", element.image);

            let h5 = document.createElement("h5");
            h5.innerText = element.name;

            let p1 = document.createElement("p");
            p1.innerText = "MRP " + element.mrp;

            let p2 = document.createElement("p");
            p2.innerText = "Price " + element.price
            let addCartbt = document.createElement("button");
            addCartbt.innerText = "Add to Cart"


            smalldisplay1.append(img, h5, p1, p2, addCartbt);
            bigDisplay.append(smalldisplay1);
        }
    })
});


let category5 = document.getElementById("category5");
category5.addEventListener("click", () => {
    bigDisplay.innerHTML = null


    data.forEach((element, index) => {
        if (element.category == "Home Care") {

            let smalldisplay1 = document.createElement("div");

            let headingCatch = document.getElementById("headingCatch")
            headingCatch.innerText = "Home Care"
            let img = document.createElement("img");
            img.setAttribute("src", element.image);

            let h5 = document.createElement("h5");
            h5.innerText = element.name;

            let p1 = document.createElement("p");
            p1.innerText = "MRP " + element.mrp;

            let p2 = document.createElement("p");
            p2.innerText = "Price " + element.price
            let addCartbt = document.createElement("button");
            addCartbt.innerText = "Add to Cart"


            smalldisplay1.append(img, h5, p1, p2, addCartbt);
            bigDisplay.append(smalldisplay1);
        }
    })
});




