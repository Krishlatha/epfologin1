// Declare the variables
var firstName = "Krish";
var lastName = "Kumar";

// Define the function
function aboutMySelf(state, district) {
    return "Hi, this is " + firstName + " " + lastName + ". I am from " + district + ", " + state + ".";
}

// Call the function and log the output
console.log(aboutMySelf("TamilNadu", "Karaikudi"));


const user = {
    firstName: "Krish",
    lastName: "Kumar",
    state: "TamilNadu",
    district: "Karaikudi"
};

function aboutMySelf(person) {
    return "Hi, this is " + person.firstName + " " + person.lastName + ". I am from " + person.district + ", " + person.state + ".";
}

console.log(aboutMySelf(user));
