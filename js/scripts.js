$(document).ready(function(){
  $('#container form').submit(function(event){
    var nameInput = $('input#name').val();
    var monthSelect = $('select#month').val();
    var daySelect = $('select#day').val();
    var timeSelect = $('select#time').val();

    $('.name').text(nameInput);
    $('.month').text(monthSelect);
    $('.day').text(daySelect);
    $('.time').text(timeSelect);


    $('#confirmation').show();
    event.preventDefault();
  });
});
