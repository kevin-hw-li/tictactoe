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

  var counter = null;
  var $start = $('#start');
  var $speech = $('.speech');
  var $img = $('img');
  var recordOfX = 0;
  var recordOfO = 0;
  var $row = $('tr');
  var $dataCell = $('td');


  $dataCell.on('click', function () {
    // alert(this.parentNode.rowIndex.toString() + ', ' + this.cellIndex)
    if ($(this).text() !== '') {
      $speech.text('This spot is already taken.');
    }

    else if (counter !== null && counter % 2 === 0){
      $(this).text('X');
      counter += 1;
      $speech.text('Beat me if you can.');
      winLostDraw('XXX');
      // setTimeout(AI, 2000);
    }

    else if (counter !== null && counter % 2 !== 0){
      $(this).text('O');
      counter += 1;
      $speech.text('Beat me if you can.');
      winLostDraw('OOO');
    }

  })

  function winLostDraw(triple) {

    if (getRow(0) === triple
        || getRow(1) === triple
        || getRow(2) === triple
        || getColumn(0) === triple
        || getColumn(1) === triple
        || getColumn(2) === triple
        || getSlash() === triple
        || getBackSlash() === triple) {

          if (triple === 'XXX') {
            $speech.text('NO WAY!');
            $img.attr('src', 'images/dancing_man3.gif')
            $start.text('Restart')
            recordWinOfX();
            counter = null;
          }

          else if (triple === 'OOO'){
            $speech.text('Too bad.');
            $img.attr('src', 'images/dancing_man2.gif');
            $start.text('Restart');
            recordWinOfO();
            counter = null;
          }
    }
    else if ($dataCell.text().length === 9) {
      $speech.text('It is a draw.');
      $start.text('Restart');
      counter = null;
    }
  }

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

  function getBackSlash() {
      var result = ''
      for (var x = 0; x < $row.length; x++) {
        result += $row[x].cells[x].innerText
        // result = $row[0].cells[0].innerText + $row[1].cells[1].innerText + $row[2].cells[2].innerText
      }
      return result;
  }

  function getSlash() {
      var result = ''
      for (var x = 0; x < $row.length; x++) {
        result += $row[x].cells[2-x].innerText
        // result = $row[0].cells[2].innerText + $row[1].cells[1].innerText + $row[2].cells[0].innerText
      }
      return result;
  }

  $start.on('click', function () {
    if ($dataCell.text() === '') {
      $start.text('Restart');
      $('.buttons').css('width', '90px');
      counter = 0;
    }
    else {
      $dataCell.text('');
      $img.attr('src', 'images/dancing_man.gif')
      $speech.text('Beat me if you can.');
      counter = 0;
    }
  })

  function recordWinOfX() {
    recordOfX += 1;
    $('#recordX').text('X = ' + recordOfX);

  }

  function recordWinOfO() {
    recordOfO += 1;
    $('#recordO').text('O = ' + recordOfO);
  }

});
