let productArray = JSON.parse(localStorage.getItem("displayThis"));

if (productArray.length == 1) {
    let showthis = document.getElementById("showthis");
    showthis.setAttribute("src", productArray[0].image);

    let Addtocart = document.getElementById("Addtocart");

    let proname = document.getElementById("proname");
    proname.innerText = productArray[0].name;


    let price = document.getElementById("price");
    price.innerText = "$" + productArray[0].price;

}

// refresh window is remaining

// cartheading
// viewcartBt

// Addtocartbt


let stored = JSON.parse(localStorage.getItem("stored"));


let Addtocartbt = document.getElementById("Addtocartbt");
Addtocartbt.addEventListener("click", () => {
    let flag = false;
    console.log("true")
    for (let i = 0; i < stored.length; i++) {
        if (productArray[0].id == stored[i].id) {
            flag = true;
            console.log("true")
            break;
        }
    }
    if (flag == true) {
        alert("Product already in the cart");
        console.log("true")
    } else {
        console.log("true")
        stored.push(productArray[0]);
        localStorage.setItem("stored", JSON.stringify(stored));
        window.location.assign("/carttocheckout.html")
        alert("Product added to the cart");
    }
})


let viewcartBt = document.getElementById("viewcartBt");
viewcartBt.addEventListener("click",()=>{
    window.location.assign("/carttocheckout.html")
});



