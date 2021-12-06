let ageVerification = parseInt(prompt('Enter your age'))
let roundNumber = document.querySelector('.round-number')
let gridContainer = document.querySelector('.grid-container')
let currentRound = document.querySelector('.currentRound')

let player1Name = ""
let player2Name = ""

let counter = 1
let scoreX = 0
let scoreO = 0

let roundNum
let boxes = ""

if (ageVerification < 21) {
    alert('Based on US laws, you are not aligable to gamble')
} else {
    addNames()
}

function addNames() {
    player1Name = prompt('Player 1 Name')
    player2Name = prompt('Player 2 Name')

    let playersName = document.getElementsByTagName("p")
    playersName[0].className = "nameOne"
    playersName[2].className = "nameTwo"

    playersName[0].innerHTML = player1Name
    playersName[2].innerHTML = player2Name
    
    
   numberOfRounds()
}



function numberOfRounds() {
    roundNum = parseInt(prompt('Enter the number of rounds')) 

    roundNumber.innerHTML = `Total games  ${roundNum}`

    createTable()
}


function createTable() {
    let text = ""

    for (let i = 0; i < 9; i++) {
        text += `
        <div class="box"></div>
        `
    }

    gridContainer.innerHTML = text
    
    boxes = document.querySelectorAll('.box')

    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('click', addSymbol)
    }
    currentRound.innerHTML = `Current Round: ${counter}`
}

let symbol = "X"

function addSymbol() {

    if (symbol === "X") {
        symbol = "O"
    } else {
        symbol = "X"
    }

    this.innerHTML = symbol
    this.removeEventListener('click', addSymbol)

    checkLines()
}

function checkLines() {
    let lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],

        [0,3,6],
        [1,4,7],
        [2,5,8],

        [0,4,8],
        [2,4,6]
    ]
    
    lines.forEach(function(line) {
        let box1 = boxes[line[0]]
        let box2 = boxes[line[1]]
        let box3 = boxes[line[2]]

        if (box1.innerHTML === box2.innerHTML && 
            box1.innerHTML === box3.innerHTML &&
            box1.innerHTML != "" ) {

            if (symbol === "X" ) {
                scoreX++
            } else {
                scoreO++
            }    
            console.log(scoreX, scoreO);
            setTimeout(function() {
                box1.style.background = "green"
                box2.style.background = "green"
                box3.style.background = "green"
            },1000)

            setTimeout(function() {
                box1.style.background = "transparent"
                box2.style.background = "transparent"
                box3.style.background = "transparent"

                createTable()
            },3000)
        }
        counter++
        console.log(currentRound);

        if (counter == roundNum) {
            
        }
        
        
    })
}



