/// <reference path="../node_modules/firebase/firebase.d.ts" />
(function() {

  const container = document.getElementById('app-shell-events');
  const eventsTemplate = window['Handlebars'].templates['events'];
  const app = initApp();
  listenForEvents(app);

  function initApp() {
    const config = {
      apiKey: "AIzaSyBAjWCgQbbhhwoy4TffyTmHEMkhWG3dRzE",
      authDomain: "sql-for-firebase-devs.firebaseapp.com",
      databaseURL: "https://sql-for-firebase-devs.firebaseio.com",
      storageBucket: "sql-for-firebase-devs.appspot.com",
      messagingSenderId: "583164206075"
    };
    return firebase.initializeApp(config);
  }

  function listenForEvents(app: firebase.app.App) {
    const eventsRef = app.database().ref('events').limitToFirst(10);
    eventsRef.on('child_added', snap => {
      const event = snap.val() as Event;
      renderTemplate(event);
    });
  }

  function renderTemplate(event: Event) {
    const compiledEvent = eventsTemplate(event);
    container.innerHTML += compiledEvent;
  }

})();
