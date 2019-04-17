var Bulbasaur = function(top, left, timeBetweenSteps) {
    MakeDancer.call(this, top, left, timeBetweenSteps);
  
    // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
    // so we must keep a copy of the old version of this function
    this.$node = $('<span class="dancer"><img src=\'pixelbulbasaur.gif\' ></span>');
    this.setPosition(top, left);
    // this.oldStep = MakeDancer.prototype.step
    // console.log(MakeDancer.prototype.step)
  };
  
  
  Bulbasaur.prototype = Object.create(MakeDancer.prototype);
  Bulbasaur.prototype.constructor = Bulbasaur;
  Bulbasaur.prototype.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    var boundStep = MakeDancer.prototype.step.bind(this);
    // console.log(boundStep)
    // this.oldStep()
    boundStep();
    this.$node.animate({
      // opacity: 0.55,
      // left: "+=50",
      // height: "toggle"
    }, 5000, function() {
      // Animation complete.
    });;
  };