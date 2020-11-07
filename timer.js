class Timer {
    constructor(durationInput, startButton, pauseButton, callbacks){
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;//instance variables of constructor arguments
        if (callbacks) {
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }


        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    }
    start = () => {
        if (this.onStart) { 
            this.onStart(this.timeRemaining);
        }

        this.tick();//calls tick method inside start method
      this.interval = setInterval(this.tick, 50);//sets duration for the click event to start in milliseconds
    };
    pause = () => {
        clearInterval(this.interval);//stops the timer temporarily when pause is invoked
    }

    tick = () => {
        // console.log('tick')
        // const timeRemaining = parseFloat(this.durationInput.value);
        // this.durationInput.value = timeRemaining - 1;

        if (this.timeRemaining <= 0) {
            this.pause();
            if (this.onComplete) {
                this.onComplete();
            }
        } else {
          
            this.timeRemaining = this.timeRemaining - 0.5;//smoothens the circle movement
            if (this.onTick) {
                this.onTick(this.timeRemaining);
            }
        }
       
    };

    get timeRemaining() {
        return parseFloat(this.durationInput.value);
    };

    set timeRemaining(time) {
        this.durationInput.value = time.toFixed(2);//sets the time to 2 decimal places
    }
}
