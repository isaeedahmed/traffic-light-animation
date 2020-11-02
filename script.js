var red=document.getElementById("red");

//variables for time out
var yT;
var gT;
var yTt;
var sI;



//start button

var startbtn= document.getElementById("start");
startbtn.addEventListener("click",function(){
    
    
    document.getElementById("start").disabled = true;
    
    all();
    loop();
    
   
});
//reset button

var resetbtn=document.getElementById("reset");

resetbtn.addEventListener("click",function(){
  
  
    reset();
    all();
    loop();
});

//pause button


var pausebtn=document.getElementById("pause");

pausebtn.addEventListener("click",function(){
    toggleButton();


});

var x = document.getElementById("pause");

//change the button text pause to resume when it is clicked
//call back pause and resume
 function toggleButton() {
      
      if (x.innerHTML === "Pause") {
        x.innerHTML = "Resume";
        yT.pause();
        gT.pause();
        yTt.pause();
        clearInterval(sI);
        
      } else {
         x.innerHTML = "Pause";
         yT.resume();
        gT.resume();
        yTt.resume();
        loop();

       

      }
   };


     
//function for reset button
function reset(){
  
  yT.pause();
  gT.pause();
  yTt.pause();
clearInterval(sI);
  red.classList.remove("red");
  yellow.classList.remove("yellow");
  green.classList.remove("green");
  
};

//functions for start button

function loop(){
  sI= setInterval(all, 23000); //15000    


};

function redone(){
  startTimer(5);
  
  yellow.classList.remove("yellow");
  red.classList.add("red");
   
  
  // clearInterval(timer);
}
function all() {
    redone();
    yellowone();
    greenone();
    yellowtwo();
    redone();
};

var yellow = document.getElementById("yellow");
function yellowone(){

yT = new Timer(function(){
  startTimer(3);
yellow.classList.add("yellow");

   
}, 7000) 


} ;

function greenone(){
    var green=document.getElementById("green");
gT= new Timer(function(){
   
      startTimer(5);
       red.classList.remove("red");
       yellow.classList.remove("yellow");
       green.classList.add("green");
    
}, 12000) 
         
};

function yellowtwo(){
var yellow = document.getElementById("yellow");
yTt= new Timer(function(){
    
      startTimer(2);
       yellow.classList.add("yellow")
   green.classList.remove("green");
   
}, 19000)    
};

//function for pausing and resuming setTimeout
var Timer = function(callback, delay) {
    var timerId, start, remaining = delay;

    this.pause = function() {
        window.clearTimeout(timerId);
        // console.log(timerId);
        remaining -= Date.now() - start-1000;
        
      //for timer 
        var timerobj=new startTimer();
        clearInterval(startTimer.timerfunc);
        let display = document.querySelector("span");
        display.textContent = remainingSec;

        
    };

    this.resume = function() {
        start = Date.now();
        // window.clearTimeout(timerId);

        timerId = window.setTimeout(callback,remaining);
        startTimer(remainingSec);
        // console.log(remainingSec);

    };
    this.resume();

};


var timerfunc;
var seconds, remainingSec;

function startTimer(duration, display) {
    var timer = duration;
    

clearInterval(timerfunc);

      timerfunc=setInterval(function () {
     
        seconds = parseInt(timer % 60, 10);
        
     
        seconds = seconds < 10 ? "0" + seconds : seconds;
     
        if (seconds >= 0) {
          remainingSec = seconds;  
        } 
        
    
 let display = document.querySelector("span");
        display.textContent = remainingSec;
// console.log(remainingSec);
        if (--timer < 0) {
            timer = duration; 
            clearInterval(timerfunc);
            

        }
    }, 1000);
}





