document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const mobileMenu = document.querySelector('.mobile-menu');
                if (mobileMenu && mobileMenu.classList.contains('active')) {
                    toggleMobileMenu();
                }
            }
        });
    });
    
    // Product image gallery functionality
    document.querySelectorAll('.product-card').forEach(card => {
        const mainImage = card.querySelector('.main-image');
        const thumbnails = card.querySelectorAll('.image-thumbnails img');
        
        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', function() {
                // Swap main image source with clicked thumbnail
                const tempSrc = mainImage.src;
                mainImage.src = this.src;
                this.src = tempSrc;
                
                // Highlight selected thumbnail
                thumbnails.forEach(t => t.style.borderColor = 'transparent');
                this.style.borderColor = '#fff';
            });
        });
    });
    
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the form data to a server
            // For this example, we'll just show an alert
            alert(`Teşekkürler ${name}! Mesajınız alındı. En kısa sürede sizinle iletişime geçeceğiz.`);
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Mobile menu toggle (will be added if needed)
    function toggleMobileMenu() {
        const menu = document.querySelector('.mobile-menu');
        if (menu) {
            menu.classList.toggle('active');
        }
    }
    
    // Scroll reveal animation
    if (typeof ScrollReveal !== 'undefined') {
        const scrollReveal = ScrollReveal({
            origin: 'bottom',
            distance: '60px',
            duration: 1000,
            delay: 200,
            reset: true
        });
        
        scrollReveal.reveal('.product-card, .category-card, .about-content, .contact-info, .contact-form', {
            interval: 200
        });
    }
    
    // Lazy loading for images
    if ('loading' in HTMLImageElement.prototype) {
        // Native lazy loading is supported
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
        });
    } else if (typeof LazyLoad !== 'undefined') {
        // Fallback for browsers that don't support native lazy loading
        const lazyLoadInstance = new LazyLoad({
            elements_selector: ".lazy"
        });
    }
    
    // Sticky header on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            header.style.padding = '10px 0';
        } else {
            header.style.boxShadow = 'none';
            header.style.padding = '15px 0';
        }
    });
    
    // Initialize any other plugins or functionality here
    // For example: lightbox, carousels, etc.
});

// Product page functionality would go in separate JS files for each page