/* Sanctuary Starship - Quiet Breathing Starfield */

document.addEventListener('DOMContentLoaded', function() {
  const canvas = document.createElement('canvas');
  canvas.id = 'starfield';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  const stars = [];
  const starCount = 120;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createStars() {
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.2,
        speed: Math.random() * 0.2 + 0.05
      });
    }
  }

  function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'white';
    for (const star of stars) {
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function updateStars() {
    for (const star of stars) {
      star.y += star.speed;
      if (star.y > canvas.height) {
        star.y = 0;
        star.x = Math.random() * canvas.width;
      }
    }
  }

  function animate() {
    drawStars();
    updateStars();
    requestAnimationFrame(animate);
  }

  resizeCanvas();
  createStars();
  animate();
  window.addEventListener('resize', resizeCanvas);
});