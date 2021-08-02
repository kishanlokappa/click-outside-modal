console.log('it works');
console.log();

//select buttons of cards, modal outer, modal inner
const cardButtons = document.querySelectorAll('.card button');
const modalInner = document.querySelector('.modal-inner');
const modalOuter = document.querySelector('.modal-outer');


function handleButtonClick(event){
    const currentButton =  event.currentTarget;
    
    //getting immediate card near to current button  which was clicked
    const currentCard = currentButton.closest('.card');
    console.log(currentCard);
    
    // get required details from current card whos button is clicked
    const cardDesc = currentCard.dataset.description;
    const imgSrc = currentCard.querySelector('img').src;
    const imgDesc = currentCard.querySelector('img').alt;
    const cardName = currentCard.querySelector('h2').textContent;
    
    // populate the details we got into moduleInner
    modalInner.innerHTML = `
        <img src="${imgSrc.replace('200','600')}" alt="${cardDesc}">
        <p>${cardName}</p>
    `;

    // Add open class to modal outer classlist
    modalOuter.classList.add('open');
}

//attach listeners to buttons
cardButtons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
})