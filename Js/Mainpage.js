// ---------------Trending Scroll bar-------------------

let scrlcont = document.querySelector(".trending-products")
let arrleft = document.getElementById("arrow-left")
let arrright = document.getElementById("arrow-right")


scrlcont.addEventListener("wheel", (eve) => {
    eve.preventDefault();
    scrlcont.scrollLeft += eve.deltaY;
})

arrright.addEventListener("click", () => {
    scrlcont.scrollLeft += 198;
})

arrleft.addEventListener("click", () => {
    scrlcont.scrollLeft -= 198;
})

// -------------cart-count---------------

let cartcount = document.getElementById("cart-count")
let cartmaincount = document.getElementById("cartmaincount")
let cartsubtotal = document.getElementById("cartsubt")
let prname = document.getElementById("prname").innerText
let prc = document.getElementById("prc").innerText
prc = Number.parseInt(prc)


let mainpro = {
    name: prname,
    price: prc,
    inCart: 0,
}

const funn =()=>{
    cartfun(mainpro);
    totalcost(mainpro)

    
}
onloadcartnumbers = () => {
    let productnumbers = localStorage.getItem("cartNumbers")
    if (productnumbers) {
        cartcount.textContent = productnumbers
        cartmaincount.textContent = productnumbers
    }
    let cartcost = localStorage.getItem("totalcost");
    if (cartcost) {
        cartsubtotal.textContent = cartcost
    }
}
const cartfun = (product) => {
    let productnumbers = localStorage.getItem("cartNumbers");
    productnumbers = parseInt(productnumbers);

    if (productnumbers) {
        localStorage.setItem("cartNumbers", productnumbers + 1)
        cartcount.textContent = productnumbers + 1;
        cartmaincount.textContent = productnumbers + 1;
    }
    else {
        localStorage.setItem("cartNumbers", 1)
        cartcount.textContent = 1;
        cartmaincount.textContent = 1;
    }
    setItems(product)
    displaycart()
}

const setItems = (product) => {

    let cartItems = localStorage.getItem("productincart")
    cartItems = JSON.parse(cartItems)

    if (cartItems != null) {

        if (cartItems[product.name] == undefined) {
            cartItems = {
                ...cartItems,
                [product.name]: product
            }
        }
        cartItems[product.name].inCart += 1;
    } else {
        product.inCart = 1
        cartItems = {
            [product.name]: product
        }
    }



    localStorage.setItem("productincart", JSON.stringify(cartItems))
}

const totalcost =(product)=>{
    let cartcost = localStorage.getItem("totalcost");
   


    if(cartcost != null){
        cartcost = Number.parseInt(cartcost);
        localStorage.setItem("totalcost", cartcost + product.price)
        cartsubtotal.innerText = cartcost + product.price
    }
    else{
        localStorage.setItem("totalcost", product.price)
        cartsubtotal.innerText = product.price
    }
}

const displaycart =()=>{
    let cartItems = localStorage.getItem("productincart");
    cartItems = JSON.parse(cartItems)

    let cartproducts = document.querySelector(".cartproducts")

    if(cartItems && cartproducts){
        cartproducts.innerHTML = " ";
        Object.values(cartItems).map(item =>{
            cartproducts.innerHTML += `
            <div class="prdtcart">
            <i class="fa-solid fa-gift fa-lg"></i>
            <p class="item-name">${item.name}<p/>
            <p class="item-quan">Quantity(${item.inCart})<p/>
            <p class= "item-price">${(item.price)*(item.inCart)}.00$<p/>
            <div/>
            `
        })
    }
}

onloadcartnumbers();
displaycart();

let clrcart = document.getElementById("clearcart")
let cartproducts = document.querySelector(".cartproducts")

clrcart.addEventListener("click", ()=>{
    localStorage.clear()
    cartproducts.innerHTML =""
    cartcount.innerHTML=""
    cartmaincount.innerHTML=""
    cartsubtotal.innerText ="00"
})


// ------------------------showcart-----------------

let dispcart = document.getElementById("dispcart");
let cancelshowcart = document.getElementById("cancelshowcart");
let showcarttt = document.getElementById("showcart");


dispcart.addEventListener("click", () =>{
    showcarttt.classList.add("activecart");
})
cancelshowcart.addEventListener("click", ()=>{
    showcarttt.classList.remove("activecart");
})
document.addEventListener("mouseup", (o)=>{
    if(!showcarttt.contains(o.target)){
        showcarttt.classList.remove("activecart");
    }
})