// document.addEventListener("DOMContentLoaded", (event) => {
//     addStars();
//     document.body.appendChild(c)
// })

function createStars() {
    addStars();
    document.body.appendChild(c)
}

var c = document.createDocumentFragment()

function addStars() {
    for (let i = 1; i < 300; i++) {
        starObject();
    }
}


function starObject() {
    let div = document.createElement("div");
    // let delay = parseInt(Math.floor(Math.random() * 10) + 1);
    // let duration = parseInt(Math.floor(Math.random() * 10) + 1);
    let size = parseInt(Math.floor(Math.random() * 5) + 1);
    // let brightness = parseInt(Math.floor(Math.random() * 201) - 100);

    c.appendChild(div);
    div.innerHTML = "*";
    div.className = "blink_me";
    div.style.top = parseInt(100 * Math.random()) + "%";
    div.style.left = parseInt(100 * Math.random()) + "%";
    // div.style.setProperty('animation-delay', delay + 's');
    // div.style.setProperty('animation-duration', duration + 's');
    div.style.setProperty('font-size', size + 'px');
    // div.style.filter = `brightness(${brightness})`
};