import DS from 'ember-data';

export default DS.Model.extend({
  nationalPokeNum: DS.attr('number'),
  name: DS.attr('string'),
  typeOne: DS.attr('string'),
  typeTwo: DS.attr('string'),
  types: DS.hasMany('type', {async: true}),
  generation: DS.belongsTo('generation', {async: true})
});
