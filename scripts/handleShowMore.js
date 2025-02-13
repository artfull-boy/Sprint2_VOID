const additional_Content = document.getElementById('additional_Content');
const showMore = document.getElementById('showMore');

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
showMore.addEventListener('click', handleShowMore);
