import Ember from 'ember';

export default Ember.Component.extend({
  tagName: "",

  ticks: Ember.computed(function() {
    let graph = this.attrs.graph.value;

    var xOffset = graph.graphX();
    var scaleX = graph.scaleX();
    var y = graph.getHeight() - this.attrs.height + 5;
    return scaleX.ticks(this.attrs.count || 8)
      .map(tick => {
        return {
          x: xOffset + scaleX(tick),
          value: tick,
          y: y
        };
      });
  })
});
