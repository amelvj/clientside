var checklist=document.getElementById("checklist");
var items=checklist.querySelectorAll("li");
var inputs=checklist.querySelectorAll("input");

for (var i = 0; i < items.length; i++) {
	items[i].addEventListener("click",editon);
	inputs[i].addEventListener("blur",blur);
	inputs[i].addEventListener("keypress",keypress);

}



function editon(){
	// checklist.editon=true;
	// console.log(this);
	this.className="edit";
	var input=this.querySelector("input");
	input.focus();
	input.setSelectionRange(0,input.value.length);
}
function blur(){
	// this.parentNode.getElementsByTagName("span").innerHTML=this.value;
	this.previousElementSibling.innerHTML=this.value;
	// console.log();
	this.parentNode.className="";

}
function keypress(event){
	if(event.which==13)
	{
	blur.call(this);
	}

}



// var button1=document.getElementById('cw1');
// var button2=document.getElementById('cw2');

// function showImage(){
// 	var images=document.querySelectorAll("img");
// 	for (var i = 0; i < images.length; i++) {
// 		images[i].className="hide";
// 	}
// 	// var image =this.attributes["id"].value;
// 	var picid =this.getAttribute("data-img");
// 	var pic=document.getElementById(picid);
// 	// i1.className="hide";
// 	// i2.className="hide";
// 	// i3.className="hide";

// 	if(pic.className==="hide")
// 		pic.className="";
// 	else
// 		pic.className="hide";
// 	console.log(picid);
// }