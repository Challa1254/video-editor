 // Sticky Header
 window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const navbar = document.querySelector('.navbar');

menuBtn.addEventListener('click', function() {
    navbar.classList.toggle('active');
    menuBtn.innerHTML = navbar.classList.contains('active') ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Close menu when clicking a link
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Active link highlighting
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const id = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.navbar a[href*=' + id + ']').classList.add('active');
        } else {
            document.querySelector('.navbar a[href*=' + id + ']').classList.remove('active');
        }
    });
});

// Form submission
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    form.reset();
});

{/* <script> */}
// testimonials styling
    document.addEventListener('DOMContentLoaded', function() {
        const slides = document.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.dot');
        const prevBtn = document.querySelector('.prev');
        const nextBtn = document.querySelector('.next');
        let currentSlide = 0;
        let slideInterval;
        const slideTime = 5000; // 5 seconds
        
        // Initialize slider
        function initSlider() {
            slides.forEach((slide, index) => {
                slide.style.display = 'none';
                if (index === 0) {
                    slide.classList.add('active');
                    slide.style.display = 'block';
                }
            });
            startSlideShow();
        }
        
        // Show current slide
        function showSlide(n) {
            // Reset all slides
            slides.forEach(slide => {
                slide.style.display = 'none';
                slide.classList.remove('active');
            });
            
            // Update dots
            dots.forEach(dot => dot.classList.remove('active'));
            
            // Handle wrap-around for infinite loop
            if (n >= slides.length) {
                currentSlide = 0;
            } else if (n < 0) {
                currentSlide = slides.length - 1;
            } else {
                currentSlide = n;
            }
            
            // Show current slide and update dot
            slides[currentSlide].style.display = 'block';
            slides[currentSlide].classList.add('active');
            dots[currentSlide].classList.add('active');
        }
        
        // Next/previous slide
        function nextSlide() {
            showSlide(currentSlide + 1);
            resetInterval();
        }
        
        function prevSlide() {
            showSlide(currentSlide - 1);
            resetInterval();
        }
        
        // Auto slide show
        function startSlideShow() {
            slideInterval = setInterval(nextSlide, slideTime);
        }
        
        function resetInterval() {
            clearInterval(slideInterval);
            startSlideShow();
        }
        
        // Event listeners
        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);
        
        dots.forEach(dot => {
            dot.addEventListener('click', function() {
                const slideIndex = parseInt(this.getAttribute('data-slide'));
                showSlide(slideIndex);
                resetInterval();
            });
        });
        
        // Pause on hover
        const slider = document.querySelector('.testimonials-slider');
        slider.addEventListener('mouseenter', () => clearInterval(slideInterval));
        slider.addEventListener('mouseleave', startSlideShow);
        
        // Initialize
        initSlider();
    });
{/* </script> */}