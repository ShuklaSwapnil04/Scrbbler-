var flag=0;
var likes=0;
function changeText(){
	if(flag==0){
		var s=document.getElementById("temp").innerHTML;
		document.getElementById("text").innerHTML='Save';
		document.getElementById("text2").innerHTML=s;

		var text=document.getElementById("blogBody").innerHTML;
		document.getElementById("textarea").value=text;
		document.getElementById("blogBody").style.display="none";
		document.getElementById("textarea").style.display="block";
		document.getElementById("textarea").style.width="95%";
		document.getElementById("textarea").style.height="260px";
		
		var title=document.getElementById("blogTitleNew").innerHTML;
		document.getElementById("titleArea").value=title;
		document.getElementById("blogTitleNew").style.display="none";
		document.getElementById("titleArea").style.display="block";
		
		flag=1;
	}
	else{
		
		var a=document.getElementById("textarea").value;
		document.getElementById("blogBody").innerHTML=a;
		document.getElementById("blogBody").style.display="block";
		document.getElementById("textarea").style.display="none";
		
		var b=document.getElementById("titleArea").value;
		document.getElementById("blogTitleNew").innerHTML=b;
		
		document.getElementById("blogTitleNew").style.display="block";
		document.getElementById("titleArea").style.display="none";
		
		var s=document.getElementById("temp2").innerHTML;
		document.getElementById("text").innerHTML='Edit';
		document.getElementById("text2").innerHTML=s;
		//Vinayak
		flag=0;
	}
	
}

function liked(){
	likes++;
	document.getElementsByClassName("likeText")[0].innerHTML="Liked!";
	if(likes==1){
		document.getElementById("like").innerHTML="1 person likes this!";
	}
	else{
		document.getElementById("like").innerHTML=likes+" people have liked this!"
	}
	document.getElementById("commentBox").style.display="block";
}

function saini(){
	document.getElementById("commentArea").style.display="block";
	
	var text=document.getElementById("cmntText").value;
	document.getElementById("commentArea").innerHTML+="<p style='background-color:white; margin:10px; padding-top:11px;height:35px;'>"+text+"</p>";
}



