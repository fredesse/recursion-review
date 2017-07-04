// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className) {
  // your codev ahere
  var results = [];

  function traverseDOM(element) {

    if(hasClass(element)) {

      results.push(element);

    }


    for(var i = 0; i < element.children.length; i++) {

      traverseDOM(element.children[i]);

    }
  }

  function hasClass(element) {

    return element.classList.contains(className);

  }

  traverseDOM(document.body);

  return results;

};


