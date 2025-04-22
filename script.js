// Criar partículas animadas
const particlesContainer = document.getElementById('particles-container');
function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.animationDuration = Math.random() * 2 + 3 + 's';
    particlesContainer.appendChild(particle);

    // Remover partícula após a animação
    setTimeout(() => {
        particle.remove();
    }, 5000);
}

setInterval(createParticle, 300);

// Mostrar mensagem surpresa e fotos sobrepostas
const magicButton = document.getElementById('magic-button');
const surpriseMessage = document.getElementById('surprise-message');
const photoStack = document.getElementById('photo-stack');

magicButton.addEventListener('click', () => {
    surpriseMessage.classList.toggle('hidden');
    photoStack.classList.toggle('hidden');
    magicButton.textContent = surpriseMessage.classList.contains('hidden') 
        ? "Clique para Surpresa ✨" 
        : "Esconder Mensagem 💫";
});