import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return range(100).map(() => range(30).map(x => ({ x, y: Math.random() * 100 })));
  }
});

function range(n) {
  var result = [];
  for(var i = 0; i < n; i++) {
    result.push(i);
  }
  return result;
}
