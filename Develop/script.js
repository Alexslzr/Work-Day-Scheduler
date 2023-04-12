// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

let currentHour = dayjs().format('HH')
let x = setInterval(function(){
  $('#currentDay').text(dayjs().format('dddd, MMMM DD'))

  let currentHour = dayjs().format('HH')


$('.time-block').addClass('past')

  if(currentHour>9 && currentHour<18){
    $('#'+currentHour).removeClass('past').addClass('present')
  
    if(currentHour<17){
      $('#17').removeClass('past').addClass('future')
    } 
    if(currentHour<16){
      $('#16').removeClass('past').addClass('future')
    } 
    if (currentHour<15){
      $('#15').removeClass('past').addClass('future')
    }
    if (currentHour<14){
      $('#14').removeClass('past').addClass('future')
    }
    if(currentHour<13){
      $('#13').removeClass('past').addClass('future')
    }
    if(currentHour<12){
      $('#12').removeClass('past').addClass('future')
    }
    if(currentHour<11){
      $('#11').removeClass('past').addClass('future')
    }
    if(currentHour<10){
      $('#10').removeClass('past').addClass('future')
    }
    if(currentHour<9){
      $('#9').removeClass('past').addClass('future')
    } 
  }


},1000)


$('#btn9').click(function(){
    $('')
    localStorage.setItem('')
})

$('#btn10').click(function(){
  
})

$('#btn11').click(function(){
  
})

$('#btn12').click(function(){
  
})

$('#btn13').click(function(){
  
})

$('#btn14').click(function(){
  
})

$('#btn15').click(function(){
  
})

$('#btn16').click(function(){
  
})

$('#btn17').click(function(){
  
})






/*console.log(currentHour)
  if(currentHour>9 && currentHour<18){
    $('#'+currentHour).removeClass('past').addClass('present')
  
    if(currentHour<17){
      $('#17').removeClass('past').addClass('future')
    } 
    if(currentHour<16){
      $('#16').removeClass('past').addClass('future')
    } 
    if (currentHour<15){
      $('#15').removeClass('past').addClass('future')
    }
    if (currentHour<14){
      $('#14').removeClass('past').addClass('future')
    }
    if(currentHour<13){
      $('#13').removeClass('past').addClass('future')
    }
    if(currentHour<12){
      $('#12').removeClass('past').addClass('future')
    }
    if(currentHour<11){
      $('#11').removeClass('past').addClass('future')
    }
    if(currentHour<10){
      $('#10').removeClass('past').addClass('future')
    }
    if(currentHour<9){
      $('#9').removeClass('past').addClass('future')
    } 
  }

*/

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
