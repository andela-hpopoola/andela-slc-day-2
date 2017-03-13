'use strict';

var words = function(sentence) {
	// return null for other data types
	if (typeof sentence !== 'string') 
		return null;

	else{ // Valid sentence - String

		// store final result in an object
		var results={};

		// Split the sentence by using a Regular Expression
		// \ + caters for multi space
		// \n caters for newline
		// \t caters for tabs
  		sentence.split(/\ +|\n|\t/).forEach(function(value){
  			// save each value into an object
  			// if it exists increment value but convert to valid integer b4 incrementing
  			// Use unary plus operator to coerced properties  into a numeric value
  			// else instatiante to 1
    		results[value] =  results[value] ? ((+results[value] || 0) + 1) : 1;
 		});

  		return results;
	}
}

// console.log(words('reserved words like prototype and toString ok?'));
module.exports = {
	words: words,
}