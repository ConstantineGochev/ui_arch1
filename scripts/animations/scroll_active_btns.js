function scroll_active_btns() {

        $('#pc_items_ul li a').bind('click', function (e) {
            e.preventDefault(); // prevent hard jump, the default behavior

            var target = $(this).attr("href"); // Set the target as variable

            // perform animated scrolling by getting top-position of target-element and set it as scroll target
            $('html, body').stop().animate({
                scrollTop: $(target).offset().top
            }, 600, function () {
                location.hash = target; //attach the hash (#jumptarget) to the pageurl
            });
            return false;
        });
 

    $(window).scroll(function () {
        var scrollDistance = ($(window).scrollTop()) + 10;

        $('.page-section').each(function (i) {
            if ($(this).position().top <= scrollDistance) {
                $('#pc_items_ul li a.active-reg-nav-btn').removeClass('active-reg-nav-btn');
                $('#pc_items_ul li a').eq(i).addClass('active-reg-nav-btn');
            }
        });
    }).scroll();
}

export {
    scroll_active_btns
}