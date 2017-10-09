import DS from 'ember-data';

export default DS.Model.extend({
    booking: DS.belongsTo('booking'),
    number: DS.attr(),
    size: DS.attr(),
    type: DS.attr(),
    last_status: DS.attr(),
    location: DS.attr(),
    last_status_at: DS.attr('date')
});
