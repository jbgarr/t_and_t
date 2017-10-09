import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['container-component', 'well'],
    showHistory: false,

    init() {
        this._super(...arguments);
        console.log(this.get('container'));
    },

    actions: {
        toggleHistory() {
            this.toggleProperty('showHistory');
        }
    }
});
