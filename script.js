function isMobile(){
    return window.innerWidth<=768
}
if (isMobile()){
    // document.getElementById("buttonsts").style.marginLeft = "9vw"
}
window.addEventListener("load", function(){
    document.getElementById("loading").style.backgroundColor = "#00000000"
    document.getElementById("loading").style.visibility = "collapse"
    if (isMobile()){
        document.getElementById("buttons").style.marginRight = "12.5%"
    }
})
let headtext = document.getElementById("headText")
headtext.addEventListener('mouseover',function(){
    headtext.innerHTML = "daz me, the cyst"
})
headtext.addEventListener('mouseleave',function(){
    headtext.innerHTML = "machucyst"
})

let button = [  (document.getElementById("code")),
                (document.getElementById("code1")),
                (document.getElementById("code2")),
            ]
button[0].style.backgroundColor = "#d9f0a5"
let texts = ["i like not doing anything","i run rx 6600 ye","this is just a side project<br>what else do you expect from a lazy ass<br><br>the font is hooteroll if you're interested"]
let textBox = document.getElementById("textbox")

x = !isMobile()
window.addEventListener("resize",function(){
    document.getElementById("buttons").style.marginRight = "1.5%"
    document.getElementById("headText").style.marginRight = "auto"
    if (isMobile()){
        // document.getElementById("buttons").style.marginRight = "-50%"
        document.getElementById("headText").style.marginRight = "5%"
        // x=true
    }

    
})
document.getElementById("showb").addEventListener("click",function(){
    y = "0.5%"
    if(isMobile()) y="80.5%"
    if(x){
        y = "-50%"
        if(isMobile()){
            y=""
        }
    }
    if(isMobile()){
        document.getElementById("headText").style.marginRight = y

    }else{
        document.getElementById("buttonsts").style.marginRight = y

    }
    x=!x
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

        button[i].style.marginLeft =   "0.25vw"
        button[i].style.marginRight = "0.25vw"
    }
}

