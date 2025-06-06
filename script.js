window.addEventListener("load", function(){
    document.getElementById("loading").style.backgroundColor = "#00000000"
    document.getElementById("loading").style.visibility = "collapse"
    // if (isMobile()){
    //     document.getElementById("buttons").style.marginRight = "12.5%"
    // }
})
let headtext = document.getElementById("headText")
headtext.addEventListener('mouseover',function(){
    headtext.innerHTML = "daz me, the cyst"
})
headtext.addEventListener('mouseleave',function(){
    headtext.innerHTML = "machucyst"
})
let btn = [ document.getElementById("btn1"),
            document.getElementById("btn2"),
            document.getElementById("btn3"),
            document.getElementById("btn4")]
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("mouseenter", function() {
    // Scale up the hovered button
    btn[i].style.transform = "scale(1.025)";
    switch(btn[i]){
        case btn[0]:
            btn[1].style.marginTop =  "0.5rem"
            btn[2].style.marginLeft = "0.5rem"
            btn[3].style.marginLeft = "0.5rem"
            break;
        case btn[1]:
            btn[0].style.marginBottom = "0.5rem"
            btn[3].style.marginBottom = "0.5rem"
            break;
        case btn[2]:
            btn[0].style.marginRight = "0.5rem"
            btn[3].style.marginTop = "0.5rem"
            break;
        case btn[3]:
            btn[0].style.marginRight = "0.5rem"
            btn[2].style.marginBottom = "0.5rem"
            break;

    }
  });

  // Reset all buttons on mouse leave
  btn[i].addEventListener("mouseleave", function() {
    for (let k = 0; k < btn.length; k++) {
      btn[k].style.transform = "scale(1)";
      btn[k].style.margin = "0"
    }
  });
}










