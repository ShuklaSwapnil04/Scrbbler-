function signInAction(){
	document.getElementsByClassName("modal2")[0].style.display="block";
}
function signUpAction(){
	document.getElementsByClassName("modal1")[0].style.display="block";
}
function closee(){
	//console.log(1)
	document.getElementsByClassName("modal2")[0].style.display="none";
	document.getElementsByClassName("modal1")[0].style.display="none";
	document.getElementsByClassName("modal")[0].style.display="none";
}
function signUpClk(){
	document.getElementsByClassName("modal2")[0].style.display="none";
	signUpAction();
}