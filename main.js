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

i18next.init({
  lng: 'en',
  debug: true,
  resources: {
    ar: {
      translation: {
        "How To Protect Computer. Very Useful Tips": "كيفية حماية الكمبيوتر. نصائح مفيدة جدا",
        "Splashproof Design": "تصميم مقاوم للرذاذ",
        "Samuel Audlev": "صموئيل أودليف",
        "Saving the world. Shaping the world.": "إنقاذ العالم. تشكيل العالم.",
        "Branding": "العلامة التجارية",
        "This sounded nonsense to Alice, so she said nothing, but set off at once toward the Red Queen. To her surprise, she lost sight of her in a moment, and found herself walking in at the front-door again.": "بدا هذا هراء لأليس، لذلك لم تقل شيئًا، لكنها انطلقت على الفور نحو الملكة الحمراء. لدهشتها، فقدت رؤيتها في لحظة، ووجدت نفسها تمشي عند الباب الأمامي مرة أخرى.",
        "For some minutes Alice stood without speaking, looking out in all directions over the country - and a most curious country it was. There were a number of tiny little brooks running straight across it from side to side, and the ground between was divided up into squares by a number of little.": "لبضع دقائق وقفت أليس دون أن تتحدث، تنظر في جميع الاتجاهات عبر البلاد - وكانت بلادًا غريبة جدًا. كان هناك عدد من الجداول الصغيرة تجري عبرها من جانب إلى آخر، وكانت الأرض بينهما مقسمة إلى مربعات بواسطة عدد من الجداول الصغيرة.",
        "Perfect for Your": "مثالي لك",
        "She gave my mother such a turn, that I have always been convinced I am indebted to Miss Betsey for having been born on a Friday. The word was appropriate to the moment.": "أعطت والدتي مثل هذا الدور، لقد كنت دائمًا مقتنعًا بأنني مدين للسيدة بيتسي لأنني ولدت يوم الجمعة. كانت الكلمة مناسبة للحظة.",
        "There have not been any since": "لم يكن هناك أي شيء منذ ذلك الحين",
        "The Fall Report": "تقرير الخريف",
        "Thus much I thought proper to tell you in relation to yourself, and to the trust I reposed in you.": "هذا ما اعتقدت أنه من المناسب أن أخبرك به فيما يتعلق بنفسك، وبالثقة التي وضعتها فيك.",
        "So saying he unbuckled his baldric with the bugle, took a feather from his cap, and gave them to Wamba.": "قال ذلك وفك حزامه مع البوق، وأخذ ريشة من قبعته، وأعطاها لوامبا.",
        "Contact Us": "اتصل بنا",
        "First Name": "الاسم الأول",
        "Last Name": "الاسم الأخير",
        "Email": "البريد الإلكتروني",
        "Message": "رسالة",
        "Submit": "إرسال",
        "Subscribe to our Newsletter": "اشترك في نشرتنا الإخبارية",
        "Stay updated with the latest news and special offers.": "ابق على اطلاع بأحدث الأخبار والعروض الخاصة.",
        "Subscribe": "اشترك",
        "She gave my mother such a turn, that I have always been convinced I am indebted to Miss Betsey for having been born on a Friday. The word was appropriate to the moment.": "لقد أعطت والدتي منعطفًا كبيرًا لدرجة أنني كنت دائمًا مقتنعًا بأنني مدين للآنسة بيتسي لأنني ولدت يوم الجمعة. الكلمة كانت مناسبة للحظة.",
        "This sounded nonsense to Alice, so she said nothing, but set off at once toward the Red Queen. To her surprise, she lost sight of her in a moment, and found herself walking in at the front-door again.":"بدا هذا هراءً لأليس، لذا لم تقل شيئًا، وانطلقت على الفور نحو الملكة الحمراء. لدهشتها، فقدت رؤيتها للحظة، ووجدت نفسها تدخل عند الباب الأمامي مرة أخرى.",
        "Show More":"أظهر المزيد",
        "Show Less":"أظهر أقل",
        "Submit":"إرسال",
        "First Name is required": "الاسم الشخصي مطلوب",
        "Last Name is required": "الاسم العائلي مطلوب",
        "Email is required":"البريد الإلكتروني مطلوب",
        "Message is required":"الرسالة مطلوبة",
        "This service exceeded my expectations. Highly recommended!" : "لقد تجاوزت هذه الخدمة توقعاتي. أوصي به بشدة!",
        "Amazing experience! The team was professional and efficient." : "تجربة مذهلة! كان الفريق محترفًا وفعالًا.",
        "A fantastic product that I will definitely use again!" : "منتج رائع سأستخدمه بالتأكيد مرة أخرى!",
      }
    }
  }
});

