document.addEventListener('DOMContentLoaded', function() {
    // Get all accordion headers
    const accordionHeaders = document.querySelectorAll('.item-accordion .accordion-header');
    
    // Add click event to each header
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            // Toggle active class on header
            this.classList.toggle('active');
            
            // Get the accordion content
            const content = this.nextElementSibling;
            
            // Toggle the content
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                content.classList.remove('active');
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
                content.classList.add('active');
            }
            
            // Each accordion works independently now
        });
    });
    
    // Size selection functionality
    const sizeButtons = document.querySelectorAll('.size-btn');
    sizeButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent accordion toggle
            
            // Get parent container
            const container = this.closest('.accordion-content');
            
            // Remove active class from all buttons in this container
            container.querySelectorAll('.size-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Update price
            const newPrice = this.getAttribute('data-price');
            const priceElement = container.querySelector('.price');
            if (priceElement) {
                priceElement.textContent = `$${parseFloat(newPrice).toLocaleString('es-CL')}`;
            }
        });
    });

    // Add to cart functionality
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent accordion toggle when clicking the button
            const itemContainer = this.closest('.menu-item');
            const itemName = itemContainer.querySelector('.accordion-header span').textContent;
            const selectedSize = itemContainer.querySelector('.size-btn.active');
            let message = `¡${itemName} ha sido añadido al carrito!`;
            
            if (selectedSize) {
                const sizeText = selectedSize.textContent.split('(')[0].trim();
                message = `¡${itemName} (${sizeText}) ha sido añadido al carrito!`;
            }
            
            alert(message);
            // Here you would typically add the item to a shopping cart with size information
        });
    });
});
