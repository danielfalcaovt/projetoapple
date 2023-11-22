// AO CLICAR
function searche(){
let barrapesquisa = document.querySelector("div#srch")
let menu = document.querySelector("header")
barrapesquisa.style.visibility = "visible"
// VISIBILITY HIDDEN DA DIV #SRCH
    menu.style.visibility = "hidden"

    deappear()
  
// SE TRUE =FALSE
// SE FALSE  =TRUE
}
function fechar() {
    let barrapesquisa = document.querySelector("div#srch")
    let menu = document.querySelector("header")
    menu.style.visibility = "visible"
    barrapesquisa.style.visibility = "hidden"

}
function appear() {
    let pesquisa = document.querySelector("input#busca")
    let sumirbotao = document.querySelector("a#appearr")
    let aparecerbotao = document.querySelector("a#closebutton")
//DELAY ANTI-FLOODING
    setTimeout(() =>{
    sumirbotao.style.display = "none"
    aparecerbotao.style.display = "flex"
    pesquisa.style.display = "flex"
    pesquisa.focus()
    aparecerbotao.style.animation = "aumentar ease-in-out 0.3s"},80)
    
}
function deappear() {
    let pesquisa = document.querySelector("input#busca")
    let aparecerbotao = document.querySelector("a#appearr")
    let sumirbotao = document.querySelector("a#closebutton")
    //DELAY ANTI-FLOODING
    setTimeout(() =>{
    sumirbotao.style.display = "none" 
    aparecerbotao.style.display = "flex"
    pesquisa.style.display = "none"
    aparecerbotao.style.animation = "aumentar ease-in-out 0.3s"},80)
   
}
 