class Carousel {
  constructor(container) {
    this.container = container;
    this.currentSlide = 0;
    this.slides = container.querySelectorAll(".carousel-slide");
    this.dotsContainer = container.querySelector(".carousel-dots");
    this.init();
  }

  init() {
    // Create dots
    this.slides.forEach((_, index) => {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      if (index === 0) dot.classList.add("active");
      dot.addEventListener("click", () => this.goToSlide(index));
      this.dotsContainer?.appendChild(dot);
    });

    // Add button listeners
    this.container
      .querySelector(".prev")
      .addEventListener("click", () => this.prevSlide());
    this.container
      .querySelector(".next")
      .addEventListener("click", () => this.nextSlide());

    // Add keyboard navigation
    let slideInterval;

    this.container.addEventListener("mouseenter", (e) => {
      document.addEventListener("keydown", handleKeydown);
      // Remove Auto advance slides
      clearInterval(slideInterval);
    });

    this.container.addEventListener("mouseleave", (e) => {
      document.removeEventListener("keydown", handleKeydown);
      // Auto advance slides
      slideInterval = setInterval(() => this.nextSlide(), 5000);
    });

    const handleKeydown = (e) => {
      if (e.key === "ArrowLeft") this.prevSlide();
      if (e.key === "ArrowRight") this.nextSlide();
    };

  }

  updateSlides() {
    this.slides.forEach((slide, index) => {
      slide.classList.remove("active");
      this.dotsContainer
        ?.querySelectorAll(".dot")
        [index].classList.remove("active");
    });

    this.slides[this.currentSlide].classList.add("active");
    this.dotsContainer
      ?.querySelectorAll(".dot")
      [this.currentSlide].classList.add("active");
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.updateSlides();
  }

  prevSlide() {
    this.currentSlide =
      (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    this.updateSlides();
  }

  goToSlide(index) {
    this.currentSlide = index;
    this.updateSlides();
  }
}

// Initialize testimonials carousel
document.querySelectorAll(".carousel-testimonials").forEach((container) => {
  new Carousel(container);
});

// Initialize pictures carousel
document.querySelectorAll(".carousel-pictures").forEach((container) => {
  new Carousel(container);
});
