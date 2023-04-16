const ccUserInputCvv = document.querySelector('#cc-cvv');
const ccCards = document.querySelector('.cc');

function addHover() {
  ccCards.classList.add('hover');
}

function removeHover() {
  ccCards.classList.remove('hover');
}

ccUserInputCvv.addEventListener('focus', addHover);
ccUserInputCvv.addEventListener('focusout', removeHover);
