InvRedBlueTask=function(opt_options) { 
    this.seuil=opt_options.gris;
}

InvRedBlueTask.prototype.process=function(imageData) {
  var pixels=imageData.data;
  var w=0;
  for (var i = 0; i < imageData.height; i++)
      for (var j = 0; j < imageData.width; j++) {
        var blue = pixels[w+2];

        pixels[w+2]=pixels[w];
        pixels[w]=blue;

        w+=4;
      }
}