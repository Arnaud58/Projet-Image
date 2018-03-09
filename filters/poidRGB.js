PoidRGBTask=function(opt_options) { 
    this.pr=opt_options.pr;
    this.pg=opt_options.pg;
    this.pb=opt_options.pb;

}

PoidRGBTask.prototype.process=function(imageData) {
	
  var pixels=imageData.data;
  var w=0;
  for (var i = 0; i < imageData.height; i++){
        for (var j = 0; j < imageData.width; j++) {
 			pixels[w]*=this.pr;
			pixels[w+1]*=this.pg;
			pixels[w+2]*=this.pb;
         
  
          w+=4;
        }
    }    
}