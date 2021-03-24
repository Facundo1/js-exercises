// 2) Strings

/* d) Create a variable of type string with at least 10 characters and generate a new string
with the first letter in uppercase and the others in lowercase. Save the result in
a new variable (use substring, toUpperCase, toLowerCase, and the + operator). */

console.log('d)');
var tenCharactersString = 'neighborhood';
var newCapitalSubString = tenCharactersString.substring(0, 1).toUpperCase()
    + tenCharactersString.substring(1, 12).toLowerCase();
console.log('the new string with capital letter is', `"${newCapitalSubString}"`);
console.log('___________________________________________________');