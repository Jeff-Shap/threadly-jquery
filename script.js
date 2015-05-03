var main = function() {
  $('form').submit(function() {

  	var comment = $('#comment').val();


    if(comment !== "") {
      var html = $('<li>').text(comment).prependTo('.comments');  
    }

    $('#comment').val("");
    return false;


  });
};
$(document).ready(main);