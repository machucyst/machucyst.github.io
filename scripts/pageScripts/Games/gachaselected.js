import obj from '../../elementItems.js';
import fn from '../../functions.js'
import data from '../data.js'
const params = new URLSearchParams(window.location.search)
// document.getElementById("text").innerHTML = params.get("selected")
fn.toggleFunction(obj.headtext, "hover", "machucyst","return?")
obj.headtext.addEventListener("click",function(){
    window.location.href = location.origin + "/pages/selectedgame/gacha.html"
})
let select = data.games[params.get("selected")]
const grid = document.querySelector("#bts-grid");
const favorite = document.querySelector("#favorite")
const favName = document.querySelector("#favName")
const uid = document.querySelector("#UID")
const desc = document.querySelector("#description")
const imageSelection = document.querySelector("#imageSelection")
const img = document.createElement("img")
const imageParent = document.querySelector("#blur")
const focusedImage = document.querySelector("#focusedImage")
const selectedImage = document.querySelector("#selectedImage")


let images = []
Object.entries(select.images).forEach(([key,img])=>{
    images.push(`url(../../../../images/Games/Gacha/${img}`)
})

document.title = `${select.title} | machucyst`
favName.innerHTML = `${select.favorite.name}`
desc.innerHTML = `${select.desc}`
uid.innerHTML = `UID: ${select.uid}`
// alert(select.favorite.image)
imageSelection.src = images[0]
imageParent.style.background = images[0]

img.src = `url(../../../../images/Games/Gacha/${select.favorite.image}`
favorite.prepend(img)
const btn = [document.querySelector("#btnLeft"), document.querySelector("#btnRight")]
let x = 0;
let limit = images.length-1
btn[0].addEventListener("click",function(){
    if(x==0){
        x=limit
    }else{
        x--;
    }
    imageSelection.src = images[x]
    imageParent.style.background=images[x]
})
btn[1].addEventListener("click",function(){
    if(x==limit){
        x=0;
    }else{
        x++;
    }
    imageSelection.src = images[x]
    imageParent.style.background=images[x]
})
// imageSelection.addEventListener("click",()=>{
//     selectedImage.style.visibility = "visible"
// })
obj.headtext.innerHTML = select.title
fn.toggleFunction(obj.headtext, "hover", select.title,"return?")
