var morpho_filters={}

morpho_filters.max_from_region=function(imgData,x0,y0,reg_width,reg_height) {
  var pixels=imgData.data;
  var w=((y0+Math.round(reg_height/2))*imgData.width
                                        +(x0+Math.round(reg_width/2)))<<2;
  var max_data=[pixels[w],pixels[w+1],pixels[w+2],pixels[w+3]];
  var max=(pixels[w]+pixels[w+1]+pixels[w+2])*pixels[w+3];

  for (var y=Math.max(0,y0);y<Math.min(y0+reg_height,imgData.height);y++)
    for (var x=Math.max(0,x0);x<Math.min(x0+reg_width,imgData.width);x++) {
      w = (y*imgData.width+x)<<2;
      var val = (pixels[w]+pixels[w+1]+pixels[w+2])*pixels[w+3];
      if (max < val) {
        if (pixels[w+3]<255) pixels[w+3]=255;
        max = val; max_data = [pixels[w],pixels[w+1],pixels[w+2],pixels[w+3]];
      }
    }
  return max_data;
}

morpho_filters.max_red_from_region=function(imgData,x0,y0,reg_width,reg_height) {
  var pixels=imgData.data;
  var w=((y0+Math.round(reg_height/2))*imgData.width+(x0+Math.round(reg_width/2)))<<2;
  var max_data=[pixels[w],pixels[w+1],pixels[w+2],pixels[w+3]];
  var max=(pixels[w]-pixels[w+1]-pixels[w+2])*pixels[w+3];
  for (var y=y0;y<y0+reg_height;y++) {
    if (y<0 || y>imgData.height) continue;
    for (var x=x0;x<x0+reg_width;x++) {
      if (x<0 || x>imgData.width) continue;
      w = (y*imgData.width+x)<<2;
      var val = (pixels[w]-pixels[w+1]-pixels[w+2])*pixels[w+3];
      if (max < val) {
        max = val;
        max_data=[pixels[w], pixels[w+1],
                  pixels[w+2], pixels[w+3]];
      }
    }
  }
  return max_data;
}

morpho_filters.max_gray_from_region=function(imgData,x0,y0,reg_width,reg_height) {
  var pixels=imgData.data;
  var w=((y0+Math.round(reg_height/2))*imgData.width+(x0+Math.round(reg_width/2)))<<2;
  var max_data=[pixels[w],pixels[w+1],pixels[w+2],pixels[w+3]];
  var max=(pixels[w]+pixels[w+1]+pixels[w+2])*pixels[w+3];

  for (var y=y0;y<y0+reg_height;y++) {
    if (y<0 || y>imgData.height) continue;
    for (var x=x0;x<x0+reg_width;x++) {
      if (x<0 || x>imgData.width) continue;
      w = (y*imgData.width+x)<<2;
      var val = (pixels[w]+pixels[w+1]+pixels[w+2])*pixels[w+3];
      if (max < val) {
        max = val;
        max_data=[val/3, val/3,
                  val/3, pixels[w+3]];
      }
    }
  }
  return max_data;
}

morpho_filters.min_from_region=function(imgData,x0,y0,reg_width,reg_height) {
  var pixels=imgData.data;
  var w=((y0+Math.round(reg_height/2))*imgData.width+(x0+Math.round(reg_width/2)))<<2;
  var min_data=[pixels[w],pixels[w+1],pixels[w+2],pixels[w+3]];
  var min=(pixels[w]+pixels[w+1]+pixels[w+2])*pixels[w+3];
  for (var y=y0;y<y0+reg_height;y++) {
    if (y<0 || y>imgData.height) continue;
    for (var x=x0;x<x0+reg_width;x++) {
      if (x<0 || x>imgData.width) continue;
      w = (y*imgData.width+x)<<2;
      var val = (pixels[w]+pixels[w+1]+pixels[w+2])*pixels[w+3];
      if (min > val) {
        min = val;
        min_data=[pixels[w], pixels[w+1],
                  pixels[w+2], pixels[w+3]];
      }
    }
  }
  return min_data;
}


