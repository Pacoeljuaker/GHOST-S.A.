document.addEventListener('DOMContentLoaded', function() {
    // Funcionalidad del accordion
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            // Toggle active class on header
            this.classList.toggle('active');
            
            // Get the content panel
            const content = this.nextElementSibling;
            
            // Toggle active class on content
            content.classList.toggle('active');
        });
    });

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

    // Funcionalidad del menú deslizante
    const menuBtn = document.querySelector('.menu-btn');
    const sidebar = document.querySelector('.sidebar');
    
    menuBtn.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });

    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (!menuBtn.contains(e.target) && !sidebar.contains(e.target)) {
            sidebar.classList.remove('active');
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

    // Función para mostrar/ocultar la barra de navegación
    function handleNavbarVisibility() {
        const navbar = document.querySelector('.top-bar');
        const hero = document.getElementById('hero');
        
        // Obtener la posición y tamaño del hero
        const heroRect = hero.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Solo mostrar la barra cuando el hero salga completamente de la vista
        if (heroRect.bottom <= 0) {
            navbar.classList.add('visible');
        } else {
            navbar.classList.remove('visible');
        }
    }

    // Función para manejar el menú móvil
    function handleMobileMenu() {
        // Solo seleccionar el botón de menú dentro del hero
        const menuBtn = document.querySelector('#hero .menu-btn');
        const mobileMenu = document.querySelector('.mobile-menu');
        
        if (menuBtn) {
            menuBtn.addEventListener('click', (e) => {
                e.stopPropagation(); // Evitar que el evento suba al documento
                mobileMenu.classList.toggle('active');
            });
        }

        // Cerrar el menú si se hace clic fuera de él
        document.addEventListener('click', (e) => {
            if (menuBtn && !menuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.remove('active');
            }
        });
    }

    // Evento de scroll
    window.addEventListener('scroll', handleNavbarVisibility);

    // Inicializar la visibilidad de la barra
    handleNavbarVisibility();

    // Inicializar el menú móvil
    handleMobileMenu();

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
            alert(`¡Esta función estará disponible pronto! ;)`);
        });
    });
});
