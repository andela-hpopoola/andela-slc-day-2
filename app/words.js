'use strict';

var words = function words(sentence) {

	// sentence is not a valid string
	if (typeof sentence !== 'string') {

		// return null for other data types
		return null;

	} else { // Sentence is a String

		// store final result in an object
		var results = {};

		/*
		 * 	Split the sentence by using Regular Expression
		 *
		 *  \space - splits sentence by space
		 *  \n     - splits sentence by new line
		 *  \t     - splits sentence by tab
		 *
		 *  returns an array
		 * 
		 */
  		sentence.split(/\ +|\n|\t/).forEach(function(value){
	  			/*
	  			 *  Save each value into the  result object
	  			 *  if current element exists in the object
	  			 *  Convert to valid integer before incrementing
	  			 *  The Unary Plus operator is used to coerced object into a valid number
	  			 *
	  			 *  Instantiate to 1 if current element is not in the result object
	  			 */
	    		results[value] =  results[value] ? (( +results[value] || 0 ) + 1) : 1;
	 		});

  		return results;
	}
}

// console.log(words('reserved words like prototype and toString ok?'));
module.exports = {
	words: words,
}