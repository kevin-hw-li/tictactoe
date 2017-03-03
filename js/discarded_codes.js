// Pseudocode
// Divide into two parts - Player's input and AI
// Player's input will need to access DOM and change html elements - adding a X or O
// AI will need some if statements in regards to Player's input, as well as accessing DOM and change html elements
// Xanda's advice -> make the game works first before developing the AI.


function AI() {

}

var $row = $('tr');

function getRow(x) {
  var result = ''
  result = $row.eq(x).children().text();
  return result;
}

function getColumn(y) {
  var result = ''
  for (x = 0; x < $row.length; x++) {
    result += $row[x].cells[y].innerText;
  }
  return result;
}

function takeTheWin(i, double) {
  double = 'OO';
  if (getRow(i) === double) {
    $row.eq(i).children().text('O');
  }
  else if (getColumn(i) === double) {
    $row[PROBLEM].cells[i].innerText = 'O';
  }
}

// <!-- <div class="gameboard">
//   <div class="row" row="0">
//     <div class="block row1 col1 diag1" id="upper_left" col="0"><p>A</p></div>
//     <div class="block row1 col2" id="upper_mid" col="1"><p>A</p></div>
//     <div class="block row1 col3 diag2" id="upper_right" col="2"><p>A</p></div>
//   </div>
//   <div class="row"  row="1">
//     <div class="block row2 col1" id="mid_left" col="0"><p>A</p></div>
//     <div class="block row2 col2 diag1 diag2" id="mid" col="1"><p>A</p></div>
//     <div class="block row2 col3" id="mid_right" col="2"><p>A</p></div>
//   </div>
//   <div class="row"  row="2">
//     <div class="block row3 col1 diag2" id="lower_left" col="0"><p>A</p></div>
//     <div class="block row3 col2" id="lower_mid" col="1"><p>A</p></div>
//     <div class="block row3 col3 diag1" id="lower_right" col="2"><p>A</p></div>
//   </div> -->
//
//   <!-- <div class="row" row="0">
//     <div class="block" col="0"><p>A</p></div>
//     <div class="block" col="1"><p>A</p></div>
//     <div class="block" col="2"><p>A</p></div>
//   </div>
//
//   <div class="row" row="1">
//     <div class="block" col="0"><p>A</p></div>
//     <div class="block" col="1"><p>A</p></div>
//     <div class="block" col="2"><p>A</p></div>
//   </div>
//
//   <div class="row" row="2">
//     <div class="block" col="0"><p>A</p></div>
//     <div class="block" col="1"><p>A</p></div>
//     <div class="block" col="2"><p>A</p></div>
//   </div> -->


// alert(this.parentNode.rowIndex.toString() + ', ' + this.cellIndex)
// setTimeout(AI, 2000);

// var board = [
//   ["","",""],
//   ["","",""],
//   ["","",""]
// ]

// Rule 1: If I have a winning move, take it.
// Rule 2: If the opponent has a winning move, block it.




// function takeTheWin1() {
//   for (var i = 0; i < $row.length; i++) {
//     var $rowData = $row.eq(i).children();
//     if ($rowData.text() === 'OO') {
//       $rowData.text('O');
//     }
//   }
// }
//
// function takeTheWin2(y) {
//     if (getColumn[y] === 'OO') {
//       $row.cells[y].text('O');
//     }
// }
//
//
// function takeTheWin3() {
//   for (var i = 0; i < $row.length; i++) {
//     var $rowData = $row.eq(i).children();
//     if ($rowData.text() === 'OO') {
//       $rowData.text('O');
//     }
//   }
// }
//
// function takeTheWin4() {
//   for (var i = 0; i < $row.length; i++) {
//     var $rowData = $row.eq(i).children();
//     if ($rowData.text() === 'OO') {
//       $rowData.text('O');
//     }
//   }
// }

// function blockTheMove() {
//   for (var i = 0; i < $row.length; i++) {
//     var $rowData = $row.eq(i).children();
//     if ($rowData.text() === 'XX') {
//       if ($row.eq.(i).cell[j].text() === '') {
//
//       }
//     }
//   }
// }



// $('.block').on('click', function () {
//
//   if ($(this).children().text() !== 'A') {
//     alert('This spot is already taken.');
//   }
//
//   else if (counter % 2 !== 0){
//     $(this).children().css('color', 'black').text('X');
//     counter += 1;
//     winLost('XXX');
//     setTimeout(AI, 2000);
//   }
  // else {
  // $(this).children().css('color', 'black').text('O');
  // counter += 1;
  // winLost('OOO');
  // }
// })



