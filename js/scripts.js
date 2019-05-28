$(document).ready(function(){
  $('#container form').submit(function(event){
    var nameInput = $('input#name').val();
    var dateSelect = $('select#date').val();
    var daySelect = $('select#day').val();
    var timeSelect = $('select#time').val();

    $('.name').text(nameInput);
    $('.date').text(dateSelect);
    $('.day').text(daySelect);
    $('.time').text(timeSelect);

    $('#confirmation').show();
    event.preventDefault();
  });
});
