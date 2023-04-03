/* ######################################################
#################### Classes ############################
######################################################### */

class Piece {
  constructor(token, color, xy, selected) {
    this.token = token
    this.color = color
    this.xy = xy
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
for (let i = 0; i < 8; i++) {
  let locData = "square0" + i
  const square = new BoardSquare (i, false, false, false)
  boardSquares.push(square)
}
for (let i = 10; i < 18; i++) {
  let locData = "square" + i
  const square = new BoardSquare (i, false, false, false)
  boardSquares.push(square)
}
for (let i = 20; i < 28; i++) {
  let locData = "square" + i
  const square = new BoardSquare (i, false, false, false)
  boardSquares.push(square)
}
for (let i = 30; i < 8; i++) {
  let locData = "square" + i
  const square = new BoardSquare (i, false, false, false)
  boardSquares.push(square)
}
for (let i = 40; i < 8; i++) {
  let locData = "square" + i
  const square = new BoardSquare (i, false, false, false)
  boardSquares.push(square)
}
for (let i = 50; i < 58; i++) {
  let locData = "square" + i
  const square = new BoardSquare (i, false, false, false)
  boardSquares.push(square)
}
for (let i = 60; i < 68; i++) {
  let locData = "square" + i
  const square = new BoardSquare (i, false, false, false)
  boardSquares.push(square)
}
for (let i = 70; i < 78; i++) {
  let locData = "square" + i
  const square = new BoardSquare (i, false, false, false)
  boardSquares.push(square)
}
boardSquares.forEach((square) => {
  console.log(square.location);
})

console.log(boardSquares);
// //Top row:
// const square00 = new BoardSquare("00", false, false, false)
// const square10 = new BoardSquare("10", false, false, false)
// const square20 = new BoardSquare("20", false, false, false)
// const square30 = new BoardSquare("30", false, false, false)
// const square40 = new BoardSquare("40", false, false, false)
// const square50 = new BoardSquare("50", false, false, false)
// const square60 = new BoardSquare("60", false, false, false)
// const square70 = new BoardSquare("70", false, false, false)
// //Second Row:
// const square01 = new BoardSquare("01", false, false, false)
// const square11 = new BoardSquare("11", false, false, false)
// const square21 = new BoardSquare("21", false, false, false)
// const square31 = new BoardSquare("31", false, false, false)
// const square41 = new BoardSquare("41", false, false, false)
// const square51 = new BoardSquare("51", false, false, false)
// const square61 = new BoardSquare("61", false, false, false)
// const square71 = new BoardSquare("71", false, false, false)
// //Third Row
// const square02 = new BoardSquare("02", false, false, false)
// const square12 = new BoardSquare("12", false, false, false)
// const square22 = new BoardSquare("22", false, false, false)
// const square32 = new BoardSquare("32", false, false, false)
// const square42 = new BoardSquare("42", false, false, false)
// const square52 = new BoardSquare("52", false, false, false)
// const square62 = new BoardSquare("62", false, false, false)
// const square72 = new BoardSquare("72", false, false, false)
// //Fourth Row
// const square03 = new BoardSquare("03", false, false, false)
// const square13 = new BoardSquare("13", false, false, false)
// const square23 = new BoardSquare("23", false, false, false)
// const square33 = new BoardSquare("33", false, false, false)
// const square43 = new BoardSquare("43", false, false, false)
// const square53 = new BoardSquare("53", false, false, false)
// const square63 = new BoardSquare("63", false, false, false)
// const square73 = new BoardSquare("73", false, false, false)
// //Fifth Row
// const square04 = new BoardSquare("04", false, false, false)
// const square14 = new BoardSquare("14", false, false, false)
// const square24 = new BoardSquare("24", false, false, false)
// const square34 = new BoardSquare("34", false, false, false)
// const square44 = new BoardSquare("44", false, false, false)
// const square54 = new BoardSquare("54", false, false, false)
// const square64 = new BoardSquare("64", false, false, false)
// const square74 = new BoardSquare("74", false, false, false)
// //Sixth Row
// const square05 = new BoardSquare("05", false, false, false)
// const square15 = new BoardSquare("15", false, false, false)
// const square25 = new BoardSquare("25", false, false, false)
// const square35 = new BoardSquare("35", false, false, false)
// const square45 = new BoardSquare("45", false, false, false)
// const square55 = new BoardSquare("55", false, false, false)
// const square65 = new BoardSquare("65", false, false, false)
// const square75 = new BoardSquare("75", false, false, false)
// //Seventh Row
// const square06 = new BoardSquare("06", false, false, false)
// const square16 = new BoardSquare("16", false, false, false)
// const square26 = new BoardSquare("26", false, false, false)
// const square36 = new BoardSquare("36", false, false, false)
// const square46 = new BoardSquare("46", false, false, false)
// const square56 = new BoardSquare("56", false, false, false)
// const square66 = new BoardSquare("66", false, false, false)
// const square76 = new BoardSquare("76", false, false, false)
// //Eighth Row
// const square07 = new BoardSquare("07", false, false, false)
// const square17 = new BoardSquare("17", false, false, false)
// const square27 = new BoardSquare("27", false, false, false)
// const square37 = new BoardSquare("37", false, false, false)
// const square47 = new BoardSquare("47", false, false, false)
// const square57 = new BoardSquare("57", false, false, false)
// const square67 = new BoardSquare("67", false, false, false)
// const square77 = new BoardSquare("77", false, false, false)

// const boardSquares = [
//   square00, square10, square20, square30, square40, square50, square60, square70,
//   square01, square11, square21, square31, square41, square51, square61, square71,
//   square02, square12, square22, square32, square42, square52, square62, square72,
//   square03, square13, square23, square33, square43, square53, square63, square73,
//   square04, square14, square24, square34, square44, square54, square64, square74,
//   square05, square15, square25, square35, square45, square55, square65, square75,
//   square06, square16, square26, square36, square46, square56, square66, square76,
//   square07, square17, square27, square37, square47, square57, square67, square77,
// ]


const whiteRook1 = new Piece("R", "White", "74", false)
const whiteRook2 = new Piece("R", "White", "01", false)
const whiteKing = new Piece("K", "White", "27", false)
const blackKing = new Piece("K", "Black", "30", false)

const pieces = [whiteRook1, whiteRook2, whiteKing, blackKing]

// pieces.forEach((piece) => {
//   let occupiedSquare = eval("square" + piece.xy)
//   occupiedSquare.occupied = true
//   console.log("Occupied check: ", occupiedSquare)
// })
//todo Come back to this!
// boardSquares.forEach((square) => {
//   console.log(square.location, square.occupied);
//   if(square.occupied === true) {
//     console.log(square.location);
//     let occSquare = eval(square.location)
//     document.getElementById(occSquare).textcontent = "K"
//   }
// })
// console.log("Board: ", boardSquares);

// const whiteRook1 = new Piece("R", "White", "30", false)

// Testing for storing spererate X and Y coords for pieces
// console.log(square30, whiteRook1)
// let testPiece = eval(whiteRook1.xCoord + whiteRook1.yCoord)
// console.log("Test Piece: ", testPiece)

// let testPiece = whiteRook1.xy
// console.log(testPiece);

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



/* ######################################################
#################### Functions ##########################
######################################################### */

init()

function init() {

}

// function updateBoard() {

// }

function handleClick() {
  // console.log(event.target.id);
  const sqIdx = event.target.idx


}

function updateBoard() {
  boardSquares.forEach((square) => {
    // console.log(`Square: `, square.location);
    if(square.occupied === true) {
      // console.log("Occupied: ", square.location);

    }
  })
}

updateBoard()


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