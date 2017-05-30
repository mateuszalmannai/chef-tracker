import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  hereToday: DS.attr('boolean'),
  students: DS.attr('number', {defaultValue: 0})
});
