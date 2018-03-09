GetRandomRGBAPixel=function(opt_options) {
	this.x=opt_options.x;
  	this.y=opt_options.y;
  	this.output=opt_options.output;
}


GetRandomRGBAPixel.prototype.process=function(imageData) {
	var new_X = Math.trunc(Math.random()*imageData.width)
	var new_Y = Math.trunc(Math.random()*imageData.height)

	var pos=(this.y*imageData.width+this.x)<<2;
	var new_pos=(new_Y*imageData.width+new_X)<<2;

	imageData.data[new_pos]=imageData.data[pos];
	imageData.data[new_pos+1]=imageData.data[pos+1];
	imageData.data[new_pos+2]=imageData.data[pos+2];
	imageData.data[new_pos+3]=imageData.data[pos+3];

	this.output.innerHTML="Le pixel ("+this.x+","+this.y+") a été échanger avec le pixel ("+new_X+","+new_Y+")";
}





GetMouseRGBAPixel=function(opt_options) {
	this.output=opt_options.output;
}

GetMouseRGBAPixel.prototype.set_position=function(x,y) {
	this.x=x;
	this.y=y;
}

GetMouseRGBAPixel.prototype.process=function(imageData) {
	var pos=(this.y*imageData.width+this.x)<<2;

	var r=imageData.data[pos];
  	var g=imageData.data[pos+1];
  	var b=imageData.data[pos+2];
  	var a=imageData.data[pos+3];	

	this.output.innerHTML=this.x+"x"+this.y+" : ";
  	this.output.innerHTML+="<font color='red'>"+r+"</font> | ";
  	this.output.innerHTML+="<font color='green'>"+g+"</font> | ";
  	this.output.innerHTML+="<font color='blue'>"+b+"</font> | ";
  	this.output.innerHTML+="<font color='gray'>"+a+"</font>";
}
