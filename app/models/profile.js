import DS from 'ember-data';

export default DS.Model.extend({
  photo: DS.attr('string'),
  name: DS.attr('string'),
  occupation: DS.attr('string'),
  dob: DS.attr('string')
});
