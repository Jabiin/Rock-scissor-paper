const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const pageOne = document.getElementById('pagestart')
const startBtn = document.querySelector('.startbtn')
const wrap = document.querySelector('.wrapper')
const possibleChoices = document.querySelectorAll('.btn')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  generateComputerChoice();
  getResult();
}))



function getResult() {
  

  if (computerChoice === 'rock' && userChoice === 'paper') {
    resultDisplay.innerHTML = 'you win!'
  }
  if (computerChoice === 'rock' && userChoice === 'scissors') {
    resultDisplay.innerHTML = 'you lost!'
  }
  if (computerChoice === 'paper' && userChoice === 'scissors') {
    resultDisplay.innerHTML = 'you win!'
  }
  if (computerChoice === 'paper' && userChoice === 'rock') {
    resultDisplay.innerHTML = 'you lose!'
  }
  if (computerChoice === 'scissors' && userChoice === 'rock') {
    resultDisplay.innerHTML = 'you win!'
  }
  if (computerChoice === 'scissors' && userChoice === 'paper') {
    resultDisplay.innerHTML = 'you lose!'
  }
  if (computerChoice === userChoice) {
    resultDisplay.innerHTML = 'its draw!'
  }
}
function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1
  
  if (randomNumber === 1) {
    computerChoice = 'rock'
  }
  if (randomNumber === 2) {
    computerChoice = 'scissors'
  }
  if (randomNumber === 3) {
    computerChoice = 'paper'
  }
  computerChoiceDisplay.innerHTML = computerChoice
}

startBtn.addEventListener('click', () => {
  pageOne.style.display = 'none' 
  wrap.style.display = 'flex'
})