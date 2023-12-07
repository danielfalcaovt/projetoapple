// AO CLICAR
function searche(){
let barrapesquisa = $('div#srch')
let menuu = $("header")
let pesquisa = $("input#busca")
let nav = $("nav")
nav.css('display','flex')
barrapesquisa.slideToggle()
barrapesquisa.css("display","flex")
barrapesquisa.show()

modal.slideUp()
menuu.css("visibility","hidden")
setTimeout(() =>{
    
    pesquisa.css("display","flex")
        pesquisa.css("animation","abertura ease-in-out 1.1s")
        pesquisa.focus()},80)
}



function fechar() {
    let barrapesquisa = $("div#srch")
    let menuu = $("header")
    let nav = $("nav")
    nav.hide()
    let pesquisa = $("input#busca")
    
    barrapesquisa.slideToggle()
    menuu.css('visibility','visible')
    pesquisa.css("animation","")
    pesquisa.css("animation","fechamento ease-in-out 0.5s")
    
    //DELAY ANTI-FLOODING
    setTimeout(() =>{
        barrapesquisa.css("display","none")
        pesquisa.css("display","none")
        
        
    },400)
        
    }
    function menu(){
        let nav = $("nav")
        let line = $("#firstline")
        let line2 = $("#secondline")
        line.toggleClass('rotatex')
        line2.toggleClass("rotatey")        
        nav.slideToggle()
        nav.css("display","flex")
       

}

// Scroll top when click on imac link
let scrolltop = $("a[href='#top']").click(function(){
    $("html,body").animate({ scrollTop:0 }, "slow")
})


let modal = $(".topmodal")
setTimeout(() => {
    modal.slideDown()
    modal.css("display","flex")

}, 2000);
    modal.click(function(){
    modal.slideUp()
})


let alertclose = $(".alertclose")
let alertmodal = $(".alertmodal")

setTimeout(() => {
    alertmodal.fadeIn()
    alertmodal.css("display","flex")

}, 5000);

alertclose.click(function(){
    alertmodal.fadeOut()
})