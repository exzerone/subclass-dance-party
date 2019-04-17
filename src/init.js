$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // audio file
    // var audio = new Audio('/Users/student/hrsf116-subclass-dance-party/battletheme.mp3');
    // audio.volume = 0.2;
    // audio.play();
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    
    $('.battleField').append(dancer.$node);
    $('.dancer').hover(function(){   
      console.log('hi')
      $(this).toggle();
    });
  });

  $('.lineUpButton').on('click', function(event){
    $('.dancer').css({top:30});
  });

  $('.dancer').on('click', function(event) {
    console.log('hi')
    // $(this).css("cursor","pointer");
    // $(this).animate({width: "50%", height: "50%"}, 'slow');
    $(this).toggle()
  });
  
  $('.dancer').mouseleave(function(){   
    $(this).animate({width: "28%"}, 'slow');
  });

});

