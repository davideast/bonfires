System.register(['firebase'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var firebase_1;
    function initApp() {
        var config = {
            apiKey: "AIzaSyBAjWCgQbbhhwoy4TffyTmHEMkhWG3dRzE",
            authDomain: "sql-for-firebase-devs.firebaseapp.com",
            databaseURL: "https://sql-for-firebase-devs.firebaseio.com",
            storageBucket: "sql-for-firebase-devs.appspot.com",
            messagingSenderId: "583164206075"
        };
        return firebase_1.initializeApp(config);
    }
    exports_1("initApp", initApp);
    return {
        setters:[
            function (firebase_1_1) {
                firebase_1 = firebase_1_1;
            }],
        execute: function() {
        }
    }
});
