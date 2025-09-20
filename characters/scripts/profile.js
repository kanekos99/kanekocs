document.querySelectorAll('[data-bs-toggle="collapse"]').forEach((toggle) => {
  toggle.addEventListener("click", function () {
    const expanded = this.getAttribute("aria-expanded") === "true";
    this.textContent = expanded ? "Read less" : "Read more";
  });
});
