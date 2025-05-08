
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




