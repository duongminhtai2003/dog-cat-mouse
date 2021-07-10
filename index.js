var dog = require('./dog');
var cat  = require('./cat');

var dog1 = new dog('Milu');

var cat2 = new cat('Tom')

dog1.eat(cat2);
console.log(dog1)