var datasets={}

/*
  datasets.ImageDataset
  - constructs a collection of images (this.imageDatas) based on image_ids
  - ALL IMAGES SHOULD HAVE THE SAME WIDTH and HEIGHT
  - it exports this.imageDatas and this.image_ids for accessing image information
*/
datasets.ImageDataset=function(image_ids){
  this.image_ids=image_ids;
  this.imageDatas=[];
  for (var idx in this.image_ids) {
    this.imageDatas[idx]=Tools.get_imageData_from_imgEltId(this.image_ids[idx]);
  }
}

/*
  datasets.ImageDataset
  - constructs a collection of images (this.imageDatas) for a given imageData,
    considering various sizes and steps related to floating windows
  - it exports this.imageDatas and this.image_ids for accessing image information
  - for debugging reasons, if the containing page has a div id="res",
    the newly created dataset is displayed
*/
datasets.PartsOfImageDataset=function(imageData,sizes_and_steps){
  if (document.getElementById("res")) {
    document.getElementById("res").appendChild(document.createTextNode("Candidate windows"));
    document.getElementById("res").appendChild(document.createElement("br"));
  }
  
  this.imageDatas=[];
  this.count=0;
  for (var idx_s in sizes_and_steps) {
    height=sizes_and_steps[idx_s].height; width=sizes_and_steps[idx_s].width;
    for (var y=0;y<imageData.height-height;y+=sizes_and_steps[idx_s].y) {
      for (var x=0;x<imageData.width-width;x+=sizes_and_steps[idx_s].x) {
        this.imageDatas[this.count]=
          Tools.get_region_from_imageData(
              imageData,
              x,y,width,height);

        if (document.getElementById("res"))
          document.getElementById("res").appendChild(Tools.create_canvasElt_from_imageData(this.imageDatas[this.count]));

        this.count++;
      }
      if (document.getElementById("res"))
        document.getElementById("res").appendChild(document.createElement("br"));
    }
  }
}
