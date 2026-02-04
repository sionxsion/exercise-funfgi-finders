const navToggle = document.querySelector('[aria-controls="primary-nav"]');

const primaryNav = document.querySelector("#primary-nav");

navToggle.addEventListener("click", () => {
  const isNavOpen = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", !isNavOpen);
});

// prevent trigger animation when resizing
const resizeObserver = new ResizeObserver(() => {
  document.body.classList.add("resizing");

  requestAnimationFrame(() => {
    document.body.classList.remove("resizing");
  });
});

resizeObserver.observe(document.body);
