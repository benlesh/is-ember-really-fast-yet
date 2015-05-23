import Ember from 'ember';

export default Ember.Component.extend({
  graphX() {
    return this.attrs.marginLeft;
  },

  graphY() {
    return this.attrs.marginTop;
  },

  graphHeight: Ember.computed(function() {
    return this.attrs.height - this.attrs.marginBottom - this.attrs.marginTop;
  }),

  graphWidth: Ember.computed(function() {
    return this.attrs.width - this.attrs.marginLeft - this.attrs.marginRight;
  }),

  getWidth() {
    return this.attrs.width || 200;
  },

  getHeight() {
    return this.attrs.height || 100;
  },

  scaleX() {
    return d3.scale.linear().domain(this.domainX()).range(this.rangeX());
  },

  scaleY() {
    return d3.scale.linear().domain(this.domainY()).range(this.rangeY());
  },

  domainX() {
    return [this.attrs.leftX, this.attrs.rightX];
  },

  domainY() {
    return [this.attrs.bottomY, this.attrs.topY];
  },

  rangeX() {
    return [0, this.get('graphWidth')];
  },

  rangeY() {
    return [this.get('graphHeight'), 0];
  }

});
