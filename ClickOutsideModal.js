console.log(`it works`);

const cardButtons = document.querySelectorAll('.card button');
console.log(cardButtons);

function handleClick(event){
    const currenButton =  event.currentTarget;
    console.log(currenButton.closest('.card'));
}

cardButtons.forEach(button => {
    button.addEventListener('click', handleClick);
})

