import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',

  ticks: Ember.computed(function() {
    let graph = this.attrs.graph.value;

    var yOffset = graph.graphY();
    var scaleY = graph.scaleY();
    var x = this.attrs.width - 5;
    return scaleY.ticks(this.attrs.count || 5)
      .map(tick => ({
        y: scaleY(tick) + yOffset,
        value: tick,
        x: x
      }));
  })
});
