import Ember from 'ember';

export default Ember.Component.extend({
    generationNum: null,
    newPokemon: {
      nationalPokeNum: null,
      name: null,
      typeOne: null,
      typeTwo: null
      // generation: Ember.computed('generationNum', function(){
      //   return this.store.findRecord('generation', this.get('generationNum'));
      // })
  },
  actions: {
      createPokemon: function(){
      console.log(this.get('generationNum'));
      this.sendAction('routeCreatePokemon', this.get('newPokemon'), this.get('generationNum'));
      // this.store.createRecord('pokemon', newPokemon).save();
    }
  }
});
