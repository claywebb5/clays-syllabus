$(document).ready(readyNow);

// store click counts
let clickCounts = {
  red: 0,
  yellow: 0,
  green: 0,
  blue: 0
}

function readyNow() {
  console.log('jQuery is up n runnin\'!');
  // on click, append box to DOM
  $('#red-button').on('click', handleRedClick);
  $('#yellow-button').on('click', handleYellowClick);
  $('#green-button').on('click', handleGreenClick);
  $('#blue-button').on('click', handleBlueClick);
  // first parent, then child
  $('#block-palace').on('click', '.block', handleRemoveBlock)
}

function handleRemoveBlock() {
  console.log('this is', $(this));
  // remove the block
  $(this).remove();

  // update the count
  console.log('this class is', $(this).attr('class'));
  switch ($(this).attr('class')) {
    case 'block red-block':
      clickCounts.red--;
      $('#red-count').text(clickCounts.red); // update the DOM - replace text value of element
      break;
    case 'block yellow-block':
      clickCounts.yellow--;
      $('#yellow-count').text(clickCounts.yellow);
      break;
    case 'block green-block':
      clickCounts.green--;
      $('#green-count').text(clickCounts.green);
      break;
    case 'block blue-block':
      clickCounts.blue--;
      $('#blue-count').text(clickCounts.blue);
      break;
  }
}

function handleRedClick() {
  console.log('Red was clicked!');
  $('#block-palace').append('<div class="block red-block"></div>');
  clickCounts.red++;
  console.log('red count', clickCounts.red);
  // $('#red-count').empty();
  // $('#red-count').append(clickCounts.red);
  $('#red-count').text(clickCounts.red);
}

function handleYellowClick() {
  console.log('Yellow was clicked!!');
  $('#block-palace').append('<div class="block yellow-block"></div>');
  clickCounts.yellow++;
  $('#yellow-count').text(clickCounts.yellow);
}

function handleGreenClick() {
  console.log('OMG Green CLICK');
  $('#block-palace').append('<div class="block green-block"></div>');
  clickCounts.green++;
  $('#green-count').text(clickCounts.green);
}

function handleBlueClick() {
  console.log('You\'re in the blue clique');
  $('#block-palace').append('<div class="block blue-block"></div>');
  clickCounts.blue++;
  $('#blue-count').text(clickCounts.blue);
}