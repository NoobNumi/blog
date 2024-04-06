function openNav() {
    document.getElementById("mySidepanel").style.width = "300px";
    document.querySelector(".overlay").classList.remove("d-none");
}

function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
    document.querySelector(".overlay").classList.add("d-none");
}