console.log('it works');

//select buttons of cards, modal outer, modal inner
const cardButtons = document.querySelectorAll('.card button');
const modalInner = document.querySelector('.modal-inner');
const modalOuter = document.querySelector('.modal-outer');


function handleButtonClick(event){
    const currentButton =  event.currentTarget;
    
    //getting immediate card near to current button  which was clicked
    const currentCard = currentButton.closest('.card');
    
    // get required details from current card whos button is clicked
    const cardDesc = currentCard.dataset.description;
    const imgSrc = currentCard.querySelector('img').src;
    const imgDesc = currentCard.querySelector('img').alt;
    const cardName = currentCard.querySelector('h2').textContent;
    
    // populate the details we got into moduleInner
    modalInner.innerHTML = `
        <img width="600" height="600" src="${imgSrc.replace('200','600')}" alt="${cardDesc}">
        <p>${cardName}</p>
    `;

    // Add open class to modal outer classlist
    modalOuter.classList.add('open');
}

//attach listeners to buttons
cardButtons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
})


// close modal inner 
function closeModal(){
    modalOuter.classList.remove('open');
}

// close modal on clicking outside modal
modalOuter.addEventListener('click', event =>{
     let isOutside = !event.target.closest('.modal-inner');
     if(isOutside){
         closeModal();
     }
    
});

// close modal on clicking ESC key
// listen to esc keydown , on key down call closemodal
window.addEventListener('keydown',(event)=>{
    if(event.key == 'Escape'){
        closeModal();
    }
})