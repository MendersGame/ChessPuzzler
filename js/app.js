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
let pieces = []
let startLocations = []

// Integrated shading to create a checkered pattern on game board
for (let col = 0; col < 80; col += 10) {
  for (let row = 0; row < 8; row++) {
    if (col === 0 || col === 20 || col === 40 || col === 60) {
      if (row % 2 === 0) {
        document.getElementById(row + col).style.backgroundColor = "lightslategray"
      } else if (row % 2 !== 0) {
        document.getElementById(row + col).style.backgroundColor = "darkslategray"
      }
      const square = new BoardSquare(row + col, false, false, false)
      boardSquares.push(square)
    } else {
      if (row % 2 !== 0) {
        document.getElementById(row + col).style.backgroundColor = "lightslategray"
      } else if (row % 2 === 0) {
        document.getElementById(row + col).style.backgroundColor = "darkslategray"
      }
      const square = new BoardSquare(row + col, false, false, false)
      boardSquares.push(square)
    }
  }
}

/* ######################################################
#################### Variables ##########################
######################################################### */

let gameState, winner, pIdx

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

document.getElementById("resetButton").addEventListener('click', init)

/* ######################################################
#################### Functions ##########################
######################################################### */

init()

function init() {
  clearBoard()
  render()
}

function render() {
  setPieces()
  updatePieces()
  updateMessage()
}

function setPieces() {
  startLocations = []

  const whiteRook1 = new Piece("R", "White", 54, false)
  const whiteRook2 = new Piece("R", "White", 1, false)
  const whiteKing = new Piece("K", "White", 26, false)
  const blackKing = new Piece("K", "Black", 30, false)

  pieces = [whiteRook1, whiteRook2, whiteKing, blackKing]
  pieces.forEach((piece) => {
    startLocations.push(piece.location)
  })
}

function checkState() {
  let currentLoc = []
  pieces.forEach((piece) => {
    currentLoc.push(piece.location)
  })
  if (startLocations.toString() === currentLoc.toString()) {
    winner = false
    gameState = 0
  } else if (pieces[0].location === 50) {
    gameState = 1
    updateMessage()
  } else if (pieces[0].selected === false) {
    gameState = 2
    updateMessage()
  }
}

function clearBoard() {
  boardSquares.forEach((square) => {
    document.getElementById(square.location).style.backgroundImage = ""
    square.highlighted = false
  })
}

function updatePieces() {
  pieces.forEach((piece) => {
    let sq = piece.location
    if (piece.token === "R" && piece.color === "White") {
      const pieceSquare = document.getElementById(sq)
      pieceSquare.style.backgroundImage = "url('../assets/Pieces/whiteRook.png')"
      pieceSquare.style.backgroundSize = "cover"
    } else if (piece.token === "K" && piece.color === "White") {
      const pieceSquare = document.getElementById(sq)
      pieceSquare.style.backgroundImage = "url('../assets/Pieces/whiteKing.png')"
      pieceSquare.style.backgroundSize = "cover"
    } else if (piece.token === "K" && piece.color === "Black") {
      const pieceSquare = document.getElementById(sq)
      pieceSquare.style.backgroundImage = "url('../assets/Pieces/blackKing.png')"
      pieceSquare.style.backgroundSize = "cover"
    }
  })
  checkState()
}

function handleClick(event) {
  const sqInt = parseInt(event.target.id)
  checkState()
  if (gameState === 0) {
    if (pieces.find(piece => piece.location === sqInt)) {
      // Remove selected property from previously selected pieces
      pieces.forEach((piece) => {
        piece.selected = false
      })
      // Find index of selected piece
      pIdx = pieces.findIndex(piece => piece.location === sqInt)
      // Set selected property to true
      pieces[pIdx].selected = true
      // Store pointer of selected piece
      if (pieces[pIdx].token === "R") {
        clearBoard()
        updatePieces()
        moveNorth()
        moveSouth()
        moveEast()
        moveWest()
      } else if (pieces[pIdx].token === "K") {
        moveKing()
      }
    // check if piece was selected or if move was made
    } else {
      if (boardSquares.find(sq => sq.location === sqInt).highlighted) {
        pieces.forEach((piece) => {
          if (piece.selected === true) {
            piece.location = sqInt
          }
        })
        clearBoard()
        updatePieces()
      }
      pieces.forEach((piece) => {
        piece.selected = false
      })
      clearBoard()
      updatePieces()
    }
    //? drop all data if no move made
  } else if (gameState === 1) {

  }
}

function updateMessage() {
  if (gameState === 0) {
    messageEl.textContent = "It is White to play and checkmate black in one."
  } else if (gameState === 1) {
    messageEl.textContent = "Congratulations!  Black is in Checkmate!"
    gameState = 1
  } else if (gameState === 2) {
    messageEl.innerHTML = `Sorry, that move does not put black in checkmate. </br> Click Reset button to try again.`
  } else {
    messageEl.textContent = "It is White to play and checkmate black in one."
  }
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
          highlightSquares(hit)
        }
      } else {
        // remove first digit of column
        let hitStr = hit.toString().substring(1)
        let hitInt = parseInt(hitStr)
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

//todo Add diagonal movement rules and incorporate bishops and a Queen for future puzzles
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

function moveKnight() {
  //+/- 8, 19, 21, 12
}

function moveKing() {
  highlightSquares(pieces[2].location + 1)
  highlightSquares(pieces[2].location - 1)
  highlightSquares(pieces[2].location + 9)
  highlightSquares(pieces[2].location - 9)
  highlightSquares(pieces[2].location + 10)
  highlightSquares(pieces[2].location - 10)
  highlightSquares(pieces[2].location + 11)
  highlightSquares(pieces[2].location - 11)
}

function highlightSquares(sq) {
  let sqHighlight = boardSquares.find(square => square.location === sq)
  sqHighlight.highlighted = true
  const moveSquare = document.getElementById(sq)
  moveSquare.style.backgroundImage = "url('../assets/yellowDot.png')"
  moveSquare.style.backgroundSize = "cover"
}
