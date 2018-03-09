var pixel_metrics={};

/*
    pixel_metrics.rgb_edist - computes euclidian distance between two rgb pixels
*/
pixel_metrics.rgb_edist=function(pixel_rgb1, pixel_rgb2) {
  var dist_fun=function(x,y){return x-y};
  return generic_metrics.euclidian_distance_btw_feature_vectors(pixel_rgb1,pixel_rgb2,dist_fun);
}

/*
    pixel_metrics.grid_rgb_edist - computes euclidian distance between two grids
    containing in each cell an rgb pixel
*/
pixel_metrics.grid_rgb_edist=function(pixels_rgb_grid1, pixels_rgb_grid2) {
  var dist_fun=pixel_metrics.rgb_edist;
  return generic_metrics.euclidian_distance_btw_feature_vectors(pixels_rgb_grid1.cells,pixels_rgb_grid2.cells,dist_fun);
}

/*
    pixel_metrics.rgba_edist - computes euclidian distance between two rgb pixels
*/
pixel_metrics.rgba_edist=function(pixel_rgba1, pixel_rgba2) {
  var dist_fun=function(x,y){return x-y};
  return generic_metrics.euclidian_distance_btw_feature_vectors(pixel_rgba1,pixel_rgba2,dist_fun);
}

/*
    pixel_metrics.rgb_edist - computes euclidian distance between two grids
    containing in each cell an rgb pixel
*/
pixel_metrics.grid_rgba_edist=function(pixels_rgba_grid1, pixels_rgba_grid2) {
  var dist_fun=pixel_metrics.rgba_edist;
  return generic_metrics.euclidian_distance_btw_feature_vectors(pixels_rgba_grid1.cells,pixels_rgba_grid2.cells,dist_fun);
}

/*
    pixel_metrics.gray_edist - computes euclidian distance between two gray pixels
*/
pixel_metrics.gray_edist=function(pixel_gray1, pixel_gray2) {
  var dist_fun=function(x,y){return x-y};
  return generic_metrics.euclidian_distance_btw_feature_vectors(pixel_gray1,pixel_gray2,dist_fun);
}

/*
    pixel_metrics.gray_edist - computes euclidian distance between two grids
    containing in each cell an gray pixel
*/
pixel_metrics.grid_gray_edist=function(pixels_gray_grid1, pixels_gray_grid2) {
  var dist_fun=pixel_metrics.gray_edist;
  return generic_metrics.euclidian_distance_btw_feature_vectors(pixels_gray_grid1.cells,pixels_gray_grid2.cells,dist_fun);
}


pixel_metrics.histo_gray_edist=function(pixels_gray1, pixels_gray2) {
  var dist_fun=function(x,y){return x-y};
  return generic_metrics.euclidian_distance_btw_feature_vectors(pixels_gray1,pixels_gray2,dist_fun);
}

pixel_metrics.histo_color_edist=function(pixels_color1, pixels_color2) {
  var dist_fun=function(x,y){return x-y};
  return generic_metrics.histogramme_distance_color(pixels_color1,pixels_color2,dist_fun);
}

pixel_metrics.grid_histo_gray_edist=function(pixels_gray_grid1, pixels_gray_grid2) {
  var dist_fun=pixel_metrics.gray_edist;
  return generic_metrics.euclidian_distance_btw_feature_vectors(pixels_gray_grid1.cells,pixels_gray_grid2.cells,dist_fun);
}

pixel_metrics.grid_histo_color_edist=function(pixels_color_grid1, pixels_color_grid2) {
  var dist_fun=pixel_metrics.rgb_edist;
  return generic_metrics.euclidian_distance_btw_feature_vectors(pixels_color_grid1.cells,pixels_color_grid2.cells,dist_fun);
}

pixel_metrics.pixel_edist=function(pixel_rgb1, pixel_rgb2) {
  var dist_fun=function(x,y){return x-y};
  return generic_metrics.euclidian_distance_btw_feature_vectors(pixel_rgb1,pixel_rgb2,dist_fun);
}

/*
    pixel_metrics.gray_edist - computes euclidian distance between two pixels
    considering the intensity value
*/
pixel_metrics.gray_edist=function(pixel_rgb1, pixel_rgb2) {
  var pixel_gray_1=Math.round((pixel_rgb1[0]+pixel_rgb1[1]+pixel_rgb1[2])/3);
  var pixel_gray_2=Math.round((pixel_rgb2[0]+pixel_rgb2[1]+pixel_rgb2[2])/3);

  return Math.abs(pixel_gray_1-pixel_gray_2);
}

/*
    pixel_metrics.visible_edist - computes euclidian distance between two pixels
    considering the fact that pixels are both visible/invisible
    returns 0 or 1
*/
pixel_metrics.visible_edist=function(pixel_rgb1, pixel_rgb2) {
  var pixel_gray_1=Math.round((pixel_rgb1[0]+pixel_rgb1[1]+pixel_rgb1[2])/3);
  var pixel_gray_2=Math.round((pixel_rgb2[0]+pixel_rgb2[1]+pixel_rgb2[2])/3);
  return (pixel_gray_1>0 && pixel_gray_2>0) || (pixel_gray_1==0 && pixel_gray_2==0);

}
