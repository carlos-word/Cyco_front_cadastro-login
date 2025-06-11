import { LOGIN_URL } from './constants.js';

document.getElementById('loginForm').addEventListener('submit', function(e) {
      e.preventDefault();
      
      const email = document.getElementById('email').value;
      const senha = document.getElementById('senha').value;
      
      const loginData = {
        email: email,
        password: senha
      };
      
      fetch(LOGIN_URL, { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Credenciais inválidas');
        }
        return response.json();
      })
      .then(data => {
        if (data.token) {
          localStorage.setItem('authToken', data.token);
          localStorage.setItem('userName', data.user.name);
        }
        alert('Login bem-sucedido!');
        window.location.href = './welcome.html';
      })
      .catch(error => {
        console.error('Erro:', error);
        alert('Falha no login: ' + error.message);
      });
    });
