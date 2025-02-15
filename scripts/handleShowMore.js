const additional_Content = document.getElementById('additional_Content');
const showMore = document.getElementById('showMore');

const handleShowMore = () => {
  if (additional_Content.classList.contains('hidden')) {
    additional_Content.classList.remove('hidden');
    showMore.innerHTML =  dict[detectLanguage()].showLess;
  }
  else {
    additional_Content.classList.add('hidden');
    showMore.innerHTML =  dict[detectLanguage()].showMore;
  }
}
showMore.addEventListener('click', handleShowMore);

