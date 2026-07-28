/**
 * Technical Portfolio — Main Script
 * All dynamic content is driven by portfolioData below.
 * To add new documents, scripts or articles: edit this object + create HTML in assets/docs/
 */

/* ==========================================================================
   DATA — Edit placeholders here
   ========================================================================== */

const portfolioData = {
  name: "Lautaro Figueroa",

  contact: {
    email: "LautaroFigueroa.SI@hotmail.com",
    linkedin: "https://www.linkedin.com/in/lautaro-figueroa-121273272/",
    github: "https://github.com/LautaroFigueroa-SI"
  },

  cards: [
    {
      id: "methodologies",
      title: "Technical Methodologies",
      description: "Procedimientos técnicos desarrollados para auditorías de infraestructura, análisis previo al hardening y evaluación de seguridad.",
      footer: "1 documento",
      items: [
        {
          label: "Windows 10 Triage",
          href: "assets/docs/methodologies/Windows Security Triage.pdf",
          type: "html"
        }
      ]
    },
    {
      id: "automation",
      title: "Security Automation",
      description: "Scripts desarrollados para automatizar procesos de auditoría, recolección de evidencia y tareas repetitivas de seguridad.",
      footer: "1 script",
      items: [
        {
          label: "triage_windows10",
          description: "Este script realiza tareas de recoleccion de evidencia para su posterior analisis, con el fin de automatizar el triage en busca de evidencia que indique un compromiso",
          language: "Python",
          href: "https://github.com/LautaroFigueroa-SI/triage_windows10",
          type: "script"
        }
      ]
    },
    {
      id: "research",
      title: "Technical Research",
      description: "Investigaciones y análisis técnicos sobre vulnerabilidades, WriteUps de CTF's y pruebas de herramientas de la comunidad",
      footer: "5 artículos",
      items: [
        { label: "[Artículo 1]", href: "assets/docs/research/article-01.html", type: "doc" },
        { label: "[Artículo 2]", href: "assets/docs/research/article-02.html", type: "doc" },
        { label: "[Artículo 3]", href: "assets/docs/research/article-03.html", type: "doc" },
        { label: "[Artículo 4]", href: "assets/docs/research/article-04.html", type: "doc" },
        { label: "[Artículo 5]", href: "assets/docs/research/article-05.html", type: "doc" }
      ]
    }
  ]
};

/* ==========================================================================
   SVG Icons
   ========================================================================== */

const icons = {
  mail: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,

  linkedin: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>`,

  github: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.01.28-2.09 0-3A11.64 11.64 0 0 0 20 4c-2.39 0-4.68.98-6 2-1.32-1.02-3.61-2-6-2a11.64 11.64 0 0 0-1 .5c-.28 1.01-.28 2.09 0 3a4.17 4.17 0 0 0-1 3.5c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8 17.19 8 18v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`
};

/* ==========================================================================
   initTopbar — Inject contact icon links into the topbar
   ========================================================================== */

function initTopbar() {
  const topbar = document.getElementById("topbar");
  if (!topbar) return;

  const { email, linkedin, github } = portfolioData.contact;

  topbar.innerHTML = `
    <a href="mailto:${email}" class="topbar__link" aria-label="Enviar correo electrónico">${icons.mail}</a>
    <a href="${linkedin}" class="topbar__link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">${icons.linkedin}</a>
    <a href="${github}" class="topbar__link" target="_blank" rel="noopener noreferrer" aria-label="GitHub">${icons.github}</a>
  `;
}

/* ==========================================================================
   renderContact — Build contact section links from portfolioData
   ========================================================================== */

function renderContact() {
  const container = document.getElementById("contact-links");
  if (!container) return;

  const { email, linkedin, github } = portfolioData.contact;

  container.innerHTML = `
    <a href="${github}" class="contact__link" target="_blank" rel="noopener noreferrer">
      ${icons.github}
      GitHub
    </a>
    <a href="${linkedin}" class="contact__link" target="_blank" rel="noopener noreferrer">
      ${icons.linkedin}
      LinkedIn
    </a>
    <a href="mailto:${email}" class="contact__link">
      ${icons.mail}
      ${email}
    </a>
  `;
}

