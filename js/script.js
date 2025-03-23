
function login() {
    const userType = document.getElementById('user-type').value;
    if (userType === 'admin') {
        window.location.href = 'admin.html';
    } else {
        window.location.href = 'pesquisar.html';
    }
}
function verDisponibilidade() {
    const disponibilidadeContainer = document.getElementById('disponibilidade');
    const botaoReservar = document.getElementById('reservar');
    
    disponibilidadeContainer.style.display = 'block';
    botaoReservar.style.display = 'block'; 
    disponibilidadeContainer.scrollIntoView({ behavior: 'smooth' });
}
function reservar() {
    alert("Grato pela simulação de reserva na nossa biblioteca. Obrigado pela preferencia.");
}

