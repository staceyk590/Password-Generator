

function Generate (){

    var length = prompt("Choose a length between 8 and 128 for your password");
    alert("The length you have chosen is: " + length);
    var specialCharacters = confirm("Would you like to use special characters in your password");
    var numCharacters = confirm("Would you like to use numerical characters in your password?");
    var lowercase = confirm("Would you like to use lowercase characters in your password?");
    var uppercase = confirm("Would you like to use uppercase characters in your password?");

    let valuesspecialchars= "!@#$%^&*()_+";
    let valuesnumchars= "1234567890";
    let valueslowercase= "abcdefghijklmnopqrstuvwxyz";
    let valuesuppercase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let values = "";

    if (uppercase) {
        values = values + valuesuppercase
    }
    if (lowercase) {
        values = values + valueslowercase
    }
    if (numCharacters) {
        values = values + valuesnumchars
    }
    if (specialCharacters) {
        values = values + valuesspecialchars
    }


    let password = "";

    for(var i=0; i <= length-1; i++) {
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }
    document.getElementById("display").value = password;

}


function myFunction() {

        var copyText = document.getElementById("display");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
        alert("Copied the text: " + copyText.value);
        
}



