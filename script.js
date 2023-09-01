const card = document.querySelector('#card');
const btnOpen = document.querySelector('#btn-open');
const form = document.querySelector('#card-form');
const cardNumber = document.querySelector('#card .number');
const cardName = document.querySelector('#card .fullname');
const brandLogo = document.querySelector('#brand-logo');
const signature = document.querySelector('#card .signature p');
const monthExpire = document.querySelector('#card .month');
const yearExpire = document.querySelector('#card .year');
const ccv = document.querySelector('#card .ccv')

const showFront = () => {
    if(card.classList.contains('active')){
        card.classList.remove('active')
    }
};

/*eventlistener for the card*/
card.addEventListener('click', () => {
    card.classList.toggle('active');
})

/*eventlistener for button*/
btnOpen.addEventListener('click', () => {
    btnOpen.classList.toggle('active');
    form.classList.toggle('active');
})


/* fech month data */
for(let i = 1; i <= 12; i++){
    let option = document.createElement('option');
    option.value = i;
    option.innerText = i;

    form.selectMonth.appendChild(option);
};

/* fech  year data*/
for(let i = 2023; i <= 2030; i++){
    let option = document.createElement('option');
    option.value = i;
    option.innerText = i;

    form.selectYear.appendChild(option);
};



/* input validation  */
form.inputNumber.addEventListener('keyup', (e) => {

    let valueInput = e.target.value;

    
    form.inputNumber.value = valueInput
  
    .replace(/\s/g, '')
    .replace(/\D/g, '')
    .replace(/([0-9]{4})/g, '$1-' )
    .trim();

    cardNumber.textContent = valueInput;

    if(valueInput == ''){
        cardNumber.textContent = 'XXXX XXXX XXXX XXXX';

        brandLogo.innerHTML = '';
    }

    /* validator for visa card*/
    if(valueInput[0] == 5){
        brandLogo.innerHTML = '';
        const imagen = document.createElement('img');
        imagen.src = 'img/logos/visa.png';
        brandLogo.appendChild(imagen);
    }

    /* validator for Mastercard */
    if(valueInput[0] == 4){
        brandLogo.innerHTML = '';
        const imagen = document.createElement('img');
        imagen.src = 'img/logos/mastercard.png';
        brandLogo.appendChild(imagen);
    }


    showFront();
});


/* validacion input numbers to expresions regulares */
form.inputName.addEventListener('keyup', (e) => {

    let valueInput = e.target.value;

    form.inputName.value = valueInput
    
    .replace(/[0-9]/g, '')

    cardName.textContent = valueInput;

    if(valueInput == ''){
        cardName.textContent = 'Jazzman production';

    }

    signature.textContent = valueInput;


    showFront();

});


/* validacion input months the expirecion  */
form.selectMonth.addEventListener('change', (e) => {

    let valueInput = e.target.value;
  
    monthExpire.textContent = valueInput;
    showFront();
});

/* validacion input year the expirecion  */
form.selectYear.addEventListener('change', (e) => {

    let valueInput = e.target.value.slice(2);
  
    yearExpire.textContent = valueInput;

    showFront();
});

/* validacion input CVV*/

form.inputCvv.addEventListener('keyup', () => {

    if(!card.classList.contains('active')){
        card.classList.toggle('active');
    }

    form.inputCvv.value = form.inputCvv.value
    .replace(/\s/g, '')
    .replace(/\D/g, '');

    ccv.textContent = form.inputCvv.value;
});
