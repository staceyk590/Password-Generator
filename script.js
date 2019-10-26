
////function Generate(len) {
    //let s = '';
    //while (s.length < len) s += Math.random().toString(36).substr(2, len - s.length);
    //return s;
    
//}

            
//function randStr(len) {
    //let s = '';
    //while (s.length < len) s += Math.random().toString(36).substr(2, len - s.length);
   //return s;
    //}

    // usage;
       
var length = prompt("Choose a length between 8 and 128 for your password");

alert("The length you have chosen is: " + length);

var specialCharacters = confirm("Would you like to use special characters in your password");

var numCharacters = confirm("Would you like to use numerical characters in your password?");

var lowercase = confirm("Would you like to use lowercase characters in your password?");

var uppercase = confirm("Would you like to use uppercase characters in your password?");






            
    

function Generate (){

    let values= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

    let password = "";

    for(var i=0; i <= length-1; i++) {
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }
    document.getElementById("display").value = password;





    
        //function myFunction() {
          //var copyText = document.getElementById("myInput");
          //copyText.select();
          //copyText.setSelectionRange(0, 99999)
          //document.execCommand("copy");
          //alert("Copied the text: " + copyText.value);
        //}
        

    
                //function myFunction() {
                 // var copyText = document.getElementById("myInput");
                  //copyText.select();
                  //copyText.setSelectionRange(0, 99999)
                  //document.execCommand("copy");
                  //alert("Copied the text: " + copyText.value);
                //}
                



        //function copyPassword() {
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


    //console.log(Generate());

    //alert("Your password is " +  (Generate()));


}


//Display the password in an alert or on the page
//alert("Your password is" + password)