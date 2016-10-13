System.register(['firebase', './app.core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var firebase_1, app_core_1;
    var appShellEvents, dynamicEvents, eventsTemplate, eventsRef;
    return {
        setters:[
            function (firebase_1_1) {
                firebase_1 = firebase_1_1;
            },
            function (app_core_1_1) {
                app_core_1 = app_core_1_1;
            }],
        execute: function() {
            app_core_1.initApp();
            // Elements
            appShellEvents = document.getElementById('app-shell-events');
            dynamicEvents = document.getElementById('dynamic-events');
            // Events template
            eventsTemplate = window['Handlebars'].templates['events'];
            // Firebase Database events
            eventsRef = firebase_1.database().ref('events');
            eventsRef.limitToFirst(10).on('child_added', function (snap) {
                var compiledEvent = eventsTemplate(snap.val());
                debugger;
                var dynamicEvent = document.createElement('section');
                dynamicEvent.classList.add('section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp');
                dynamicEvent.innerHTML = compiledEvent;
                appShellEvents.appendChild(dynamicEvent);
            });
        }
    }
});
