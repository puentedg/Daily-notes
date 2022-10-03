
// FUNCTIONS AND EVENTS
// function displayDate DONE
// function displayTimeblocks
// function storeEvent
// function retrieveEvent
// Event Listener createEvent
// Event Listener save btn

// Variables
let container = $(".container")
var timeDisplayEl = $('#currentDay');
var displayTimeblocksEl = $('#time-block');
let timeRowEl = $('.row');
console.log(timeRowEl);
let userEntry =[];


function displayDate() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  }

function displayTimeblocks () {
    
    for (let i=0; i<9; i++) {
        let currentTimeEl = $(`#hour${i+1}`);
        console.log(currentTimeEl)

        let currentTime = moment().hour();
        console.log('curr',currentTime);
        let hour = parseInt(currentTimeEl.attr('data-time'));
        console.log('hour', hour);
        
        currentTimeEl.removeClass ("past");
        currentTimeEl.removeClass ("present");
        currentTimeEl.removeClass ("future");

        if (hour<currentTime) {
            currentTimeEl.addClass("past");
        }
        else if (hour==currentTime){
            currentTimeEl.addClass("present");
        }
        else {
            currentTimeEl.addClass("future");
        }
    }
}

function loadNote () {
    let hourlyNote = JSON.parse(localStorage.getItem("note"))
    console.log(hourlyNote);

    if (hourlyNote === null) {
        return;
    }
    userEntry = hourlyNote;
}

function storeNote () {
    
    localStorage.setItem("note", JSON.stringify(userEntry));
}

function saveNote (event){
    console.log(event) 

    let button = $(event.target);
    let buttonChildren = button.siblings();
    let timeEl = $(this).parent()
    let descElement = $(buttonChildren[1]);

    let timeAt = timeEl.attr("data-time");
    let description = descElement.val();
    if (description === "") {
        console.log("Please add note")
        return;
    }

    console.log("saved")

    let listNote = {
        time: timeAt,
        description: description
    }
    console.log(listNote);

    userEntry.push(listNote);

    storeNote();
}

function renderNote () {
    var recentNotes = JSON.parse(localStorage.getItem("note"));
    // recentNotes=userEntry.val();
    console.log(recentNotes);
}


$(document).on("click", '.saveBtn', saveNote);

  setInterval(displayDate, 1000);
  displayTimeblocks();
  loadNote()

