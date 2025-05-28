// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('nav');

mobileMenuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 90,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            nav.classList.remove('active');
        }
    });
});

// FAQ accordion functionality
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        // Close all other items
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
        
        // Toggle current item
        item.classList.toggle('active');
    });
});
// Sticky header on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        document.querySelector('header').style.background = 'rgba(0, 0, 0, 0.4)';
    } else {
        document.querySelector('header').style.background = 'rgba(0, 0, 0, 0.4)';
    }
});

// Form submission with email sending
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const formObject = Object.fromEntries(formData.entries());
    
    // Send email using FormSubmit.co
    fetch('https://formsubmit.co/ajax/jaskarantamber+Studio@gmail.com', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(formObject)
    })
    .then(response => response.json())
    .then(data => {
        // Show thank you message
        document.getElementById('thankYouMessage').style.display = 'block';
        document.getElementById('formFields').style.display = 'none';
        
        // Reset form
        document.getElementById('contactForm').reset();
        
        // Scroll to thank you message
        document.getElementById('thankYouMessage').scrollIntoView({
            behavior: 'smooth'
        });
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting your form. Please try again.');
    });
});

function mymobFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }


//show scroll to top button
window.addEventListener('scroll', () => {
    const scrollToTopBtn = document.getElementById('btn-back-to-top');
    if (window.scrollY > 60) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});
// Scroll to top functionality
document.getElementById('btn-back-to-top').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});






