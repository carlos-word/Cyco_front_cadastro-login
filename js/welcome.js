 document.addEventListener('DOMContentLoaded', function() {
      const userName = localStorage.getItem('userName');
      const welcomeMessage = document.getElementById('welcome-message');
      
      if (userName) {
        try {          
          if (userName) {
            welcomeMessage.textContent = `Olá, ${userName}!`;
            welcomeMessage.style.fontWeight = 'bold';
            welcomeMessage.style.fontSize = '1.2em';
            welcomeMessage.style.marginTop = '20px';
          } else {
            welcomeMessage.textContent = 'Olá, visitante!';
          }
        } catch (e) {
          console.error('Erro ao analisar userData:', e);
          welcomeMessage.textContent = 'Olá, visitante!';
        }
      } else {
        welcomeMessage.textContent = 'Olá, visitante!';
      }
    });
