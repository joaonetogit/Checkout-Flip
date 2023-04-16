const ccInputCvv = document.querySelector('#cc-cvv');
const ccInputNumber = document.querySelector('#cc-number');
const ccInputHolder = document.querySelector('#cc-holder');
const ccInputValidity = document.querySelector('#cc-validity');

// Inputs
IMask(ccInputCvv, {
  mask: '000',
});

IMask(ccInputNumber, {
  mask: [
    {
      mask: '0000 0000 0000 0000',
      regex: /^4\d{0,15}/,
      cardType: 'visa',
    },
    {
      mask: '0000 0000 0000 0000',
      regex: /(^5[1-5]\d{0,2}|^22[2-9]\d|^2[3-7]\d{0,2})\d{0,12}/,
      cardType: 'mastercard',
    },
    {
      mask: '0000 0000 0000 0000',
      regex: /^6360\d{0,12}/,
      cardType: 'elo',
    },
    {
      mask: '0000 0000 0000 0000',
      cardType: 'default',
    },
  ],
  dispatch: function (appended, dynamicMasked) {
    const number = (dynamicMasked.value + appended).replace(/\D/g, '');

    const foundMask = dynamicMasked.compiledMasks.find(function (item) {
      return number.match(item.regex);
    });

    setCardType(
      foundMask.cardType === 'elo'
        ? 'elo'
        : foundMask.cardType === 'mastercard'
        ? 'mastercard'
        : 'visa',
    );

    // console.log(foundMask);
    return foundMask;
  },
});

IMask(ccInputHolder, {
  mask: /^[A-Za-z\s]{0,25}$/,
  prepare: function (str) {
    return str.toUpperCase();
  },
});

IMask(ccInputValidity, {
  mask: 'MM{/}YY',
  blocks: {
    MM: {
      mask: IMask.MaskedRange,
      from: 1,
      to: 12,
    },
    YY: {
      mask: IMask.MaskedRange,
      from: String(new Date().getFullYear()).slice(2),
      to: String(new Date().getFullYear() + 10).slice(2),
    },
  },
});
