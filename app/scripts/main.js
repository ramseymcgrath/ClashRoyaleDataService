/* eslint-env browser */
(function() {
  let isLocalhost = false;
  isLocalhost = Boolean(window.location.hostname === 'localhost' || window.location.hostname === '[::1]');

  if ('serviceWorker' in navigator && (window.location.protocol === 'https:' || isLocalhost))

    {navigator.serviceWorker.register('service-worker.js').then(function(registration){
      registration.onupdatefound = function() {
          if (navigator.serviceWorker.controller) {
            installingWorker = registration.installing;
            installingWorker.onstatechange = function() {
              switch (installingWorker.state) {
                case 'installed':
                  break;
                case 'redundant':
                  throw new Error('The installing service worker became redundant.');
                default:
                  // Ignore
              };
            };
          };
      };
    }
  )};

});
(function(playerID) {
  const {Client} = require('croyale');
  const client = new Client('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTc1MywiaWRlbiI6IjQyOTg2NjE5OTgzMzI0Nzc0NCIsIm1kIjp7fSwidHMiOjE1Mzc5OTc0NzM1MzJ9.PyYVJUwLgTOD8JSw285uk89CLlnxm67L5mFwfTZLeHU');

  new newclient(playerID);
  newclient = client.Users.getProfile(playerID, {keys: ['tag', 'name']});
});

