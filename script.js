var side = false;

document.getElementById("main").onclick = (ev) => {
    if (side && ev.target.className != "openbtn") {
        closeSide();
    }
}

document.querySelector("header").onclick = () => {
    console.log("test")
    if (side) {
        closeSide();
    }
}

function openSide() {
    document.getElementById("sidebar").style.width = "300px";
    document.querySelector(".openbtn").style.display = "none";
    side = true;
}

function closeSide() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
    document.querySelector(".openbtn").style.display = "block";
    side = false;
}