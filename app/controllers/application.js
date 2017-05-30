import Ember from "ember";

export default Ember.Controller.extend({
  totalChefCount: Ember.computed.alias('model.length'),
  availableChefs: Ember.computed.filterBy('model', 'hereToday'),
  chefStudents: Ember.computed.mapBy('model', 'students'),
  totalStudents: Ember.computed.sum('chefStudents'),
  /*
  totalStudentsAlternative: Ember.computed('model.@each.students', function(){
    let chefs = this.get('model');
    let totalStudents = 0;
    chefs.forEach((chef)=>{
      totalStudents = totalStudents + chef.get('students');
    });
    return totalStudents;
  });
  */
  actions: {
    enter(chef){
      Ember.set(chef, 'hereToday', true);
      chef.save();
    },
    exit(chef){
      Ember.set(chef, 'hereToday', false);
      chef.save();
    },
    saveNewItem(){
      this.store.createRecord('chef', {
        hereToday: false,
        name: this.get('newItem')
      }).save();
      this.set('newItem', '');
    },
    destroyItem(chef){
      chef.destroyRecord();
    },
    decrementStudents(chef){
      if (chef.get('students') > 0) {
        chef.decrementProperty('students');
        chef.save();
      }
    },
    incrementStudents(chef){
      // convenience method
      chef.incrementProperty('students');
      chef.save();
    }
  }
});
