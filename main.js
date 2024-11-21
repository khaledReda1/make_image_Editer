
let saturate = document.getElementById("saturate");
let contrast = document.getElementById("contrast");
let brightness = document.getElementById("brightness")
let sepia = document.getElementById("sepia");
let grayscale = document.getElementById("grayscale");
let bu = document.getElementById("bu");
let heuRotate = document.getElementById("heu-rotate");

let upload = document.getElementById("upload");

let download = document.getElementById("download");

let img = document.getElementById("img");

let reset = document.querySelector("span");

let imgBox = document.querySelector(".img-box");

let canves = document.getElementById("canvas");

let ctx = canves.getContext('2d');


function resetValue() {
    img.style.filter = 'none';
    saturate.value = "100";
    contrast.value = "100";
    brightness.value = "100";
    sepia.value = "0";
    grayscale.value = '0';
    bu.value = '0';
    heuRotate.value = '0';
}

window.onload = function () {
    download.style.display= 'none';
    reset.style.display= 'none';
    imgBox.style.display= 'none';
}

upload.onchange = function () {
    resetValue();
    download.style.display = 'block';
    reset.style.display= 'block';
    imgBox.style.display= 'block';
    let file = new FileReader();
    file.readAsDataURL(upload.files[0]);
    file.onload = function () {
        img.src = file.result;
    }
    img.onload = function() {
        canves.width = img.width;
        canves.height = img.height
        ctx.drawImage(img,0,0,canves.width,canves.height);
        img.style.display = "none";
    }
}

let filters = document.querySelectorAll("ul li input");

filters.forEach(filter => {
    filter.addEventListener("input", function() {
        let saturateValue = saturate.value;
        let contrastValue = contrast.value;
        let brightnessValue = brightness.value;
        let sepiaValue = sepia.value
        let grayscaleValue = grayscale.value;
        let buValue = bu.value;
        let heuRotateValue = heuRotate.value;

        ctx.filter = `
            saturate(${saturateValue}%)
            contrast(${contrastValue}%)
            brightness(${brightnessValue}%)
            sepia(${sepiaValue}%)
            grayscale(${grayscaleValue}%)
            blur(${buValue}px)
            hue-rotate(${heuRotateValue}deg)
        `;
        ctx.drawImage(img,0,0,canves.width,canves.height);
    });
});

download.onclick = function() {
    download.href = canves.toDataURL()
}