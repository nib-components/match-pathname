var each = [].forEach;
var doc = document;

module.exports = function(selector, className) {
   each.call(doc.querySelectorAll(selector), function(el){
      el.classList.remove(className);
      if (el.getAttribute('data-url') === window.location.pathname){
        el.classList.add(className);
      }
   });
}
