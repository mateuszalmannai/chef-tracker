import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save(){
      this.get('model.chef').save();
      this.transitionToRoute('chefs.chef', this.get('model.chef.id'));
    },
    selectRestaurant(selection, component){
      let chef = this.get('model.chef');
      chef.get('restaurant').then((restaurant) =>{
        chef.set('restaurant', selection); // 1. save food
        selection.save();                  // 2. save new restaurant
        restaurant.save();                 // 3. save old restaurant
      })
    }
  }
});
