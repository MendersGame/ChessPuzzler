/* ######################################################
#################### Classes ############################
######################################################### */

class Piece {
  constructor(token, color, location, selected) {
    this.token = token
    this.color = color
    this.location = location
    this.selected = selected
  }
}

class BoardSquare {
  constructor(location, occupied, highlighted, available) {
    this.location = location
    this.occupied = occupied
    this.highlighted = highlighted
    this.available = available
  }
}
/* ######################################################
#################### Constants ##########################
######################################################### */

let boardSquares = []
// Each for loop creates a column of 8 squares starting on the left and moving right
for (let i = 0; i < 8; i++) {
  const square = new BoardSquare (i, false, false, false)
  boardSquares.push(square)}
for (let i = 10; i < 18; i++) {
  const square = new BoardSquare (i, false, false, false)
  boardSquares.push(square)
}
for (let i = 20; i < 28; i++) {
  const square = new BoardSquare (i, false, false, false)
  boardSquares.push(square)
}
for (let i = 30; i < 38; i++) {
  const square = new BoardSquare (i, false, false, false)
  boardSquares.push(square)
}
for (let i = 40; i < 48; i++) {
  const square = new BoardSquare (i, false, false, false)
  boardSquares.push(square)
}
for (let i = 50; i < 58; i++) {
  const square = new BoardSquare (i, false, false, false)
  boardSquares.push(square)
}
for (let i = 60; i < 68; i++) {
  const square = new BoardSquare (i, false, false, false)
  boardSquares.push(square)
}
for (let i = 70; i < 78; i++) {
  const square = new BoardSquare (i, false, false, false)
  boardSquares.push(square)
}

const whiteRook1 = new Piece("R", "White", 74, false)
const whiteRook2 = new Piece("R", "White", 1, false)
const whiteKing = new Piece("K", "White", 27, false)
const blackKing = new Piece("K", "Black", 30, false)

const pieces = [whiteRook1, whiteRook2, whiteKing, blackKing]

/* ######################################################
#################### Variables ##########################
######################################################### */

let winner, winningMove

/* ######################################################
############# Cached Element References #################
######################################################### */

const squareEls = document.querySelectorAll('.sqr')
const messageEl = document.querySelector('#message')
squareEls.forEach(square => {
  square.addEventListener('click', handleClick)
})

/* ######################################################
################# Event Listeners #######################
######################################################### */

document.getElementById("resetButton").addEventListener('click', updateBoard)

/* ######################################################
#################### Functions ##########################
######################################################### */

init()

function init() {

}

function updateBoard() {
  boardSquares.forEach((square) => {
    //clears board of all elements
    document.getElementById(square.location).textContent = ""
    //places pieces:
    pieces.forEach((piece) => {
      piece.selected = false
      if (square.location === piece.location) {
        let printPiece = square.location.toString()
        piece.selected = true
        document.getElementById(printPiece).textContent = piece.token
      } 
    })
  })
}

updateBoard()

function handleClick(event) {
  const sqIdx = event.target.id
  let sqInt = parseInt(sqIdx)
  if (pieces.find(piece => piece.location === sqInt)) {
    console.log("Hit");
    console.log("Piece: ", piece);
  } else {
    console.log("Miss");
  }
  // console.log("Hit check: ", sqIdx, pieces.includes(sqIdx));
  // if (pieces.includes(sqIdx)) {
  //   console.log("Hit");
  // }
  // let selectedPiece = pieces.find(({sqIdx}) => sqIdx === pieces.location)
  // console.log("Selected Square: ", sqIdx);
  // console.log(pieces.find(({sqIdx}) => sqIdx === pieces.location));
  // console.log(pieces.includes(sqIdx));
  // console.log(pieces.location);
  // if (pieces.find(({sqIdx}) => sqIdx === pieces.location)) {
  //   console.log("Hit");
  // }
  // highlightSquares()
}

function highlightSquares() {
  pieces.forEach((piece) => {
    if (piece.selected === true) {
      let north = piece.location - 1
      console.log(north);
      document.getElementById(north).textContent = "+"
    }
  })
}

//Movement functions are described using directions as found on an 8 point compass
function moveNorth() {
 // location - 1
  return piece.location - 1
}

function moveSouth() {
  // location + 1
}

function moveWest() {
  // location - 1
}

function moveEast() {
  // location + 1
}

function moveNW() {
  // location - 11
}

function moveNE() {
  // location + 9
}

function moveSE() {
  // location + 11
}

function moveSW() {
  // location - 9
}