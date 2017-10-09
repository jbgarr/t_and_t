import Ember from 'ember';

export default Ember.Service.extend({
    bookings: null,
    
    init() {
        this._super(...arguments);
        this.set('bookings', []);
    },

    add(booking) {
        if (!this.get('bookings').includes(booking)) {
            this.get('bookings').pushObject(booking);
        }
    },

    remove(booking) {
        this.get('bookings').removeObject(booking);
    },

    empty() {
        this.get('bookings').clear();
    },

    historyIncludesBooking(booking) {
        return this.get('bookings').includes(booking);
    }
});
