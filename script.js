document.addEventListener('DOMContentLoaded', function() {
    // Animación hero
    const hero = document.getElementById('hero');
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    hero.classList.add('visible');
                    hero.classList.remove('out-of-view');
                } else {
                    hero.classList.add('out-of-view');
                    hero.classList.remove('visible');
                }
            });
        },
        {
            threshold: 0.5
        }
    );

    observer.observe(hero);

    // Funcionalidad del menú vertical
    const menuBtn = document.querySelector('.menu-btn');
    const verticalMenu = document.querySelector('.vertical-menu');
    
    menuBtn.addEventListener('click', () => {
        verticalMenu.classList.toggle('active');
    });

    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (!menuBtn.contains(e.target) && !verticalMenu.contains(e.target)) {
            verticalMenu.classList.remove('active');
        }
    });

    // Filtro de menú
    const categoryButtons = document.querySelectorAll('.category-btn');
    const menuItems = document.querySelectorAll('.menu-item');

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Eliminar clase active de todos los botones
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Agregar clase active al botón clickeado
            button.classList.add('active');

            const category = button.dataset.category;
            menuItems.forEach(item => {
                if (category === 'all') {
                    item.style.display = 'block';
                } else {
                    item.style.display = item.classList.contains(category) ? 'block' : 'none';
                }
            });
        });
    });

    // Animación de scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.menu-item, .promocion, .ubicacion');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.classList.add('fade-in');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Llamar una vez al cargar la página

    // Formulario de contacto
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nombre = this.querySelector('input[placeholder="Nombre"]').value;
        const email = this.querySelector('input[placeholder="Email"]').value;
        const mensaje = this.querySelector('textarea').value;
        
        if (!nombre || !email || !mensaje) {
            alert('Por favor, completa todos los campos.');
            return;
        }
        
        // Aquí iría la lógica para enviar el formulario
        alert('¡Mensaje enviado con éxito! Te contactaremos pronto.');
        contactForm.reset();
    });

    // Botón de ordenar ahora
    const orderBtn = document.querySelector('.order-btn');
    
    orderBtn.addEventListener('click', () => {
        alert('¡Gracias por tu interés! Pronto implementaremos el sistema de pedidos en línea.');
    });

    // Añadir al carrito
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const item = button.closest('.menu-item');
            const itemName = item.querySelector('h3').textContent;
            alert(`¡${itemName} ha sido añadido al carrito!`);
        });
    });
});
