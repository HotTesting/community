// Optional enhancements: all content and links remain usable without JavaScript.
const menu = document.querySelector(".mobile-menu");
menu?.addEventListener("click", (event) => {
  if (event.target.closest("a")) menu.open = false;
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menu?.open) {
    menu.open = false;
    menu.querySelector("summary").focus();
  }
});
if (
  "IntersectionObserver" in window &&
  !matchMedia("(prefers-reduced-motion: reduce)").matches
) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.08 },
  );
  document
    .querySelectorAll(
      ".section-heading, .featured-course, .community-intro, .founder-grid",
    )
    .forEach((item) => observer.observe(item));
}
