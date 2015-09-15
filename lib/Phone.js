function Phone(phoneNumber) { // Phone Class
  this.phoneNumber = phoneNumber; // Single argument, phoneNumber
}
Phone.prototype.callPhone = function(phoneNumber) {
  return this.phoneNumber + ' calls ' + phoneNumber;
};

module.exports = Phone;