import obj from '../elementItems.js';
import fn from '../functions.js'
fn.toggleFunction(obj.headtext, "hover", "Socials","return?")
obj.headtext.addEventListener("click",function(){
    history.back()
})

for (let i = 0; i < obj.btn.length; i++) {
    const btn = obj.btn;
    btn[i].addEventListener("click",function(){
            let Origin = location.origin + "/pages/selectedgame/"
            switch(i){
                case 0:
                    window.location.href = Origin + "gacha.html"
                    break;
                case 1:
                    window.location.href = Origin + "../games.html"
                    break;
            }
        }) 
}