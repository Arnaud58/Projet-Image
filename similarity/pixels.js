var pixels_similarity={}

pixels_similarity.MeanRGBSimilarityTask=function(dataset,opt_options) {
  this.__proto__.__proto__=new generic_similarity.SimilarityTask(
    dataset,
    pixels_features.mean_rgb,
    pixel_metrics.rgb_edist,
    opt_options
  );
}

pixels_similarity.GridMeanRGBSimilarityTask=function(dataset,opt_options){
  this.__proto__.__proto__=new generic_similarity.SimilarityTask(
    dataset,
    pixels_features.grid_mean_rgb,
    pixel_metrics.grid_rgb_edist,
    opt_options
  );
}


pixels_similarity.MeanRGBASimilarityTask=function(dataset,opt_options) {
  this.__proto__.__proto__=new generic_similarity.SimilarityTask(
    dataset,
    pixels_features.mean_rgba,
    pixel_metrics.rgba_edist,
    opt_options
  );
}

pixels_similarity.GridMeanRGBASimilarityTask=function(dataset,opt_options){
  this.__proto__.__proto__=new generic_similarity.SimilarityTask(
    dataset,
    pixels_features.grid_mean_rgba,
    pixel_metrics.grid_rgba_edist,
    opt_options
  );
}

pixels_similarity.MeanGraySimilarityTask=function(dataset,opt_options) {
  this.__proto__.__proto__=new generic_similarity.SimilarityTask(
    dataset,
    pixels_features.mean_gray,
    pixel_metrics.gray_edist,
    opt_options
  );
}

pixels_similarity.GridMeanGraySimilarityTask=function(dataset,opt_options){
  this.__proto__.__proto__=new generic_similarity.SimilarityTask(
    dataset,
    pixels_features.grid_mean_gray,
    pixel_metrics.grid_gray_edist,
    opt_options
  );
}

pixels_similarity.HistoGraySimilarityTask=function(dataset,opt_options){
  this.__proto__.__proto__=new generic_similarity.SimilarityTask(
    dataset,
    pixels_features.histo_gray,
    pixel_metrics.histo_gray_edist,
    opt_options
  );
}

pixels_similarity.HistoColorSimilarityTask=function(dataset,opt_options){
  this.__proto__.__proto__=new generic_similarity.SimilarityTask(
    dataset,
    pixels_features.histo_color,
    pixel_metrics.histo_color_edist,
    opt_options
  );
}

pixels_similarity.GridHistoGraySimilarityTask=function(dataset,opt_options){
  this.__proto__.__proto__=new generic_similarity.SimilarityTask(
    dataset,
    pixels_features.grid_histo_gray,
    pixel_metrics.grid_histo_gray_edist,
    opt_options
  );
}

pixels_similarity.GridHistoColorSimilarityTask=function(dataset,opt_options){
  this.__proto__.__proto__=new generic_similarity.SimilarityTask(
    dataset,
    pixels_features.grid_histo_color,
    pixel_metrics.grid_histo_color_edist,
    opt_options
  );
}
