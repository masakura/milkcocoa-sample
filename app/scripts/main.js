(function () {
  'use strict';

  var milkcocoa = new MilkCocoa("postidiray64.mlkcca.com");
  var dataStore = milkcocoa.dataStore('hello');

  $(document).on('click', '#push', function () {
    dataStore.push({message: 'Hello!'});
  });

  dataStore.on('push', function (e) {
    console.log(e.value.message);
  });
})();
