var length = prompt("Choose a length between 8 and 128 for your password");

alert("The length you have chosen is:" + length);

var specialCharacters = confirm("Would you like to use special characters in your password");

var numCharacters = confirm("Would you like to use numerical characters in your password?");

var lowercase = confirm("Would you like to use lowercase charcaters in your password?");

var uppercase = confirm("Would you like to use uppercase characters in your password?");

//function CopyToClipboard(containerid) {
    //if (document.selection) {
      //var range = document.body.createTextRange();
      //range.moveToElementText(document.getElementById(containerid));
      //range.select().createTextRange();
      //document.execCommand("copy");
  
    //} else if (window.getSelection) {
      //var range = document.createRange();
      //range.selectNode(document.getElementById(containerid));
      //window.getSelection().addRange(range);
      //document.execCommand("copy");
      //alert("text copied, copy in the text-area")
    //}
  //}

//var lowercaseInput = document.getElementById("lowercase");


//function generate (){

    //let values= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

    //let password = "";

    //for(var i=0; i <= complexity; i++) {
        //password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    //}
    //document.getElementById("display").value = password;

//}



//var lowercase = "abcdefghijklmnopqrstuvwxyz";

//var userPassword;
//var passwordCharSet;
  
//function generate() {
 //  userPassword = "";
 //  passwordCharSet = "";
 //  if (lowercaseInput.checked) {
  //    passwordCharSet += lowercase;
  //  }
    
//    plength = Number(lengthInput.value);
   
 //   for (let i = 0; i < plength; i++) {
 //     userPassword += passwordCharSet.charAt(
 //       Math.floor(Math.random() * passwordCharSet.length)
  //    );
  //  }