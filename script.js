var side = false;

document.querySelector(".main").onclick = () => {
    if (side) {
        closeSide();
    }
}

document.querySelector("header").onclick = (ev) => {
    if (side && ev.target.className != "openbtn") {
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
    document.querySelector(".main").style.marginRight = "0";
    document.querySelector(".openbtn").style.display = "block";
    side = false;
}