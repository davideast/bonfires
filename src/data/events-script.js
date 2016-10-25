var events = [
  {
    "name": "Fantasy Firebase League",
    "city": "BER",
    "shortDate": "2017-06-01T03:21:20Z",
    "description": "molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui"
  },
  {
    "name": "Firebase Developer Summit",
    "city": "LON",
    "shortDate": "2017-01-26T00:32:32Z",
    "description": "non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue"
  },
  {
    "name": "Firebase Developer Summit",
    "city": "LON",
    "shortDate": "2016-11-13T01:47:50Z",
    "description": "a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis"
  },
  {
    "name": "Firebase Developer Summit",
    "city": "LON",
    "shortDate": "2017-07-16T16:22:35Z",
    "description": "erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec"
  },
  {
    "name": "Firebase Meetup",
    "city": "BER",
    "shortDate": "2017-09-29T16:33:50Z",
    "description": "vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio"
  },
  {
    "name": "Firebase BBQ",
    "city": "BER",
    "shortDate": "2017-10-07T13:25:13Z",
    "description": "pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse"
  },
  {
    "name": "Firebase Developer Summit",
    "city": "BER",
    "shortDate": "2017-04-28T07:28:26Z",
    "description": "quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed"
  },
  {
    "name": "Firebase Developer Summit",
    "city": "LON",
    "shortDate": "2017-02-25T11:37:42Z",
    "description": "lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero"
  },
  {
    "name": "Firebase Developer Summit",
    "city": "DEN",
    "shortDate": "2016-12-19T06:53:39Z",
    "description": "habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate"
  },
  {
    "name": "Firebase Meetup",
    "city": "SF",
    "shortDate": "2017-09-09T07:42:47Z",
    "description": "quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse"
  },
  {
    "name": "Firebase Meetup",
    "city": "DEN",
    "shortDate": "2016-12-19T02:47:19Z",
    "description": "lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc"
  },
  {
    "name": "Firebase Bowling League",
    "city": "SF",
    "shortDate": "2017-09-17T03:59:15Z",
    "description": "eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam"
  },
  {
    "name": "Firebase Bowling League",
    "city": "DEN",
    "shortDate": "2016-12-04T04:06:05Z",
    "description": "ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna"
  },
  {
    "name": "Firebase Developer Summit",
    "city": "SF",
    "shortDate": "2017-01-22T05:44:29Z",
    "description": "sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum"
  },
  {
    "name": "Firebase Developer Summit",
    "city": "BER",
    "shortDate": "2016-11-7T05:44:29Z",
    "description": "The Firebase Dev Summit is full day event for app developers that will focus on how to use Firebase with your apps.",
    "featured": true
  },
  {
    "name": "Polymer Summit",
    "city": "LON",
    "shortDate": "2016-10-17T05:44:29Z",
    "description": "Join us for two days of talks, codelabs, and breakout sessions from the Polymer team, Googlers, major companies using Polymer and Web Components.",
    "featured": true
  }
];

function formatDate(date) {
  var monthNames = [
    "Jan", "Feb", "Mar",
    "Apr", "May", "Jun", "Jul",
    "Aug", "Sept", "Oct",
    "Nov", "Dec"
  ];

  var day = date.getDate();
  var monthIndex = date.getMonth();

  var ending = 'th';
  if (day === 1) {
    ending = 'st';
  } else if (day === 11) {
    ending = 'st';
  } else if (new String(day).endsWith('1')) {
    ending = 'st';
  }
  return `${monthNames[monthIndex]}, ${day}${ending}`;
}

events.forEach(event => {
  let rootRef = firebase.database().ref();
  let cityCode = event.city;
  let newEvent = Object.assign(event, {});
  let cityName = locationMap[cityCode];
  let country = countryMap[cityCode];
  let shortDate = formatDate(new Date(event.shortDate));
  newEvent.timestamp = newEvent.shortDate;
  newEvent.shortDate = shortDate;
  newEvent.location = newEvent.city;
  newEvent.city = cityName;
  newEvent.country = country;
  let pushRef = firebase.database().ref('events').push();
  pushRef.set(event);
  rootRef.child('locationEvents')
         .child(cityCode)
         .child(pushRef.key)
         .set(newEvent);
  if (newEvent.featured) {
    rootRef.child('locationEvents')
           .child('FEATURED')
           .child(pushRef.key)
           .set(newEvent);
  }
});