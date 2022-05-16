let firstElement
let secondElement
let fails = 0
let wins = 0
const NUMBER__OF__CARDS = 16
const colors = ['#da4453', '#e9573f', '#f6bb42', '#8cc152', '#37bc9b', '#3bafda', '#a489dc', '#a6a2a1', '#da4453', '#e9573f', '#f6bb42', '#8cc152', '#37bc9b', '#3bafda', '#a489dc', '#a6a2a1']
const cardsContainer = document.getElementById('cards-container')
const totalColors = new Set()
    while(totalColors.size < colors.length){  
        totalColors.add(Math.floor(Math.random() * colors.length));  
    }
const finalArray = [...totalColors]

const drawCards = () =>{
    for(let i = 0; i < NUMBER__OF__CARDS; i++){
        const card = document.createElement('div')
        card.classList.add('card')
        
        const cardFront = document.createElement('div')
        cardFront.dataset.color = colors[finalArray[i]]
        cardFront.style.backgroundColor = cardFront.dataset.color
        cardFront.classList.add('card__front')
        card.appendChild(cardFront)

        const cardBack = document.createElement('div')
        cardBack.classList.add('card__back')
        card.appendChild(cardBack)

        cardsContainer.appendChild(card)
    }
}

const setCards = (elementOne, elementTwo) =>{
    if(elementOne.previousElementSibling.dataset.color === elementTwo.previousElementSibling.dataset.color){
        wins +=1
    } else {
        elementOne.classList.remove('rotate-card')
        elementTwo.classList.remove('rotate-card')
        fails += 1
    }
    firstElement = undefined
    secondElement = undefined
}

const rotateCard = (card) =>{
    if(card.classList.contains('card__back')){
        card.classList.add('rotate-card')
        if(firstElement === undefined && secondElement === undefined && !card.classList.contains('card__front')){
            firstElement = card
        } else if(firstElement !== undefined && secondElement === undefined && !card.classList.contains('card__front')){
            secondElement = card
            setCards(firstElement, secondElement)
        }
    }
    wins > 0 || fails > 0 ? console.log(`wins: ${wins} fails: ${fails}`) : ''
}

cardsContainer.addEventListener('click', e =>{
    rotateCard(e.target)
})
drawCards()