function scroll_active_btns() {

    $(document).ready(function () {
        $('#pc_items_ul > a').bind('click', function (e) {
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
    });

    $(window).scroll(function () {
        var scrollDistance = $(window).scrollTop();

        // Show/hide menu on scroll
        //if (scrollDistance >= 850) {
        //		$('nav').fadeIn("fast");
        //} else {
        //		$('nav').fadeOut("fast");
        //}

        // Assign active class to nav links while scolling
        let arr = [
            $('#banner-container'),
            $('#tabs'),
            $('#roadmap-container'),
            $('#about-container'),
            $('#our-team')
        ]
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i].position().top)
            
        }
        $('.page-section').each(function (i) {
            if ($(this).position().top <= scrollDistance) {
                $('.navigation a.active').removeClass('active');
                $('.navigation a').eq(i).addClass('active');
            }
        });
    }).scroll();
}

export {
    scroll_active_btns
}