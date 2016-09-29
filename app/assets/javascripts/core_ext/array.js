Object.defineProperty(Array.prototype, "first", {
  enumerable: false,
  writable: true,
  value: function ( num ) {
    if ( !Object.isNumber(num) ) num = 1;

    if ( num === 1 ) return this[0];

    var result = [];
    for ( var i = 0; i < num; i++ ) {
      if ( i === this.length ) break;
      result.push( this[i] );
    }

    return result;
  }
});

Object.defineProperty(Array.prototype, "second", {
  enumerable: false,
  writable: true,
  value: function () { return this[1] }
});

Object.defineProperty(Array.prototype, "third", {
  enumerable: false,
  writable: true,
  value: function () { return this[2] }
});

Object.defineProperty(Array.prototype, "fourth", {
  enumerable: false,
  writable: true,
  value: function () { return this[3] }
});

Object.defineProperty(Array.prototype, "fifth", {
  enumerable: false,
  writable: true,
  value: function () { return this[4] }
});

Object.defineProperty(Array.prototype, "last", {
  enumerable: false,
  writable: true,
  value: function ( num ) {
    if ( !Object.isNumber(num) ) num = 1;

    if ( num === 1 ) return this[ this.length - 1 ];

    var result = [];
    for ( var i = this.length - num; i < this.length; i++ ) {
      if ( i < 0 ) continue;
      result.push( this[i] );
    }

    return result;
  }
});

Object.defineProperty(Array.prototype, "flatten", {
  enumerable: false,
  writable: true,
  value: function flatten () {
     var flat = [];

     for ( var i = 0, l = this.length; i < l; i++ ) {
       var type = Object.prototype.toString.call(this[i]).split(' ').pop().split(']').shift().toLowerCase();
       if (type) { flat = flat.concat(/^(array|collection|arguments|object)$/.test(type) ? flatten.call(this[i]) : this[i]); }
     }

     return flat;
  }
});
