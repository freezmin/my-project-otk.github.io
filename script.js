document.addEventListener("DOMContentLoaded", showobjects);


function showobjects() {
    

const otkritka = document.querySelector(".otkritka")
const elem1 = document.querySelector(".elem1")
const elem2 = document.querySelector(".elem2")
const elem3 = document.querySelector(".elem3")
const elem4 = document.querySelector(".elem4")
const elem5 = document.querySelector(".elem5")
const serdse = document.querySelector(".serdse")

let show = false

otkritka.addEventListener("mouseover", function() {
    elem1.style.transform = 'translate(-550px , 0px)'
    elem2.style.transform = 'translate(0 ,350px)'
    elem3.style.transform = 'translate(550px ,0px)'
    elem4.style.transform = 'translate( 300px, -300px)'
    elem5.style.transform = 'translate( -300px, -300px)'
    serdse.style.transform = 'scale(3.5)'
    otkritka.style.boxShadow = '0 0 100px #fc90de'
})

otkritka.addEventListener("mouseout", function() {
    elem1.style.transform = 'translateY(0)'
    elem2.style.transform = 'translateY(0)'
    elem3.style.transform = 'translateY(0)'
    elem4.style.transform = 'translateY(0)'
    elem5.style.transform = 'translateY(0)'
    serdse.style.transform = 'scale(1)'
    otkritka.style.boxShadow = 'none'
})
}