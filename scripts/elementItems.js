export default{

    btn: [
        debi("btn1"), debi("btn2"), 
        debi("btn3"), debi("btn4"), 
        debi("btn5"), debi("btn6"), 
    ],
    headtext:debi("headText"),
    loadingEl:debi("loading"),
    btsGrid:debi("bts-grid"),
    btsGridGrid:debi("selection-grid")

}
function debi(x){
    return document.getElementById(x)
}
    