const arabic = document.getElementById('ar');
const english = document.getElementById('en');
const firstName = document.getElementById('FirstName');
const lastName = document.getElementById('LastName');
const email = document.getElementById('email');
const message = document.getElementById('message');
const additional_Content = document.getElementById('additional_Content');
const showMore = document.getElementById('showMore');
const htmlElemt = document.documentElement;

const carousel = {
    currentSlide: 0,
    slides: document.querySelectorAll('.carousel-slide'),
    dotsContainer: document.querySelector('.carousel-dots'),
    
    init() {
      // Create dots
      this.slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => this.goToSlide(index));
        this.dotsContainer.appendChild(dot);
      });
      
      // Add button listeners
      document.querySelector('.prev').addEventListener('click', () => this.prevSlide());
      document.querySelector('.next').addEventListener('click', () => this.nextSlide());
      
      // Add keyboard navigation
      document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') this.prevSlide();
        if (e.key === 'ArrowRight') this.nextSlide();
      });
      
      
      // Auto advance slides
      setInterval(() => this.nextSlide(), 5000);
    },
    
    updateSlides() {
      this.slides.forEach((slide, index) => {
        slide.classList.remove('active');
        document.querySelectorAll('.dot')[index].classList.remove('active');
      });
      
      this.slides[this.currentSlide].classList.add('active');
      document.querySelectorAll('.dot')[this.currentSlide].classList.add('active');
    },
    
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
      this.updateSlides();
    },
    
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
      this.updateSlides();
    },
    
    goToSlide(index) {
      this.currentSlide = index;
      this.updateSlides();
    }
  };
carousel.init();

const carouselTestimonial = document.getElementById('testimonial-carousel');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  let index = 0;

  function updateCarousel() {
    const offset = -index * 100;
    carouselTestimonial.style.transform = `translateX(${offset}%)`;
  }

  nextBtn.addEventListener('click', () => {
    index = (index + 1) % 3;
    updateCarousel();
  });

  prevBtn.addEventListener('click', () => {
    index = (index - 1 + 3) % 3;
    updateCarousel();
  });

const handleSubmit = (e) => {
  e.preventDefault();
    if (firstName.value === '' || lastName.value === '' || email.value === '' || message.value === '') {
      if (firstName.value === '') {
        firstName.classList.add('border-red-500');
        firstName.nextElementSibling.classList.remove('hidden');
      }
      if (lastName.value === '') {
        lastName.classList.add('border-red-500');
        lastName.nextElementSibling.classList.remove('hidden');
      }
      if (email.value === '') {
        email.classList.add('border-red-500');
        email.nextElementSibling.classList.remove('hidden');
      }
      if (message.value === '') {
        message.classList.add('border-red-500');
        message.nextElementSibling.classList.remove('hidden');
      }
      return;
    }
    else {
      firstName.nextElementSibling.classList.add('hidden');
      lastName.nextElementSibling.classList.add('hidden');
      email.nextElementSibling.classList.add('hidden');
      message.nextElementSibling.classList.add('hidden');
      firstName.classList.add('border-red-500');
      lastName.classList.add('border-red-500');
      email.classList.add('border-red-500');
      message.classList.add('border-red-500');
      console.log('First Name: ',firstName.value);
      console.log('Last Name: ',lastName.value);
      console.log('Email: ',email.value);
      console.log('Message: ',message.value);
      firstName.value = '';
      lastName.value = '';
      email.value = '';
      message.value = '';
    }
  }

const handleClick = (e) => {
    e.srcElement.classList.toggle('fa-toggle-off');
    e.srcElement.classList.toggle('fa-toggle-on');
    if (htmlElemt.getAttribute("data-theme")=='dark') {
      htmlElemt.setAttribute("data-theme","light");
    } else {
      htmlElemt.setAttribute("data-theme","dark");
    } 

  }


window.addEventListener('DOMContentLoaded', () => {
  handleTranslate();
});
const handleTranslate = () => {
  if (window.location.href.includes("index.html")) {
    english.classList.add('font-bold');
    arabic.classList.remove('font-bold');
  } else {
    arabic.classList.add('font-bold');
    english.classList.remove('font-bold');
  }
}

const handleShowMore = () => {
  if (additional_Content.classList.contains('hidden')) {
    additional_Content.classList.remove('hidden');
    window.location.href.includes("index.html") ? showMore.innerHTML = 'Show Less' : showMore.innerHTML = 'أظهر أقل';
  }
  else {
    additional_Content.classList.add('hidden');
    window.location.href.includes("index.html") ? showMore.innerHTML = 'Show More' : showMore.innerHTML = 'أظهر المزيد';
  }
}