/* ==========================================================================
   renderPortfolioCards — Generate flip cards from portfolioData.cards
   ========================================================================== */

function renderPortfolioCards() {
  const grid = document.getElementById("portfolio-grid");
  if (!grid) return;

  grid.innerHTML = portfolioData.cards.map(function (card) {
    return `
      <div class="flip-card" role="listitem" data-card-id="${card.id}" tabindex="0" aria-expanded="false" aria-label="${card.title}">
        <div class="flip-card__inner">
          <div class="flip-card__face flip-card__face--front">
            <h3 class="flip-card__title">${card.title}</h3>
            <p class="flip-card__description">${card.description}</p>
            <p class="flip-card__footer">${card.footer}</p>
          </div>
          <div class="flip-card__face flip-card__face--back">
            <div class="flip-card__back-header">
              <span class="flip-card__back-title">${card.title}</span>
              <button class="flip-card__back-btn" type="button" aria-label="Volver al frente de la tarjeta">&larr; Back</button>
            </div>
            <div class="flip-card__items">
              ${renderCardItems(card.items)}
            </div>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

/**
 * Render individual items on the back face of a card.
 * Scripts show description + language; docs show a simple link.
 */
function renderCardItems(items) {
  return items.map(function (item) {
    if (item.type === "script") {
      return `
        <a href="${item.href}" class="flip-card__item" target="_blank" rel="noopener noreferrer">
          <span class="flip-card__item-label">${item.label}</span>
          <p class="flip-card__item-meta">${item.description}</p>
          <span class="flip-card__item-lang">${item.language}</span>
        </a>
      `;
    }

    return `
      <a href="${item.href}" class="flip-card__item">
        <span class="flip-card__item-label">${item.label}</span>
      </a>
    `;
  }).join("");
}

/* ==========================================================================
   initFlipCards — Toggle flip on click/keyboard; back button closes flip
   ========================================================================== */

function initFlipCards() {
  const grid = document.getElementById("portfolio-grid");
  if (!grid) return;

  grid.addEventListener("click", function (event) {
    const backBtn = event.target.closest(".flip-card__back-btn");
    if (backBtn) {
      event.stopPropagation();
      const card = backBtn.closest(".flip-card");
      closeCard(card);
      return;
    }

    /* Prevent flip when clicking an item link on the back face */
    if (event.target.closest(".flip-card__item")) return;

    const card = event.target.closest(".flip-card");
    if (!card) return;

    toggleCard(card);
  });

  grid.addEventListener("keydown", function (event) {
    const card = event.target.closest(".flip-card");
    if (!card) return;

    if (event.key === "Enter" || event.key === " ") {
      if (event.target.closest(".flip-card__item") || event.target.closest(".flip-card__back-btn")) return;
      event.preventDefault();
      toggleCard(card);
    }

    if (event.key === "Escape" && card.classList.contains("is-flipped")) {
      closeCard(card);
    }
  });
}

function toggleCard(card) {
  const isFlipped = card.classList.contains("is-flipped");

  /* Close any other open card first */
  document.querySelectorAll(".flip-card.is-flipped").forEach(function (open) {
    if (open !== card) closeCard(open);
  });

  if (isFlipped) {
    closeCard(card);
  } else {
    card.classList.add("is-flipped");
    card.setAttribute("aria-expanded", "true");
  }
}

function closeCard(card) {
  card.classList.remove("is-flipped");
  card.setAttribute("aria-expanded", "false");
}

/* ==========================================================================
   initSmoothScroll — Hero CTA scrolls smoothly to #portfolio
   ========================================================================== */

function initSmoothScroll() {
  const cta = document.getElementById("hero-cta");
  if (!cta) return;

  cta.addEventListener("click", function (event) {
    event.preventDefault();
    const target = document.getElementById("portfolio");
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
}

/* ==========================================================================
   Init — Run all modules on DOMContentLoaded
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {
  initTopbar();
  renderContact();
  renderPortfolioCards();
  initFlipCards();
  initSmoothScroll();
});
