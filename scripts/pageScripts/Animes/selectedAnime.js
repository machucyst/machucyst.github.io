const params = new URLSearchParams(window.location.search)
document.getElementById("text").innerHTML = params.get("selected")