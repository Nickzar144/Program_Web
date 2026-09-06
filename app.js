// ==========================================
// Punto 2 y 3: Interactividad y Manipulación del DOM (Contador y Favoritos)
// ==========================================
let totalFavoritos = 0;
const favCountSpan = document.getElementById('fav-count');
const favButtons = document.querySelectorAll('.btn-fav');

favButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        // Alternamos el estado activo del botón
        const yaEsFavorito = btn.classList.toggle('activo');

        if (yaEsFavorito) {
            totalFavoritos++;
            btn.textContent = '❤️ Guardado';
            btn.style.backgroundColor = '#e74c3c';
            btn.style.color = '#fff';
        } else {
            totalFavoritos--;
            btn.textContent = '🤍 Me gusta';
            btn.style.backgroundColor = '#ecf0f1';
            btn.style.color = '#333';
        }

        // Modificamos el DOM actualizando el número de favoritos
        favCountSpan.textContent = totalFavoritos;
    });
});

// ==========================================
// Punto 4: Validación de Formulario en JavaScript
// ==========================================
const recipeForm = document.getElementById('recipe-form');
const inputName = document.getElementById('recipe-name');
const inputCategory = document.getElementById('recipe-category');
const inputDesc = document.getElementById('recipe-desc');
const formMessage = document.getElementById('form-message');

recipeForm.addEventListener('submit', (event) => {
    // Evitamos que la página se recargue
    event.preventDefault();

    const nombre = inputName.value.trim();
    const categoria = inputCategory.value.trim();
    const ingredientes = inputDesc.value.trim();

    // Comprobar que ningún campo esté vacío
    if (nombre === '' || categoria === '' || ingredientes === '') {
        formMessage.textContent = '⚠️ Por favor, completa todos los campos antes de enviar.';
        formMessage.className = 'form-message error';
        return;
    }

    // Si los campos son válidos:
    formMessage.textContent = `✅ ¡Gracias! La receta "${nombre}" ha sido enviada correctamente.`;
    formMessage.className = 'form-message exito';

    // Limpiar campos del formulario
    recipeForm.reset();
});