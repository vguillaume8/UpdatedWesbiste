$(function() {

  $('#da-slider').cslider({
    autoplay	: true,
    bgincrement	: 450
  });

});


$(document).ready(function() {

  $("#owl-demo").owlCarousel({
    items : 1,
    lazyLoad : true,
    autoPlay : true,
    navigation : true,
  navigationText : ["",""],
  rewindNav :true,
  scrollPerPage :true,
  pagination : true,
  paginationNumbers: false,
  });

});
$(document).ready(function() {

  $("#owl-demo1").owlCarousel({
    items : 1,
    lazyLoad : true,
    autoPlay : true,
    navigation : true,
  navigationText : ["",""],
  rewindNav : true,
  scrollPerPage :true,
  pagination : false,
  paginationNumbers: false,
  });

});
$(document).ready(function() {

  $("#owl-demo2").owlCarousel({
    items : 1,
    lazyLoad : true,
    autoPlay : true,
    navigation : false,
  navigationText : ["",""],
  rewindNav : false,
  scrollPerPage :true,
  pagination : false,
  paginationNumbers: false,
  });

});
