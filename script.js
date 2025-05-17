
  const questions = document.querySelectorAll('.faq-question');
  questions.forEach(btn => {
    btn.addEventListener('click', () => {
      const answer = btn.nextElementSibling;
      answer.style.maxHeight = answer.style.maxHeight ? null : answer.scrollHeight + 'px';
    });
  });

  
  const endDate = new Date();
  endDate.setMinutes(endDate.getMinutes() + 15); // 15 minutos de contagem

  function updateCountdown() {
    const now = new Date();
    const timeLeft = endDate - now;

    const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
    const seconds = Math.floor((timeLeft / 1000) % 60);

    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
  }

  setInterval(updateCountdown, 1000);
  updateCountdown();

  
  const video = document.getElementById('intro-video');
  const overlay = document.getElementById('video-overlay');
  const content = document.getElementById('main-content');

  video.onended = function () {
    overlay.style.display = 'none';
    content.style.display = 'block';
    document.body.style.overflow = 'auto';
  };

  // Evita rolagem durante o vídeo
  document.body.style.overflow = 'hidden';
  
 
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.slide-in').forEach(el => observer.observe(el));


  
  

  
 

  const video = document.getElementById("introVideo");
  const siteContent = document.getElementById("site-content");

  // Garante que o conteúdo comece oculto
  siteContent.style.display = "none";

  // Verifica o tempo do vídeo a cada segundo
  video.addEventListener("timeupdate", () => {
    const currentTime = Math.floor(video.currentTime);
    if (currentTime >= 300) { // 5 minutos = 300 segundos
      siteContent.style.display = "block";
    }
  });













