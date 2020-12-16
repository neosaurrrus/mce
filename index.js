const defaultOrder = [1,2,3,4,5,6,7,8,9]
const currentOrder = [...defaultOrder]

const numbers = document.querySelector(".numbers");
const shuffleButton = document.querySelector(".shuffle")
const sortButton = document.querySelector(".sort")


function renderNumbers(order){
    newNumbers = order.map( number => {
        return `<div class="box${number} number-box"><h1>${number}</h1></div>`

    })
   numbers.innerHTML = newNumbers.join("")
}


//Shuffle Button Logic
shuffleButton.addEventListener( "click", function(){
    shuffledOrder = currentOrder.sort(() => Math.random() - 0.5)
    renderNumbers(currentOrder)
}) 
//Sort button Logic
sortButton.addEventListener( "click", function(){
    renderNumbers(defaultOrder)
}) 