import Ember from 'ember';

export default Ember.Controller.extend({
    query: '',
    searchIsDisabled: Ember.computed('query', function() {
        return !this.get('query');
    }),

    actions: {
        navigateToDetail() {
            this.transitionToRoute(`/bookings/${this.get('query')}`);
        }
    }
});
