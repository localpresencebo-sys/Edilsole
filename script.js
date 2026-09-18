/* =========================================================
   EDILSOLE — script.js
   Vanilla JS: header on scroll, menu mobile, reveal-on-scroll,
   floating WhatsApp button, anno corrente nel footer.
   ========================================================= */
(function () {
  "use strict";

  // ---------- Header: sfondo solido dopo lo scroll ----------
  var header = document.getElementById("siteHeader");
  var lastY = window.scrollY;

  function onScroll() {
    var y = window.scrollY;
    if (header) {
      header.classList.toggle("is-scrolled", y > 40);
    }
    lastY = y;
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // ---------- Menu mobile ----------
  var toggle = document.getElementById("mobileNavToggle");
  var closeBtn = document.getElementById("mobileNavClose");
  var mobileNav = document.getElementById("mobileNav");

  function openNav() {
    if (!mobileNav) return;
    mobileNav.classList.add("is-open");
    document.body.style.overflow = "hidden";
    toggle && toggle.setAttribute("aria-expanded", "true");
  }
  function closeNav() {
    if (!mobileNav) return;
    mobileNav.classList.remove("is-open");
    document.body.style.overflow = "";
    toggle && toggle.setAttribute("aria-expanded", "false");
  }
  toggle && toggle.addEventListener("click", openNav);
  closeBtn && closeBtn.addEventListener("click", closeNav);
  mobileNav &&
    mobileNav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeNav);
    });

  // ---------- Reveal on scroll (un unico effetto, misurato) ----------
  var revealEls = document.querySelectorAll(".reveal-up");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    revealEls.forEach(function (el) {
      io.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  // ---------- WhatsApp float: si nasconde su footer/form per non coprire la CTA ----------
  var waFloat = document.getElementById("waFloat");
  var formSection = document.getElementById("richiesta");
  if (waFloat && formSection && "IntersectionObserver" in window) {
    var waObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          waFloat.classList.toggle("is-hidden", entry.isIntersecting);
        });
      },
      { threshold: 0.3 }
    );
    waObserver.observe(formSection);
  }

  // ---------- Anno corrente nel footer ----------
  var annoEl = document.getElementById("anno");
  if (annoEl) {
    annoEl.textContent = new Date().getFullYear();
  }
})();
