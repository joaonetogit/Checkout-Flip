const ccLogo = document.querySelector('.logo');

function setCardType(card) {
  ccLogo.setAttribute('src', `img/icon-${card}.svg`);
}
