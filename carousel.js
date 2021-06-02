const imgs = [
    'homepage_images/1.jpeg',
    'homepage_images/2.jpeg',
    'homepage_images/3.jpeg',
    'homepage_images/4.jpeg',
    'homepage_images/5.jpeg'
]

var curr = 0;

document.querySelector(".next").onclick = nextImg();
document.querySelector(".prev").onclick = prevImg();

function nextImg() {
    return function() {
        curr += 1
        if (curr == 5) {
            curr = 0;
        }
        document.getElementById("featImg").src = imgs[curr];
        document.querySelector(".selected").className = "unselected";
        document.getElementById(`${curr}`).className = "selected";
    }  
}

function prevImg() {
    return function() {
        curr -= 1
        if (curr == -1) {
            curr = 4;
        }
        document.getElementById("featImg").src = imgs[curr];
        document.querySelector(".selected").className = "unselected";
        document.getElementById(`${curr}`).className = "selected";
    }
}