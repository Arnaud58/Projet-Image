MeanTask=function(opt_options) {}

MeanTask.prototype.process=function(imageData) {
  var pixels=imageData.data;
  var w=0;
  for (var i = 0; i < imageData.width; i++)
      for (var j = 0; j < imageData.height; j++) {
        var pos;
        var meanR=0;
        var meanG=0;
        var meanB=0;
        var meanA=0;
        var nb=0;


        for (var x=i-1;x<i+2;x++) {
            for (var y=j-1;y<j+2;y++) {
                if (0<=x &&  x<imageData.height && 0<=y && y<imageData.width) {
                    pos = (x*imageData.width+y)<<2;
                    meanR+=pixels[pos];
                    meanG+=pixels[pos+1];
                    meanB+=pixels[pos+2];
                    meanA+=pixels[pos+3];
                    nb++;
                }
            }
        }

        meanR=meanR/nb;
        meanG=meanG/nb;
        meanB=meanB/nb;
        meanA=meanA/nb;

        pos = (i*imageData.width+j)<<2;
        pixels[pos]=meanR;
        pixels[pos+1]=meanG;
        pixels[pos+2]=meanB;
        pixels[pos+3]=meanA;
        
        w+=4;
      }
}