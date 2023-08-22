let imgSrc = document.getElementById("imgSrc");
let brightness = document.getElementById("brightness");
let contrast = document.getElementById("contrast");
let grayscale = document.getElementById("grayscale");
let saturation = document.getElementById("saturation");
let sepia = document.getElementById("sepia");
let hue = document.getElementById("hue");
let context = canvas.getContext("2d");

//uplode the img

function UplodeImg(event) {
  imgSrc.src = URL.createObjectURL(event.target.files[0]);
  imgSrc.onload = function () {
    canvas.width = this.width;
    canvas.height = this.height;
    canvas.crossOrigin = "anonymous";
    applyFilter();
  };
}
function applyFilter() {
  let filterImg =
    "brightness(" +
    brightness.value +
    "%" +
    ") contrast(" +
    contrast.value +
    "%" +
    ") grayscale(" +
    grayscale.value +
    "%" +
    ") saturate(" +
    saturation.value +
    "%" +
    ") sepia(" +
    sepia.value +
    "%" +
    ") hue-rotate(" +
    hue.value +
    "deg" +
    ")";
  context.filter = filterImg;
  context.drawImage(imgSrc, 0, 0);
}

function resetValues() {
  brightness.value = 100;
  contrast.value = 100;
  grayscale.value = 0;
  hue.value = 0;
  sepia.value = 0;
  statusbar.value = 100;
  applyFilter();
}
function saveImg() {
  let linkEl = document.getElementById("link");
  linkEl.setAttribute("download", "newImg.png");
  let canvasData = canvas.toDataURL("image/png");
  canvasData.replace("image/png", "image/octet-stream");
  linkEl.setAttribute("href", canvasData);
  linkEl.click();
}
function brightenFilter() {
  resetValues();
  brightness.value = 130;
  contrast.value = 120;
  saturation.value = 120;
  applyFilter();
}

function bwFilter() {
  resetValues();
  grayscale.value = 100;
  brightness.value = 120;
  contrast.value = 120;
  applyFilter();
}

function funkyFilter() {
  resetValues();
  hue.value = Math.floor(Math.random() * 360) + 1;
  contrast.value = 120;
  applyFilter();
}

function vintageFilter() {
  resetValues();
  brightness.value = 120;
  saturation.value = 120;
  sepia.value = 150;
  applyFilter();
}
