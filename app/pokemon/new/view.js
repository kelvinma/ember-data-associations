import Ember from 'ember';

export default Ember.View.extend({
  newPokemon: {
    nationalPokeNum: null,
    name: null,
    typeOne: null,
    typeTwo: null,
    generationNum: null,
    generation: Ember.computed('newPokemon.generationNum', function(){
      return this.store.findRecord('generation', this.get('newPokemon.generationNum'));
    })
  }
});
