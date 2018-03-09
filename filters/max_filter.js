MaxTask=function(opt_options) {}

MaxTask.prototype.process=function(imageData) {
	var pixels=imageData.data;
	var pos;
	var maxR;
    var maxG;
    var maxB;
    var maxA;
	var w;
	
	w=0;
	
	
	for (var i = 0; i < imageData.height; i++) {
		for (var j = 0; j < imageData.width; j++) {

			maxR=0;
			maxG=0;
			maxB=0;
			maxA=0;


			for (var x=i-1;x<i+2;x++) {
				for (var y=j-1;y<j+2;y++) {
					if (0<=x &&  x<imageData.width && 0<=y && y<imageData.height) {
						pos = (x*imageData.width+y)<<2;
						maxR=Math.max(maxR,pixels[pos]);
						maxG=Math.max(maxG,pixels[pos+1]);
						maxB=Math.max(maxB,pixels[pos+2]);
						maxA=Math.max(maxA,pixels[pos+3]);
					}
				}
			}

			pos = (i*imageData.width+j)<<2;
			pixels[pos]=maxR;
			pixels[pos+1]=maxG;
			pixels[pos+2]=maxB;
			pixels[pos+3]=maxA;  
        
			w+=4;
      }
	}
}