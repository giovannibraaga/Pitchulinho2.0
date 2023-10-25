document.querySelector('#loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    if (username === 'admin' && password === 'admin') {
        window.location.href = 'sociedade.html';
    } else {
        alert('Credenciais inválidas. Tente novamente.');
    }
});
