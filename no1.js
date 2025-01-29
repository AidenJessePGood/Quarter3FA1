var nickname = "Aiden";
var heightInInches = 67;
var weightInKg = 76.3;

var feet = heightInInches / 12;
var inches = heightInInches % 12;
var height = parseInt(feet) + "'" + inches;


alert("Name: " + nickname + "\nHeight: " + height + "\nWeight: " + weightInKg + " kg    ");
