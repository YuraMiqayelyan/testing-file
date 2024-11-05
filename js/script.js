$(function(){
    $('.tab-list').on('click', '.tab', function(e) {
        e.preventDefault();
    
        $('.tab').removeClass('active');
        $(this).addClass('active');
    
        $('.tab-content').removeClass('show');
        $($(this).attr('href')).addClass('show');
    });
})