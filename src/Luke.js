var Luke = function(top, left, timeBetweenSteps) {
    MakeDancer.call(this, top, left, timeBetweenSteps);
  
    // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
    // so we must keep a copy of the old version of this function
  
    // this.oldStep = MakeDancer.prototype.step
    // console.log(MakeDancer.prototype.step)
  };
  
  
  Luke.prototype = Object.create(MakeDancer.prototype);
  Luke.prototype.constructor = Luke;
  Luke.prototype.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    var boundStep = Luke.prototype.step.bind(this);
    // this.oldStep()
    boundStep();
    this.$node.toggle();
  };