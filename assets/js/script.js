
$(function () {
 
  
 
  

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
  

  var savedNine = localStorage.getItem("nine");
  var savedTen = localStorage.getItem("ten");
  var savedEleven = localStorage.getItem('eleven');
  var savedTwelve = localStorage.getItem('twelve');
  var savedOne = localStorage.getItem('one');
  var savedTwo = localStorage.getItem('two');
  var savedThree = localStorage.getItem('three');
  var savedFour = localStorage.getItem('four');
  var savedFive = localStorage.getItem('five'); 
  
  function renderSavedPlans(){
    if (hourNineAm[0].childNodes[3].value !== null){
      hourNineAm[0].childNodes[3].innerHTML = savedNine}
    
    if(hourTenAm[0].childNodes[3].value !== null){
      hourTenAm[0].childNodes[3].innerHTML = savedTen}

    if(hourElevenAm[0].childNodes[3].value !== null){
      hourElevenAm[0].childNodes[3].innerHTML = savedEleven}

    if(hourTwelvePm[0].childNodes[3].value !== null){
      hourTwelvePm[0].childNodes[3].innerHTML = savedTwelve}

    if(hourOnePm[0].childNodes[3].value !== null){
      hourOnePm[0].childNodes[3].innerHTML = savedOne}

    if(hourTwoPm[0].childNodes[3].value !== null){
      hourTwoPm[0].childNodes[3].innerHTML = savedTwo }

    if(hourThreePm[0].childNodes[3].value !== null){
      hourThreePm[0].childNodes[3].innerHTML = savedThree}

    if(hourFourPm[0].childNodes[3].value !== null){
      hourFourPm[0].childNodes[3].innerHTML = savedFour}

    if (hourFivePm[0].childNodes[3].value !== null){
      hourFivePm[0].childNodes[3].innerHTML = savedFive}
  }

function init(){
  renderSavedPlans()
}
init()
});
