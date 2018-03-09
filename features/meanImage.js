GetMeanPixel=function(opt_options) {
	this.output=opt_options.output;
}


GetMeanPixel.prototype.process=function(imageData) {
	var x,y;
	var r=0,g=0,b=0,a=0,totP=imageData.width*imageData.height;
	var pixels=imageData.data;

	for (x=0;x<imageData.height;x++) {
		for (y=0;y<imageData.width;y++) {
			var pos = (x*imageData.width+y)<<2;
			r+=pixels[pos];
			g+=pixels[pos+1];
			b+=pixels[pos+2];
			a+=pixels[pos+3];
		}
	}

	this.output.innerHTML="Moyenne de l'image : ";
  	this.output.innerHTML+="<font color='red'>"+Math.round(r/totP)+"</font> | ";
  	this.output.innerHTML+="<font color='green'>"+Math.round(g/totP)+"</font> | ";
  	this.output.innerHTML+="<font color='blue'>"+Math.round(b/totP)+"</font> | ";
  	this.output.innerHTML+="<font color='gray'>"+Math.round(a/totP)+"</font>";


}