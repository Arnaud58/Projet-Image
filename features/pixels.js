var pixels_features={};

GetPixelRGBATask=function(opt_options) {
  this.x=opt_options.x;
  this.y=opt_options.y;
  this.output=opt_options.output;
}

GetPixelRGBATask.prototype.process=function(imageData) {
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


/*
  pixels_features.mean_rgb
  - computes RGB mean of all pixels having A>0 within imageData
*/
pixels_features.mean_rgb=function(imageData,opt_options) {
  return pixels_features.mean_rgb_per_region(imageData,{x0:0,y0:0,dx:imageData.width,dy:imageData.height});
}

/*
  pixels_features.mean_rgb_per_region
  - computes RGB mean of all pixels having A>0 within opt_options.x0 .y0 .dx .dy
  - if opt_options missing partially,
      replace partially with defaults 0, 0, imageData.width, imageData.height
  - returns undefined if none available
*/
pixels_features.mean_rgb_per_region=function(imageData,opt_options) {
  x0=opt_options&&opt_options.x0?opt_options.x0:0;
  y0=opt_options&&opt_options.y0?opt_options.y0:0;
  dx=opt_options&&opt_options.dx?opt_options.dx:imageData.width;
  dy=opt_options&&opt_options.dy?opt_options.dy:imageData.height;


  var mean=[];
  mean[0]=0; mean[1]=0; mean[2]=0;
  var pos=0; var count=0;
  for (var y=y0;y<y0+dy;y++)
    for (var x=x0;x<x0+dx;x++) {
      pos=(y*imageData.width+x)<<2;
      if (imageData.data[pos+3]>0) {
        for (var i=0;i<3;i++) {
          mean[i]+=imageData.data[pos+i];
        }
        count++;
      }
    }
  if (count>0) {
    for (var i=0;i<3;i++) {
      mean[i]=Math.round(mean[i]/count);
    }
    return mean;
  }
  return undefined;
}

/*
  pixels_features.grid_mean_rgb
  - computes RGB mean of all pixels having A>0 in all grid cells
  - grid params are defined as opt_options.nb_lines*opt_options.nb_columns
  - returns a generic_features.grid_descriptor (grid.cells - array)
*/
pixels_features.grid_mean_rgb=function(imageData,opt_options) {
  return generic_features.grid_descriptor(imageData,pixels_features.mean_rgb_per_region,opt_options);
}


/*
  pixels_features.mean_rgba
  - computes RGBA mean of all pixels having A>0 within imageData
*/
pixels_features.mean_rgba=function(imageData,opt_options) {
  return pixels_features.mean_rgba_per_region(imageData,{x0:0,y0:0,dx:imageData.width,dy:imageData.height});
}

/*
  pixels_features.mean_rgba_per_region
  - computes RGBA mean of all pixels having A>0 within opt_options.x0 .y0 .dx .dy
  - if opt_options missing partially,
      replace partially with defaults 0, 0, imageData.width, imageData.height
  - returns undefined if none available
*/
pixels_features.mean_rgba_per_region=function(imageData,opt_options) {
  x0=opt_options&&opt_options.x0?opt_options.x0:0;
  y0=opt_options&&opt_options.y0?opt_options.y0:0;
  dx=opt_options&&opt_options.dx?opt_options.dx:imageData.width;
  dy=opt_options&&opt_options.dy?opt_options.dy:imageData.height;


  var mean=[];
  mean[0]=0; mean[1]=0; mean[2]=0;mean[3]=0;
  var pos=0; var count=0;
  for (var y=y0;y<y0+dy;y++)
    for (var x=x0;x<x0+dx;x++) {
      pos=(y*imageData.width+x)<<2;

        for (var i=0;i<4;i++) {
          mean[i]+=imageData.data[pos+i];
        
        count++;
      }
    }
  if (count>0) {
    for (var i=0;i<4;i++) {
      mean[i]=Math.round(mean[i]/count);
    }
    return mean;
  }
  return undefined;
}

/*
  pixels_features.grid_mean_rgba
  - computes RGBa mean of all pixels having A>0 in all grid cells
  - grid params are defined as opt_options.nb_lines*opt_options.nb_columns
  - returns a generic_features.grid_descriptor (grid.cells - array)
*/
pixels_features.grid_mean_rgba=function(imageData,opt_options) {
  return generic_features.grid_descriptor(imageData,pixels_features.mean_rgba_per_region,opt_options);
}


/*
  pixels_features.mean_gray
  - computes gray mean of all pixels having A>0 within imageData
*/
pixels_features.mean_gray=function(imageData,opt_options) {
  return pixels_features.mean_gray_per_region(imageData,{x0:0,y0:0,dx:imageData.width,dy:imageData.height});
}

/*
  pixels_features.mean_gray_per_region
  - computes gray mean of all pixels having A>0 within opt_options.x0 .y0 .dx .dy
  - if opt_options missing partially,
      replace partially with defaults 0, 0, imageData.width, imageData.height
  - returns undefined if none available
*/
pixels_features.mean_gray_per_region=function(imageData,opt_options) {
  x0=opt_options&&opt_options.x0?opt_options.x0:0;
  y0=opt_options&&opt_options.y0?opt_options.y0:0;
  dx=opt_options&&opt_options.dx?opt_options.dx:imageData.width;
  dy=opt_options&&opt_options.dy?opt_options.dy:imageData.height;


  var mean=[];
  mean[0]=0;
  var pos=0; var count=0;
  for (var y=y0;y<y0+dy;y++)
    for (var x=x0;x<x0+dx;x++) {
      pos=(y*imageData.width+x)<<2;
      if (imageData.data[pos+3]>0) {
        for (var i=0;i<3;i++) {
          mean[0]+=imageData.data[pos+i];
        }
        count++;
      }
    }
  if (count>0) {

    mean[0]=Math.round(mean[0]/count);
    
    return mean;
  }
  return undefined;
}

/*
  pixels_features.grid_mean_gray
  - computes gray mean of all pixels having A>0 in all grid cells
  - grid params are defined as opt_options.nb_lines*opt_options.nb_columns
  - returns a generic_features.grid_descriptor (grid.cells - array)
*/
pixels_features.grid_mean_gray=function(imageData,opt_options) {
  return generic_features.grid_descriptor(imageData,pixels_features.mean_gray_per_region,opt_options);
}

pixels_features.histo_gray=function(imageData,opt_options) {
  return pixels_features.histo_gray_per_region(imageData,{x0:0,y0:0,dx:imageData.width,dy:imageData.height});
}

pixels_features.histo_gray_per_region=function(imageData,opt_options) {
    x0=opt_options&&opt_options.x0?opt_options.x0:0;
    y0=opt_options&&opt_options.y0?opt_options.y0:0;
    dx=opt_options&&opt_options.dx?opt_options.dx:imageData.width;
    dy=opt_options&&opt_options.dy?opt_options.dy:imageData.height;

    var histo=[];
    var mean=[];
    for (var i=0;i<8;i++) {
        histo[i]=0;
    }
  
    var pos=0; var count=0;
    for (var y=y0;y<y0+dy;y++) {
        for (var x=x0;x<x0+dx;x++) {
            pos=(y*imageData.width+x)<<2;
            mean[0]=0;
            if (imageData.data[pos+3]>0) {
              for (var i=0;i<3;i++) {
                mean[0]+=imageData.data[pos+i];
            }
            //alert(mean[0]+" "+count);
            mean[0]=Math.round(mean[0]/3);
      
            histo[Math.floor(mean[0]/32)]++;        
            }
        }
    }

    return histo;
}

pixels_features.grid_histo_gray=function(imageData,opt_options) {
  return generic_features.grid_descriptor(imageData,pixels_features.histo_gray_per_region,opt_options);
}

pixels_features.histo_color=function(imageData,opt_options) {
  return pixels_features.histo_color_per_region(imageData,{x0:0,y0:0,dx:imageData.width,dy:imageData.height});
}

pixels_features.histo_color_per_region=function(imageData,opt_options) {
    x0=opt_options&&opt_options.x0?opt_options.x0:0;
    y0=opt_options&&opt_options.y0?opt_options.y0:0;
    dx=opt_options&&opt_options.dx?opt_options.dx:imageData.width;
    dy=opt_options&&opt_options.dy?opt_options.dy:imageData.height;

    var histo=[];
    var mean=[];
    for (var i=0;i<24;i++) {
        histo[i]=0;
    }
    
  
    var pos=0; var count=0;
    for (var y=y0;y<y0+dy;y++) {
        for (var x=x0;x<x0+dx;x++) {
            pos=(y*imageData.width+x)<<2;
            mean[0]=0;mean[1]=0;mean[2]=0;
            if (imageData.data[pos+3]>0) {
              for (var i=0;i<3;i++) {
                mean[i]=imageData.data[pos+i];                
                histo[Math.floor(mean[i]/32)+(i*8)]++;
            }
            }
        }
    }

    return histo;
}

pixels_features.grid_histo_color=function(imageData,opt_options) {
  return generic_features.grid_descriptor(imageData,pixels_features.histo_color_per_region,opt_options);
}


/*
  pixels_features.mean_rgb_afactor_per_region
  - computes RGB mean of all pixels considering A as a weight of RGB channels
  within opt_options.x0 .y0 .dx .dy
  - if opt_options missing partially,
      replace partially with defaults 0, 0, imageData.width, imageData.height
  - returns undefined if none available
*/
pixels_features.mean_rgb_afactor_per_region=function(imageData,opt_options) {
  x0=opt_options&&opt_options.x0?opt_options.x0:0;
  y0=opt_options&&opt_options.y0?opt_options.y0:0;
  dx=opt_options&&opt_options.dx?opt_options.dx:imageData.width;
  dy=opt_options&&opt_options.dy?opt_options.dy:imageData.height;


  var mean=[];
  mean[0]=0; mean[1]=0; mean[2]=0;
  var pos=0; var count=0;
  for (var y=y0;y<y0+dy;y++)
    for (var x=x0;x<x0+dx;x++) {
      pos=(y*imageData.width+x)<<2;
      for (var i=0;i<3;i++) {
        mean[i]+=(imageData.data[pos+i]*imageData.data[pos+3]);
      }
      count++;
    }
  if (count>0) {
    for (var i=0;i<3;i++) {
      mean[i]=Math.round(mean[i]/count);
    }
    return mean;
  }
  return undefined;
}


/*
  pixels_features.mean_rgb_afactor_per_circle
  - computes RGB mean of all pixels considering A as a weight of RGB channels
  within opt_options.x0 .y0 .dx .dy
  - if opt_options missing partially,
      replace partially with defaults 0, 0, imageData.width, imageData.height
  - returns undefined if none available
*/
pixels_features.mean_rgb_afactor_per_circle=function(imageData,opt_options) {
  x0=opt_options&&opt_options.x0?opt_options.x0:0;
  y0=opt_options&&opt_options.y0?opt_options.y0:0;
  dx=opt_options&&opt_options.dx?opt_options.dx:imageData.width;
  dy=opt_options&&opt_options.dy?opt_options.dy:imageData.height;

  var mean=[];
  mean[0]=0; mean[1]=0; mean[2]=0;
  var pos=0; var count=0;
  for (var y=y0;y<y0+dy;y++)
    for (var x=x0;x<x0+dx;x++) {

        if (Math.sqrt(((x0+(dx/2))-x)**2 + ((y0+(dy/2))-y)**2) < (dx/2) ) {
            pos=(y*imageData.width+x)<<2;
            for (var i=0;i<3;i++) {
                mean[i]+=(imageData.data[pos+i]*imageData.data[pos+3]);
            }
            count++;
        }

      
    }


  if (count>0) {
    for (var i=0;i<3;i++) {
      mean[i]=Math.round(mean[i]/count);
    }
    return mean;
  }
  return undefined;
}

