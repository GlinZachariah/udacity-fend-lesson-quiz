// Scripts for the file
function socialToggle(){
	console.log("clicked");
	var social= document.getElementsByClassName("socialmedia");
	if(social[0].style.visibility =="hidden"){
		social[0].style.visibility="visible";
	}else{
		social[0].style.visibility="hidden";
	}
}