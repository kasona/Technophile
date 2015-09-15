var Watch = require('../lib/Watch');
var Tablet = require('../lib/Tablet');

function SmartWatch() {
  Watch.call(this, 'Watch');
}

function extend(destination, source) { // extend
  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination;
}

extend(SmartWatch.prototype, Watch.prototype);
extend(SmartWatch.prototype, Tablet.prototype);

module.exports = SmartWatch;