function isMobile(){
    return window.innerWidth<=768
}
if (isMobile()){
    document.getElementById("buttonsts").style.marginLeft = "9vw"
}
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("loading").style.backgroundColor = "#00000000"
    document.getElementById("loading").style.visibility = "collapse"
    if (isMobile()){
        document.getElementById("buttonsts").style.marginLeft = "100%"
    }
})


let button = [  (document.getElementById("code")),
                (document.getElementById("code1")),
                (document.getElementById("code2")),
            ]
button[0].style.backgroundColor = "#d9f0a5"
let texts = ["i like not doing anything","i run rx 6600 ye","this is just a side project<br>what else do you expect from a lazy ass<br><br>the font is hooteroll if you're interested"]
let textBox = document.getElementById("textbox")

x = isMobile()
window.addEventListener("resize",function(){
    document.getElementById("buttonsts").style.marginLeft = "3vw"
    if (isMobile()){
        document.getElementById("buttonsts").style.marginLeft = "100%"
    }
    
})
document.getElementById("showb").addEventListener("click",function(){
    x=!x
    y = "100%"
    if(x){
        y = "1%"
    }
    document.getElementById("buttonsts").style.marginLeft = y

})
    

for (let i = 0; i<button.length;i++){
    button[i].addEventListener("click",function(){
        clickity()
        button[i].style.backgroundColor = "#d9f0a5"
        button[i].style.transform = "scale(1.1)"
        // button[i].style.marginLeft = "0.75vw"
        // button[i].style.marginRight = "0.75vw"
        textBox.innerHTML = texts[i]
    })
}








function clickity(){
    for (let i = 0; i<button.length;i++){
        button[i].style.backgroundColor ="#e7f4c8"
        button[i].style.transform = "scale(1.0)"

        button[i].style.marginLeft = "0.125vw"
        button[i].style.marginRight = "0.125vw"
    }
}

