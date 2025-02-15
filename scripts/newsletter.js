// Creation of Elements for Newsletter
const TestimonialSection = document.querySelector('#TestimonialSection');
const NewsletterParentElement = document.createElement('section');
const NewsletterChildElement = document.createElement('section');
const NewsletterContent = document.createElement('div');
const NewsletterTitle = document.createElement('h2');
const NewsletterDescription = document.createElement('p');
const NewsletterForm = document.createElement('form');
const NewsletterFormContent = document.createElement('div');
const NewsletterFormLabel = document.createElement('label');
const NewsletterFormInput = document.createElement('input');
const NewsletterFormButton = document.createElement('button');

// Add Styles to Elements
NewsletterParentElement.classList.add('bg-[#2F1893]');
NewsletterChildElement.classList.add('min-xl:px-[315px]', 'pb-[100px]', 'min-md:px-[200px]', 'py-[70px]', 'min-sm:px-[100px]', 'px-[30px]', 'flex', 'flex-col', 'gap-[60px]');
NewsletterContent.classList.add('flex', 'flex-col', 'gap-[26px]');
NewsletterTitle.classList.add('max-sm:text-3xl', 'text-white');
NewsletterDescription.classList.add('text-white');
NewsletterForm.classList.add('flex', 'flex-col', 'gap-[26px]');
NewsletterFormContent.classList.add('flex', 'flex-col', 'gap-[10px]');
NewsletterFormLabel.classList.add('text-white');
NewsletterFormInput.classList.add('border-[1px]', 'border-[#fff]', 'rounded-[5px]', 'p-[10px]', 'text-white');
NewsletterFormButton.classList.add('bg-[#fff]', 'cursor-pointer', 'h-[45px]', 'text-black', 'rounded', 'hover:bg-yellow-50', 'transition-colors', 'duration-300');

// Add Attributes to Elements
NewsletterFormLabel.setAttribute('for', 'newsletter-email');
NewsletterFormInput.setAttribute('type', 'email');
NewsletterFormInput.setAttribute('name', 'newsletter-email');
NewsletterFormInput.setAttribute('id', 'newsletter-email');
NewsletterFormInput.setAttribute('required', '');
NewsletterFormButton.setAttribute('type', 'submit');

// Add Text Content to Elements
NewsletterTitle.textContent = dict[detectLanguage()]['Newsletter'];
NewsletterDescription.textContent = dict[detectLanguage()]['stayUpdated'];
NewsletterFormLabel.textContent = dict[detectLanguage()]['Email'];
NewsletterFormButton.textContent = dict[detectLanguage()]['Subscribe'];

// Append Elements to Parent Element
NewsletterContent.appendChild(NewsletterTitle);
NewsletterContent.appendChild(NewsletterDescription);
NewsletterFormContent.appendChild(NewsletterFormLabel);
NewsletterFormContent.appendChild(NewsletterFormInput);
NewsletterForm.appendChild(NewsletterFormContent);
NewsletterForm.appendChild(NewsletterFormButton);
NewsletterChildElement.appendChild(NewsletterContent);
NewsletterChildElement.appendChild(NewsletterForm);
NewsletterParentElement.appendChild(NewsletterChildElement);
TestimonialSection.insertAdjacentElement('afterend', NewsletterParentElement);
