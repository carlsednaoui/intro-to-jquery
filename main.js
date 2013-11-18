$( document ).ready(function() {
  // Green box logic
  $('#green-box-container').waypoint(function(direction) {
    if (direction == 'down') {
      $('#green-box-container').css({'position': 'fixed', 'top': '10px'});
    } else {
      $('#green-box-container').css({'position': 'inherit'});
    }
  });

  $('#stop-green-bottom').waypoint(function(direction) {
    if (direction == 'down') {
      $('#green-box-container').css({'position': 'absolute'});
    } else {
      $('#green-box-container').css({'position': 'fixed', 'top': '10px'});
    }
  }, { offset: 220 });


  // jQuery project demo
  $('#main-example').hover(function() {this.src = 'images/ryu_animated.gif'}, function() {this.src = 'images/ryu_stand_still.png'});
  $('#main-example').on('mousedown', function() {this.src = 'images/ryu_hadoken_pose.png'});
  $('#main-example').on('mousedown', function() {$('.moving-hadouken').remove();});
  $('#main-example').on('mousedown', function() {$('#main-example-container').append('<img class="demo-hadouken moving-hadouken" src="images/hadouken.gif" class="moving-hadouken">');});
  $('#main-example').on('mousedown', function() {
    $('.moving-hadouken').animate({"margin-left": "200px"}, 1000, 'swing', function() {
      this.remove();
    });
  });
  $('#main-example').on('mouseup', function() {this.src = 'images/ryu_animated.gif'});
});