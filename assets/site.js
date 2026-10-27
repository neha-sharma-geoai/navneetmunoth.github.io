(function () {
  var root = document.documentElement;
  var toggle = document.querySelector(".theme-toggle");

  function syncToggle() {
    var dark = root.getAttribute("data-theme") === "dark";
    if (toggle) {
      toggle.setAttribute("aria-pressed", String(dark));
      toggle.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
    }
  }
  syncToggle();

  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
      syncToggle();
    });
  }

  var bar = document.querySelector(".scroll-progress");
  function onScroll() {
    var h = document.documentElement.scrollHeight - window.innerHeight;
    if (bar) bar.style.transform = "scaleX(" + (h > 0 ? window.scrollY / h : 0) + ")";
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  var targets = document.querySelectorAll(
    ".section-heading, .about-copy, .education-card, .recognition, .research-card, .publication, .cv-highlights > div, .cv-group, .contact-wrap > div"
  );
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !("IntersectionObserver" in window)) return;

  root.classList.add("js-reveal");
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add("is-visible");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  targets.forEach(function (t, i) {
    t.classList.add("reveal");
    t.style.transitionDelay = (i % 3) * 80 + "ms";
    io.observe(t);
  });
})();
