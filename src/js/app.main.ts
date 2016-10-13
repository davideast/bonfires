import { database } from 'firebase';
import { initApp } from './app.core';

initApp();

// Elements
const appShellEvents = document.getElementById('app-shell-events');
const dynamicEvents = document.getElementById('dynamic-events');

// Events template
const eventsTemplate = window['Handlebars'].templates['events'];

// Firebase Database events
const eventsRef = database().ref('events');
eventsRef.limitToFirst(10).on('child_added', snap => {
  const compiledEvent = eventsTemplate(snap.val());
  appShellEvents.innerHTML += compiledEvent;
});
