var each = [].forEach;
var doc = document;

module.exports = function(selector, className) {
   each.call(doc.querySelectorAll(selector), function(el){
      el.classList.toggle(className, el.getAttribute('data-url') === window.location.pathname);
   });
}