// function winLost(threeXO) {
//   if ($('.row1').find('p').text() === threeXO
//       || $('.row2').find('p').text() === threeXO
//       || $('.row3').find('p').text() === threeXO
//       || $('.col1').find('p').text() === threeXO
//       || $('.col2').find('p').text() === threeXO
//       || $('.col3').find('p').text() === threeXO
//       || $('.diag1').find('p').text() === threeXO
//       || $('.diag2').find('p').text() === threeXO) {
//         if (threeXO === 'XXX') {
//           alert('CONGRATULATION! YOU WON!');
//         } else if (threeXO === 'OOO'){
//           alert('GAMEOVER! YOU LOST!');
//         }
//   }
// }





//
// function AI() {
//   // First move
//   if ($('#upper_left').children().text() === 'A') {
//     $('#upper_left').children().css('color', 'black').text('O');
//   }
//
//   // Second move
//   else if ($('#upper_mid').children().text() !== 'X' && $('#upper_right').children().text() === 'A') {
//     $('#upper_right').children().css('color', 'black').text('O');
//   }
//
//   // Second move
//   else if ($('#mid_left').children().text() !== 'X' && $('#lower_left').children().text() === 'A') {
//     $('#lower_left').children().css('color', 'black').text('O');
//   }
//
//   // Third move
//   else if ($('#lower_right').children().text() === 'A') {
//     $('#lower_right').children().css('color', 'black').text('O');
//   }
//
//
//   // PROBLEM STARTS HERE
//   // Winning move
//   else if ($('#mid').children().text() === 'A') {
//     $('#mid').children().css('color', 'black').text('O');
//   }
//
//   // Winning move
//   else if ($('#mid_right').children().text() === 'A' && $('#upper_right').children().text() === 'O'){
//     $('#mid_right').children().css('color', 'black').text('O');
//   }
//
//   // Winning move
//   else if ($('#lower_mid').children().text() === 'A' && $('#lower_left').children().text() === 'O') {
//     $('#lower_mid').children().css('color', 'black').text('O');
//   }



  // else if ($('#mid_right').children().text() === 'A'){
  //   $('#mid_right').children().css('color', 'black').text('O');
  // }



//   counter += 1;
//   winLost('OOO');
// }

// function coordinates () {
// var board = [];
//
// $('.block').each (function() {
//   board.push($(this).children().val());
// });
//
// return board;
// }


// Pseudocode =
//   if player does not take mid, take mid;
//   else take a random spot
//   and link them with three 'O' by using for loops:
//     searching for the same class names except block
//     OR
//     searching for 'O's to make three 'O's

// var forTheWin = function () {
//   if ($('.row1').find('p').text().sort() === 'AOO'
//       || $('.row2').find('p').text().sort() === 'AOO'
//       || $('.row3').find('p').text().sort() === 'AOO'
//       || $('.col1').find('p').text().sort() === 'AOO'
//       || $('.col2').find('p').text().sort() === 'AOO'
//       || $('.col3').find('p').text().sort() === 'AOO'
//       || $('.diag1').find('p').text().sort() === 'AOO'
//       || $('.diag2').find('p').text().sort() === 'AOO')
//     $(this).children().css('color', 'black').text('O');
//   }
// }



// var $boardPlus = function () {
//   var $block = $('.block')
//
//   for (var x = 0; x < $board.length; x++) {
//     for (var y = 0; y < $board.length; y++) {
//       var $row = $block.parent().attr('row');
//       var $col = $block.attr('col');
//       var boardVar = $board[x][y] + $row + $col;
//       $board[x][y] = boardVar;
//     }
//   }
// }


//
// board[x][y] = "o"


// var wdi20 = [
//   [null, null, null, null, 'kevin', null],
//   ['luke', null, null, 'jared', 'hen', 'diego'],
//   [null, null, null, null, 'peach'],
//   [null, 'petr', null, null]
// ]
//
// var wdi20plus = function () {
//   for (var x = 0; x < wdi20.length; x++) {
//     for (var y = 0; y < wdi20[x].length; y++) {
//       console.log('Row ' + (x + 1) + ' Seat ' + (y + 1) + ': ' + wdi20[x][y]);
//     }
//   }
// }



// $(".cell").on("click", function(){
  // var col = this.getAttribute("col");
  // var row = $(this).parent()[0].getAttribute("row");
//   alert(row + ", " + col);
// })
//
// var map = function (row, col) {
//   var row = $(this).parent()[0].getAttribute("row");
//   var col = this.getAttribute("col");
// }

// var coordinates = [
//   [1,1],[1,2],[1,3],
//   [2,1],[2,2],[2,3],
//   [3,1],[3,2],[3,3],
// ]

// var $coordinates = function () {
//   var $row = $('.block').attr('row');
//   var $col = $('.block').attr('col');
//   $board.push($row, $col)
// }

// var coordinates = function (div, mark) {
//   var x = $(div).parent()[0].getAttribute("row");
//   var y = div.getAttribute("col");
//   var marker = board[x][y] + mark;
//   board[x][y] = marker;
// }
