// AO CLICAR
function searche(){
let barrapesquisa = document.querySelector("div#srch")
let menuu = document.querySelector("header")
barrapesquisa.style.visibility = "visible"

let nav = document.querySelector("nav")
if (nav.classList[0] == "hdn"){
}else{menu()}
// VISIBILITY HIDDEN DA DIV #SRCH
menuu.style.visibility = "hidden"
// SE TRUE =FALSE
// SE FALSE  =TRUE
let pesquisa = document.querySelector("input#busca")
//FUNÇAO MENU

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
    pesquisa.style.animation = ""
    pesquisa.style.animation = "fechamento ease-in-out 0.5s"
    
    //DELAY ANTI-FLOODING
    setTimeout(() =>{
        let nav = document.querySelector("nav")
        if (nav.classList[0] == "hdn"){
       menu() }else{}
        barrapesquisa.style.visibility = "hidden"
        


        pesquisa.style.display = "none"
        
        
    },400)
        
    }
    function menu(){
        let nav = document.querySelector("nav")
        let line = document.querySelector("div#firstline")
        let line2 = document.querySelector("div#secondline")
        line.classList.toggle('rotatex')
        line2.classList.toggle("rotatey")        
        nav.classList.toggle('hdn')
       

}
 