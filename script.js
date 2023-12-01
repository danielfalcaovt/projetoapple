// AO CLICAR
function searche(){
let barrapesquisa = document.querySelector("div#srch")
let menuu = document.querySelector("header")
barrapesquisa.style.visibility = "visible"
// VISIBILITY HIDDEN DA DIV #SRCH
    menuu.style.visibility = "hidden"
// SE TRUE =FALSE
// SE FALSE  =TRUE
let pesquisa = document.querySelector("input#busca")
//FUNÇAO MENU
let nav = document.querySelector("nav")
    nav.style.display = "flex"


//DELAY ANTI-FLOODING
setTimeout(() =>{
pesquisa.style.display = "flex"
pesquisa.style.animation = "abertura ease-in-out 1.1s"
pesquisa.focus()},80)
}
function fechar() {
    let barrapesquisa = document.querySelector("div#srch")
    let menuu = document.querySelector("header")
    menuu.style.visibility = "visible"
    let pesquisa = document.querySelector("input#busca")
    //FUNÇAO MENU
    let nav = document.querySelector("nav")
    pesquisa.style.animation = ""
    pesquisa.style.animation = "fechamento ease-in-out 0.5s"
    
    //DELAY ANTI-FLOODING
    setTimeout(() =>{
        barrapesquisa.style.visibility = "hidden"
        nav.style.display = "none"
        pesquisa.style.display = "none"
        
        
    },400)
        
    }


    
    function menu(){
        let links = document.getElementsByClassName("linkss")
        let nav = document.querySelector("nav")
    if (nav.style.display == "none"){
        nav.style.display = "flex"
        links.style.animation = "abertura ease-in-out 0.8s" 
        
    }else{
            nav.style.display = "none"
    }

}
 