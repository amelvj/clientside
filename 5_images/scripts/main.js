var button1=document.getElementById('cw1');
var button2=document.getElementById('cw2');
var button3=document.getElementById('cw3');




button1.addEventListener("click",showImage);
button2.addEventListener("click",showImage);
button3.addEventListener("click",showImage);




function showImage(){
	var images=document.querySelectorAll("img");
	for (var i = 0; i < images.length; i++) {
		images[i].className="hide";
	}
	// var image =this.attributes["id"].value;
	var picid =this.getAttribute("data-img");
	var pic=document.getElementById(picid);
	// i1.className="hide";
	// i2.className="hide";
	// i3.className="hide";

	if(pic.className==="hide")
		pic.className="";
	else
		pic.className="hide";
	console.log(picid);
}