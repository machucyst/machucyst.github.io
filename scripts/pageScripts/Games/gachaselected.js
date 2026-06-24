import obj from '../../elementItems.js';
import fn from '../../functions.js'
import data from '../data.js'
const params = new URLSearchParams(window.location.search)
// document.getElementById("text").innerHTML = params.get("selected")
fn.toggleFunction(obj.headtext, "hover", "machucyst","return?")
obj.headtext.addEventListener("click",function(){
    history.back()
})
let select = data.games.gacha[params.get("selected")]
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
Object.entries(select.images).forEach(([_, img])=>{
    images.push(`${location.origin}/images/Games/Gacha/${select.imageDir}/${img}`)
})
document.title = `${select.title} | machucyst`
favName.innerHTML = `${select.favorite.name}`
desc.innerHTML = `${select.desc}`
uid.innerHTML = `UID: ${select.uid}`
// alert(select.favorite.image)
imageSelection.src = images[0]
imageParent.style.background = `url(${images[0]})`
img.src = `${location.origin}/images/Games/Gacha/${select.imageDir}/${select.favorite.image}`
favorite.prepend(img)
const btn = [document.querySelector("#btnLeft"), document.querySelector("#btnRight")]
let x = 0;
let limit = images.length-1



function updateImage() {
  imageSelection.src = images[x];
  imageParent.style.background = `url(${images[x]})`
}

btn.forEach((b, dir) => {
  b.addEventListener("click", () => {
    x = dir === 0
      ? (x === 0 ? limit : x - 1)       // btn[0] = prev
      : (x === limit ? 0 : x + 1);       // btn[1] = next
    updateImage();
  });
});
obj.headtext.innerHTML = select.title
fn.toggleFunction(obj.headtext, "hover", select.title,"return?")


