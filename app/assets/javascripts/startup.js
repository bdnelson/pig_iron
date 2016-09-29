//= require_self
//= require_tree ./startup

(function () {
  PigIron.startup = function self () {
    if ( arguments.length ) return register.apply(this, arguments);

    var namespace = $('body').attr('startup');

    if ( !Object.isString(namespace) ) {
      if ( console ) console.warn('Missing startup attribute on Body');
      return;
    }

    if ( Object.isFunction(self.application) ) self.application();

    self.current = Object.dig(self, namespace.split('.'));
    if ( self.current == null ) self.current = {};
    self.current.namespace = namespace;

    if ( Object.isFunction(self.current) ) self.current();
  }

  function register (object) {
    Object.forEach(object, function (namespace, fn) {
      namespace = namespace.toString().split('.');

      if ( console && Object.dig(self, namespace) ) {
        console.warn("Clobbering existing function: PigIron.startup." + namespace.join('.'));
      }

      var obj  = PigIron.startup;
      var leaf = namespace.pop();
      while ( namespace.length ) {
        var node = namespace.shift();
        if ( obj[node] == null ) obj[node] = {};
        obj = obj[node];
      }

      if ( Object.isString(fn) ) {
        obj[leaf] = Object.dig(PigIron.startup, fn.split('.'));
      } else {
        obj[leaf] = fn;
      }
    });
  }
})();
