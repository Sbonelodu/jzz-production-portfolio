const velan = document.querySelectorAll('.vela');
const sections = document.querySelectorAll('section');

let vezavela = 0;

velan.forEach((vela, i) => {
    vela.addEventListener('click', () => {
        if (vezavela != i){
            velan[vezavela].classList.remove('veza');
            vela.classList.add('veza');
            sections[vezavela].classList.remove('veza');


            setTimeout(() => {
                vezavela = i;
                sections[i].classList.add('veza');
            },1000);
        }

    })
});   