import DS from 'ember-data';

export default DS.Model.extend({
    booking: DS.belongsTo('booking'),
    container_number: DS.attr(),
    arrival: DS.attr('date'),
    delivery_on: DS.attr(),
    steamship_line: DS.attr(),
    origin: DS.attr(),
    destination: DS.attr(),
    vessel: DS.attr(),
    voyage: DS.attr(),
    vessel_eta: DS.attr('date')
});
