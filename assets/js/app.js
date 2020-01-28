$(document).ready(function() {

        // declare moment variables
        var now = moment();
        var forNow = now.format("dddd, MMMM Do");
        $("#currentDay").text(forNow);

        // create hours
        var hoursList = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', '9PM', '10PM', '11PM'];
        var hoursDiv = $('#calendar');

        // append CSS to time blocks
        hoursList.forEach(function(time) {

            // apply styling to each row
            let row = $('<div>').addClass("row time-block");
            row.append($(`<div class='hour col-md-1'>${time}</div>`));
            let entryfield = $('<textarea>').addClass('col-md-10 textarea');

            // format text and time based on current time
            let forTime = (moment(time, "h:mm A"))
            if (forTime.isBefore(now)) {
                entryfield.addClass("past")
            } else if (forTime.isSame(now)) {
                entryfield.addClass("present")
            } else if (forTime.isAfter(now)) {
                entryfield.addClass("future")
            }

            // create text entry and save button
            row.append(entryfield)
            row.append($(
                `<button class='col-md-1 saveBtn'>
                <i class="fas fa-save"> </i>
                </button>`
            ))

            // create new row for each hour
            hoursDiv.append(row);
        });

        // create on-click to store note in local storage
        let saveBtn = document.querySelector('.saveBtn');
        saveBtn.addEventListener('click', function(storeNote) {
            storeNote.preventDefault();
            let note = document.getElementsByClassName('textarea')[0].value;
            localStorage.setItem('note', note);
            console.log(note);
        })

    }) // end document ready