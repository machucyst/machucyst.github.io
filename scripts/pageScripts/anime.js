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
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".bts").forEach((item) => {
  gsap.fromTo(
    item,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: item,
        scroller: "#selection-grid",
        horizontal: true,
        start: "left right",     // when item's left hits container's right
        end: "left center",       // when item's right hits container's left
        scrub: true,
        markers:true,
      },
    }
  );
});