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

const whiteRook1 = new Piece("R", "White", 54, false)
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
  pieces.forEach((piece) => {
    piece.selected = false
  })
  updateBoard()
  const sqIdx = event.target.id
  let sqInt = parseInt(sqIdx)
  console.log("Square: ", sqInt);
  if (pieces.find(piece => piece.location === sqInt)) {
    console.log("hit")
    let hit = pieces.find(piece => piece.location === sqInt)
    hit.selected = true
    console.log(pieces);
    if (hit.token === "R") {
      moveNorth()
      moveSouth()
      moveEast()
      moveWest()
    } else if (hit.token === "K") {
      moveKing()
    }
  } 
  else if (boardSquares.find(square => square.location === sqInt)) {
    let checkSquare = boardSquares.find(square => square.location === sqInt)
    console.log("Check square: ", checkSquare);
  } 
  else {
    console.log("miss");
    console.log(pieces);
    updateBoard()
    pieces.forEach((piece) => {
      piece.selected = false
    })
  }
}


function highlightSquares() {

}

//Movement functions are described using directions as found on an 8 point compass
function moveNorth() {
  pieces.forEach((piece) => {
    if (piece.selected === true) {
      let hit = piece.location
      while (hit % 10 !== 0) {
        hit = hit - 1
        document.getElementById(hit).textContent = "--"
        boardSquares.forEach(square.location = hit.location) { square.highlighted = true }
        }
    }
  })
  }


function moveSouth() {
  // location + 1
  //! This should stop after 7, since no column includes any values ending in 8
  pieces.forEach((piece) => {
    if (piece.selected === true) {
      let hit = piece.location
      let col = hit % 10
      // flip, hit greater than 10, then while loop
      if (hit < 10) {
        while (hit < 7) {
          hit = hit + 1
          console.log("South : ", hit);
          document.getElementById(hit).textContent = "--"
          }
      }
      // remove first digit of column
      while (hit < 8) {
        hit = hit + 1
        console.log("South : ", hit);
        document.getElementById(hit).textContent = "--"
        }
    }
  })
}

function moveWest() {
  // location - 10
  pieces.forEach((piece) => {
    if (piece.selected === true) {
      let hit = piece.location
      while (hit > 10) {
        hit = hit - 10
        document.getElementById(hit).textContent = "--"
        }
    }
  })
}

function moveEast() {
  // location + 10
  pieces.forEach((piece) => {
    if (piece.selected === true) {
      let hit = piece.location
      while (hit < 70) {
        hit = hit + 10
        document.getElementById(hit).textContent = "--"
        }
    }
  })
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

function moveKing() {
  console.log("Don't move the King");
}