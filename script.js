document.addEventListener("DOMContentLoaded", () => {
  const themeToggleBtn = document.getElementById("theme-toggle");
  const themeIcon = themeToggleBtn.querySelector(".theme-icon");

  // Alternar Tema (Escuro / Claro)
  themeToggleBtn.addEventListener("click", () => {
    const currentTheme = document.body.getAttribute("data-theme");
    
    if (currentTheme === "light") {
      document.body.removeAttribute("data-theme");
      themeIcon.textContent = "☀️";
    } else {
      document.body.setAttribute("data-theme", "light");
      themeIcon.textContent = "🌙";
    }
  });

  // Animação simples de aparecimento dos cards ao rolar a página
  const observerOptions = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  document.querySelectorAll(".card").forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "all 0.5s ease-out";
    observer.observe(card);
  });
});