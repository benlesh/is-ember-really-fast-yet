var computed = Ember.computed;

export default Ember.Controller.extend({

  width: 200,
  height: 60,
  paddingLeft: 25,
  paddingBottom: 10,

  layout: computed('paddingLeft', 'paddingBottom', 'width', 'height', function() {
    var padl = this.get('paddingLeft');
    var padb = this.get('paddingBottom');
    var w = this.get('width');
    var h = this.get('height');

    return {
      padl: padl,
      padb: padb,
      w: w,
      h: h,
      bottom: h - padb,
      textLeft: padl - 2,
      textTop: 8
    };
  }),

  computeGraph: function(data) {
    var layout = this.get('layout');

    var extX = d3.extent(data, function(d) { return d.x; });
    var extY = d3.extent(data, function(d) { return d.y; });

    extY = [ Math.max(0, extY[0] - ((extY[1]-extY[0])*0.5)) , extY[1]];

    var scaleX = d3.scale.linear().domain([extX[0], extX[1]]).range([layout.padl, layout.w]);
    var scaleY = d3.scale.linear().domain([extY[1], extY[0]]).range([0, layout.bottom]);

    var path = d3.svg.line()
      .x(function(d) { return scaleX(d.x); })
      .y(function(d) { return scaleY(d.y); })
      .interpolate('monotone');

    var xTicks = [];
    for(var x=0; x<extX[1]; x+=2) {
      xTicks.push({ x:scaleX(x), y: 10, text: ""+x});     
    }      

    var yTicks = [];
    for(var y=0; y<extY[1]; y+=20) {
      yTicks.push({ x: 10, y: scaleY(y), text: ""+y});     
    }      
 
    return {
      path: path(data),
      xTicks: xTicks,
      yTicks: yTicks
    };
  },

  graph: computed('layout', function() {
    return this.computeGraph(this.get('model'));
  }),

});