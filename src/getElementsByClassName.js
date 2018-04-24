// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

// You should use document.body, element.childNodes, and element.classList
// element.classList is a list as a space delimited string

var getElementsByClassName = function(className) {
  // input: string
  // output: array of strings (elements) that have the class names
    // if document.body.classList contains className,
      // push  to resultArray
  var resultArray = []; // this is our stack
  
  var classNameFinder = function(node) {
    // if the node in question contains className,
      // push node to result array
    if (node.classList && node.classList.contains(className)) {
      resultArray.push(node);
    }
    // RECURSE: if node has children
      //for each child, we need to recurse
    if (node.childNodes) {
      node.childNodes.forEach(function(child) {
        classNameFinder(child);
      });
    }
  }

  classNameFinder(document.body);

  return resultArray;
};

// getElementsByClassName('targetClassName');