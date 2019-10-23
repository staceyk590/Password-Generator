//generate random password
function generate (){

    let values= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

    let password = "";

    for(var i=0; i <= complexity; i++) {
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }
    document.getElementById("display").value = password;

}


//function to copy password to clipboard
function copyPassword(){
    document getElementById("display").select();

    document.execCommand("Copy");

    alert("Password copied to clipboard!");
}