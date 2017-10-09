import Ember from 'ember';

export default Ember.Route.extend({
    bookings: [
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
    ],

    model(params) {
        // return this.get('store').findRecord('booking', params.booking_number);
        let filtered = this.bookings.filter(b => {
            return b.booking_number === params.booking_number;
        });
        return filtered.length ? this._formatData(filtered[0]) : filtered;
    },

    // massage the data to better fit UI requirements - each container
    // should have its own updates nested within it 
    _formatData(booking) {
        const containers = booking.containers;
        const updates = booking.updates;
        booking.containers = containers.map(container => {
            let c_id = container.number;
            container.updates = [];
            updates.forEach(update => {
                if (update.container_number === c_id) {
                    container.updates.push(update);    
                }
            });
            return container;
        })
        return booking;
    }
});
