// 4) if/else

/* b) Create an "Age" variable that contains an integer between 0 and 100 and displays the
following alert messages:
i) "Baby" if the age is less than 2 years
ii) "Child" if the age is between 2 and 12 years
iii) "Adolescent" if the age is between 13 and 19 years
iv) "Young" if the age is between 20 and 30 years
v) "Adult" between 31 and 60 years old
vi) “Seniors” between 61 and 75 years old
vii) "Elderly" if he is older than 75 years */

var age = 32; // Change this number to access into the "if" structure

if (age < 2) {
    alert('Baby');
} else if (age >= 2 && age <= 12) {
    alert('Child');
} else if (age >= 13 && age <= 19) {
    alert('Adolescent');
} else if (age >= 20 && age <= 30) {
    alert('Young');
} else if (age >= 31 && age <= 60) {
    alert('Adult');
} else if (age >= 61 && age <= 75) {
    alert('Seniors');
} else if (age > 75) {
    alert('Elderly');
}