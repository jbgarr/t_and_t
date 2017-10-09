import Ember from 'ember';

export default Ember.Component.extend({
    searchHistory: Ember.inject.service(),

    actions: {
        saveToSearchHistory() {
            this.get('searchHistory').add(this.get('booking'));
        }
    }
});