morpho_filters.max_from_crux=function(imgData,x0,y0,reg_width,reg_height) {
  var pixels=imgData.data;
  var w=((y0+Math.round(reg_height/2))*imgData.width
                                        +(x0+Math.round(reg_width/2)))<<2;
  var max_data=[pixels[w],pixels[w+1],pixels[w+2],pixels[w+3]];
  var max=(pixels[w]+pixels[w+1]+pixels[w+2])*pixels[w+3];


  var deb = [Math.max(0,x0),Math.max(0,y0)];
  var fin = [Math.min(x0+reg_width,imgData.width),Math.min(y0+reg_height,imgData.height)];

  

  for (var y=deb[1];y<fin[1];y++)
    for (var x=deb[0];x<fin[0];x++) {
        if ((x>=deb[0]+((fin[0]-deb[0])/4) && x<=deb[0]+(3*((fin[0]-deb[0])/4))) || (y>=deb[1]+((fin[1]-deb[1])/4) && y<=deb[1]+(3*((fin[1]-deb[1])/4)))) {
            w = (y*imgData.width+x)<<2;
            var val = (pixels[w]+pixels[w+1]+pixels[w+2])*pixels[w+3];
            if (max < val) {
            if (pixels[w+3]<255) pixels[w+3]=255;
                max = val; max_data = [pixels[w],pixels[w+1],pixels[w+2],pixels[w+3]];
            }
        }

      
    }
  return max_data;
}



morpho_filters.min_from_crux=function(imgData,x0,y0,reg_width,reg_height) {
  var pixels=imgData.data;
  var w=((y0+Math.round(reg_height/2))*imgData.width+(x0+Math.round(reg_width/2)))<<2;
  var min_data=[pixels[w],pixels[w+1],pixels[w+2],pixels[w+3]];
  var min=(pixels[w]+pixels[w+1]+pixels[w+2])*pixels[w+3];


  for (var y=y0;y<y0+reg_height;y++) {
    if (y<0 || y>imgData.height) continue;
    for (var x=x0;x<x0+reg_width;x++) {
      if (x<0 || x>imgData.width) continue;

      if ((y>(y0+(reg_height/4)) && y<(y0+3*(reg_height/4))) || (x>(x0+(reg_height/4))  && x<(x0+3*(reg_height/4)))  ) {
              w = (y*imgData.width+x)<<2;
              var val = (pixels[w]+pixels[w+1]+pixels[w+2])*pixels[w+3];
              if (min > val) {
                min = val;
                min_data=[pixels[w], pixels[w+1],
                          pixels[w+2], pixels[w+3]];
              }

        }
    }
  }
  return min_data;
}

morpho_filters.max_blue_from_crux=function(imgData,x0,y0,reg_width,reg_height) {
  var pixels=imgData.data;
  var w=((y0+Math.round(reg_height/2))*imgData.width+(x0+Math.round(reg_width/2)))<<2;
  var max_data=[pixels[w],pixels[w+1],pixels[w+2],pixels[w+3]];
  var max=(pixels[w+2]-pixels[w+1]-pixels[w])*pixels[w+3];
  for (var y=y0;y<y0+reg_height;y++) {
    if (y<0 || y>imgData.height) continue;
    for (var x=x0;x<x0+reg_width;x++) {
      if (x<0 || x>imgData.width) continue;
      if ((y>(y0+(reg_height/4)) && y<(y0+3*(reg_height/4))) || (x>(x0+(reg_height/4))  && x<(x0+3*(reg_height/4)))  ) {

          w = (y*imgData.width+x)<<2;
          var val = (pixels[w+2]-pixels[w+1]-pixels[w])*pixels[w+3];
          if (max < val) {
            max = val;
            max_data=[pixels[w], pixels[w+1],
                      pixels[w+2], pixels[w+3]];
            }
      }
    }
  }
  return max_data;
}


morpho_filters.min_blue_from_crux=function(imgData,x0,y0,reg_width,reg_height) {
  var pixels=imgData.data;
  var w=((y0+Math.round(reg_height/2))*imgData.width+(x0+Math.round(reg_width/2)))<<2;
  var min_data=[pixels[w],pixels[w+1],pixels[w+2],pixels[w+3]];
  var min=(pixels[w+2]-pixels[w+1]-pixels[w])*pixels[w+3];
  for (var y=y0;y<y0+reg_height;y++) {
    if (y<0 || y>imgData.height) continue;
    for (var x=x0;x<x0+reg_width;x++) {
      if (x<0 || x>imgData.width) continue;
      if ((y>(y0+(reg_height/4)) && y<(y0+3*(reg_height/4))) || (x>(x0+(reg_height/4))  && x<(x0+3*(reg_height/4)))  ) {

          w = (y*imgData.width+x)<<2;
          var val = (pixels[w+2]-pixels[w+1]-pixels[w])*pixels[w+3];
          if (min > val) {
            min = val;
            min_data=[pixels[w], pixels[w+1],
                      pixels[w+2], pixels[w+3]];
            }
      }
    }
  }
  return min_data;
}