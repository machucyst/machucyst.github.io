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
    { opacity: 0, y: 100 },
    {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: item,
        scroller: "#selection-grid",
        horizontal: true,
        start: "left 120%",     // when item's left hits container's right
        end: "left center",       // when item's right hits container's left
        scrub: true,
        markers:true,
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
        start: "left -10%",     // when item's left hits container's right
        end: "left -40%",       // when item's right hits container's left
        scrub: true,
        // markers:true,
        // toggleActions: "play pause reverse pause"
      },
    }
  )
});
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