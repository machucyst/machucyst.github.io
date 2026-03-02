import obj from '../elementItems.js';
import fn from '../functions.js'
import ani from './data.js'

fn.toggleFunction(obj.headtext, "hover", "Anime", "return?")
obj.headtext.addEventListener("click", function () {
  history.back()
})

const data = await ani.anime;
const userData = data.User
const animeData = data.animeList
const mangaData = data.mangaList
const txtborder = "-1px -1px 0 #464646,1px -1px 0 #464646,-1px  1px 0 #464646,1px  1px 0 #464646"

let dataLists = []
const grid = document.querySelector("#selection-grid");

const params = new URLSearchParams(window.location.search)
let info = params.get("selected")
switch (info) {
  case "Favorite":
    dataLists[0] = userData.favourites.anime.nodes;
    dataLists[1] = userData.favourites.manga.nodes
    break;
  case "Anime":
    Object.entries(animeData.lists).forEach(([key]) => {
      dataLists.push(animeData.lists[key].entries)
    })
    console.log(dataLists)
    break;
  case "Manga":
    Object.entries(mangaData.lists).forEach(([key]) => {
      dataLists.push(mangaData.lists[key].entries)
    })
    break;
}
try {
  if (dataLists[0]) grid.innerHTML = ""
  for (let i = 0; i < dataLists.length; i++) {
    Object.entries(dataLists[i]).forEach(([key, nodes]) => {
      switch (info) {
        case "Anime":
        case "Manga":
          nodes = nodes.nodes
          break;
      }
      const imgUrl = nodes.coverImage?.extraLarge
      const div = document.createElement('div')
      const div2 = document.createElement('div');
      const mainText = document.createElement('p');
      const subText = document.createElement('p');
      div.classList.add("bts");
      div.classList.add("observe");
      div.style.backgroundImage = `url(${imgUrl})`;
      div.addEventListener("mouseover", () => {
        // div.style.backgroundImage = img2;
      })
      div.addEventListener("mouseleave", () => {
        // div.style.backgroundImage = img;
      })

      div2.classList.add("bts-contain");

      mainText.classList.add("mainText");
      mainText.style.textShadow = txtborder
      mainText.innerText = ((`${nodes.title.english}`) == "undefined" || (`${nodes.title.english}`) == "null") ? (`${nodes.title.romaji}`) : (`${nodes.title.english}`)

      subText.style.textShadow = txtborder
      subText.innerText = (`${nodes.title.native}`) == "undefined" ? parseInt(key) + .1 : (`${nodes.title.native}`)
      subText.classList.add("subText");

      div2.appendChild(mainText)
      div2.appendChild(subText)

      div.appendChild(div2)

      grid.appendChild(div)
    })
    if(info=="Favorite"){

      if (i + 1 != dataLists.length) {
        const div = document.createElement('div')
        div.classList.add("observe");
        div.classList.add("bts-separator");
        const img = new Image()
        img.src = "../images/separator.gif"
        const div2 = document.createElement('div');
        div2.classList.add("bts-contain");
        div2.appendChild(img)
        div.appendChild(div2)
        grid.appendChild(div)
      }
    }Z
  }
} catch (e) {

}
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
  { root: document.getElementById("selection-grid"), threshold: 0.2 });
bts.forEach((card) => {
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
  scrollVelocity += e.deltaY * 0.25;

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
