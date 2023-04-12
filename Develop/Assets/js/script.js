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


$('#appoint').hide()
let task9 = $('#input9')
let task10 = $('#input10')
let task11 = $('#input11')
let task12 = $('#input12')
let task13 = $('#input13')
let task14 = $('#input14')
let task15 = $('#input15')
let task16 = $('#input16')
let task17 = $('#input17')



task9.text(localStorage.getItem('at9'))
task10.text(localStorage.getItem('at10'))
task11.text(localStorage.getItem('at11'))
task12.text(localStorage.getItem('at12'))
task13.text(localStorage.getItem('at13'))
task14.text(localStorage.getItem('at14'))
task15.text(localStorage.getItem('at15'))
task16.text(localStorage.getItem('at16'))
task17.text(localStorage.getItem('at17'))


$('#btn9').click(function(){
  if(task9.val() !=='' && task9.val()!==localStorage.getItem('at9')){
    localStorage.setItem('at9', task9.val())
    /* $('#appoint').show(2000,function(){
         $('#appoint').hide()
    })
    */ 
    appointAdded();
  }
  
  let uwu=localStorage.getItem('at9')
  task9.text(uwu)
})

$('#btn10').click(function(){
  if(task10.val() !=='' && task10.val()!==localStorage.getItem('at10')){
    localStorage.setItem('at10', task10.val())
    appointAdded();
  }

  let uwu=localStorage.getItem('at10')
  task10.text(uwu)
})

$('#btn11').click(function(){
  if(task11.val() !=='' && task11.val()!==localStorage.getItem('at11')){
    localStorage.setItem('at11', task11.val())
    appointAdded();
  }

  let uwu=localStorage.getItem('at11')
  task11.text(uwu)
})

$('#btn12').click(function(){
  if(task12.val() !=='' && task12.val()!==localStorage.getItem('at12')){
    localStorage.setItem('at12', task12.val())
    appointAdded();
  }
  let uwu=localStorage.getItem('at12')
  task12.text(uwu)
})

$('#btn13').click(function(){
  if(task13.val() !=='' && task13.val()!==localStorage.getItem('at13')){
    localStorage.setItem('at13', task13.val())
    appointAdded();
  }

    let uwu=localStorage.getItem('at13')
    task13.text(uwu)
})

$('#btn14').click(function(){
  if(task14.val() !=='' && task14.val()!==localStorage.getItem('at14')){
    localStorage.setItem('at14', task14.val())
    appointAdded();
  }

    let uwu=localStorage.getItem('at14')
    task14.text(uwu)
})

$('#btn15').click(function(){
  if(task15.val() !=='' && task15.val()!==localStorage.getItem('at15')){
    localStorage.setItem('at15', task15.val())
    appointAdded();
  }

    let uwu=localStorage.getItem('at15')
    task15.text(uwu)
})

$('#btn16').click(function(){
  if(task16.val() !=='' && task16.val()!==localStorage.getItem('at16')){
    localStorage.setItem('at16', task16.val())
    appointAdded();
  }

    let uwu=localStorage.getItem('at16')
    task16.text(uwu)
})

$('#btn17').click(function(){
  if(task17.val() !=='' && task17.val()!==localStorage.getItem('at17')){
    localStorage.setItem('at17', task17.val())
    appointAdded();
  }

  let uwu=localStorage.getItem('at17')
  task17.text(uwu)
})


function  appointAdded(){
  let time=1
  $('#appoint').show()
  let timer = setInterval(function(){
    time--;
    if(time===0){
      clearInterval(timer)
      $('#appoint').hide()
    }
  },1000)
}


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

