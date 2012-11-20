//Alan Wright
//10/20/12
//Used for email form on contact us of DealGator


//Sets the link to the proper mailto:
function setMailTo() {
	//Get Email address
	var emailId = document.getElementById("email").value;
	var message = document.getElementById("message").value + "   My provided email is: " + emailId;

	//Check email to be valid and that the text field is not blank
	if(checkEmail(emailId) && blankTextField(message) ){
		
		document.getElementById("mail").href = "mailto:DealGator4331@gmail.com?subject=Concerning DealGatorData&body=" + message;
	}
}

//Checks an email to be valid
function checkEmail(email) {
    var filter = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (!filter.test(email)) {
		alert("Please provide a valid email address.");
		document.getElementById("email").focus();
		return false;
	}
	return true;
}

//Checks if a text field value is empty. 
function blankTextField(id){
	// Check the value of the element named text_name from the form named text_form
	if (id == ""){
	  // If null display and alert box
	   alert("Please fill in the text field.");
	  // Place the cursor on the field for revision
	  document.getElementById("email").focus();
	  // return false to stop further processing
	   return false;
	}
	// If text_name is not null continue processing
	return true;
}