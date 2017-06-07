var initMap = function() {
    var coordinates = {lat: 46.499700, lng: 30.523565};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: coordinates
    });
    var marker = new google.maps.Marker({
        position: coordinates,
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