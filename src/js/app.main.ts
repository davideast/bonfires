/// <reference path="../node_modules/firebase/firebase.d.ts" />

import { database } from 'firebase';
import { initApp } from './app.core';

export interface Event {
  key: string;
  location: string;
  name: string;
  timestamp: number;
}

export class MainPage {
  appShellEvents: HTMLElement;
  dynamicEvents: HTMLElement;
  eventsTemplate: Function;
  rootRef: database.Reference;
  eventsRef: database.Reference;
  eventList: Event[] = []
  eventsLoaded = false;

  static create() {
    const app = initApp();
    return new MainPage(app.database());
  }

  constructor(public database: firebase.database.Database) {
    this.getElements.bind(this)();
    this.getTemplate.bind(this)();
    this.getReferences.bind(this)();
    this.renderEvent = this.renderEvent.bind(this);
    this.listenForFeaturedEvents = this.listenForFeaturedEvents.bind(this);
  }

  getElements() {
    this.appShellEvents = document.getElementById('app-shell-events');
    this.dynamicEvents = document.getElementById('dynamic-events');
  }

  getTemplate() {
    this.eventsTemplate = window['Handlebars'].templates['events'];
  }

  getReferences() {
    this.rootRef = this.database.ref();
    this.eventsRef = this.rootRef.child('events');
  }

  listenForEvents(ref: firebase.database.Reference, limit: number) {
    ref.limitToFirst(limit).on('child_added', snap => {
      const event = snap.val() as Event;
      this.renderEvent(event);
    }); 
  }

  renderEvent(event: Event) {
    const compiledEvent = this.eventsTemplate(event);
    this.appShellEvents.innerHTML += compiledEvent;
  }

  listenForFeaturedEvents() {
    this.listenForEvents(this.eventsRef, 1);
  }

}
