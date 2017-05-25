var initMap = function() {
    var uluru = {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
};

$(document).ready(function () {
    initMap();

    $('.carousel').carousel({ interval: 5000, pause: "false" });
    $('.services .carousel').carousel({ interval: 2000 });
    $('#hero-cnt.parallax-window').parallax({imageSrc: './assets/img/herobg.jpg'});
    $('#gallery.parallax-window').parallax({imageSrc: './assets/img/gallerybg.jpg'});

    var setCarouselImgHeight = function () {
        $('#carousel .img-cnt').each(function () { $(this).height($('#carousel').height()); })
    };

    setCarouselImgHeight();

    $(window).on('resize', setCarouselImgHeight);
});