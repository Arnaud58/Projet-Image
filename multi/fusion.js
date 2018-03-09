MeanFuseMultiImagesTask=function(opt_options){}

MeanFuseMultiImagesTask.prototype.process_multi=function(imageDatas,fused) {
	var w=0;
	for (var y=0;y<fused.height;y++) {
		for (var x=0;x<fused.width;x++) {
			fused.data[w]=0; fused.data[w+1]=0; fused.data[w+2]=0; fused.data[w+3]=0;
			for (idx in imageDatas) {
				for (var i=0; i<4; i++) {
					fused.data[w+i]+=imageDatas[idx].data[w+i];
				}
			}
			for (var i=0; i<4; i++) fused[w+i]=Math.round(fused[w+i]/imageDatas.length);
			w+=4;
		}
	}
}

MeanFuseMultiImages_MoreFstImageTask=function(opt_options){
	this.poid=1.2;
}

MeanFuseMultiImages_MoreFstImageTask.prototype.process_multi=function(imageDatas,fused) {
	var w=0;
	var weight=1;
  	for (var y=0;y<fused.height;y++) {
		for (var x=0;x<fused.width;x++) {
      		fused.data[w]=0; fused.data[w+1]=0; fused.data[w+2]=0; fused.data[w+3]=0;
			
			for (idx in imageDatas) {
				if (idx==0) {weight=this.poid;}
				else { weight=1;}
							 
				for (var i=0; i<4; i++) {
					fused.data[w+i]+=(imageDatas[idx].data[w+i]*weight);
				}
			}
			
			for (var i=0; i<4; i++) fused[w+i]=Math.round(fused[w+i]/imageDatas.length);
			
			w+=4;
			
    	}
  	}
}

MeanFuseMultiImages_weirdFusion=function(opt_options){}

MeanFuseMultiImages_weirdFusion.prototype.process_multi=function(imageDatas,fused) {
	var w=0;
	var weight=1;
  	for (var y=0;y<fused.height;y++) {
		for (var x=0;x<fused.width;x++) {
      		fused.data[w]=0; fused.data[w+1]=0; fused.data[w+2]=0; fused.data[w+3]=0;
			
			if (imageDatas[0].data[w]<imageDatas[1].data[w]) {
				for (var i=0; i<4; i++) {
					fused.data[w+i]+=(imageDatas[0].data[w+i]*weight);
				}
			}
			else { 
				for (var i=0; i<4; i++) {
					fused.data[w+i]+=(imageDatas[1].data[w+i]*weight);
				}
			}
			
			w+=4;
    	}
  	}
}
