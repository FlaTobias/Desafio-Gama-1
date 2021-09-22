// init Isotope
var $grid = $('#lista').isotope({
    // options
  });
  // filter items on button click
  $('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    var $grid = ('#lista');
    $grid.isotope({ filter: filterValue });
  });