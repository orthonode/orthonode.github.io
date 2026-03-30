/**
 * ORTHONODE SYSTEMS™ — Shared Navigation
 * Injects a consistent, responsive navbar on every page.
 * Active link detected from window.location.pathname.
 */
(function () {
  const NAV_LINKS = [
    { label: "Home",     href: "/",                  key: "" },
    { label: "DotLend",  href: "/dotlend.html",       key: "dotlend" },
    { label: "SHA",      href: "/sha.html",            key: "sha" },
    { label: "TON-SHA",  href: "/ton-sha.html",        key: "ton-sha" },
    { label: "OAP",      href: "/oap.html",             key: "oap" },
    { label: "INVARIANT",href: "/invariant.html",      key: "invariant" },
    { label: "TIX-DAO",  href: "/tix-dao.html",        key: "tix-dao" },
    { label: "MANTIS",   href: "/mantis.html",         key: "mantis" },
    { label: "Nexus",    href: "/nexus.html",           key: "nexus" },
    { label: "Research", href: "/iotex-research.html",  key: "iotex-research" },
    { label: "GitHub ↗", href: "https://github.com/orthonode", key: "_ext", external: true },
  ];

  // Detect active page from pathname
  const path = window.location.pathname.replace(/^\//, "").replace(/\.html$/, "") || "";

  function isActive(link) {
    if (link.key === "_ext") return false;
    if (link.key === "" && path === "") return true;
    return path !== "" && link.key && path.startsWith(link.key);
  }

  const css = `
    #on-nav {
      position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
      height: 64px;
      display: flex; align-items: center; justify-content: space-between;
      padding: 0 32px;
      background: rgba(10, 10, 10, 0.85);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border-bottom: 1px solid rgba(255,255,255,0.07);
      font-family: 'DM Sans', sans-serif;
    }
    #on-nav .on-logo {
      font-family: 'Syne', sans-serif;
      font-weight: 800;
      font-size: 17px;
      letter-spacing: -0.04em;
      text-transform: uppercase;
      color: #fff;
      text-decoration: none;
      flex-shrink: 0;
      white-space: nowrap;
    }
    #on-nav .on-links {
      display: flex; align-items: center; gap: 4px;
      flex: 1; justify-content: center; flex-wrap: nowrap;
    }
    #on-nav .on-links a {
      font-size: 13px; font-weight: 400;
      color: rgba(255,255,255,0.5);
      text-decoration: none;
      padding: 6px 10px; border-radius: 6px;
      transition: color 0.2s, background 0.2s;
      white-space: nowrap;
      letter-spacing: 0.01em;
    }
    #on-nav .on-links a:hover {
      color: #fff;
      background: rgba(255,255,255,0.06);
    }
    #on-nav .on-links a.active {
      color: #E6007A;
      background: rgba(230,0,122,0.08);
      font-weight: 500;
    }
    #on-nav .on-links a.ext {
      color: rgba(255,255,255,0.35);
      font-size: 12px;
    }
    #on-nav .on-right {
      display: flex; align-items: center; gap: 12px; flex-shrink: 0;
    }
    #on-nav .on-status {
      display: flex; align-items: center; gap: 6px;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 99px; padding: 4px 10px;
    }
    #on-nav .on-status-dot {
      width: 6px; height: 6px; border-radius: 50%;
      background: #22c55e;
      animation: navDotPulse 2s ease-in-out infinite;
    }
    @keyframes navDotPulse {
      0%,100% { opacity:1; } 50% { opacity:0.4; }
    }
    #on-nav .on-status span {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 10px; letter-spacing: 0.1em;
      text-transform: uppercase; color: rgba(255,255,255,0.4);
    }

    /* Hamburger */
    #on-hamburger {
      display: none; flex-direction: column; gap: 5px;
      cursor: pointer; padding: 4px; background: none; border: none;
    }
    #on-hamburger span {
      display: block; width: 22px; height: 1.5px;
      background: rgba(255,255,255,0.7);
      transition: transform 0.3s, opacity 0.3s;
    }
    #on-hamburger.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
    #on-hamburger.open span:nth-child(2) { opacity: 0; }
    #on-hamburger.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

    /* Mobile drawer */
    #on-drawer {
      position: fixed; top: 64px; left: 0; right: 0; bottom: 0;
      z-index: 999;
      background: rgba(8,8,8,0.97);
      backdrop-filter: blur(20px);
      transform: translateX(100%);
      transition: transform 0.35s cubic-bezier(0.22,1,0.36,1);
      padding: 32px 28px;
      display: flex; flex-direction: column; gap: 6px;
      border-left: 1px solid rgba(255,255,255,0.08);
    }
    #on-drawer.open { transform: translateX(0); }
    #on-drawer a {
      font-family: 'Syne', sans-serif;
      font-size: 24px; font-weight: 800;
      text-transform: uppercase; letter-spacing: -0.03em;
      color: rgba(255,255,255,0.55);
      text-decoration: none;
      padding: 10px 0;
      border-bottom: 1px solid rgba(255,255,255,0.05);
      transition: color 0.2s;
    }
    #on-drawer a:hover, #on-drawer a.active { color: #E6007A; }
    #on-drawer .drawer-email {
      margin-top: auto;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 11px; letter-spacing: 0.06em;
      color: rgba(255,255,255,0.2);
    }

    @media (max-width: 900px) {
      #on-nav .on-links { display: none; }
      #on-hamburger { display: flex; }
    }
    @media (min-width: 901px) {
      #on-drawer { display: none; }
    }


  `;

  // Inject CSS
  const styleEl = document.createElement("style");
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  // Build desktop nav links
  const linkNodes = NAV_LINKS.map(link => {
    const a = document.createElement("a");
    a.href = link.href;
    a.textContent = link.label;
    if (link.external) { a.target = "_blank"; a.rel = "noopener"; a.classList.add("ext"); }
    if (isActive(link)) a.classList.add("active");
    return a.outerHTML;
  }).join("");

  // Build drawer (mobile) links
  const drawerLinks = NAV_LINKS.filter(l => l.key !== "_ext").map(link => {
    const active = isActive(link) ? " active" : "";
    return `<a href="${link.href}"${active ? ` class="${active.trim()}"` : ""}>${link.label}</a>`;
  }).join("");

  // Inject nav HTML
  const navHTML = `
    <nav id="on-nav">
      <a class="on-logo" href="/">ORTHONODE SYSTEMS™</a>
      <div class="on-links">${linkNodes}</div>
      <div class="on-right">
        <div class="on-status">
          <div class="on-status-dot"></div>
          <span>Operational</span>
        </div>
        <button id="on-hamburger" aria-label="Menu" onclick="window.onNavToggle()">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
    <div id="on-drawer">
      ${drawerLinks}
      <span class="drawer-email">infrastructure@orthonode.xyz</span>
    </div>
  `;

  // Insert nav as first child of body
  document.body.insertAdjacentHTML("afterbegin", navHTML);

  // Mobile toggle
  window.onNavToggle = function() {
    const btn = document.getElementById("on-hamburger");
    const drawer = document.getElementById("on-drawer");
    if (btn) btn.classList.toggle("open");
    if (drawer) drawer.classList.toggle("open");
  };

  // Close drawer on link click
  const drawerEl = document.getElementById("on-drawer");
  if (drawerEl) {
    drawerEl.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        const btn = document.getElementById("on-hamburger");
        const drawer = document.getElementById("on-drawer");
        if (btn) btn.classList.remove("open");
        if (drawer) drawer.classList.remove("open");
      });
    });
  }

  // View Transitions polyfill for same-site links
  if (!document.startViewTransition) {
    document.addEventListener("click", e => {
      const a = e.target.closest("a[href]");
      if (!a || a.target === "_blank") return;
      const url = new URL(a.href, location.href);
      if (url.hostname !== location.hostname) return;
      if (a.href.startsWith("mailto:") || a.href.startsWith("tel:")) return;
      e.preventDefault();
      document.body.style.opacity = "0";
      document.body.style.transition = "opacity 0.18s ease";
      setTimeout(() => { location.href = a.href; }, 180);
    }, { capture: true });
  }
})();
