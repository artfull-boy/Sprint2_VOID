const TestimonialSection = document.querySelector('#TestimonialSection');
TestimonialSection.insertAdjacentHTML('afterend', `<section class="bg-[#2F1893]">
    <section
      class="min-xl:px-[315px] pb-[100px] min-md:px-[200px] py-[70px] min-sm:px-[100px] px-[30px] flex flex-col gap-[60px]">
      <div class="flex flex-col gap-[26px]">
        <p id="newsletter-title" class="text-[42px] max-sm:text-3xl leading-[52px] font-bold text-white">
          Subscribe to our Newsletter
        </p>
        <p id="newsletter-description" class="text-white">
          Stay updated with the latest news and special offers.
        </p>
      </div>
      <form class="flex flex-col gap-[26px]" onsubmit="handleNewsletterSubmit(event)">
        <div class="flex flex-col gap-[10px]">
          <label id="form-field5"  for="newsletter-email" class="text-white">Email</label>
          <input type="email" id="newsletter-email" name="newsletter-email"
            class="border-[1px] border-[#fff] rounded-[5px] p-[10px] text-white" required />
        </div>
        <button type="submit" id="subscribe"
          class="bg-[#fff] cursor-pointer h-[45px] text-black rounded hover:bg-yellow-50 transition-colors duration-300">Subscribe</button>
      </form>
    </section>
  </section>`);
