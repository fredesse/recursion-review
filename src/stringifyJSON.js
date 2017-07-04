// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  if (typeof obj === 'number') {

    return obj.toString();

  }

  if (obj === null) {
    return 'null';
  }

  if (typeof obj === 'boolean') {

    return obj.toString();

  }

  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }

  if (Array.isArray(obj)) {

    obj = obj.map(function (elements) {

    	return stringifyJSON(elements);

    });

    return "["+ obj + "]" ;

  }

  if (typeof obj === 'object') {
    var string = "";

    if (Object.keys(obj).length === 0) {

      return '{}';

    }

    for(var key in obj) {

    	if (typeof obj[key] === 'function' || typeof obj[key] === 'undefined') {

    	} else {

        string += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';

    	}

    }

    return '{' + string.slice(0, -1) + '}';
  }


};
