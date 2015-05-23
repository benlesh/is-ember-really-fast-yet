import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return d3.range(0, 100).map((id) => ({ id, data: d3.range(100).map(x => ({ x, y: Math.random() * 100 })) }));
  }
});

function range(n) {
  var result = [];
  for(var i = 0; i < n; i++) {
    result.push(i);
  }
  return result;
}
