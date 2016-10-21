$(function() {
  var $form    = $('#contact-form');
  var $flashes = $('.flashes');

  $('body').on('click', '#contact-form input[type="submit"]', function(e) {
    $flashes.empty()
    e.preventDefault();

    var request = $.ajax({
      url: "/",
      method: "POST",
      data: $form.serialize(),
      dataType: 'json'
    });

    request.done(function(data) {
      $('#contact-form').html(data.html);
    });

    request.fail(function(data) {
      var errorResponse = ""
      $.each(data.responseJSON, function(k, v) {
        errorResponse += "<p>" + k + ' ' + v[0] + "</p>"
      })
      $flashes.append(errorResponse);
    });

  });
});
