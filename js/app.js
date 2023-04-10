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

let gameState, winner, pIdx, activePuzzle

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
document.getElementById("oneButton").addEventListener('click', puzzleOne)
document.getElementById("twoButton").addEventListener('click', puzzleTwo)
document.getElementById("threeButton").addEventListener('click', puzzleThree)

/* ######################################################
#################### Functions ##########################
######################################################### */

init()

function puzzleOne() {
  activePuzzle = 1
  init()
}
function puzzleTwo() {
  activePuzzle = 2
  init()
}
function puzzleThree() {
  activePuzzle = 3
  init()
}

function init() {
  clearBoard()
  render()
}

function render() {
  if (activePuzzle === 2) {
    setPiecesTwo()
    updatePieces()
    updateMessage()
  } else if (activePuzzle === 3) {
    setPiecesThree()
    updatePieces()
    updateMessage()
  } else {
    setPiecesOne()
    updatePieces()
    updateMessage()
  }
}

function setPiecesOne() {
  activePuzzle = 1
  startLocations = []
  const whiteRook1 = new Piece("R", "White", 44, false)
  const whiteRook2 = new Piece("R", "White", 1, false)
  const whiteKing = new Piece("K", "White", 26, false)
  const blackKing = new Piece("K", "Black", 20, false)
  pieces = [whiteRook1, whiteRook2, whiteKing, blackKing]
  pieces.forEach((piece) => {
    startLocations.push(piece.location)
  })
}

function setPiecesTwo() {
  activePuzzle = 2
  startLocations = []
  const whiteRook1 = new Piece("R", "White", 16, false)
  const whiteRook2 = new Piece("R", "White", 61, false)
  const whiteKing = new Piece("K", "White", 35, false)
  const blackKing = new Piece("K", "Black", 0, false)
  const whiteBishop1 = new Piece("B", "White", 73, false)
  const whiteBishop2 = new Piece("B", "White", 54, false)
  const blackPawn = new Piece("P", "Black", 2, false)
  pieces = [whiteRook1, whiteRook2, whiteKing, blackKing, whiteBishop1, whiteBishop2, blackPawn]
  pieces.forEach((piece) => {
    startLocations.push(piece.location)
  })
}

function setPiecesThree() {
  activePuzzle = 3
  startLocations = []
  const whiteBishop1 = new Piece("B", "White", 54, false)
  const whiteQueen = new Piece("Q", "White", 61, false)
  const whiteKing = new Piece("K", "White", 26, false)
  const blackKing = new Piece("K", "Black", 20, false)
  pieces = [whiteQueen, whiteBishop1, whiteKing, blackKing]
  // pieces = [whiteBishop1, whiteQueen]
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
  } else if (pieces[0].location === 40 || pieces[0].location === 10 || pieces[0].location === 21) {
    gameState = 1
    updateMessage()
  } else if (startLocations.toString() !== currentLoc.toString()) {
    gameState = 2
    updateMessage()
  }
}

function clearBoard() {
  boardSquares.forEach((square) => {
    document.getElementById(square.location).style.backgroundImage = ""
    square.highlighted = false
    square.occupied = false
  })
}

function updatePieces() {
  pieces.forEach((piece) => {
    let sq = piece.location
    if (piece.token === "R" && piece.color === "White") {
      const pieceSquare = document.getElementById(sq)
      pieceSquare.style.backgroundImage = "url('../assets/Pieces/whiteRook.png')"
      pieceSquare.style.backgroundSize = "cover"
    } else if (piece.token === "B" && piece.color === "White") {
      const pieceSquare = document.getElementById(sq)
      pieceSquare.style.backgroundImage = "url('../assets/Pieces/whiteBishop.png')"
      pieceSquare.style.backgroundSize = "cover"
    } else if (piece.token === "Q" && piece.color === "White") {
      const pieceSquare = document.getElementById(sq)
      pieceSquare.style.backgroundImage = "url('../assets/Pieces/whiteQueen.png')"
      pieceSquare.style.backgroundSize = "cover"
    } else if (piece.token === "K" && piece.color === "White") {
      const pieceSquare = document.getElementById(sq)
      pieceSquare.style.backgroundImage = "url('../assets/Pieces/whiteKing.png')"
      pieceSquare.style.backgroundSize = "cover"
    } else if (piece.token === "K" && piece.color === "Black") {
      const pieceSquare = document.getElementById(sq)
      pieceSquare.style.backgroundImage = "url('../assets/Pieces/blackKing.png')"
      pieceSquare.style.backgroundSize = "cover"
    } else if (piece.token === "P" && piece.color === "Black") {
      const pieceSquare = document.getElementById(sq)
      pieceSquare.style.backgroundImage = "url('../assets/Pieces/blackPawn.png')"
      pieceSquare.style.backgroundSize = "cover"
    }
    boardSquares.forEach((square) => {
      if (square.location === sq) {
        square.occupied = true
      }
    })
  })
  checkState()
}

