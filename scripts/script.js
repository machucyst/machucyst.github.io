import obj from './elementItems.js';
import fn from './functions.js'






fn.loadPage()
fn.toggleFunction(obj.headtext, "hover", "machucyst","daz me, the cyst")


//Button functions
for (let i = 0; i < obj.btn.length; i++) {
    const btn = obj.btn;
    btn[i].addEventListener("mouseenter", function() {
            btn[i].style.transform = "scale("+
            (!fn.isMobile() ? (i!=2 ? ([1,4].includes(i) ? 1.05 : 1.025) : 1.008) : ([3,4,5].includes(i) ? 1.05 : 1.1))+")";

        switch(btn[i]){
            case btn[0]:
                //sample
                if(fn.isMobile()){
                    btn[0].style.marginBottom =  "0.5rem"
                    btn[1].style.marginTop = "1rem"
                    btn[2].style.marginBottom = "1rem"
                    btn[3].style.marginRight = "-1.25rem"
                    btn[5].style.marginRight = "-1.25rem"
                    btn[4].style.marginRight = "-1.25rem"
                    return;
                }
                btn[1].style.marginTop =  "1rem"
                btn[2].style.marginRight = "-0.5rem"
                btn[3].style.marginRight = "-0.5rem"
                btn[4].style.marginRight = "-0.125rem"
                btn[4].style.marginTop = "0.15rem"
                btn[5].style.marginLeft = "0.125rem"
                break;
            case btn[1]:
                //not muuch
                if(fn.isMobile()){
                    btn[1].style.marginTop = "0.5rem"
                    btn[0].style.marginTop = "-0.5rem"
                    btn[2].style.marginTop = "-0.5rem"
                    btn[3].style.marginTop = "-0.5rem"
                    btn[4].style.marginTop = "-0.5rem"
                    btn[5].style.marginTop = "-0.5rem"
                    btn[0].style.marginBottom = "0.5rem"
                    btn[2].style.marginBottom = "0.5rem"
                    btn[3].style.marginBottom = "0.5rem"
                    btn[4].style.marginBottom = "0.5rem"
                    btn[5].style.marginBottom = "0.5rem"
                    return;
                }
                btn[0].style.marginTop = "-0.5rem"
                btn[0].style.marginBottom = "0.5rem"
                btn[2].style.marginTop = "-0.15rem"
                btn[3].style.marginTop = "-0.25rem"
                btn[3].style.marginBottom = "0.5rem"
                btn[4].style.marginRight = "-1.75rem"
                btn[5].style.marginRight = "-2.75rem"
                break;
            case btn[2]:
                //Current
                if(fn.isMobile()){
                    btn[0].style.marginTop = "0.5rem"
                    btn[1].style.marginTop = "0.5rem"
                    btn[3].style.marginTop = "0.5rem"
                    btn[4].style.marginTop = "0.5rem"
                    btn[5].style.marginTop = "0.5rem"
                    btn[0].style.marginBottom = "-0.5rem"
                    btn[1].style.marginBottom = "-0.5rem"
                    btn[3].style.marginBottom = "-0.5rem"
                    btn[4].style.marginBottom = "-0.5rem"
                    btn[5].style.marginBottom = "-0.5rem"
                    break;
                }
                btn[0].style.marginLeft = "-1rem"
                btn[1].style.marginTop = "0.25rem"
                btn[3].style.marginTop = "0.25rem"
                btn[3].style.marginBottom = "-0.25rem"
                btn[4].style.marginTop = "0.25rem"
                btn[5].style.marginTop = "0.25rem"
                break;
            case btn[3]:
                //Font
                if(fn.isMobile()){
                    btn[0].style.marginLeft = "-1rem"
                    btn[2].style.marginBottom = "0.5rem" 
                    btn[4].style.marginTop = "0.5rem" 
                    btn[5].style.marginTop = "0.25rem"
                    break;
                }
                btn[0].style.marginRight = "1.25rem"
                btn[1].style.marginTop = "0.5rem"
                btn[2].style.marginBottom = "0.5rem"
                btn[4].style.marginTop = "0.5rem"
                btn[5].style.marginLeft = "1.25rem"
                break;
            case btn[4]:
                //Music
                if(fn.isMobile()){
                    btn[0].style.marginLeft ="-1rem"
                    btn[2].style.marginBottom ="0.25rem"
                    btn[3].style.marginTop = "-0.25rem";
                    btn[3].style.marginBottom = "0.5rem";

                    btn[5].style.marginTop = "0.5rem";
                    btn[5].style.marginBottom = "-0.25rem";
                    btn[1].style.marginTop ="0.25rem"
                    break;
                }
                btn[0].style.marginLeft ="-0.15rem"
                btn[1].style.marginLeft = "-1.5rem"

                btn[2].style.marginTop = "-0.5rem"
                btn[2].style.marginBottom = "0.5rem"

                btn[3].style.marginTop = "-0.5rem"
                btn[3].style.marginBottom= "0.5rem"

                btn[5].style.marginLeft = "1rem"
                break;
            case btn[5]:
                if(fn.isMobile()){
                    //Anime
                    btn[0].style.marginLeft ="-1rem"

                    btn[1].style.marginTop = "0.5rem"
                    // btn[1].style.marginBottom = "-0.25rem"

                    btn[2].style.marginBottom = "0.25rem"
                    btn[3].style.marginBottom = "0.25rem"
                    btn[4].style.marginBottom = "0.5rem"
                    break;
                }
                btn[0].style.marginLeft = "-0.5rem"
                btn[1].style.marginLeft = "-0.75rem"
                btn[2].style.marginBottom = "1rem"
                btn[3].style.marginLeft = "-0.75rem"
                btn[4].style.marginRight = "0.5rem"
                break;
        }
    });
    btn[i].addEventListener("mouseleave", function() {
        for (let k = 0; k < obj.btn.length; k++) {
            btn[k].style.transform = "scale(1)";
            btn[k].style.margin = "0"
        }
    });
    btn[i].addEventListener("click",function(){
        let Origin = location.origin + "/pages/"
        switch(i){
            case 0:
                window.location.href = Origin + "aboutme.html"
                break;
            case 1:
                window.location.href = "https://guthib.com"
                break;
            case 2:
                window.open("https://www.youtube.com/watch?v=7CNqmUV-Ouo", "_blank")
            break;
            case 3:
                window.open("https://discord.gg/sKWVSmg5gj", "_blank")
            break;
            case 4:
                window.location.href = Origin + "music.html"
            break;
            case 5:
                window.location.href = Origin + "anime.html"
            break;
        }
    })
}










