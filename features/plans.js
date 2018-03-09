DetectionPlan=function(opt_options) {
	this.oldr=0;
	this.oldg=0;
	this.oldb=0;
	this.olda=0;
	this.cgm=0;
	this.seuil=600000;
	this.output=opt_options.output;
	this.output.innerHTML="Changement de plan: 0";
}

DetectionPlan.prototype.process=function(imageData) {
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

	var d = Math.sqrt((r-this.oldr)*(r-this.oldr)+(b-this.oldb)*(b-this.oldb)+(g-this.oldg)*(g-this.oldg))
   
	if (d > this.seuil) {
		this.cgm++;
		this.output.innerHTML="Changement de plan: "+this.cgm;
	}

  	this.oldr=r;
	this.oldg=g;
	this.oldb=b;
	this.olda=a;
}
