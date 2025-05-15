const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const background = new Image();
background.src = 'Images/betterGalezy.jpeg';

background.onload = function () {
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  drawForeground();};

function drawForeground() {
  const sat = new Image();
  sat.src = 'Images/vecteezy_starlink-satellite-ai-generative_33529060.png';
  sat.onload = function () {
    ctx.drawImage(sat, 120, 80, 350, 400);

    const astro = new Image();
    astro.src = 'Images/astronaut-relaxing-on-a-moon-rock-in-space-png.png';
    astro.onload = function () {
      ctx.drawImage(astro, 1000, 300, 400, 500);

      ctx.font = '48px Arial';
      ctx.fillStyle = 'purple';
      ctx.fillText('Muhammad Saad - Galaxy Astronaut Scene', 90, 600);
    };
  };
}
