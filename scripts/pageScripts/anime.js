import obj from '../elementItems.js';
import fn from '../functions.js'
import ani from './Animes/animeSelection.js'





fn.toggleFunction(obj.headtext, "hover", "Anime","return?")
obj.headtext.addEventListener("click",function(){
  window.location.href = location.origin +"/index.html"
})

const bts = Array.from(document.querySelectorAll(".bts"));
const handlers = new WeakMap();

const observer = new IntersectionObserver(test => {
  test.forEach(entry => {
    const et = entry.target;
    const index = bts.indexOf(et);
    
    et.classList.toggle("clickable", entry.isIntersecting);
    
    if (entry.isIntersecting) {
      if (!handlers.has(et)) {
        handlers.set(et, () => selectAnime(index));
      }
      if (!et._hasClickListener) {
        et.addEventListener("click", handlers.get(et));
        et._hasClickListener = true;
      }
    } else {
      if (et._hasClickListener) {
        et.removeEventListener("click", handlers.get(et));
        et._hasClickListener = false;
      }
    }
  });
}, 
{root: document.getElementById("selection-grid"),threshold: 0.5,rootMargin: "-100px"});
bts.forEach((card,index) =>{
  observer.observe(card)
  const mainText = card.querySelector(".mainText")
  const subText = card.querySelector(".subText")
  
  try{
    
    const anime = ani.anime[index+1];
    let title = `${anime.title}`
    let titleJP = `${anime.titleJP}`
    if(mainText) {
      mainText.textContent = title
    }
    if(subText){
      subText.textContent = (titleJP =="undefined" ? index+1.1 : titleJP)
    }
  }catch{
    if(mainText) {
      mainText.textContent = index+1
    }
    if(subText){
      subText.textContent = index+1.1
    }  
  }
})












function selectAnime(index) {
  index++
  const anime = ani.anime[index];
  
  if (anime) {
    window.location.href = location.origin + "/pages/selectedanime/selectedAnime.html?selected=" + `${anime.title}`
  } else {
    console.log(`Anime with ID ${index} not found.`);
  }
}


fn.enableScroll(false)
let scrollVelocity = 0;
let isScrolling = false;

const grid = obj.btsGridGrid;

grid.addEventListener("wheel", function (e) {
  e.preventDefault();
  scrollVelocity += e.deltaY*0.25; // You can tweak multiplier for speed
  
  if (!isScrolling) {
    isScrolling = true;
    requestAnimationFrame(smoothScroll);
  }
});

function smoothScroll() {
  // Apply velocity
  grid.scrollLeft += scrollVelocity;
  
  // Apply friction (reduce velocity gradually)
  scrollVelocity *= 0.85;
  
  // If velocity is significant, keep animating
  if (Math.abs(scrollVelocity) > 0.5) {
    requestAnimationFrame(smoothScroll);
  } else {
    // Stop
    scrollVelocity = 0;
    isScrolling = false;
  }
}