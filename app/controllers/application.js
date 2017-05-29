import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    enter(chef){
      Ember.set(chef, 'cookingToday', true);
    },
    exit(chef){
      Ember.set(chef, 'cookingToday', false);
    }
  }
});
