/*3) Arrays*/

var meses = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
/*a) Given the following array: [January, February, March, April, May, June, July, August, September, October, November, December]
display by console months 5 and 11 (use console.log)*/

console.log('3)');
console.log('a)');
console.log('the 5 month is :', meses[4], 'and the 11 month is :', meses[10]);
console.log('___________________________________________________');

/*b) Sort the array of months alphabetically and display it by console (use sort).*/
var sortedMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
console.log('b)');
console.log('months sorted alphabetically: ', sortedMonths.sort());
console.log('___________________________________________________');

/*c) Add an element to the beginning and end of the array (use unshift and push).*/

console.log('c)');
meses.unshift('Beginning');
meses.push('End');
console.log('Array with one element at the beginning and with one element at the end:', meses);
console.log('___________________________________________________');

/*d) Remove an element from the beginning and the end of the array (use shift and pop).*/

console.log('d)');
meses.shift('Beginning');
meses.pop('End');
console.log('Array without one element at the beginning and without one element at the end:', meses);
console.log('___________________________________________________');

/*e) Reverse the order of the array (use reverse)*/
var reversedMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

console.log('e)');
console.log('array in reverse: ', reversedMonths.reverse());
console.log('___________________________________________________');

/*f) Unite all the elements of the array in a single string where each month is separated
for a dash - (use join).*/

console.log('f)');
console.log('Array elements joined in a single string separated for a dash: ', meses.join('-'));
console.log('___________________________________________________');

/*g) Create a copy of the array of months that contains from May to November
(use slice).*/

console.log('g)');
console.log('Months from may to november ', meses.slice(4, 11));
console.log('___________________///////////_____________________');