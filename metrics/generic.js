var generic_metrics={};

/*
  generic_metrics.euclidian_distance_btw_feature_vectors
  - computes the euclidian distance between two feature vectors sharing
    a common structure
  - it requires feature_distance_func which computes the distance between
    individual components of the descriptor
  - return the euclidian distance in the R^n space,
    where n is descriptor_array_1.length
*/
generic_metrics.euclidian_distance_btw_feature_vectors=function(
  descriptor_array_1,
  descriptor_array_2,
  feature_distance_func) {
  var sum=0, count=0;
  for (var idx in descriptor_array_1) {
    var dist=feature_distance_func(descriptor_array_1[idx],descriptor_array_2[idx]);
    sum+=dist*dist;
    count++;
  }
  if (count>0) {
    return Math.sqrt(sum);
  } else
    return undefined;
}

generic_metrics.histogramme_distance=function(hist1,hist2) {
    var res=0;
    var sommehist1=0;
    var sommehist2 =0;
    var denominateur=0;
    var numerateur=0;
    var timo=0;
    var leon=0;

    for (var idx in hist1) {
        sommehist1+=hist1[idx];
        sommehist2+=hist2[idx];

    }
    sommehist1*=(1/hist1.length);
    sommehist2*=(1/hist1.length);

    for (var idx in hist1) {
        denominateur+=(hist1[idx]-sommehist1)*(hist2[idx]-sommehist2);
        timo+=(hist1[idx]-sommehist1)**2
        leon+=(hist2[idx]-sommehist2)**2;
    }

    numerateur=Math.sqrt(timo*leon);


    return denominateur/numerateur;
}


generic_metrics.histogramme_distance_simple=function(hist1,hist2) {
    var res=0;

    for (var idx in hist1) {
        res+=Math.min(hist1[idx],hist2[idx]);
    }

    return res/hist1.length;
}

generic_metrics.histogramme_distance_color=function(hist1,hist2) {
    var mean1=[0,0,0];
    var mean2=[0,0,0];
    var dist_fun=function(x,y){return x-y};


    for (var idx=0;i<8;i++) {
        mean1[0]=Math.max(hist1[idx],mean1[0]);
        mean1[1]=Math.max(hist1[8+idx],mean1[1]);
        mean1[2]=Math.max(hist1[16+idx],mean1[2]);

        mean2[0]=Math.max(hist2[idx],mean2[0]);
        mean2[1]=Math.max(hist2[8+idx],mean2[1]);
        mean2[2]=Math.max(hist2[16+idx],mean2[2]);
    }
	
    return generic_metrics.euclidian_distance_btw_feature_vectors(mean1,mean2,dist_fun);
}