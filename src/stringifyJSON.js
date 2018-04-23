// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // this is for numbers
  // if obj is num then return empty + obj
  var resultArray = [];

  if (typeof obj === 'function' || typeof obj === 'undefined') {
    return '{}';
  }

  if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null) {
    return '' + obj;  
  }
  // this for strings
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  // this is for arrays
  if (Array.isArray(obj)) {
  
  // for each ele of the arr,
    obj.forEach(function(ele) {
      resultArray.push(stringifyJSON(ele));
    });
  // stringify the ele,
  // push stringified ele to empty array,
  // return stringified array 
  return '[' + resultArray + ']';
  }
  // this is for objects
  if (typeof obj === 'object') {
    if (Object.keys(obj).length === 0) {
      return '{}';
    } 

    for (var key in obj) {
      if (typeof obj[key] === 'function' || obj[key] === undefined) {
        return '{}';
      }
      resultArray.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
    }

    return '{' + resultArray + '}';
  // for each key in the obj
  // stringify key
  // declare stringified key to equal stringified value
  // return resultObj
    // for (var key in obj) {


    // }
  }
 
};
