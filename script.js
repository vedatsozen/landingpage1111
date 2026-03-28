$(document).ready(function() {
    $('.photos img').click(function() {
        var src = $(this).attr('src');
        $('#popupimg').attr('src', src);
        $('.popupdiv').removeClass('hidden');

    });

    $('.popupdiv').click(function() {
        $('.popupdiv').addClass('hidden');
    });

     });
