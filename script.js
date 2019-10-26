

function Generate (){

    var length = prompt("Choose a length between 8 and 128 for your password");
    alert("The length you have chosen is: " + length);
    var specialCharacters = confirm("Would you like to use special characters in your password");
    var numCharacters = confirm("Would you like to use numerical characters in your password?");
    var lowercase = confirm("Would you like to use lowercase characters in your password?");
    var uppercase = confirm("Would you like to use uppercase characters in your password?");

    let values= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

    let password = "";

    for(var i=0; i <= length-1; i++) {
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }
    document.getElementById("display").value = password;

}

