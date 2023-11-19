(function ($) {
  
  $.config_2 = {
    "_comment" : "Zen mode",
    "id" : "mirador_viewer_1",
    "layout" : "1x1",
    "mainMenuSettings" : {
      "show" : false
    },
    "data" : [
	{"manifestUri": "http://208.113.165.33/manifests/Lydgate/Testament/clopton.json", 
            "location": "Holy Trinity, Long Melford"}
    ],
    "windowObjects" : [
              {
               "loadedManifest": "http://208.113.165.33/manifests/Lydgate/Testament/clopton.json",
               "canvasID": "http://208.113.165.33/data/manifests/Lydgate/Clopton/canvas/sw_test_hand",
               "availableViews" : false,
                // For the example above:
                // "loadedManifest": "http://dms-data.stanford.edu/data/manifests/Walters/qm670kv1873/manifest.json",
               // "canvasID" : "http://dms-data.stanford.edu/data/manifests/Walters/qm670kv1873/canvas/canvas-1"
               "viewType" : "ImageView",
               "bottomPanel" : false,
               "sidePanel" : false,
               "overlay" : false,
               "annotationLayer" : false,
               "annotationState" : false,
               "displayLayout": false,
               "fullScreen" : false
             }
    ],
    "buildPath" : "/",
    "i18nPath" : "mirador/locales/",
    "imagesPath" : "mirador/images/",
    "logosPath" : "mirador/images/logos/"
  };
  
})(MiradorExample);
