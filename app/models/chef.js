import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  hereToday: DS.attr('boolean'),
  description: DS.attr('string'),
  hasCulinaryDegree: DS.attr('boolean'),
  schoolAttended: DS.attr('string'),
  imageUrl: DS.attr('string'),
  restaurant: DS.belongsTo()
});
