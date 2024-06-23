const cards = document.querySelectorAll('.card');

cards.forEach((card) =>{
    card.addEventListener('click',flipCard);
})

function flipCard(){
    this.classList.toggle('flipped');

    const flippedCards = document.querySelectorAll('.flipped')
    if(flippedCards.length === 2){
        const letter1 =
        flippedCards[0].querySelector('.backSide').textContent;
        const letter2 =
        flippedCards[1].querySelector('.backSide').textContent;git

        if(letter1 === letter2){
            flippedCards.forEach((card) => {
                card.classList.add('matched');
              });
             } else{
                setTimeout(() =>{

                    flippedCards.forEach((card) => {
                        card.classList.remove('flipped');
                    });
                }, 1000);
              }
        }
    
const matchedCards = document.querySelectorAll('.matched');
//  const flippedCards = document.querySelectorAll('.flipped');
 if(flippedCards.length === 16 && matchedCards.length === 16){
     alert('Congratulations, you won!');
 };
}

//  function checkMatches (){
//     const cards = document.querySelectorAll('.card');
//     cards.forEach((card)  => {
//        if(card.classList.contains('flipped') && card.classList.contains('matched')){
//             card.style.backgroundColor = 'yellowgreen'
//         }     })
// }