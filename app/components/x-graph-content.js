import Ember from 'ember';
import Graph from './x-graph';

export default Ember.Component.extend({
  tagName: '',
  transform: Ember.computed(function() {
    let graph = this.graph;
    return `translate(${graph.graphX()}, ${graph.graphY()})`;
  }),

  init() {
    this.graph = this.nearestWithProperty('isGraph');
  }
});
