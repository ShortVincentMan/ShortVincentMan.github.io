// src/nav.js
(function () {
  // figure out the base for links
  const isBlogDetail = location.pathname.includes("/blogs/");
  const isGhPages = location.hostname.endsWith("github.io");
  const repoName = "bootcamp-project-2025"; // change if your repo name differs

  const base = isGhPages ? `/${repoName}/` : isBlogDetail ? "../" : "./";

  const html = `
    <h1 class="logo">
      <a href="${base}index.html">Vincent Le</a>
    </h1>
    <ul class="nav-list">
      <li><a href="${base}index.html">Home</a></li>
      <li><a href="${base}blog.html">Blog</a></li>

      <li class="dropdown">
        <a href="${base}portfolio.html" class="dropdown-toggle" aria-haspopup="true" aria-expanded="false">Portfolio</a>
        <ul class="dropdown-content" role="menu">
          <li role="none"><a role="menuitem" href="${base}mantisblades.html">Mantis Blades</a></li>
          <li role="none"><a role="menuitem" href="${base}trimtab.html">TrimTab</a></li>
        </ul>
      </li>

      <li><a href="${base}resume.html">Resume</a></li>
      <li><a href="${base}contact.html">Contact</a></li>
    </ul>
  `;

  // mount into <nav class="navbar">
  let nav = document.querySelector("nav.navbar");
  if (!nav) {
    nav = document.createElement("nav");
    nav.className = "navbar";
    document.body.prepend(nav);
  }
  nav.innerHTML = html;

  // (optional) tiny enhancement: toggle aria-expanded on click (for touch devices)
  const ddToggle = nav.querySelector(".dropdown-toggle");
  if (ddToggle) {
    ddToggle.addEventListener("click", (e) => {
      // keep your hover CSS working; this only updates the aria state
      const expanded = ddToggle.getAttribute("aria-expanded") === "true";
      ddToggle.setAttribute("aria-expanded", String(!expanded));
      // allow the link to still navigate to portfolio.html on click
      // if you want to *prevent* navigation when opening the dropdown, uncomment:
      // e.preventDefault();
    });
  }
})();
