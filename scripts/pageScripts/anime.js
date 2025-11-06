import obj from '../elementItems.js';
import fn from '../functions.js'
import ani from './data.js'





fn.toggleFunction(obj.headtext, "hover", "Anime","return?")
obj.headtext.addEventListener("click",function(){
  window.location.href = location.origin +"/index.html"
})
const grid = document.querySelector("#selection-grid");
grid.innerHTML = ""
Object.entries(ani.anime).forEach(([key,anime])=>{
  const img1 = `url(../../images/${anime.art1})`
  const img2 = `url(../../images/${anime.art2})`



  const div = document.createElement('div')
  div.classList.add("bts");
  const div2 = document.createElement('div');
  div2.classList.add("bts-contain");
  const mainText = document.createElement('p');
  mainText.classList.add("mainText");
  mainText.innerText = `${anime.title}`
  const subText = document.createElement('p');
  div.style.backgroundImage = img1;
  div.addEventListener("mouseover", ()=>{
    div.style.backgroundImage = img2;
  })
  div.addEventListener("mouseleave", ()=>{
    div.style.backgroundImage = img1;
  })
  subText.innerText = (`${anime.titleJP}`) == "undefined" ? parseInt(key)+.1 : (`${anime.titleJP}`)
  subText.classList.add("subText");
  div2.appendChild(mainText)
  div2.appendChild(subText)
  div.appendChild(div2)
  grid.appendChild(div)
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
bts.forEach((card) =>{
  observer.observe(card)
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

grid.addEventListener("wheel", function (e) {
  e.preventDefault();
  scrollVelocity += e.deltaY*0.25;
  
  if (!isScrolling) {
    isScrolling = true;
    requestAnimationFrame(smoothScroll);
  }
});

function smoothScroll() {
  grid.scrollLeft += scrollVelocity;
  scrollVelocity *= 0.85;
  if (Math.abs(scrollVelocity) > 0.5) {
    requestAnimationFrame(smoothScroll);
  } else {
    scrollVelocity = 0;
    isScrolling = false;
  }
}