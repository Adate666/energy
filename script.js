// Gestion du menu mobile
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Fermer le menu mobile lors de la sélection d'un lien
const navLinks = mobileMenu.querySelectorAll('a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Gestion du formulaire
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Simuler l'envoi du formulaire
    formMessage.classList.add('hidden');
    formMessage.classList.remove('text-red-500', 'text-green-500');
    formMessage.textContent = 'Envoi en cours...';
    formMessage.classList.remove('hidden');
    formMessage.classList.add('text-gray-600');

    try {
        // Simuler une requête API réussie
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Afficher le message de succès
        formMessage.textContent = 'Votre message a été envoyé avec succès ! Nous vous contacterons bientôt.';
        formMessage.classList.remove('hidden', 'text-gray-600');
        formMessage.classList.add('text-green-500');
        contactForm.reset();

    } catch (error) {
        // Afficher un message d'erreur
        formMessage.textContent = 'Une erreur est survenue lors de l\'envoi. Veuillez réessayer plus tard.';
        formMessage.classList.remove('hidden', 'text-gray-600');
        formMessage.classList.add('text-red-500');
    }
});
