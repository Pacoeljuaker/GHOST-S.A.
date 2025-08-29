document.addEventListener('DOMContentLoaded', function() {
    // Get all size selectors
    const sizeSelectors = document.querySelectorAll('.size-selector');
    
    // Add click event to each size button
    sizeSelectors.forEach(selector => {
        const buttons = selector.querySelectorAll('.size-btn');
        const priceElement = selector.nextElementSibling; // The price element that follows the size selector
        
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons in this selector
                buttons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Get the price from data attribute and format it
                const price = parseInt(this.getAttribute('data-price'));
                const formattedPrice = new Intl.NumberFormat('es-CL', {
                    style: 'currency',
                    currency: 'CLP',
                    maximumFractionDigits: 0
                }).format(price);
                
                // Update the price display
                priceElement.textContent = formattedPrice;
            });
        });
    });
});
