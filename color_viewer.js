var color=document.getElementById('color');
var hex=document.getElementById('hex');

function color_change_rgb(){
	var red=document.getElementById('red');
	var green=document.getElementById('green');
	var blue=document.getElementById('blue');
	if(red.value==undefined){
		red=0;
	}else{
		red=Number(red.value);
	}
	if(green.value==undefined){
		green=0;
	}else{
		green=Number(green.value);
	}
	if(blue.value==undefined){
		blue=0;
	}else{
		blue=Number(blue.value);
	}
	if(red<16){
		red="0"+red.toString(16);
	}else{
		red=red.toString(16);
	}
	if(green<16){
		green="0"+green.toString(16);
	}else{
		green=green.toString(16);
	}
	if(blue<16){
		blue="0"+blue.toString(16);
	}else{
		blue=blue.toString(16);
	}
	var new_color="#"+red+green+blue;
	console.log(new_color);
	color.style.backgroundColor=new_color;
	hex.value=new_color;
}
function color_change_hex(new_color){
	var red=document.getElementById('red');
	var green=document.getElementById('green');
	var blue=document.getElementById('blue');
	color.style.backgroundColor=new_color;
	red.value=parseInt(new_color.substring(1,3), 16);
	green.value=parseInt(new_color.substring(3,5), 16);
	blue.value=parseInt(new_color.substring(5), 16);
		
}