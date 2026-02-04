import obj from '../../elementItems.js';
import fn from '../../functions.js'
import data from '../data.js'
fn.toggleFunction(obj.headtext, "hover", "Socials","return?")
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
   
   div.style.backgroundImage = `url(../../images/Games/${item.thumbnail})`
   const p = document.createElement('p');
   p.classList.add('btnHead');
   p.textContent = item.title
   p.style.color = item.color;
   p.style.textShadow = txtborder
   div.appendChild(p)
   grid.appendChild(div)
})
// const bts = Array.from(document.querySelectorAll(".bts"));
// // bts.forEach((card,index) =>{
// //     const btnHead = card.querySelector(".btnHead")
// //     const games = data.games[index+1];
// //     card.style.backgroundImage = "url(../../images/Games/"+`${games.thumbnail}`+")"
// //     let title = `${games.title}`
    
// //    if(btnHead){
// //     btnHead.textContent = title;
// //    }
// // })
for (let i = 0; i < obj.btn.length; i++) {
    const btn = obj.btn;
    btn[i].addEventListener("click",function(){
            let Origin = location.origin + "/pages/selectedgame/"
            switch(i){
                case 0:
                    window.location.href = Origin + "gachaSelected.html?selected=fgo"
                    break;
                case 1:
                    window.location.href = Origin + "gachaSelected.html?selected=uma"
                    break;
                case 2:
                    window.location.href = Origin + "gachaSelected.html?selected=ba"
                    break;
                case 3:
                    window.location.href = Origin + "gachaSelected.html?selected=hsr"
                    break;
                case 4:
                    window.location.href = Origin + "gachaSelected.html?selected=tbc"
                    break;
                case 5:
                    window.location.href = Origin + "gachaSelected.html?selected=ak"
                    break;
            }
        }) 
}