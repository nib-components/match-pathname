module.exports = function(selector, className) {
  Array.prototype.forEach.call(
    document.body.querySelectorAll(selector), 
    function(el){
      if(el.getAttribute('data-url') === window.location.pathname) {
        el.classList.toggle(className);
      }
    }
  );
};