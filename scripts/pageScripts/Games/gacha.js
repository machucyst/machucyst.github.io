import obj from '../../elementItems.js';
import fn from '../../functions.js'
import data from '../data.js'
fn.toggleFunction(obj.headtext, "hover", "Gachas","return?")
obj.headtext.addEventListener("click",function(){
    history.back()
})

const grid = document.querySelector("#bts-grid");
grid.innerHTML = ""
const txtborder = "-1px -1px 0 black,1px -1px 0 black,-1px  1px 0 black,1px  1px 0 black"
Object.entries(data.games).forEach(([key,item])=>{
   const div = document.createElement('div');
   div.classList.add('bts');
   div.id = `btn${key}`;
   let Origin = location.origin + "/pages/selectedgame/"
   div.addEventListener("click",function(){
        window.location.href = Origin + "gachaSelected.html?selected="+key
   })
   div.style.backgroundImage = `url(../../images/Games/${item.thumbnail})`
   const p = document.createElement('p');
   p.classList.add('btnHead');
   p.textContent = item.title
   p.style.color = item.color;
   p.style.textShadow = txtborder
   div.appendChild(p)
   grid.appendChild(div)
   
})
