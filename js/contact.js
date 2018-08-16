function validateForm(){
 var name = document.getElementById("jsname").value;
 var email = document.getElementById("jsemail").value;
 var comment = document.getElementById("jsmessage").value;
 
 if (name == "")
 {
alert("Please Enter a Name")
 document.getElementById("jsname").select();
 document.getElementById("jsname").focus();
 return false;
 }
 else if (email == "")
 {
alert("Please Enter an Email Address")
 document.getElementById("jsemail").select();
 document.getElementById("jsemail").focus();
 return false;
 }
 else if (comment == "")
 {
alert("Please Enter a Message")
 document.getElementById("jsmessage").select();
 document.getElementById("jsmessage").focus();
 return false;
 }
 if (!checkEmail(email))
 {
 alert('Email address is invalid');
 return false;
 }
 else
 {
 // alert("Your Message Has Been Sent")
 }
 return true;
}
 
function checkEmail(inputvalue) {
 var pattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
 return pattern.test(inputvalue);
}


