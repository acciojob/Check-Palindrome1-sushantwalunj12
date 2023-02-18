// complete the given function

function palindrome(str){

	// with reguler expr
	 str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
  // compare the string with its reverse
  return str === str.split('').reverse().join('');
}
module.exports = palindrome
