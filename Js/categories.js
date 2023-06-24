
let cateselects = document.getElementsByClassName("cate-select")
let catecards = document.getElementsByClassName("cate-cards")
let cateheader = document.getElementById("cateheaderid")
    
const cateslectfunk =(catesection)=>{

    let v = event.currentTarget.innerText
        u = v.toUpperCase();
    cateheader.innerText = u
    for(catecard of catecards){
        catecard.classList.remove("activcate")
    }

    document.getElementById(catesection).classList.add("activcate")
  

}