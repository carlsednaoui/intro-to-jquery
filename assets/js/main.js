$( document ).ready(function() {

  // Green box positioning logic
  $(window).on('scroll', function() {
    var y_scroll_pos   = window.pageYOffset,
        greenBox       = $('#green-box-container').position().top,
        greenBoxTop    = $('#stop-green-top').position().top + 100,
        greenBoxBottom = $('#stop-green-bottom').position().top - 220;

    if (y_scroll_pos > greenBox)
        $('#green-box-container').css({'position': 'fixed', 'top': '10px'});

    if (y_scroll_pos < greenBoxTop)
        $('#green-box-container').css({'position': 'inherit'});

    if (y_scroll_pos > greenBoxBottom)
        $('#green-box-container').css({'position': 'absolute'});
  });

  // Code along positioning logic
  $(window).on('scroll', function() {
    var y_scroll_pos       = window.pageYOffset,
        divContainer       = $('#my-div-container').position().top,
        divContainerTop    = $('#stop-div-container-top').position().top + 100,
        divContainerBottom = $('#stop-div-container-bottom').position().top - 220;

    if (y_scroll_pos > divContainer)
        $('#my-div-container').css({'position': 'fixed', 'top': '10px'});

    if (y_scroll_pos < divContainerTop)
        $('#my-div-container').css({'position': 'inherit'});

    if (y_scroll_pos > divContainerBottom)
        $('#my-div-container').css({'position': 'absolute'});
  });

  
  // jQuery project demo
  var playHadouken = false;

  $('#main-example').hover(function() {
    this.src = 'img/ryu_animated.gif'}, function() {
      this.src = 'img/ryu_stand_still.png';
    }
  );

  $('#main-example').on('mousedown', function() {
    this.src = 'img/ryu_hadoken_pose.png';
  });

  $('#main-example').on('mousedown', function() {
    $('.moving-hadouken').remove();
  });
  
  $('#main-example').on('mousedown', function() {
    $('#main-example-container').append('<img class="moving-hadouken" src="img/hadouken.gif" >');
  });

  $('#main-example').on('mousedown', function() {
    if (playHadouken)
      $('#hadouken-sound')[0].play();
    $('.moving-hadouken').animate({"margin-left": "200px"}, 1000, 'swing', function() {
      this.remove();
    });
  });

  $('#main-example').on('mouseup', function() {
    this.src = 'img/ryu_animated.gif';
  });

  $('#main-example-add-sound').on('click', function() {
    playHadouken = !playHadouken;

    if (playHadouken)
      $(this).html('Sound added, click on Ryu');

    if (!playHadouken)
      $(this).html('Sound removed, click to add it back');
  });
});
