$ ->

  # Green box positioning logic
  $(window).on 'scroll', ->
    y_scroll_pos = window.pageYOffset
    greenBox = $('#green-box-container').position().top
    greenBoxTop = $('#stop-green-top').position().top + 100
    greenBoxBottom = $('#stop-green-bottom').position().top - 220

    if y_scroll_pos > greenBox
      $('#green-box-container').css(position: 'fixed', top: '10px')

    if y_scroll_pos < greenBoxTop
      $('#green-box-container').css(position: 'inherit')

    if y_scroll_pos > greenBoxBottom
        $('#green-box-container').css(position: 'absolute')

  # Code along positioning logic
  $(window).on 'scroll', ->
    y_scroll_pos = window.pageYOffset
    divContainer = $('#my-div-container').position().top
    divContainerTop = $('#stop-div-container-top').position().top + 100
    divContainerBottom = $('#stop-div-container-bottom').position().top - 220

    if y_scroll_pos > divContainer then $('#my-div-container').css(position: 'fixed', top: '10px')
    if y_scroll_pos < divContainerTop then $('#my-div-container').css(position: 'inherit')
    if y_scroll_pos > divContainerBottom then $('#my-div-container').css(position: 'absolute')
  
  # jQuery project demo
  playHadouken = false

  $('#main-example').hover ->
    this.src = 'img/ryu_animated.gif'
  , ->
    this.src = 'img/ryu_stand_still.png'

  $('#main-example').on 'mousedown', ->
    this.src = 'img/ryu_hadoken_pose.png'
    $('.moving-hadouken').remove()
    $('#main-example-container').append('<img class="moving-hadouken" src="img/hadouken.gif" >')
    if playHadouken then $('#hadouken-sound')[0].play()
    $('.moving-hadouken').animate({ marginLeft: 200 }, 1000, 'swing', (-> this.remove()))

  $('#main-example').on 'mouseup', ->
    this.src = 'img/ryu_animated.gif'

  $('#main-example-add-sound').on 'click', -> 
    playHadouken = !playHadouken
    if playHadouken then $(@).html('Sound added, click on Ryu')
    if not playHadouken then $(@).html('Sound removed, click to add it back')
