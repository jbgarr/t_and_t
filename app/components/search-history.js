import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['search-history'],
    searchHistory: Ember.inject.service(),

    actions: {
        removeFromHistory(booking) {
            this.get('searchHistory').remove(booking);
        },
        clearHistory() {
            this.get('searchHistory').empty();
        }
    }
});