function handleClick(event) {
  const sqInt = parseInt(event.target.id)
  checkState()
  if (gameState === 0) {
    if (pieces.find(piece => piece.location === sqInt)) {
      pieces.forEach((piece) => {
        piece.selected = false
      })
      pIdx = pieces.findIndex(piece => piece.location === sqInt)
      pieces[pIdx].selected = true
      if (pieces[pIdx].token === "R") {
        clearBoard()
        moveNorth()
        moveSouth()
        moveEast()
        moveWest()
        updatePieces()
      } else if (pieces[pIdx].token === "K") {
        clearBoard()
        updatePieces()
        moveKing()
      } else if (pieces[pIdx].token === "B") {
        clearBoard()
        
        moveNE()
        moveNW()
        moveSE()
        moveSW()
        updatePieces()
      } else if (pieces[pIdx].token === "Q") {
        clearBoard()
        updatePieces()
        moveNorth()
        moveSouth()
        moveEast()
        moveWest()
        moveNE()
        moveNW()
        moveSE()
        moveSW()
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

function moveNW() {
  // location - 11
  pieces.forEach((piece) => {
    if (piece.selected === true) {
      let hit = piece.location
      // remove first digit of column
      let hitTen = hit.toString().charAt(0)
      let hitOne = hit.toString().charAt(1)
      let hitTenInt = parseInt(hitTen)
      let hitOneInt = parseInt(hitOne)
      if (hitTenInt > hitOneInt) {
        for (hitOneInt; hitOneInt > 0; hitOneInt--) {
          hit = hit - 11
          highlightSquares(hit)
        }
      } else if (hitTenInt < hitOneInt) {
        for (hitTenInt; hitTenInt > 0; hitTenInt--) {
          hit = hit - 11
          highlightSquares(hit)
        }
      } else if (hitTenInt === hitOneInt) {
        for (hitOne; hitOne > 0; hitOne--) {
          hit = hit - 11
          highlightSquares(hit)
        }
      }

    }
  })
}

function moveNE() {
  // location + 9
  pieces.forEach((piece) => {
    let hit = piece.location
    if (piece.selected === true) {
      let hitTen = hit.toString().charAt(0)
      let hitOne = hit.toString().charAt(1)
      let hitTenInt = parseInt(hitTen)
      let hitOneInt = parseInt(hitOne)
      if (hitTenInt + hitOneInt < 7) {
        for (hitOneInt; hitOneInt > 0; hitOneInt--) {
          hit = hit + 9
          highlightSquares(hit)
        }
      } else if (hitTenInt + hitOneInt > 7) {
        for (hitTenInt; hitTenInt < 7; hitTenInt++) {
          hit = hit + 9
          highlightSquares(hit)
        }
      } else if (hitTenInt + hitOneInt === 7) {
        for (hitTenInt; hitTenInt < 7; hitTenInt++) {
          hit = hit + 9
          highlightSquares(hit)
        }
      }
    }
  })
}

function moveSE() {
  // location + 11
  pieces.forEach((piece) => {
    if (piece.selected === true) {
      let hit = piece.location
      // remove first digit of column
      let hitTen = hit.toString().charAt(0)
      let hitOne = hit.toString().charAt(1)
      let hitTenInt = parseInt(hitTen)
      let hitOneInt = parseInt(hitOne)
      if (hitTenInt > hitOneInt) {
        for (hitTenInt; hitTenInt < 7; hitTenInt++) {
          hit = hit + 11
          highlightSquares(hit)
        }
      } else if (hitTenInt < hitOneInt) {
        for (hitOneInt; hitOneInt < 7; hitOneInt++) {
          hit = hit + 11
          highlightSquares(hit)
        }
      } else if (hitTenInt === hitOneInt) {
        for (hitOne; hitOne < 7; hitOne++) {
          hit = hit + 11
          highlightSquares(hit)
        }
      }

    }
  })
}

function moveSW() {
  // location - 9
  pieces.forEach((piece) => {
    let hit = piece.location
    if (piece.selected === true) {
      let hitTen = hit.toString().charAt(0)
      let hitOne = hit.toString().charAt(1)
      let hitTenInt = parseInt(hitTen)
      let hitOneInt = parseInt(hitOne)
      if (hitTenInt + hitOneInt < 7) {
        for (hitTenInt; hitTenInt > 0; hitTenInt--) {
          hit = hit - 9
          highlightSquares(hit)
        }
      } else if (hitTenInt + hitOneInt > 7) {
        for (hitOneInt; hitOneInt < 7; hitOneInt++) {
          hit = hit - 9
          highlightSquares(hit)
        }
      } else if (hitTenInt + hitOneInt === 7) {
        for (hitOneInt; hitOneInt < 7; hitOneInt++) {
          hit = hit - 9
          highlightSquares(hit)
        }
      }
    }
  })
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