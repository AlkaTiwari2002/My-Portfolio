document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

const roles = ["a Web Developer", "a Front-end Developer"];
let currentRole = 0;

function updateLoopText() {
    const loopSpan = document.querySelector(".loop");
    loopSpan.textContent = roles[currentRole];
    currentRole = (currentRole + 1) % roles.length;
}

setInterval(updateLoopText, 4000);

  
