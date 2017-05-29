import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    enter(chef){
      Ember.set(chef, 'hereToday', true);
    },
    exit(chef){
      Ember.set(chef, 'hereToday', false);
    }
  }
});
