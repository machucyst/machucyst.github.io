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
          }, 3000);
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
    enableScroll(bool){
      gsap.registerPlugin(ScrollTrigger);
      gsap.utils.toArray(".bts").forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            scrollTrigger: {
              trigger: item,
              scroller: "#selection-grid",
              horizontal: true,
              start: "left 100%",     // when item's left hits container's right
              end: "left 70%",       // when item's right hits container's left
              scrub: true,
              markers:bool,
              // toggleActions: "restart pause reverse pause"
            },
          }
        );
        gsap.fromTo(
          item,
          {opacity: 1,y:0},
          {
            opacity: 0,
            y: -100,
            scrollTrigger: {
              trigger: item,
              scroller: "#selection-grid",
              horizontal: true,
              start: "left 10%",     // when item's left hits container's right
              end: "left -60%",       // when item's right hits container's left
              scrub: true,
              markers:bool,
              // toggleActions: "play pause reverse pause"
            },
          }
        )
      });
    },
    
    
};