// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

// You should use document.body, element.childNodes, and element.classList

var getElementsByClassName = function(className) {
  // input: array
  // output: array of elements that have the class names
  // for each string in the array,
    // if array index contains className,
      // push that index to resultArray
  var nodes = document.body;
  var resultArray = [];

  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].classList.contains(className)) {
      resultArray.push(nodes[i]);
    }
    
  }

  return resultArray;
};