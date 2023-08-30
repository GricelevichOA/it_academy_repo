const body = document.body;

let currentImg;
let mouseCoords = {};
let isMouseDown = false;

let offset = {
    x: 0,
    y: 0,
}

body.addEventListener("mousedown", (e) => {

    if (e.target.tagName === "IMG") {
        e.preventDefault();
        isMouseDown = true;
        currentImg = e.target;
        document.body.style.cursor = "move";
        
        // добавляет пустой div, чтобы другие изображения не съехали
        if (currentImg.style.position != "absolute") {
            const elem = document.createElement("div");
            elem.style.height = currentImg.height + "px";
            elem.style.width = currentImg.width + "px";
            elem.style.display = "inline-block";
            currentImg.insertAdjacentElement("afterend", elem);
        }

        e.target.classList.add("infront");
        e.target.style.position = "absolute";

        offset.x = e.offsetX;
        offset.y = e.offsetY;


        console.log(e.target.height);
        console.log(e.target.width);


    }
});

body.addEventListener("mousemove", (e) => {
    if (isMouseDown) {
        currentImg.style.left =  e.clientX - offset.x + "px";
        currentImg.style.top =  e.clientY - offset.y + "px";
    }
});

body.addEventListener("mouseup", (e) => {

    if (e.target.tagName === "IMG") {
        isMouseDown = false;
        currentImg = null;
        document.body.style.cursor = "auto";

        e.target.classList.remove("infront");
    }
});