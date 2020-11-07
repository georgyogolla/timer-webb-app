//calculating offset 
//offset = (perimeter * timeRemaining) / totalDuration - perimeter




const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');//refers to the html id's in the index.html file
const circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

let duration;//initializes duration
const timer = new Timer(durationInput, startButton, pauseButton, {
   onStart(totalDuration) {
       duration = totalDuration;
   },
   onTick(timeRemaining) {
       circle.setAttribute('stroke-dashoffset', 
       perimeter * timeRemaining / duration - perimeter
       );
       
   },
   onComplete() {
       console.log('Timer is completed');
   } 
});//invokes Timer(class)

