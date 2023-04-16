const ccLogo = document.querySelector('.logo');

function setCardType(card) {
  ccLogo.setAttribute('src', `img/icon-${card}.svg`);
}

//UPDATE VALUES CARD
const ccHolder = document.querySelector('#cc-holder');
const cardHolder = document.querySelector('.cc-holder .value');

const ccCvv = document.querySelector('#cc-cvv');
const cardCvv = document.querySelector('.cc-security .value');

const ccNumber = document.querySelector('#cc-number');
const cardNumber = document.querySelector('.card-number');

const ccValidity = document.querySelector('#cc-validity');
const cardValidity = document.querySelector('.cc-expiration .value');

ccHolder.addEventListener('keyup', () => {
  cardHolder.innerText =
    ccHolder.value.length > 0 ? ccHolder.value : 'NOME DO TITULAR';
});

ccCvv.addEventListener('keyup', () => {
  cardCvv.innerText = ccCvv.value.length > 0 ? ccCvv.value : '***';
});

ccNumber.addEventListener('keyup', () => {
  cardNumber.innerText =
    ccNumber.value.length > 0 ? ccNumber.value : '**** **** **** ****';
});

ccValidity.addEventListener('keyup', () => {
  cardValidity.innerText =
    ccValidity.value.length > 0 ? ccValidity.value : '**/**';
});
