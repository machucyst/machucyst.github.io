import obj from '../elementItems.js';
import fn from '../functions.js'
import ani from './data.js'





fn.toggleFunction(obj.headtext, "hover", "Anime", "return?")
obj.headtext.addEventListener("click", function () {
  history.back()
})

const animeData = await ani.anime;
const userData = animeData.User
const grid = document.querySelector("#selection-grid");

let btnFav = document.querySelector("#btnFavorite")
let btnAnime = document.querySelector("#btnAnime")
let btnManga = document.querySelector("#btnManga")
let btns = [btnFav, btnAnime, btnManga]

for (let i = 0; i < btns.length; i++) {
  // alert(btns[i])
  btns[i].addEventListener("click", function () {
    let Origin = location.origin + "/pages/anime2.html"
    switch (i) {
      case 0:
        window.location.href = Origin + "?selected=Favorite"
        break;
      case 1:
        window.location.href = Origin + "?selected=Anime"
        break;
      case 2:
        window.location.href = Origin + "?selected=Manga"
        break;
      default:
        alert("Error")
        break;

    }
  })
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
