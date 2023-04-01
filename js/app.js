/* ######################################################
#################### Classes ############################
######################################################### */

class Piece {
  constructor(token, xCoord, yCoord, clicked, color) {
    this.token = token
    this.xCoord = xCoord
    this.yCoord = yCoord
    this.clicked = clicked
    this.color = color
  }
}

class BoardSquare {
  constructor(location, occupied, highlighted) {
    this.location = location
    this.occupied = occupied
    this.highlighted = highlighted
  }
}
/* ######################################################
#################### Constants ##########################
######################################################### */

const squareEls = document.querySelectorAll('.sqr')

//top row statically defined for testing purposes
const square00 = new BoardSquare("00", false, false)
const square10 = new BoardSquare("10", false, false)
const square20 = new BoardSquare("20", false, false)
const square30 = new BoardSquare("30", true, false)
const square40 = new BoardSquare("40", false, false)
const square50 = new BoardSquare("50", false, false)
const square60 = new BoardSquare("60", false, false)
const square70 = new BoardSquare("70", false, false)

// const boardSquares = 

const boardSquares = [square00, square10, square20, square30, square40, square50, square60, square70]

// console.log("Board: ", boardSquares);

const whiteRook1 = new Piece("R", "3", "0", false, "White")

// console.log(square30, whiteRook1)

let testPiece = eval(whiteRook1.xCoord + whiteRook1.yCoord)
console.log("Test Piece: ", testPiece)

function updateBoard() {
  boardSquares.forEach((square, idx) => {
    if(square.occupied === true) {
      document.getElementById(testPiece).textContent = whiteRook1.token
    }
  })
}
updateBoard()
console.log("Occupied: ", square30.occupied);


/* ######################################################
#################### Variables ##########################
######################################################### */

let winner, winningMove

/* ######################################################
############# Cached Element References #################
######################################################### */



/* ######################################################
################# Event Listeners #######################
######################################################### */



/* ######################################################
#################### Functions ##########################
######################################################### */

init()

function init() {

}

// function updateBoard() {

// }

function handleClick() {

}

function placePieces() {

}

//Movement functions are described using directions as found on an 8 point compass
function moveNorth() {
 // yCoord - 1
}

function moveSouth() {
  // yCoord + 1
}

function moveWest() {
  // xCoord - 1
}

function moveEast() {
  // xCoord + 1
}

function moveNW() {
  // xCoord - 1 && yCoord - 1
}

function moveNE() {
  // xCoord + 1 && yCoord - 1
}

function moveSE() {
  // xCoord + 1 && yCoord + 1
}

function moveSW() {
  // xCoord - 1 && yCoord + 1
}