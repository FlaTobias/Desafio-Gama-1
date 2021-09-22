// init Isotope
var $grid = $('#lista').isotope({
    // options
  });
  // filter items on button click
  $('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });
  var $grid = $('#lista').isotope({
    // options
    itemSelector: '#lista',
    layoutMode: 'fitRows'
  });