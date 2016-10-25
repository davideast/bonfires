/// <reference path="../node_modules/firebase/firebase.d.ts" />
(function() {

  function initApp() {
    const config = {
      apiKey: "AIzaSyCBOqlnA5BKfGh_T2o35deqTbI2dujITA4",
      authDomain: "bonfires-8c02c.firebaseapp.com",
      databaseURL: "https://bonfires-8c02c.firebaseio.com",
      storageBucket: "bonfires-8c02c.appspot.com",
      messagingSenderId: "367947366674"
    };
    return firebase.initializeApp(config);
  }

  class App {
    container: HTMLElement;
    locationNav: HTMLElement;
    eventsTemplate: Function;
    activeRef: firebase.database.Reference;
    activeListener: any;
    rootRef: firebase.database.Reference;

    constructor(public firebaseApp: firebase.app.App) {
      this.rootRef = this.firebaseApp.database().ref();
      this.eventsTemplate = window['Handlebars'].templates['events'];

      this.attachDOMListeners = this.attachDOMListeners.bind(this);
      this.getDOMElements = this.getDOMElements.bind(this);
      this.renderTemplate = this.renderTemplate.bind(this);
      this.listenForEvents = this.listenForEvents.bind(this);

      this.getDOMElements();
      this.attachDOMListeners();
    }

    getDOMElements() {
      this.container = document.getElementById('dynamic-events');
      this.locationNav = document.getElementById('location-nav');
    }

    attachDOMListeners() {

      this.locationNav.addEventListener('click', e => {
        const anchor = e.srcElement;
        const location = e.srcElement.attributes.getNamedItem('data-location').nodeValue;
        this.activeRef = firebase.database().ref().child('locationEvents').child(location);
        this.container.classList.remove('fadeIn');
        this.container.innerHTML = '';
        this.listenForEvents();
      });

    }

    renderTemplate(event) {
      const compiledEvent = this.eventsTemplate(event);
      this.container.innerHTML += compiledEvent;
    }

    listenForEvents() {
      if (this.activeListener) {
        this.activeRef.off('child_added', this.activeListener);        
      }
      this.activeListener = this.activeRef.on('child_added', snap => {
        this.renderTemplate(snap.val());
      });
    }

  }

  const firebaseApp = initApp();
  new App(firebaseApp);

})();
