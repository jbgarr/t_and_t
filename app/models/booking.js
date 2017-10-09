import DS from 'ember-data';

export default DS.Model.extend({
    booking_number: DS.attr(),
    steamship_line: DS.attr(),
    origin: DS.attr(),
    destination: DS.attr(),
    containers: DS.hasMany('container'),
    updates: DS.hasMany('update')
});
