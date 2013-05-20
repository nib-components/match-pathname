module.exports = function(selector, className) {
    Array.prototype.forEach.call(document.body.querySelectorAll(selector), function(el){
        el.classList.toggle(className, el.getAttribute('data-url') === window.location.pathname);
    });
};