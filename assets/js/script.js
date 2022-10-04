
// Variables
let container = $(".container")
var timeDisplayEl = $('#currentDay');
var displayTimeblocksEl = $('#time-block');
let timeRowEl = $('.row');
console.log(timeRowEl);
let userEntry =[];

// Function that displays current date and time
function displayDate() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  }

//  Function to display timeblocks and changing colors according to current time
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

// Function that loads the note on local storage
function loadNote () {
    let hourlyNote = JSON.parse(localStorage.getItem("note")) || []
    console.log(hourlyNote);

    console.log(hourlyNote.length)
    for (let i=0; i<9; i++) {  //for loop going through all the timeblocks to check on notes
        var time = i+9;
        var note = `#note${i+1}`
        var descriptionValue = hourlyNote.find(x => x.time == time);
        if (descriptionValue) {
            console.log(descriptionValue)
            document.querySelector(note).value=descriptionValue.description
        }  
    }   

}

// Function that stores the note on local storage
function storeNote () {
    
    localStorage.setItem("note", JSON.stringify(userEntry));
}

// Function to save the note
function saveNote (event){
    console.log(event) 
    userEntry = JSON.parse(localStorage.getItem("note")) || []
    console.log(userEntry);
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
    let oldNote = userEntry.findIndex(x=>x.time==timeAt)
    console.log(oldNote);
    if (oldNote!==-1){
        userEntry.splice(oldNote, 1)
        
    }
    
    userEntry.push(listNote);
    console.log(userEntry);
    storeNote();
}


$(document).on("click", '.saveBtn', saveNote);

  setInterval(displayDate, 1000);
  displayTimeblocks();
  loadNote()

