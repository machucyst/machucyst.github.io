
let button = [  (document.getElementById("code")),
                (document.getElementById("code1")),
                (document.getElementById("code2")),
            ]
button[0].style.backgroundColor = "#d9f0a5"
let texts = ["i like not doing anything","i run rx 6600 ye","this is just a side project<br>what else do you expect from a lazy ass"]
let textBox = document.getElementById("textbox")
// buttonTwo.style.backgroundColor = "#d9f0a5"
for (let i = 0; i<button.length;i++){
    button[i].addEventListener("click",function(){
        clickity()
        button[i].style.backgroundColor = "#d9f0a5"
        textBox.innerHTML = texts[i]
    })
}

function clickity(){
    for (let i = 0; i<button.length;i++){
        button[i].style.backgroundColor ="#e7f4c8"
    }
}
