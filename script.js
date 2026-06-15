// Función para voltear las tarjetas de productos al hacer click
function flipCard(card) {
    card.classList.toggle('flipped');
}

// Función para el desplazamiento suave de navegación
function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}