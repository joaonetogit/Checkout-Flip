var ccLogo=document.querySelector(".logo");function setCardType(e){ccLogo.setAttribute("src","img/icon-".concat(e,".svg"))}var ccHolder=document.querySelector("#cc-holder"),cardHolder=document.querySelector(".cc-holder .value"),ccCvv=document.querySelector("#cc-cvv"),cardCvv=document.querySelector(".cc-security .value"),ccNumber=document.querySelector("#cc-number"),cardNumber=document.querySelector(".card-number"),ccValidity=document.querySelector("#cc-validity"),cardValidity=document.querySelector(".cc-expiration .value"),ccUserInputCvv=(ccHolder.addEventListener("keyup",function(){cardHolder.innerText=0<ccHolder.value.length?ccHolder.value:"NOME DO TITULAR"}),ccCvv.addEventListener("keyup",function(){cardCvv.innerText=0<ccCvv.value.length?ccCvv.value:"***"}),ccNumber.addEventListener("keyup",function(){cardNumber.innerText=0<ccNumber.value.length?ccNumber.value:"**** **** **** ****"}),ccValidity.addEventListener("keyup",function(){cardValidity.innerText=0<ccValidity.value.length?ccValidity.value:"**/**"}),document.querySelector("#cc-cvv")),ccCards=document.querySelector(".cc");function addHover(){ccCards.classList.add("hover")}function removeHover(){ccCards.classList.remove("hover")}ccUserInputCvv.addEventListener("focus",addHover),ccUserInputCvv.addEventListener("focusout",removeHover);var ccInputCvv=document.querySelector("#cc-cvv"),ccInputNumber=document.querySelector("#cc-number"),ccInputHolder=document.querySelector("#cc-holder"),ccInputValidity=document.querySelector("#cc-validity");IMask(ccInputCvv,{mask:"000"}),IMask(ccInputNumber,{mask:[{mask:"0000 0000 0000 0000",regex:/^4\d{0,15}/,cardType:"visa"},{mask:"0000 0000 0000 0000",regex:/(^5[1-5]\d{0,2}|^22[2-9]\d|^2[3-7]\d{0,2})\d{0,12}/,cardType:"mastercard"},{mask:"0000 0000 0000 0000",regex:/^6360\d{0,12}/,cardType:"elo"},{mask:"0000 0000 0000 0000",cardType:"default"}],dispatch:function(e,c){var r=(c.value+e).replace(/\D/g,""),e=c.compiledMasks.find(function(e){return r.match(e.regex)});return setCardType("elo"===e.cardType?"elo":"mastercard"===e.cardType?"mastercard":"visa"),e}}),IMask(ccInputHolder,{mask:/^[A-Za-z\s]{0,25}$/,prepare:function(e){return e.toUpperCase()}}),IMask(ccInputValidity,{mask:"MM{/}YY",blocks:{MM:{mask:IMask.MaskedRange,from:1,to:12},YY:{mask:IMask.MaskedRange,from:String((new Date).getFullYear()).slice(2),to:String((new Date).getFullYear()+10).slice(2)}}});