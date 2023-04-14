let currentHour = dayjs().format('HH')        
let x = setInterval(function(){               //function that its running every 1000 miliseconds
  $('#currentDay').text(dayjs().format('dddd, MMMM DD'))  //used to set the element with currentday id to the current day

  let currentHour = dayjs().format('HH')      //used to get the current hour in 2digits format


$('.time-block').addClass('past')     //used to set all elements with time-block class with the class past

  if(currentHour>9 && currentHour<18){  
    $('#'+currentHour).removeClass('past').addClass('present')    //if current hour same as id remove class past and add class present
      //if currenthour its less than the id will remove class past and add the classs future
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



task9.text(localStorage.getItem('at9')) //add the stored data
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
   /*  $('#appoint').show(2000,function(){  a diferent way to show the appoint saved in to local storage element
         $('#appoint').hide()
    })*/ 
    appointAdded();
  }
  
  let textStored=localStorage.getItem('at9')
  task9.text(textStored)
})

$('#btn10').click(function(){
  if(task10.val() !=='' && task10.val()!==localStorage.getItem('at10')){
    localStorage.setItem('at10', task10.val())
    appointAdded();
  }

  let textStored=localStorage.getItem('at10')
  task10.text(textStored)
})

$('#btn11').click(function(){
  if(task11.val() !=='' && task11.val()!==localStorage.getItem('at11')){
    localStorage.setItem('at11', task11.val())
    appointAdded();
  }

  let textStored=localStorage.getItem('at11')
  task11.text(textStored)
})

$('#btn12').click(function(){
  if(task12.val() !=='' && task12.val()!==localStorage.getItem('at12')){
    localStorage.setItem('at12', task12.val())
    appointAdded();
  }
  let textStored=localStorage.getItem('at12')
  task12.text(textStored)
})

$('#btn13').click(function(){
  if(task13.val() !=='' && task13.val()!==localStorage.getItem('at13')){
    localStorage.setItem('at13', task13.val())
    appointAdded();
  }

    let textStored=localStorage.getItem('at13')
    task13.text(textStored)
})

$('#btn14').click(function(){
  if(task14.val() !=='' && task14.val()!==localStorage.getItem('at14')){
    localStorage.setItem('at14', task14.val())
    appointAdded();
  }

    let textStored=localStorage.getItem('at14')
    task14.text(textStored)
})

$('#btn15').click(function(){
  if(task15.val() !=='' && task15.val()!==localStorage.getItem('at15')){
    localStorage.setItem('at15', task15.val())
    appointAdded();
  }

    let textStored=localStorage.getItem('at15')
    task15.text(textStored)
})

$('#btn16').click(function(){
  if(task16.val() !=='' && task16.val()!==localStorage.getItem('at16')){
    localStorage.setItem('at16', task16.val())
    appointAdded();
  }

    let textStored=localStorage.getItem('at16')
    task16.text(textStored)
})

$('#btn17').click(function(){
  if(task17.val() !=='' && task17.val()!==localStorage.getItem('at17')){
    localStorage.setItem('at17', task17.val())
    appointAdded();
  }

  let textStored=localStorage.getItem('at17')
  task17.text(textStored)
})


function  appointAdded(){  //function used to show the apoint saved to local storage element 
  let time=1
  $('#appoint').show()
  let timer = setInterval(function(){
    time--;
    if(time===0){  //if time gets to 0 we clear the interval and hide again the element
      clearInterval(timer)
      $('#appoint').hide()
    }
  },1000)
}


