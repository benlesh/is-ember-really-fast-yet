import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',

  path: Ember.computed(function() {
    let graph = this.graph;

    var scaleX = graph.scaleX();
    var scaleY = graph.scaleY();
    var lineFn = d3.svg.line()
      .x(d => scaleX(d.x))
      .y(d => scaleY(d.y));

    return lineFn(this.attrs.data.value);
  }),

  init() {
    this.graph = this.nearestWithProperty('isGraph');
  }
});
