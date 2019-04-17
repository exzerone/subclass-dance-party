var Squirtle = function(top, left, timeBetweenSteps) {
    MakeDancer.call(this, top, left, timeBetweenSteps);
  
    // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
    // so we must keep a copy of the old version of this function
  
    // this.oldStep = MakeDancer.prototype.step
    // console.log(MakeDancer.prototype.step)
    this.$node = $('<span class="dancer"><img src = \'pixelsquirtle.gif\'></span>');
    this.setPosition(top, left)
  };
  
  
  Squirtle.prototype = Object.create(MakeDancer.prototype);
  Squirtle.prototype.constructor = Squirtle;
  Squirtle.prototype.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    var boundStep = MakeDancer.prototype.step.bind(this);
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