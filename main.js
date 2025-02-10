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