'use strict';

// This function reverses a passed string.
var reverseString = function reverseString(word) {

	// check the type of argument passes
	if (typeof word !== 'string') {

		// not a string : return null
		return null;

	} else {

		// return null for empty string.
		if (word.length == 0) {
			return null;
		}

		/*
		 *  Split the word by using the string method spilt()
		 *  Split() returns a char array
		 *
		 *  Reverse returned char array with reverse()
		 *  Reverse() returns an array
		 *
		 * 	Join the reversed array with join
		 * 	Join returns a string
		 *  
		 */
		var result = word.split("").reverse().join("");

		// check if result is a palindrome
		if (result === word){
			// return true for palindrome
			return true;		
		} else {
			// return result for non palindrome
			return result;
		}
	}
}


module.exports = {
	reverseString: reverseString,
}