const handleTranslate = (lng) => {
  if (lng === 'ar') {
    arabic.classList.add('font-bold');
    english.classList.remove('font-bold');
    htmlElemt.setAttribute("dir","rtl");
  } else {
    english.classList.add('font-bold');
    arabic.classList.remove('font-bold');
    htmlElemt.setAttribute("dir","ltr");
  }
  i18next.changeLanguage(lng);
  document.getElementById('hero-title').innerHTML = i18next.t('How To Protect Computer. Very Useful Tips');
  document.getElementById('hero-subtitle').innerHTML = i18next.t('Splashproof Design');
  document.getElementById('hero-author').innerHTML = i18next.t('Samuel Audlev');
  document.getElementById('hero-description').innerHTML = i18next.t('Saving the world. Shaping the world.');
  document.getElementById('blog-title-1').innerHTML = i18next.t('Branding');
  document.getElementById('blog-content-1').innerHTML = i18next.t('This sounded nonsense to Alice, so she said nothing, but set off at once toward the Red Queen. To her surprise, she lost sight of her in a moment, and found herself walking in at the front-door again.');
  document.getElementById('blog-content-2').innerHTML = i18next.t('For some minutes Alice stood without speaking, looking out in all directions over the country - and a most curious country it was. There were a number of tiny little brooks running straight across it from side to side, and the ground between was divided up into squares by a number of little.');
  document.getElementById('blog-title-2').innerHTML = i18next.t('Perfect for Your');
  document.getElementById('blog-content-3').innerHTML = i18next.t('She gave my mother such a turn, that I have always been convinced I am indebted to Miss Betsey for having been born on a Friday. The word was appropriate to the moment.');
  document.getElementById('blog-content-4').innerHTML = i18next.t('There have not been any since');
  document.getElementById('blog-content-5').innerHTML = i18next.t('This sounded nonsense to Alice, so she said nothing, but set off at once toward the Red Queen. To her surprise, she lost sight of her in a moment, and found herself walking in at the front-door again.');
  document.getElementById('blog-title-3').innerHTML = i18next.t('The Fall Report');
  document.getElementById('blog-content-6').innerHTML = i18next.t('Thus much I thought proper to tell you in relation to yourself, and to the trust I reposed in you.');
  document.getElementById('blog-content-7').innerHTML = i18next.t('So saying he unbuckled his baldric with the bugle, took a feather from his cap, and gave them to Wamba.');
document.getElementById('blog-content-8').innerHTML = i18next.t('She gave my mother such a turn, that I have always been convinced I am indebted to Miss Betsey for having been born on a Friday. The word was appropriate to the moment.')
  document.getElementById('contact-title').innerHTML = i18next.t('Contact Us');
  document.getElementById('contact-description').innerHTML = i18next.t('This sounded nonsense to Alice, so she said nothing, but set off at once toward the Red Queen. To her surprise, she lost sight of her in a moment, and found herself walking in at the front-door again.');
  document.getElementById('form-field1').innerHTML = i18next.t('First Name');
  document.getElementById('form-field2').innerHTML = i18next.t('Last Name');
  document.getElementById('form-field3').innerHTML = i18next.t('Email');
  document.getElementById('form-field5').innerHTML = i18next.t('Email');
  document.getElementById('form-field4').innerHTML = i18next.t('Message');
  document.getElementById('button').innerHTML = i18next.t('Submit');
  document.getElementById('newsletter-title').innerHTML = i18next.t('Subscribe to our Newsletter');
  document.getElementById('newsletter-description').innerHTML = i18next.t('Stay updated with the latest news and special offers.');
  document.getElementById('subscribe').innerHTML = i18next.t('Subscribe');
  document.getElementById('error1').innerHTML = i18next.t('First Name is required');
  document.getElementById('error2').innerHTML = i18next.t('Lirst Name is required');
  document.getElementById('error3').innerHTML = i18next.t('Message is required');
  document.getElementById('error4').innerHTML = i18next.t('Email is required');
  showMore.innerHTML === "Show More" ?  showMore.innerHTML = i18next.t('Show Less') : showMore.innerHTML = i18next.t('Show More');
  document.getElementById('testtimonial1').innerHTML = i18next.t('This service exceeded my expectations. Highly recommended!');
  document.getElementById('testtimonial2').innerHTML = i18next.t('Amazing experience! The team was professional and efficient.');
  document.getElementById('testtimonial3').innerHTML = i18next.t('A fantastic product that I will definitely use again!');
}

const handleShowMore = () => {
  if (additional_Content.classList.contains('hidden')) {
    additional_Content.classList.remove('hidden');
    showMore.innerHTML = 'Show Less';
  }
  else {
    additional_Content.classList.add('hidden');
    showMore.innerHTML = 'Show More';
  }
}

