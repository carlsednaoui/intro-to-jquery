// $(window).on('scroll', function() {
//     var y_scroll_pos = window.pageYOffset;
//     var scroll_pos_test = $('#green-box').position().top;

//     if(y_scroll_pos > scroll_pos_test) {
//         console.log('passed it');
//     }
// });


$( document ).ready(function() {
  // jQuery project demo
  $('#main-example').hover(function() {this.src = 'images/ryu_animated.gif'}, function() {this.src = 'images/ryu_stand_still.png'});
  $('#main-example').mousedown(function() {this.src = 'images/ryu_hadoken_pose.png'});
  $('#main-example').mousedown(function() {$('.moving-hadouken').remove();});
  $('#main-example').mousedown(function() {$('#main-example-container').append('<img class="demo-hadouken moving-hadouken" src="images/hadouken.gif" class="moving-hadouken">');});
  $('#main-example').mousedown(function() {
    $('.moving-hadouken').animate({"margin-left": "600px"}, 1000, 'swing', function() {
      this.remove();
    });
  });
  $('#main-example').mouseup(function() {this.src = 'images/ryu_animated.gif'});
});