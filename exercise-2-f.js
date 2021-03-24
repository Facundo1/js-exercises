// 2) Strings

/* f) Create a variable of type string with at least 2 long words (10 characters and some
space in between). Use the methods from the previous exercises to generate a
new string that has the first letter of both words in uppercase and the rest
lowercase letters (use indexOf, substring, toUpperCase, toLowerCase and the
operator +). */

console.log('e)');
var tenCharactersString5 = 'adjuticate admiration';
var newCapitalSubStringAndLowerCase = tenCharactersString5.substring(0, 1).toUpperCase()
    + tenCharactersString5.substring(1, 10).toLowerCase() + tenCharactersString5.substring(10, 11)
    + tenCharactersString5.substring(11, 12).toUpperCase() + tenCharactersString5.substring(12, 21)
console.log('the new string with both words with capital letters is', `"${newCapitalSubStringAndLowerCase}"`);
console.log('___________________///////////_____________________');