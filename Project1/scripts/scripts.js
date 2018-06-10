// Scripts for the file
function socialToggle(){
	console.log("clicked");
	var social= document.getElementById("social-icon");
	if(social.style.visibility =="hidden" || social.style.visibility==""){
		social.style.visibility="visible";
	}else{
		social.style.visibility="hidden";
	}
}