// Technical Requirements
//
// Your app must:
//
// Render a game board in the browser
// Switch turns between X and O (or whichever markers you select)
// Visually display which side won if a player gets three in a row or show a draw/"cat’s game" if neither wins
// Include separate HTML / CSS / JavaScript files
// Stick with KISS (Keep It Simple Stupid) and DRY (Don't Repeat Yourself) principles
// Use Javascript for DOM manipulation
// Deploy your game online, where the rest of the world can access it
// Use semantic markup for HTML and CSS (adhere to best practices)

// AI = WIP

$(document).ready(function(){

  // First, the below variables are declared.

  var counter = null; // It is set as 'null' before the player presses the 'Start' or 'Restart' button.
  var $start = $('#start'); // 'Start' or 'Restart' button which sets the counter to 0 and clear all the markings when clicked. THe HTML element is <button id="#start">.
  var $speech = $('.speech'); // The speech bubble which shows the game status. The HTML element is <p class="speech">.
  var $img = $('img'); // The little man at the corner.
  var recordOfX = 0; // Winning record of the 'X' player.
  var recordOfO = 0; // Winning record of the 'O' player.
  var $row = $('tr'); // Refer to the table rows.
  var $dataCell = $('td'); // Refer to the table cells.


  $dataCell.on('click', function () {

    if ($(this).text() !== '') {
      $speech.text('This spot is already taken.');
      // If the square clicked on is not blank, the speech bubble will display a message saying the spot is taken.
    }

    else if (counter !== null && counter % 2 === 0){
      $(this).text('X');
      counter += 1;
      $speech.text('Play on your own.');
      winLostDraw('XXX');
      // If the counter value is not null, and is dividable by 2 (even number):
      // the function will access this table cell element and change the text inside as 'X'. Thus inputting a 'X' into the square;
      // it will add 1 to the counter which means the value of the counter will become an odd number, and the next click will not be a 'X'.
      // the third line is just changing the speech bubble back to its original state in case it is saying the spot is taken.
      // check the game status on each click. this function will be discussed below.
    }

    else if (counter !== null && counter % 2 !== 0){
      $(this).text('O');
      counter += 1;
      $speech.text('Play on your own.');
      winLostDraw('OOO');
      // Same as above. The Circle player takes turn when the counter value is an odd number.
    }

  })

  function winLostDraw(triple) {
    // This function takes a single argument of either 'XXX' or 'OOO'.

    if (getRow(0) === triple // eg. If the first row returns a value which is the same as the argument
        || getRow(1) === triple
        || getRow(2) === triple
        || getColumn(0) === triple
        || getColumn(1) === triple
        || getColumn(2) === triple
        || getSlash() === triple
        || getBackSlash() === triple) {

          if (triple === 'XXX') {
            $speech.text('X wins...');
            $img.attr('src', 'images/dancing_man3.gif');
            recordWinOfX();
            counter = null;
            // If one of the above if statements returns true, and 'XXX' is taken as the argument:
            // speech bubble will say 'X wins'
            // changes the image
            // record the win of X
            // set the counter to null so that the player cannot have further inputs until he clicks the 'Restart' button
          }

          else if (triple === 'OOO'){
            $speech.text('Circle wins.');
            $img.attr('src', 'images/dancing_man2.gif');
            recordWinOfO();
            counter = null;
            // Same as above. Just this time it is for 'OOO'.
          }
    }
    else if ($dataCell.text().length === 9) {
      $speech.text('It is a draw.');
      counter = null;
      // If all 9 squares are occupied:
      // The speech bubble will say it is a draw.
    }
  }

  function getRow(x) {
    var result = ''
    result = $row.eq(x).children().text();
    return result;
    // This will access the table row <tr> with index x, and return the text of its children <td>.
  }

  function getColumn(y) {
    var result = ''
    for (x = 0; x < $row.length; x++) {
      result += $row[x].cells[y].innerText;
    }
    return result;
    // This function will loop through all the table rows and return the value of cells with index y in each row.
    // innerText works instead of text() because the .cells method is javascript and not jQuery?
  }

  function getBackSlash() {
    var result = ''
    for (var x = 0; x < $row.length; x++) {
      result += $row[x].cells[x].innerText
      // result = $row[0].cells[0].innerText + $row[1].cells[1].innerText + $row[2].cells[2].innerText
    }
    return result;
    // This function will loop through all the table rows and return the value of cells in a diagonal.
  }

  function getSlash() {
    var result = ''
    for (var x = 0; x < $row.length; x++) {
      result += $row[x].cells[2-x].innerText
      // result = $row[0].cells[2].innerText + $row[1].cells[1].innerText + $row[2].cells[0].innerText
    }
    return result;
    // Same as above, just the other way round.
  }

  $start.on('click', function () {
      $dataCell.text(''); // Clear all the inputs
      counter = 0; // Set counter to 0
      $start.text('Restart'); // After the first click it will become a 'Restart' button
      $('.buttons').css('width', '90px'); // Just some css positioning of the button after it changes to 'Restart'
      $img.attr('src', 'images/dancing_man.gif') // Change image back to the original one after a win or loss or a draw
      $speech.text('Play on your own.'); // Change the text in the speech bubble
  })

  function recordWinOfX() {
    recordOfX += 1;
    $('#recordX').text('X = ' + recordOfX);
    // Just recording the wins of each side. Pretty self-explanatory.
  }

  function recordWinOfO() {
    recordOfO += 1;
    $('#recordO').text('O = ' + recordOfO);
  }
  // Same as above.
});
