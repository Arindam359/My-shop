
let mainimg = document.getElementById("mainimg")


const chngimg = () =>{
    let c = event.currentTarget.innerHTML
    mainimg.innerHTML = c
}


let prdtquantity = document.getElementById("quan")
let prdtprice = document.getElementById("prc")

let p = prdtprice.innerText
p = Number.parseInt(p)

const quantplus = () =>{
    let q = prdtquantity.innerText
    q = Number.parseInt(q)
    
    if(q<9){
        prdtquantity.innerText = (q+=1)
        prdtprice.innerHTML = `${(p*q)} $`
    }    
}   
const quantminus = () =>{
    let q = prdtquantity.innerText
    q = Number.parseInt(q)
    if(q>1){
        prdtquantity.innerText = (q-=1) 
        prdtprice.innerHTML = `${(p*q)} $`
    }
}   
