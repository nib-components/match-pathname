var dom = require('dom');

module.exports = function(selector, className) {
  Array.prototype.forEach.call(
    document.body.querySelectorAll(selector),
    function(selector){
      if(selector.getAttribute('data-url') === window.location.pathname) {
        dom(selector).toggleClass(className);
      }
    }
  );
};