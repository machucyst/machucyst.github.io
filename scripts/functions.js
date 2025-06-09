import obj from './elementItems.js';

export default{
    isMobile() {
        return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || window.innerWidth <= 768;
    },
    loadPage(){
        window.addEventListener("load", function(){
        
          obj.loadingEl.style.opacity = "0";
          setTimeout(() => {
            obj.loadingEl.style.display = "none";
          }, 1000);
        })
    },
    toggleFunction(object, event, text1,text2){
      switch(event){
        case "hover":
          object.addEventListener('mouseover',function(){
              obj.headtext.innerHTML = text2
          })
          object.addEventListener('mouseleave',function(){
              obj.headtext.innerHTML = text1
          })
        break;
      }
    },
    smoothScroll(grid,scrollVelocity) {
    // Apply velocity
    grid.scrollLeft += scrollVelocity;

    // Apply friction (reduce velocity gradually)
    scrollVelocity *= 0.85;

    // If velocity is significant, keep animating
    if (Math.abs(scrollVelocity) > 0.5) {
        requestAnimationFrame(smoothScroll(grid,scrollVelocity));
    } else {
        // Stop
        scrollVelocity = 0;
        isScrolling = false;
    }
}
};