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

  const firstName = document.getElementById('FirstName');
  const lastName = document.getElementById('LastName');
  const email = document.getElementById('email');
  const message = document.getElementById('message');
  const handleSubmit = (e) => {
  e.preventDefault();
    if (firstName.value === '' || lastName.value === '' || email.value === '' || message.value === '') {
      alert('Please fill out all fields');
      return;
    }
    else {
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
  const htmlElemt = document.documentElement;

  const handleClick = (e) => {
    e.srcElement.classList.toggle('fa-toggle-off');
    e.srcElement.classList.toggle('fa-toggle-on');
    if (htmlElemt.getAttribute("data-theme")=='dark') {
      htmlElemt.setAttribute("data-theme","light");
    } else {
      htmlElemt.setAttribute("data-theme","dark");
    } 

  }