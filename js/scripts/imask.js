const ccCvv = document.querySelector('#cc-cvv');
const ccNumber = document.querySelector('#cc-number');
const ccHolder = document.querySelector('#cc-holder');
const ccValidity = document.querySelector('#cc-validity');

IMask(ccCvv, {
  mask: '000',
});

IMask(ccNumber, {
  mask: '0000 0000 0000 0000',
});

IMask(ccHolder, {
  mask: /^[A-Za-z\s]+$/,
  prepare: function (str) {
    return str.toUpperCase();
  },
});

IMask(ccValidity, {
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
