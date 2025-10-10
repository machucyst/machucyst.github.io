import obj from '../../elementItems.js';
import fn from '../../functions.js'
import data from '../data.js'
const params = new URLSearchParams(window.location.search)
// document.getElementById("text").innerHTML = params.get("selected")
fn.toggleFunction(obj.headtext, "hover", "Socials","return?")
obj.headtext.addEventListener("click",function(){
    window.location.href = location.origin + "/pages/selectedgame/gacha.html"
})
let select = selected()
const grid = document.querySelector("#bts-grid");
const favorite = document.querySelector("#favorite")
const favName = document.querySelector("#favName")
const uid = document.querySelector("#UID")
const desc = document.querySelector("#description")
const imageSelection = document.querySelector("#imageSelection")
const img = document.createElement("img")

let images = []
Object.entries(select.images).forEach(([key,img])=>{
    images.push(`url(../../../../images/${img}`)
})
favName.innerHTML = `${select.favorite.name}`
desc.innerHTML = `${select.desc}`
uid.innerHTML = `UID: ${select.uid}`
imageSelection.src = images[0]

img.src = `url(../../../../images/Games/Gacha/${select.favorite.image}`
favorite.prepend(img)
const btn = [document.querySelector("#btnLeft"), document.querySelector("#btnRight")]
let x = 0;
let limit = images.length-1
btn[0].addEventListener("click",function(){
    if(x==0){
        x=limit;
    }else{
        x--;
    }
    imageSelection.src = images[x]
})
btn[1].addEventListener("click",function(){
    if(x==limit){
        x=0;
    }else{
        x++;
    }
    imageSelection.src = images[x]
})
function selected(){
    switch(params.get("selected")){
    case "fgo":
        return data.games[1];
    case "uma":
        return data.games[2];
    case "ba":
        return data.games[3];
    case "hsr":
        return data.games[4];
    case "tbc": 
        return data.games[5];
    case "ak":  
        return data.games[6];
    default:
        return data.games[0];
}
}