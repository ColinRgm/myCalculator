console.log('connecté !');


// -- Récupérer valeur des boutons -------------------------------------------------------------------------------------
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', handleClick, () => {
        const showValue = button.value;
        console.log(showValue);
    });
});

// -- Variable premier chiffre -----------------------------------------------------------------------------------------
firstNumber = [];

secondNumber = [];

operatorIsClicked = false;

function handleClick(e) {
    if (e.target.matches('.nombre')) {
        const {value} = e.target;
        firstNumber.push(value);

        if (operatorIsClicked === true) {

            (e.target.matches('.nombre'))
            const {value} = e.target;
            secondNumber.push(value);

            let number2 = secondNumber.join('');
            console.log(number2);
        }
    }

    let number1 = firstNumber.join('');
    console.log(number1);

}
