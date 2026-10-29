// Atalho "Sign in" (ícone da lâmpada): abre e fecha o menu; Esc e clique fora fecham.
(function () {
  var wrap = document.querySelector(".ml-signin");
  if (!wrap) return;
  var btn = wrap.querySelector(".ml-signin-btn");
  var pop = wrap.querySelector(".ml-signin-pop");
  function set(open) {
    pop.classList.toggle("open", open);
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    if (open) { var first = pop.querySelector("a"); if (first) first.focus(); }
  }
  btn.addEventListener("click", function (e) { e.stopPropagation(); set(!pop.classList.contains("open")); });
  document.addEventListener("click", function (e) { if (!wrap.contains(e.target)) set(false); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && pop.classList.contains("open")) { set(false); btn.focus(); } });
})();
