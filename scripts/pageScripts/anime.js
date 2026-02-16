import obj from '../elementItems.js';
import fn from '../functions.js'
import ani from './data.js'





fn.toggleFunction(obj.headtext, "hover", "Anime","return?")
obj.headtext.addEventListener("click",function(){
  history.back()
})
const query = `
  query ($name: String) {
    User(name: $name) {
      name
      favourites {
        anime {
          nodes {
            id
            title {
              romaji
              english
              native
            }
            coverImage{
              extraLarge
              large
              medium
            }
            bannerImage
          }
        }
      }
    }
  }
`;
const userData = await getFavorites();
const grid = document.querySelector("#selection-grid");
grid.innerHTML = ""

console.log(userData)
console.log(userData.favourites.anime)
Object.entries(userData.favourites.anime.nodes).forEach(([key,nodes])=>{
  const img1 = `url(${nodes.coverImage.extraLarge})`
  // const img2 = `url(../../images/${ nodes.art2})`



  const div = document.createElement('div')
  div.classList.add("bts");
  const div2 = document.createElement('div');
  div2.classList.add("bts-contain");
  const mainText = document.createElement('p');
  mainText.classList.add("mainText");
  mainText.innerText = `${nodes.title.english}`
  const subText = document.createElement('p');
  div.style.backgroundImage = img1;
  div.addEventListener("mouseover", ()=>{
    // div.style.backgroundImage = img2;
  })
  div.addEventListener("mouseleave", ()=>{
    div.style.backgroundImage = img1;
  })
  subText.innerText = (`${nodes.title.native}`) == "undefined" ? parseInt(key)+.1 : (`${nodes.title.native}`)
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
{root: document.getElementById("selection-grid"),threshold: 0.6,rootMargin: "-1000px"});
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
async function getFavorites() {
  const response = await fetch("https://graphql.anilist.co", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query,
      variables: { name: "machucyst" }
    })
  });

  const data = await response.json();

  return data.data.User;
}

