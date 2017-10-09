export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */

  this.namespace = '/api';
  
  this.bookings = [
    {
      "booking_number":"TXG790195100",
      "steamship_line":"PIL",
      "origin":"XINGANG [CNTXG]",
      "destination":"OAKLAND [USOAK]",
      "containers":[
        {
          "number":"PCIU1857050",
          "size":"20GP",
          "type":"20GP",
          "last_status":"Empty Container",
          "location":"OAKLAND",
          "last_status_at":"2017-05-19 15:41:00"
        }
      ],
      "updates":[
        {
          "container_number": "PCIU1857050",
          "arrival": "",
          "delivery_on": "2017-04-18",
          "steamship_line": "",
          "origin":"XINGANG",
          "destination":"USOAK",
          "vessel":" CSCL AUTUMN",
          "voyage":"VQC60007E",
          "vessel_eta":"2017-05-15"
        }
      ]
    },
    {
      "booking_number":"TXG790214500",
      "steamship_line":"PIL",
      "origin":"XINGANG",
      "destination":"OAKLAND",
      "containers":[
        {
          "number":"PCIU8822077",
          "size":"40HC",
          "type":"HC",
          "last_status":"Empty Container",
          "location":"OAKLAND",
          "last_status_at":"2017-05-19 10:48:00"
        },
        {
          "number":"CMAU0027840",
          "size":"20GP",
          "type":"GP",
          "last_status":"Full Container",
          "location":"OAKLAND",
          "last_status_at":"2017-05-18 15:48:00"
        },
        {
          "number":"ECMU2185277",
          "size":"20GP",
          "type":"GP",
          "last_status":"Full Container",
          "location":"OAKLAND",
          "last_status_at":"2017-05-18 12:01:00"
        }
      ],
      "updates":[
        {
          "container_number": "ECMU2185277",
          "arrival":"",
          "delivery_on":"2017-04-18",
          "steamship_line":"",
          "origin":"XINGANG",
          "destination":"USOAK",
          "vessel":" CSCL AUTUMN",
          "voyage":"VQC60007E",
          "vessel_eta":"2017-05-15"
        },
        {
          "container_number": "ECMU2185277",
          "arrival":"",
          "delivery_on":"2017-04-20",
          "steamship_line":"",
          "origin":"XINGANG",
          "destination":"USOAK",
          "vessel":" CSCL AUTUMN",
          "voyage":"VQC60007E",
          "vessel_eta":"2017-05-15"
        },
        {
          "container_number": "PCIU8822077",
          "arrival":"",
          "delivery_on":"2017-04-20",
          "steamship_line":"",
          "origin":"XINGANG",
          "destination":"USOAK",
          "vessel":" CSCL AUTUMN",
          "voyage":"VQC60007E",
          "vessel_eta":"2017-05-01"
        },
        {
          "container_number": "ECMU2185277",
          "arrival":"",
          "delivery_on":"2017-04-18",
          "steamship_line":"",
          "origin":"XINGANG",
          "destination":"USOAK",
          "vessel":" CSCL AUTUMN",
          "voyage":"VQC60007E",
          "vessel_eta":"2017-05-15"
        }
      ]
    }
  ]

  this.get('/bookings', function(db, request) {
    return {data: bookings};
  });

  // Find and return the provided booking from our booking list above
  this.get('/bookings/:id', function (db, request) {
    // return { data: bookings.find((booking) => request.params.id === booking.booking_number) };
    // console.log(db, request);
    return {data: bookings.filter(booking => request.params.id === booking.booking_number)};
  });
}
