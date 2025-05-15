console.log("Script.js is working!");
const canvas = document.getElementById("sceneCanvas");
const ctx = canvas.getContext("2d");

const bgOptions = document.getElementsByName("bg");
const sliderX = document.getElementById("sliderX");
const sliderY = document.getElementById("sliderY");
const item1 = document.getElementById("item1");
const item2 = document.getElementById("item2");
const item3 = document.getElementById("item3");

const creatureImg = new Image();
creatureImg.src = "images/forestcreature.png";

const items = [
  new Image(),
  new Image(),
  new Image()
];
items[0].src = "images/0782fd5a8415303352bba046d6dad6ed.png";
items[1].src = "images/3b61eb61842184d08bf123fffe992104.png";
items[2].src = "images/treehouse.png";

items[0].onload = () => console.log("Firewood loaded");
items[1].onload = () => console.log("Lantern loaded");
items[2].onload = () => console.log("Treehouse loaded");


const backgrounds = {
  "forest1.jpg": new Image(),
  "forest2.jpg": new Image(),
  "cabin.jpg": new Image()
};
backgrounds["forest1.jpg"].src = "images/forest1.jpg";
backgrounds["forest2.jpg"].src = "images/forest2.jpg";
backgrounds["cabin.jpg"].src = "images/cabin.jpg";

const sounds = [
  new Audio("sounds/distant-breeze-241047.mp3"),
  new Audio("sounds/loon-call-335487.mp3"),
  new Audio("sounds/fire-sound-334130.mp3")
];

function getSelectedBackground() {
  for (const bg of bgOptions) {
    if (bg.checked) return bg.value;
  }
  return "forest1.jpg";
}

function drawScene() {
  const bg = backgrounds[getSelectedBackground()];
  const x = parseInt(sliderX.value);
  const y = parseInt(sliderY.value);

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (bg.complete) ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "rgba(0, 0, 0, 0.4)";
  ctx.beginPath();
  ctx.ellipse(x + 50, y + 90, 40, 10, 0, 0, Math.PI * 2);
  ctx.fill();

  if (creatureImg.complete) ctx.drawImage(creatureImg, x, y, 100, 100);

  if (item1.checked && items[0].complete) ctx.drawImage(items[0], 65, 225, 150, 150);
  if (item2.checked && items[1].complete) ctx.drawImage(items[1], 490, 190, 117, 150);
  if (item3.checked && items[2].complete) ctx.drawImage(items[2], 440, 20, 150, 150);
}

function playSound(index) {
  sounds[index].currentTime = 0;
  sounds[index].play();
}

setInterval(drawScene, 50);
