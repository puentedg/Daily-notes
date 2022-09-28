// present the current day
// display timeblocks for that day
// COLOR CODED TIME BLOCKS
// Click into a timeblock and create an event
// save button for that time block
// Save in local storage
// Be able to see the events when refresh

// FUNCTIONS AND EVENTS
// function displayDate DONE
// function displayTimeblocks
// function storeEvent
// function retrieveEvent
// Event Listener createEvent
// Event Listener save btn
var timeDisplayEl = $('#currentDay');
var displayTimeblocksEl = $('#time-block');
function displayDate() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  }

function displayTimeblocks () {
    displayTimeblocksEl
}

  setInterval(displayDate, 1000);

