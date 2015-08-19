(function () {
  'use strict';

  var milkcocoa = new MilkCocoa('postidiray64.mlkcca.com');
  var dataStore = milkcocoa.dataStore('hello');

  $(document).on('click', '#send-message', function () {
    var name = $('#name-input').val();
    var message = $('#message-input').val();

    $('#message-input').val('');

    dataStore.push({
      name: name,
      message: message
    });
  });

  dataStore.on('push', function (e) {
    var message = e.value.message;

    $('<li>')
      .addClass('list-group-item')
      .text(message)
      .appendTo('#messages');
  });
})();
