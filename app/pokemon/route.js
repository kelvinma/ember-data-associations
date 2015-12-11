import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return {
      pokemon: this.store.findAll('pokemon'),
      generations: this.store.findAll('generation')
    };
  },
  actions: {
    createPokemon: function(pokemonData, generationNum){
      console.log('create action received');
      console.log(generationNum);
      var newPokemon = this.store.createRecord('pokemon', pokemonData);
      this.store.findRecord('generation', generationNum).then(function(generation){
        generation.get('pokemon').addObject(newPokemon);
        newPokemon.save();
      });
    },
    destroyPokemon: function(pokemon){
      this.store.findRecord('pokemon', pokemon.get('id')).then(function(pokemonRecord){
        pokemonRecord.destroyRecord();
        console.log('record destroyed');
      });
    }
  }
});
