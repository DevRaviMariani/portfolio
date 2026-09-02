const theme = document.createElement("link");
theme.rel = "stylesheet";
theme.href = "./theme.css";
document.head.appendChild(theme);

const header = document.querySelector("[data-header]");
const menu = document.querySelector("[data-menu]");
const navigation = document.querySelector("[data-nav]");
const navigationLinks = [...navigation.querySelectorAll("a")];

function closeMenu({ restoreFocus = false } = {}) {
  navigation.classList.remove("open");
  menu.setAttribute("aria-expanded", "false");
  menu.setAttribute("aria-label", "Abrir menu");
  document.body.classList.remove("menu-open");
  document.body.style.overflow = "";
  if (restoreFocus) menu.focus();
}

function openMenu() {
  navigation.classList.add("open");
  menu.setAttribute("aria-expanded", "true");
  menu.setAttribute("aria-label", "Fechar menu");
  document.body.classList.add("menu-open");
  document.body.style.overflow = "hidden";
  navigationLinks[0].focus();
}

menu.addEventListener("click", () => {
  const isOpen = menu.getAttribute("aria-expanded") === "true";
  isOpen ? closeMenu() : openMenu();
});

navigationLinks.forEach((link) => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu({ restoreFocus: true });
  if (event.key === "Tab" && navigation.classList.contains("open")) {
    const focusable = [menu, ...navigationLinks];
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
});

window.addEventListener("scroll", () => header.classList.toggle("scrolled", scrollY > 18));
document.querySelector(`[data-page-link="${document.body.dataset.page}"]`)?.classList.add("active");
document.querySelector("[data-year]").textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries, currentObserver) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    currentObserver.unobserve(entry.target);
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

const canvas = document.querySelector("#particles");
if (canvas && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const context = canvas.getContext("2d");
  let points = [];
  let width = 0;
  let height = 0;
  const ratio = Math.min(devicePixelRatio, 2);

  function resizeCanvas() {
    width = innerWidth;
    height = innerHeight;
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    points = Array.from({ length: Math.min(55, Math.floor(width / 22)) }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.14,
      vy: (Math.random() - 0.5) * 0.14
    }));
  }

  function drawParticles() {
    context.clearRect(0, 0, width, height);
    points.forEach((point) => {
      point.x += point.vx;
      point.y += point.vy;
      if (point.x < 0 || point.x > width) point.vx *= -1;
      if (point.y < 0 || point.y > height) point.vy *= -1;
      context.fillStyle = "rgba(77, 158, 235, 0.5)";
      context.beginPath();
      context.arc(point.x, point.y, 1.1, 0, Math.PI * 2);
      context.fill();
    });

    for (let first = 0; first < points.length; first += 1) {
      for (let second = first + 1; second < points.length; second += 1) {
        const a = points[first];
        const b = points[second];
        const distance = Math.hypot(a.x - b.x, a.y - b.y);
        if (distance >= 120) continue;
        context.strokeStyle = `rgba(54, 139, 221, ${(1 - distance / 120) * 0.11})`;
        context.beginPath();
        context.moveTo(a.x, a.y);
        context.lineTo(b.x, b.y);
        context.stroke();
      }
    }
    requestAnimationFrame(drawParticles);
  }

  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();
  drawParticles();
}
