console.log(helloVariable); // undefined
console.log(helloFunction); // undefined
helloFunction(); // TypeError: helloFunction is not a function

var helloVariable = 'hello!';

var helloFunction = function() {
  console.log('hello!');
}
