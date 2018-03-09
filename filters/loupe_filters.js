ReticuleColorTask=function(opt_options) { 
    this.x=opt_options.x;
    this.y=opt_options.y;
    this.r=opt_options.r;
}

ReticuleColorTask.prototype.process=function(imageData) {
  
  var pixels=imageData.data;
  var w=0;
  for (var i = 0; i < imageData.height; i++){
        for (var j = 0; j < imageData.width; j++) {
  
          if (Math.sqrt((this.x-i)*(this.x-i) + (this.y-j)*(this.y-j)) > this.r ) {
              var mean=(pixels[w+1]+pixels[w+2]+pixels[w+3])/3;
              pixels[w]=mean; pixels[w+1]=mean; pixels[w+2]=mean;
          }
  
          w+=4;
        }
    } 
    
}

LoupeColorTask=function(opt_options) { 
    this.x=opt_options.x;
    this.y=opt_options.y;
    this.r=opt_options.r;

    this.incX=-1;
    this.incY=1;
}

LoupeColorTask.prototype.process=function(imageData) {
	
  var pixels=imageData.data;
  var w=0;
  for (var i = 0; i < imageData.height; i++){
        for (var j = 0; j < imageData.width; j++) {
  
          if (Math.sqrt((this.x-i)*(this.x-i) + (this.y-j)*(this.y-j)) > this.r ) {
              var mean=(pixels[w+1]+pixels[w+2]+pixels[w+3])/3;
              pixels[w]=mean; pixels[w+1]=mean; pixels[w+2]=mean;
          }
  
          w+=4;
        }
    }	
   
    if ((this.x+this.r)>imageData.height || (this.x-this.r)<0) {
        this.incX=-this.incX;
        
    }

    if ((this.y+this.r)>imageData.width || (this.y-this.r)<0) {
        this.incY=-this.incY;
    }

    this.x=this.x+this.incX;
    this.y=this.y+this.incY;
    
}