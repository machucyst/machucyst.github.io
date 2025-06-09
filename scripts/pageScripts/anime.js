import obj from '../elementItems.js';
import fn from '../functions.js'
// const bts = document.querySelectorAll(".bts")
// const observer = new IntersectionObserver(test =>{
//     test.forEach(entry=>{
//         entry.target.classList.toggle("visib",entry.isIntersecting)
//     })
// },{
//     root: document.getElementById("selection-grid"),
//     threshold: 0.5,
//     rootMargin: "-50px"
// })
// bts.forEach(card =>{
//     observer.observe(card)
// })
gsap.registerPlugin(ScrollTrigger)
gsap.utils.toArray(".bts").forEach(item =>{
  gsap.to(item, {
    opacity: 0,
    scale: 0.8,
    scrollTrigger: {
      trigger: item,
      scrub: true,
      horizontal: true,
      scroller: ".selection-grid",
      start: "center left",
      end: "+=300",
      markers: true
    }
  });
})

// obj.btsGridGrid.addEventListener("wheel", function(e){
//     this.scrollBy({
//         left: e.deltaY,
//         behavior: "smooth"
//     })
// },{passive:false})