var Phone = require('../lib/Phone');
var Tablet = require('../lib/Tablet');
var GameConsole = require('../lib/GameConsole');
var WebBrowser = require('../lib/WebBrowser');

function SmartPhone(phoneNumber) {
  GameConsole.call(this, 'Smart Phone');
  Phone.call(this, phoneNumber);
}

function extend(destination, source) { // extend
  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination;
}

extend(SmartPhone.prototype, Phone.prototype);
extend(SmartPhone.prototype, Tablet.prototype);
extend(SmartPhone.prototype, GameConsole.prototype);
extend(SmartPhone.prototype, WebBrowser.prototype);

module.exports = SmartPhone;