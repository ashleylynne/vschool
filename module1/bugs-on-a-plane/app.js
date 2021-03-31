var form = document.getElementById("airline-form");
var submit = document.getElementById("submit");


submit.addEventListener("click", formAlert); 

function formAlert() {
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var age = document.getElementById("age").value;
    var gender = form.gender.value;
    var location = form["travel-location"].value;
    var diet = []
    console.log("clicked!") //I'm lost here... I'm not sure what else to do

    if (document.getElementById("vegan").checked) {
        diet.push(document.getElementById("vegan").value);
    }
    else if (document.getElementById("gluten").checked) {
        diet.push(document.getElementById("gluten").value);
    }
    else if (document.getElementById("paleo").checked) {
        diet.push(document.getElementById("paleo").value);
    } alert ("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
}










