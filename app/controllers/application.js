import Ember from 'ember';

export default Ember.Controller.extend({
  chefs: [
    {name: 'Gordon Ramsay', cookingToday: true},
    {name: 'Anthony Bourdain', cookingToday: false},
    {name: 'Rachael Ray', cookingToday: true},
    {name: 'Jamie Oliver', cookingToday: false},
    {name: 'Guy Fieri', cookingToday: true}]
});
