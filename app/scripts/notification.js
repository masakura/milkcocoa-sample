var notification = (function () {
  'use strict';

  var notification = {
    requestPermission: function () {
      if (!Notification) {
        throw new Error('Not supported');
      }

      return new Promise(function (resolve, reject) {
        if (Notification.permission === 'granted') {
          resolve(Notification);
          return;
        }

        Notification.requestPermission(function (status) {
          Notification.permission = status;

          if (status === 'granted') {
            resolve(Notification);
          } else {
            reject(status);
          }
        });
      });
    },
    notify: function (text) {
      new Notification(text);
    }
  };

  return notification;
})();
