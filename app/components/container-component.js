import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['container-component', 'well'],
    showHistory: false,

    actions: {
        toggleHistory() {
            this.toggleProperty('showHistory');
        }
    }
});
