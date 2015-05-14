// Sticky navgiation

$(document).ready(function(){
    $("#sticky-nav").sticky({topSpacing:0});
  });

// Scrolling animation

$.fn.scrollView = function () {
  return this.each(function () {
    $('html, body').animate({
      scrollTop: $(this).offset().top
    }, 1000);
  });
}

$('#scroll-click').click(function (event) {
  event.preventDefault();
  $('#section-one').scrollView();
});

$('#about').click(function (event) {
  event.preventDefault();
  $('#section-one').scrollView();
});

$('#services').click(function (event) {
  event.preventDefault();
  $('#section-two').scrollView();
});

$('#areas-covered').click(function (event) {
  event.preventDefault();
  $('#section-three').scrollView();
});

$('#testimonials').click(function (event) {
  event.preventDefault();
  $('#section-four').scrollView();
});

$('#contact').click(function (event) {
  event.preventDefault();
  $('#section-five').scrollView();
});

$('#home').click(function (event) {
  event.preventDefault();
  $('#header').scrollView();
});

// Brookes Map

  function initialize() {
  var mapOptions = {
    zoom: 10,
    center: new google.maps.LatLng(53.394, -2.214)
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  var image = 'img/map-flag.png';

  var markerManc = new google.maps.Marker({
      position: new google.maps.LatLng(53.483, -2.244),
      map: map,
      title: 'Manchester',
      icon: image
  });
  var markerStock = new google.maps.Marker({
      position: new google.maps.LatLng(53.408, -2.167),
      map: map,
      title: 'Stockport',
      icon: image
  });
  var markerAlder = new google.maps.Marker({
      position: new google.maps.LatLng(53.301, -2.237),
      map: map,
      title: 'Stockport',
      icon: image
  });
  var markerCheadle = new google.maps.Marker({
      position: new google.maps.LatLng(53.394, -2.214),
      map: map,
      title: 'Stockport',
      icon: image
  });
}

function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'http://maps.googleapis.com/maps/api/js?v=3.exp' +
      '&signed_in=true&callback=initialize';
  document.body.appendChild(script);
}

window.onload = loadScript;

