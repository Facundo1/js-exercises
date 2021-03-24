/*2) Strings

a) Create a variable of type string with at least 10 characters and convert all the text into
uppercase (use toUpperCase).*/

console.log('2)');
console.log('a)');
var tenCharactersString = 'my name is james';
console.log('variable in uppercase:', tenCharactersString.toUpperCase());
console.log('___________________________________________________');

/*b) Create a variable of type string with at least 10 characters and generate a new string
with the first 5 characters saving the result in a new variable (use
substring).*/

console.log('b)');
var tenCharactersString1 = 'television';
var newSubString1 = tenCharactersString1.substring(0, 5)
console.log('the new substring is', `"${newSubString1}" that contains
 the first five characters of the initial string`);
console.log('___________________________________________________');


/*c) Create a string type variable with at least 10 characters and generate a new string
with the last 3 characters saving the result in a new variable (use
substring).*/

console.log('c)');
var tenCharactersString2 = 'calculator';
var newSubString2 = tenCharactersString2.substring(7, 10)
console.log('the new substring is', `"${newSubString2}" 
that contains the last three characters of the initial string`);
console.log('___________________________________________________');

/*d) Create a variable of type string with at least 10 characters and generate a new string
with the first letter in uppercase and the others in lowercase. Save the result in
a new variable (use substring, toUpperCase, toLowerCase, and the + operator).*/

console.log('d)');
var tenCharactersString3 = 'neighborhood';
var newCapitalSubString = tenCharactersString3.substring(0, 1).toUpperCase()
    + tenCharactersString3.substring(1, 12).toLowerCase();
console.log('the new string with capital letter is', `"${newCapitalSubString}"`);
console.log('___________________________________________________');

/*e) Create a variable of type string with at least 10 characters and some blank space.
Find the position of the first whitespace and save it to a variable (use
indexOf).*/

console.log('d)');
var tenCharactersString4 = 'green apple';
var whiteSpace = tenCharactersString4.indexOf(' ')
console.log('the position of the white space in the "green apple" text is :', whiteSpace);
console.log('___________________________________________________');

/*f) Create a variable of type string with at least 2 long words (10 characters and some
space in between). Use the methods from the previous exercises to generate a
new string that has the first letter of both words in uppercase and the rest
lowercase letters (use indexOf, substring, toUpperCase, toLowerCase and the
operator +).*/

console.log('e)');
var tenCharactersString5 = 'adjuticate admiration';
var newCapitalSubStringAndLowerCase = tenCharactersString5.substring(0, 1).toUpperCase()
    + tenCharactersString5.substring(1, 10).toLowerCase() + tenCharactersString5.substring(10, 11)
    + tenCharactersString5.substring(11, 12).toUpperCase() + tenCharactersString5.substring(12, 21)
console.log('the new string with both words with capital letters is', `"${newCapitalSubStringAndLowerCase}"`);
console.log('___________________///////////_____________________');