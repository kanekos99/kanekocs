/*-----------------------------gallery navigation--------------------------------*/

const navigationItem = document.querySelectorAll(".navigation-item");

navigationItem.forEach((item) => {
  item.addEventListener("click", () => {
    navigationItem.forEach((el) => el.classList.remove("active"));
    item.classList.add("active");
  });
});

function setActiveNav() {
  const hash = window.location.hash;
  const items = document.querySelectorAll(".navigation-item");

  items.forEach((item) => item.classList.remove("active"));

  if (hash) {
    const activeLink = document.querySelector(
      `.navigation-item a[href="${hash}"]`
    );
    if (activeLink) {
      activeLink.parentElement.classList.add("active");
    }
  }
}

setActiveNav();

window.addEventListener("hashchange", setActiveNav);


/*-----------------------------music--------------------------------*/

const musicBtn = document.getElementById("bg-music-btn");
const bgMusic = document.getElementById("bg-music");

musicBtn.addEventListener("click", () => {
  if (bgMusic.paused) {
    bgMusic.play();
    musicBtn.classList.remove("fa-play");
    musicBtn.classList.add("fa-pause");
  } else {
    bgMusic.pause();
    musicBtn.classList.remove("fa-pause");
    musicBtn.classList.add("fa-play");
  }
});
