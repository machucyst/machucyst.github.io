import obj from '../elementItems.js';
import fn from '../functions.js'
fn.toggleFunction(obj.headtext, "hover", "Socials","return?")
obj.headtext.addEventListener("click",function(){
    history.back()
})

for (let i = 0; i < obj.btn.length; i++) {
    const btn = obj.btn;
    btn[i].addEventListener("click",function(){
            let Origin = location.origin + "/pages/"
            switch(i){
                case 0:
                    window.open("https://discord.gg/sKWVSmg5gj", "_blank")
                    break;
                case 1:
                    window.open("https://steamcommunity.com/id/machucyst/", "_blank")
                    break;
                case 2:
                    window.open("https://open.spotify.com/user/31fui63n4neh7gdrhjv2j5d7tpr4", "_blank")
                break;
                case 3:
                    window.open("https://www.youtube.com/channel/UCB55hh8EyR4UjhcCa0BD_VA", "_blank")
                break;
                case 4:
                    window.open("https://myanimelist.net/profile/Machucyst", "_blank")
                break;
                case 5:
                    window.open("https://anilist.co/user/machucyst/", "_blank")
                break;
                case 6:
                    window.location.href = Origin + "anime.html"
                break;
            }
        }) 
}