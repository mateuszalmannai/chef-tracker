import Ember from 'ember';

export default Ember.Controller.extend({
  totalChefCount: Ember.computed.alias('model.length'),
  availableChefs: Ember.computed.filterBy('model', 'hereToday'),
  actions: {
    saveNewItem(){
      this.store.createRecord('chef', {
        hereToday: false,
        name: this.get('newItem')
      }).save();
      this.set('newItem', '');
    }
  }
});
