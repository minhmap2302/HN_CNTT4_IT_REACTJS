let firstName: string = "john";
let lastName: string = "Doe";
if (firstName[0] === "j") {
    firstName = firstName[0].toUpperCase() + firstName.slice(1);
} if (lastName[0] === "D") {
    lastName = lastName[0].toUpperCase() + lastName.slice(1);
}
console.log(`Full Name: ${firstName} ${lastName}`);
