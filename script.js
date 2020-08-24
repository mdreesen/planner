var task = {};

var item = JSON.parse(localStorage.getItem(task)) || [];


// -=- DATE -=-
// convert the "Testing Time" text to today
var dateFormat = 'MMM/DD/YYYY';
// made the time for today
var timeHeader = moment().format(dateFormat);
// displays the real date to the header
$('.realTime').text(timeHeader)



// -=- ADDING IN LIST ITEMS TO EACH CARD -=-
$('.saveBtn').on("click", function() {
    var task = $('#field').val();
    console.log(task);
    var time = $(this).parent().attr('id')
    localStorage.setItem(time, JSON.stringify(task));
});

// grab the parent element ID - done
// look into .simbling to get the value out of the input field
$('#field1').parent().attr('id');
// then worry about the local storage

/*
 -=- TODO-=-

 1. Need to get the text to save to the field
 2. colors need to change with the past and future for each column
 */











//  -=- LOCAL STORAGE ACTIONS -=-

// using jquery, need to target the id and class, id of the timeblock, and id of the input box
// going to need a .val(localstorage.getItem)



// -=- EACH TIME BLOCK -=-
// write an if statement and compare the current hour and compare to the others