// STYLONYX — site interactions (GSAP + ScrollTrigger)
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Footer year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  const navToggle = document.getElementById("nav-toggle");
  const siteNav = document.getElementById("site-nav");
  const header = document.querySelector(".site-header");

  if (navToggle && siteNav) {
    navToggle.addEventListener("click", () => {
      const isOpen = siteNav.classList.toggle("open");
      navToggle.classList.toggle("active", isOpen);
      navToggle.setAttribute("aria-expanded", String(isOpen));
      if (isOpen) {
        gsap.fromTo(
          siteNav.querySelectorAll("a"),
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, stagger: 0.06, duration: 0.35, ease: "power2.out" }
        );
      }
    });
    siteNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        siteNav.classList.remove("open");
        navToggle.classList.remove("active");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Premium navbar scroll state
  if (header) {
    ScrollTrigger.create({
      start: "top -60",
      onUpdate: (self) => header.classList.toggle("scrolled", self.scroll() > 60),
    });
  }

  // Hero — one orchestrated cinematic reveal on load
  gsap.timeline({ defaults: { ease: "power3.out" } })
    .to(".hero-eyebrow", { opacity: 1, y: 0, duration: 0.6 })
    .to(".hero-title .reveal-line", { opacity: 1, y: 0, duration: 0.8, stagger: 0.15 }, "-=0.3")
    .to(".hero-sub", { opacity: 1, y: 0, duration: 0.7 }, "-=0.4")
    .to(".hero-actions", { opacity: 1, y: 0, duration: 0.6 }, "-=0.4");

  // Hero spotlight — follows the pointer, fades as you scroll past
  const spotlight = document.querySelector(".hero-spotlight");
  const hero = document.querySelector(".hero");
  if (spotlight && hero && window.matchMedia("(pointer: fine)").matches) {
    hero.addEventListener("mousemove", (e) => {
      gsap.to(spotlight, { left: `${(e.clientX / window.innerWidth) * 100}%`, duration: 0.6, ease: "power2.out" });
    });
  }
  if (spotlight) {
    gsap.to(spotlight, {
      opacity: 0,
      ease: "none",
      scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
    });
  }

  // Collection rows — reveal as each enters view
  gsap.utils.toArray(".collection-item").forEach((item) => {
    gsap.fromTo(
      item,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: { trigger: item, start: "top 85%" },
      }
    );
  });

  // Manifesto — cinematic line-by-line reveal
  gsap
    .timeline({ scrollTrigger: { trigger: ".manifesto", start: "top 75%" } })
    .fromTo(".manifesto-rule", { scaleY: 0 }, { scaleY: 1, duration: 0.6, ease: "power2.out", transformOrigin: "top" })
    .fromTo(".manifesto blockquote", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.2")
    .fromTo(".manifesto-byline", { opacity: 0 }, { opacity: 1, duration: 0.5 }, "-=0.3");

  // Showcase — slow zoom/parallax on the still as it scrolls through view
  gsap.to(".showcase-media", {
    scale: 1.08,
    ease: "none",
    scrollTrigger: { trigger: ".showcase-frame", start: "top bottom", end: "bottom top", scrub: true },
  });

  // Signup form
  const form = document.getElementById("signup-form");
  const note = document.getElementById("signup-note");
  if (form && note) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = form.querySelector("#email").value.trim();
      if (!email) return;
      note.textContent = `Thanks — we'll notify ${email} when the next piece drops.`;
      gsap.fromTo(note, { opacity: 0, y: -6 }, { opacity: 1, y: 0, duration: 0.4 });
      form.reset();
    });
  }
});
