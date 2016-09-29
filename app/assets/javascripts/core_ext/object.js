(function () {
  function type ( obj ) {
    return /\[object (\w+)\]/.exec( Object.prototype.toString.call(obj) )[1];
  }

  Object.isRegExp = function ( obj ) {
    return 'RegExp' === type(obj);
  }

  Object.isFunction = function ( obj ) {
    return 'Function' === type(obj);
  }

  Object.isNumber = function ( obj ) {
    return 'Number' === type(obj)
  }

  Object.isString = function ( obj ) {
    return 'String' === type(obj);
  }

  /**
   * Returns true if <obj> is null, undefined, or empty string.
   *
   * @method isBlank(<obj>)
   * @param {Object} <obj> The object to test
   * @returns {Boolean}
   **/
  Object.isBlank = function ( obj ) {
    if ( Object.isString(obj) ) obj = obj.trim();
    if ( obj == null ) return true;
    return obj === '';
  };

})();

/**
 * Clones an object with only the specified properties
 *
 * @method slice(<obj>, [keys...])
 * @returns Object
 * @extra calling %slice% with no property names is equivalent to Object.clone
 * @example
 *
 *   var test = { foo: 'bar', bar: 'baz', baz: 'quux' };
 *   Object.slice( test, 'foo', 'baz' ) => { foo: 'bar', baz: 'quux' }
 **/
 Object.slice = function ( obj ) {
  var newObj = {}, keys = Array.prototype.slice.call(arguments, 1).flatten();
  if ( keys.length === 0 ) keys = Object.keys( obj );

  var objKeys = Object.keys( obj );

  for ( var i = 0; i < keys.length; i++ ) {
    var matchKey = keys[i];

    for ( var j = 0; j < objKeys.length; j++ ) {
      var objKey = objKeys[j];

      if ( Object.isRegExp(matchKey) && matchKey.test(objKey) ) newObj[objKey] = obj[objKey];
      else if ( matchKey === objKey ) newObj[objKey] = obj[objKey];
    }
  }

  return newObj;
 }

 /***
   * Walk into a nested object, to arbitrary depth, and pull out the value
   *
   * @method dig(<obj>, [namespace...])
   * @param {Object} <obj> The nested object
   * @param <namespace> The chain of keys to walk down. Can be arguments or a single array.
   * @extra If `dig` excounters an `undefined` value it will immediately break and return `undefined`.
   * @example
   *
   *   var obj = { user: { address: { street_address: '123 Nowhere st.' } } };
   *   Object.dig(obj, 'user', 'address', 'street_address') -> '123 Nowhere st.'
   *   Object.dig(obj, 'user', 'address', 'foo', 'bar') -> undefined
   *
   *   // also supports passing the namespace as an array
   *   Object.dig(obj, ['user', 'address', 'street_address']) -> '123 Nowhere st.'
   ***/
  Object.dig = function ( obj ) {
    var namespace = Array.prototype.slice.call(arguments, 1).flatten();
    while ( namespace.length > 0 ) {
      if ( obj == undefined ) break;
      obj = obj[ namespace.shift() ];
    }
    return obj;
  };

  /***
 * Iterate over an object, executing a callback for each key-value pair.
 *
 * @method forEach(<obj>, <fn>)
 * @short Runs <fn> against each property in the object, passing in the key as the first argument, and the value as the second.
 * @extra If <fn> returns false at any time it will break out of the loop. Returns <obj>.
 ***/
Object.forEach = function (obj, fn) {
  for (var key in obj) {
    if ( !obj.hasOwnProperty(key) ) continue;
    if ( fn.call(obj, key, obj[key]) === false ) break;
  }

  return obj;
}
