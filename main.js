$(window).on('scroll', function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = $('#green-box').position().top;

    if(y_scroll_pos > scroll_pos_test) {
        console.log('passed it');
    }
});