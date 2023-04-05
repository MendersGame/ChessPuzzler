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
// Element that the image will be applied to:
const imageContainer = document.querySelector('.sqr')

// Applying background image:
imageContainer.style.backgroundImage = "../Pieces/whiteRook.png')"

// document.getElementById("77").style.backgroundImage = "url(`./Pieces/whiteRook.png`)"
// import whiteRookPiece from "../assets/Pieces/whiteRook.png"
let whiteRookPiece = new Image()
whiteRookPiece.src = "../assets/Pieces/"
let boardSquares = []
let moveSquares = []
for (let col = 0; col < 80; col += 10) {
  for (let row = 0; row < 8; row++) {
    const square = new BoardSquare (row + col, false, false, false)
    boardSquares.push(square)
  }
}

const whiteRook1 = new Piece("R", "White", 54, false)
const whiteRook2 = new Piece("R", "White", 1, false)
const whiteKing = new Piece("K", "White", 27, false)
const blackKing = new Piece("K", "Black", 30, false)

const pieces = [whiteRook1, whiteRook2, whiteKing, blackKing]

/* ######################################################
#################### Variables ##########################
######################################################### */

let winner, winningMove, pIdx, prevSelected

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
function checkerBoard() {

}
function init() {

}

function updateBoard() {
  boardSquares.forEach((square) => {
    //clears board of all elements
    // document.getElementById(square.location).style.backgroundColor = ""
    //places pieces:
    pieces.forEach((piece) => {
      piece.selected = false
      if (square.location === piece.location) {
        let printPiece = square.location.toString()
        piece.selected = true
        // document.getElementById(printPiece).textContent = piece.token
        const pieceSquare = document.getElementById(printPiece)
        pieceSquare.style.backgroundImage = "url('../assets/Pieces/whiteRook.png')"
        pieceSquare.style.backgroundSize = "cover"
      } 
    })
  })
}

function handleClick(event) {
  updateBoard()
  const sqInt = parseInt(event.target.id)
  if (pieces.find(piece => piece.location === sqInt)) {
    // Find index of selected piece
    const pIdx = pieces.findIndex(piece => piece.location === sqInt)
    // Set selected property to true
    pieces[pIdx].selected = true
    // Store pointer of selected piece
    prevSelected = pieces[pIdx]
    if (pieces[pIdx].token === "R") {
      moveNorth()
      moveSouth()
      moveEast()
      moveWest()
    } else if (pieces[pIdx].token === "K") {
      moveKing()
    }
  } else if (boardSquares.find(square => square.location === sqInt)) {
    if (boardSquares.find(sq => sq.location === sqInt).highlighted) {
      prevSelected.location = sqInt
    }
  }
  // updateBoard()
}




//Movement functions are described using directions as found on an 8 point compass
function moveNorth() {
  pieces.forEach((piece) => {
    if (piece.selected === true) {
      let hit = piece.location
      while (hit % 10 !== 0) {
        hit = hit - 1
        highlightSquares(hit)
        }
    }
  })
  }


function moveSouth() {
  // location + 1
  pieces.forEach((piece) => {
    if (piece.selected === true) {
      let hit = piece.location
      //todo flip, hit greater than 10, then while loop
      if (hit < 10) {
        while (hit < 7) {
          hit = hit + 1
          console.log("South : ", hit);
          highlightSquares(hit)
          }
      } else {
      // remove first digit of column
      let hitStr = hit.toString().substring(1)
      let hitInt = parseInt(hitStr)
      console.log("Hit check: ", hit, hitStr, hitInt);
      while (hitInt < 7) {
        hitInt = hitInt + 1
        hit = hit + 1
        highlightSquares(hit)
        } 
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
        highlightSquares(hit)
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
        highlightSquares(hit)
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

function highlightSquares(sq) {
  // document.getElementById(sq).textContent = "--"
  let sqHighlight = boardSquares.find(square => square.location === sq)
  sqHighlight.highlighted = true
  document.getElementById(sq).style.backgroundColor = "yellow"
}

console.log(boardSquares);
console.log("Move squares: ", moveSquares);