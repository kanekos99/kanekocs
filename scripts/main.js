const app = {
  init: function () {
    console.log("Hello world :)");
  },
};

app.init();

const cards = document.querySelectorAll(".world-card");

cards.forEach((card) => {
  card.addEventListener("click", function (event) {
    if (event.target.closest(".world-card-back-button")) {
      return;
    }
    card.classList.toggle("flipped");
  });
});

function helpme(){
  alert("coming soon!")
}
