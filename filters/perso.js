To3Color=function(opt_options) { 
	this.seuil1=150;
	this.seuil2=180;
}

To3Color.prototype.process=function(imageData) {
  var pixels=imageData.data;
  var w=0;
  for (var i = 0; i < imageData.height; i++)
      for (var j = 0; j < imageData.width; j++) {
        var mean=(pixels[w+1]+pixels[w+2]+pixels[w+3])/3;
		  
		  if (mean<this.seuil1) {
			  pixels[w]=200; pixels[w+1]=0; pixels[w+2]=0;
		  }
		  if (mean>this.seuil1 && mean<this.seuil2) {
			  pixels[w]=0; pixels[w+1]=100; pixels[w+2]=255;
		  }
		  if (mean>this.seuil2) {
			  pixels[w]=0; pixels[w+1]=255; pixels[w+2]=0;
		  }
		  
        
        w+=4;
      }
}

