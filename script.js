// Initialize AOS (Animate On Sc roll)
AOS.init({
    duration: 1000,
    once: true,
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  // Typewriter Effect

function typeWriterEffect(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = ""; // Clear previous text
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

// Detect when a new slide is active
document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.getElementById("heroCarousel");

  // Initialize typewriter effect on the first active slide
  const activeSlide = document.querySelector(".carousel-item.active .typewriter");
  if (activeSlide) {
    typeWriterEffect(activeSlide, activeSlide.dataset.text);
  }

  // Listen for slide changes
  carousel.addEventListener("slid.bs.carousel", function () {
    setTimeout(() => {
      const activeSlide = document.querySelector(".carousel-item.active .typewriter");
      if (activeSlide) {
        typeWriterEffect(activeSlide, activeSlide.dataset.text);
      }
    }, 500);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var myCarousel = new bootstrap.Carousel(document.getElementById("heroCarousel"), {
    interval: 5000, 
    ride: "carousel" // Ensure automatic sliding
  });
});




// Instructor Card Hover Effects
function insColor(a) {
  var el = document.getElementById("insSocial" + a);
  el.style.backgroundColor = "#007bff";
  el.style.color = "white";
}

function ins_Color(a) {
  var el = document.getElementById("insSocial" + a);
  el.style.backgroundColor = "#f8f9fa";
  el.style.color = "#007bff";
}

// Counter Animation
// Counter Animation
const counters = document.querySelectorAll('.counter');

const startCounter = () => {
  counters.forEach(counter => {
    counter.innerText = '0';
    
    const updateCounter = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      
      const increment = target / 100; // Adjust speed
      
      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCounter, 20);
      } else {
        counter.innerText = target + "+"; // Add "+" after reaching target
      }
    };
    
    updateCounter();
  });
};

// Start counter when the section is visible
const aboutSection = document.getElementById('about');

const observer = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    startCounter();
    observer.disconnect(); // Stop observing after activation
  }
}, { threshold: 0.5 });

observer.observe(aboutSection);




