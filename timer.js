  
$(document).ready(function() {
  var hours = 0; 
  var minutes = 0;         
  var seconds = 0;

  var showHours = document.getElementById("hours");
  var showMinutes = document.getElementById("minutes");
  var showSeconds = document.getElementById("seconds");

  var buttonStart = document.getElementById('btnStart');
  var buttonPause = document.getElementById('btnPause');
  var buttonResume = document.getElementById('btnContinue');
  var buttonStop = document.getElementById('btnStop');
 var buttonReset = document.getElementById('btnReset'); 

  var workTimer;

  buttonStart.onclick = function(){
    clearInterval(workTimer);
    workTimer = setInterval(runTimer, 1000);
  } // buttonStart.onclick

  buttonPause.onclick = function(){
    clearInterval(workTimer);
  } // buttonPause.onclick

  buttonResume.onclick = function(){
    clearInterval(workTimer);
    workTimer = setInterval(runTimer, 1000);
  } // buttonResume.onclick

  buttonStop.onclick = function(){
    clearInterval(workTimer);
  }// buttonStop.onclick
  buttonReset.onclick = function(){
    clearInterval(workTimer);
    hours = 0;
    minutes = 0;
    seconds = 0;
    
    showHours.innerHTML = "0" + hours;
    showMinutes.innerHTML = "0" + minutes;
    showSeconds.innerHTML = "0" + seconds;
  }// buttonReset.onclick

  function runTimer(){
    runSeconds();
    runMinute();
  } // END startTimer()

  function runSeconds(){
    seconds++; 

    if(seconds <= 9){
      showSeconds.innerHTML = "0" + seconds;
    }
    if (seconds > 9){
      showSeconds.innerHTML = seconds;
    } 
    if (seconds > 59){
      minutes++;
      showMinutes.innerHTML = "0" + minutes;
      seconds = 0;
      showSeconds.innerHTML = "0" + 0;
    }
  }  // END runSeconds() 

  function runMinute(){
    if (minutes > 9){
      showMinutes.innerHTML = minutes;
    }
    if (minutes > 59){
      hours++;
      showHours.innerHTML = "0" + hours;
      minutes = 0;
      showMinutes.innerHTML = "0" + 0;
    }
  } // END runMinute()
});
       
       
