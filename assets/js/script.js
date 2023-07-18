// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  

  var saveButton = $(".btn")

  
  
  
  var today = dayjs() 
  $("#currentDay").text(today.format("dddd, MMMM D, YYYY"))

  
  var hourNineAm = $('#hour-9')
  var hourTenAm = $("#hour-10")
  var hourElevenAm = $("#hour-11")
  var hourTwelvePm = $('#hour-12')
  var hourOnePm = $('#hour-13')
  var hourTwoPm = $('#hour-14')
  var hourThreePm = $('#hour-15')
  var hourFourPm = $('#hour-16')
  var hourFivePm = $('#hour-17')

  
    
   
   

    
  if(parseInt(hourNineAm[0].innerText[0])  > today.$H){
  hourNineAm.addClass("future")
    }else if(
      parseInt(hourNineAm[0].innerText[0]) < today.$H){
      hourNineAm.addClass("past")
      }else{
      hourNineAm.addClass("present")
      }

  
  if(parseInt(hourTenAm[0].innerText[0])*10 + parseInt(hourTenAm[0].innerText[1])  > today.$H){
  hourTenAm.addClass("future")
    }else if(
      parseInt(hourTenAm[0].innerText[0])*10 + parseInt(hourTenAm[0].innerText[1]) < today.$H){
      hourTenAm.addClass("past")
      }else{
      hourTenAm.addClass("present")
      }


  if(parseInt(hourElevenAm[0].innerText[0])*10 +  parseInt(hourElevenAm[0].innerText[1])  > today.$H){
  hourElevenAm.addClass("future")
    }else if(
      parseInt(hourElevenAm[0].innerText[0])*10 +  parseInt(hourElevenAm[0].innerText[1]) < today.$H){
      hourElevenAm.addClass("past")
      }else{
      hourElevenAm.addClass("present")
      }


  if(parseInt(hourTwelvePm[0].innerText[0])*10 +  parseInt(hourTwelvePm[0].innerText[1]) > today.$H){
  hourTwelvePm.addClass("future")
    }else if(
      parseInt(hourTwelvePm[0].innerText[0])*10 +  parseInt(hourTwelvePm[0].innerText[1]) < today.$H){
      hourTwelvePm.addClass("past")
      }else{
      hourTwelvePm.addClass("present")
      }
  

  if(parseInt(hourOnePm[0].innerText[0]) + 12 > today.$H){
    hourOnePm.addClass("future")
    }else if(
      parseInt(hourOnePm[0].innerText[0]) + 12 < today.$H){
      hourOnePm.addClass("past")
      }else{
      hourOnePm.addClass("present")
      }


  if(parseInt(hourTwoPm[0].innerText[0]) + 12 > today.$H){
    hourTwoPm.addClass("future")
    }else if(
      parseInt(hourTwoPm[0].innerText[0]) + 12 < today.$H){
      hourTwoPm.addClass("past")
      }else{
      hourTwoPm.addClass("present")
      }

      
  if(parseInt(hourThreePm[0].innerText[0]) + 12 > today.$H){
    hourThreePm.addClass("future")
    }else if(
      parseInt(hourThreePm[0].innerText[0]) + 12 < today.$H){
      hourThreePm.addClass("past")
      }else{
      hourThreePm.addClass("present")
      }
  

  if(parseInt(hourFourPm[0].innerText[0]) + 12 > today.$H){
    hourFourPm.addClass("future")
    }else if(
      parseInt(hourFourPm[0].innerText[0]) + 12 < today.$H){
      hourFourPm.addClass("past")
      }else{
      hourFourPm.addClass("present")
      }

      
  if(parseInt(hourFivePm[0].innerText[0]) + 12 > today.$H){
    hourFivePm.addClass("future")
    }else if(
      parseInt(hourFivePm[0].innerText[0]) + 12 < today.$H){
      hourFivePm.addClass("past")
      }else{
      hourFivePm.addClass("present")
      }

  function savePlans(){

    if(this.parentNode.id === "hour-9"){
      localStorage.setItem("nine", this.parentNode.childNodes[3].value)
    }else if(this.parentNode.id === "hour-10"){
      localStorage.setItem("ten", this.parentNode.childNodes[3].value)
    }else if(this.parentNode.id === "hour-11"){
      localStorage.setItem("eleven", this.parentNode.childNodes[3].value)
    }else if(this.parentNode.id === "hour-12"){
      localStorage.setItem("twelve", this.parentNode.childNodes[3].value)
    }else if(this.parentNode.id === "hour-13"){
      localStorage.setItem("one", this.parentNode.childNodes[3].value)
    }else if(this.parentNode.id === "hour-14"){
      localStorage.setItem("two", this.parentNode.childNodes[3].value)
    }else if(this.parentNode.id === "hour-15"){
      localStorage.setItem("three", this.parentNode.childNodes[3].value)
    }else if(this.parentNode.id === "hour-16"){
      localStorage.setItem("four", this.parentNode.childNodes[3].value)
    }else{
      localStorage.setItem('five', this.parentNode.childNodes[3].value)
    }
 
  }

  saveButton.on("click", savePlans)


  
});
