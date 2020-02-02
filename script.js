(function(){
    var script = {
 "start": "this.playAudioList([this.audio_FA08DC7F_C65A_0A71_41E3_EAF8DCCDB56F, this.audio_FDB28B6B_C65A_0F92_41DB_2AD52B247EB9, this.audio_FF892D07_C65A_0B91_41E4_B664E5F48CBB, this.audio_FF266924_C65A_0B96_41D0_60AB8A9ABB15]); this.init(); this.initGA(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_0C433D49_0334_FED6_4187_6A29D717A54B,this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); this.playList_1CFDAB27_04EC_5A59_4162_18FF9A4607FE.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_0C43ED49_0334_FED6_4177_B2E23B39B26B,this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "rootPlayer",
 "children": [
  "this.MainViewer",
  "this.Container_14F80305_1BED_F1EE_4193_B39F49D6928C",
  "this.Container_0C434D49_0334_FED6_417F_78ADD8B2D4F6",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_04FE7C2D_1216_75ED_4197_E539B3CD3A95",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_1812EA3F_1663_8BEF_41AF_0A4CCC089B5F",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_0DEC3FED_12FA_D26D_419F_4067E8C6DA08",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "buttonToggleMute": [
  "this.IconButton_0C430D49_0334_FED6_4163_9F75278C70D8",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D"
 ],
 "paddingLeft": 0,
 "paddingRight": 0,
 "propagateClick": true,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "verticalAlign": "top",
 "minWidth": 20,
 "layout": "absolute",
 "definitions": [{
 "initialPosition": {
  "yaw": -165.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 10000,
 "initialSequence": "this.sequence_1F6A8E33_04EC_5AB9_418F_679690EAB294",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "id": "camera_1F6AEE33_04EC_5AB9_4186_9E2120948443",
 "idleSequence": "this.sequence_1F6A8E33_04EC_5AB9_418F_679690EAB294",
 "class": "PanoramaCamera"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_CB0E1C1E_C6B1_346F_41B0_FD6D91C77467_t.jpg",
 "id": "album_CB0E1C1E_C6B1_346F_41B0_FD6D91C77467",
 "width": 2000,
 "label": "IMG_0856",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_CB0E1C1E_C6B1_346F_41B0_FD6D91C77467.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1333
},
{
 "levels": [
  {
   "url": "media/popup_D58739C8_C5CE_0A9F_41D5_3BF976B382AD_0_0.jpg",
   "width": 6000,
   "class": "ImageResourceLevel",
   "height": 4000
  },
  {
   "url": "media/popup_D58739C8_C5CE_0A9F_41D5_3BF976B382AD_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2730
  },
  {
   "url": "media/popup_D58739C8_C5CE_0A9F_41D5_3BF976B382AD_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1365
  },
  {
   "url": "media/popup_D58739C8_C5CE_0A9F_41D5_3BF976B382AD_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/popup_D58739C8_C5CE_0A9F_41D5_3BF976B382AD_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "id": "ImageResource_D899FEF7_C5C6_0671_41D2_47133B958500",
 "class": "ImageResource"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "hfov": 4.53,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_D5A70CDE_C5CE_0AB2_41DE_29AFBAB7BCE3",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/popup_D5A70CDE_C5CE_0AB2_41DE_29AFBAB7BCE3_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 590
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -7.27,
 "hideEasing": "cubic_out",
 "yaw": -21.04,
 "popupMaxWidth": "95%"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_CBEACB2B_C6B1_3C55_41BA_9C7B7A251B5A_t.jpg",
 "id": "album_CBEACB2B_C6B1_3C55_41BA_9C7B7A251B5A",
 "width": 2000,
 "label": "IMG_0816",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_CBEACB2B_C6B1_3C55_41BA_9C7B7A251B5A.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1333
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_FA08DC7F_C65A_0A71_41E3_EAF8DCCDB56F.ogg",
  "mp3Url": "media/audio_FA08DC7F_C65A_0A71_41E3_EAF8DCCDB56F.mp3"
 },
 "id": "audio_FA08DC7F_C65A_0A71_41E3_EAF8DCCDB56F",
 "data": {
  "label": "Truth Lies Within (Main Track Length)"
 }
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "hfov": 5.61,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_E20E2003_C646_1991_41E4_D04255D1A62D",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/popup_E20E2003_C646_1991_41E4_D04255D1A62D_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 696
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 5.41,
 "hideEasing": "cubic_out",
 "yaw": 17.27,
 "popupMaxWidth": "95%"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_CB86DC88_C6B0_F453_41E7_16F57BD9146F_t.jpg",
 "id": "album_CB86DC88_C6B0_F453_41E7_16F57BD9146F",
 "width": 2000,
 "label": "IMG_0865",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_CB86DC88_C6B0_F453_41E7_16F57BD9146F.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1333
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_CA9671E0_C6B3_0FD2_41DD_BAA7542C1DB9_t.jpg",
 "id": "album_CA9671E0_C6B3_0FD2_41DD_BAA7542C1DB9",
 "width": 2000,
 "label": "IMG_0850",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_CA9671E0_C6B3_0FD2_41DD_BAA7542C1DB9.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1333
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "hfov": 3.8,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_E01BB82B_C64A_0991_41C5_23A1C8836C2B",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/popup_E01BB82B_C64A_0991_41C5_23A1C8836C2B_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 10.68,
 "hideEasing": "cubic_out",
 "yaw": -84.16,
 "popupMaxWidth": "95%"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_CBB3F8FE_C6B3_1DAF_41E7_E80DFC329A38_t.jpg",
 "id": "album_CBB3F8FE_C6B3_1DAF_41E7_E80DFC329A38",
 "width": 2000,
 "label": "IMG_0869",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_CBB3F8FE_C6B3_1DAF_41E7_E80DFC329A38.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1085
},
{
 "levels": [
  {
   "url": "media/popup_E2A1E6D8_C64A_06BF_41D3_EAACEF935DC2_0_0.jpg",
   "width": 6000,
   "class": "ImageResourceLevel",
   "height": 4000
  },
  {
   "url": "media/popup_E2A1E6D8_C64A_06BF_41D3_EAACEF935DC2_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2730
  },
  {
   "url": "media/popup_E2A1E6D8_C64A_06BF_41D3_EAACEF935DC2_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1365
  },
  {
   "url": "media/popup_E2A1E6D8_C64A_06BF_41D3_EAACEF935DC2_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/popup_E2A1E6D8_C64A_06BF_41D3_EAACEF935DC2_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "id": "ImageResource_E20EB35F_C64A_1FB2_41CC_3A051A7D2E5D",
 "class": "ImageResource"
},
{
 "levels": [
  {
   "url": "media/popup_E43CBD87_C64E_0A91_41E1_6384CAC51A86_0_0.jpg",
   "width": 4865,
   "class": "ImageResourceLevel",
   "height": 3412
  },
  {
   "url": "media/popup_E43CBD87_C64E_0A91_41E1_6384CAC51A86_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2872
  },
  {
   "url": "media/popup_E43CBD87_C64E_0A91_41E1_6384CAC51A86_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1436
  },
  {
   "url": "media/popup_E43CBD87_C64E_0A91_41E1_6384CAC51A86_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 718
  },
  {
   "url": "media/popup_E43CBD87_C64E_0A91_41E1_6384CAC51A86_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 359
  }
 ],
 "id": "ImageResource_E20F3363_C64A_1F92_41E0_F9C4B9C07AB6",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": 0.75,
  "class": "PanoramaCameraPosition",
  "pitch": -2.26
 },
 "timeToIdle": 10000,
 "initialSequence": "this.sequence_EEF1A4AD_C753_3452_41CC_47B618F4E39E",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "id": "panorama_C9E4B9D4_C4FD_4082_41E5_B1AD8C2EDA9F_camera",
 "idleSequence": "this.sequence_EEF1A4AD_C753_3452_41CC_47B618F4E39E",
 "class": "PanoramaCamera"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_CAF363E5_C6B1_13DD_41E4_6AB157F897C4_t.jpg",
 "id": "album_CAF363E5_C6B1_13DD_41E4_6AB157F897C4",
 "width": 2000,
 "label": "IMG_0875",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_CAF363E5_C6B1_13DD_41E4_6AB157F897C4.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 3000
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_CB8496A3_C6B1_1456_41B2_9D36FFD3A876_t.jpg",
 "id": "album_CB8496A3_C6B1_1456_41B2_9D36FFD3A876",
 "width": 2000,
 "label": "IMG_0842",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_CB8496A3_C6B1_1456_41B2_9D36FFD3A876.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1154
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_FDB28B6B_C65A_0F92_41DB_2AD52B247EB9.ogg",
  "mp3Url": "media/audio_FDB28B6B_C65A_0F92_41DB_2AD52B247EB9.mp3"
 },
 "id": "audio_FDB28B6B_C65A_0F92_41DB_2AD52B247EB9",
 "data": {
  "label": "Return Of The Triumphant King"
 }
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_CD2A968C_C6B1_1453_41E0_F3E069435A94_t.jpg",
 "id": "album_CD2A968C_C6B1_1453_41E0_F3E069435A94",
 "width": 2000,
 "label": "IMG_0853",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_CD2A968C_C6B1_1453_41E0_F3E069435A94.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1333
},
{
 "initialPosition": {
  "yaw": -57.03,
  "class": "PanoramaCameraPosition",
  "pitch": -36.18
 },
 "timeToIdle": 10000,
 "initialSequence": "this.sequence_EEF3007C_C753_0CB3_41E6_2AC2AD2AAC91",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "id": "panorama_C827BEB9_C4FD_4082_41DA_C1F5183B16C3_camera",
 "idleSequence": "this.sequence_EEF3007C_C753_0CB3_41E6_2AC2AD2AAC91",
 "class": "PanoramaCamera"
},
{
 "levels": [
  {
   "url": "media/popup_EB0A7FC9_C6DA_0691_41E4_1C8F609DC992_0_0.jpg",
   "width": 2773,
   "class": "ImageResourceLevel",
   "height": 3908
  },
  {
   "url": "media/popup_EB0A7FC9_C6DA_0691_41E4_1C8F609DC992_0_1.jpg",
   "width": 1453,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_EB0A7FC9_C6DA_0691_41E4_1C8F609DC992_0_2.jpg",
   "width": 726,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_EB0A7FC9_C6DA_0691_41E4_1C8F609DC992_0_3.jpg",
   "width": 363,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_FA5D4FC0_C646_068E_41E3_4F387A48CA08",
 "class": "ImageResource"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_C827BEB9_C4FD_4082_41DA_C1F5183B16C3_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_C827BEB9_C4FD_4082_41DA_C1F5183B16C3_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C827BEB9_C4FD_4082_41DA_C1F5183B16C3_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C827BEB9_C4FD_4082_41DA_C1F5183B16C3_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C827BEB9_C4FD_4082_41DA_C1F5183B16C3_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_C827BEB9_C4FD_4082_41DA_C1F5183B16C3_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C827BEB9_C4FD_4082_41DA_C1F5183B16C3_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C827BEB9_C4FD_4082_41DA_C1F5183B16C3_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C827BEB9_C4FD_4082_41DA_C1F5183B16C3_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C827BEB9_C4FD_4082_41DA_C1F5183B16C3_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_C827BEB9_C4FD_4082_41DA_C1F5183B16C3_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C827BEB9_C4FD_4082_41DA_C1F5183B16C3_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C827BEB9_C4FD_4082_41DA_C1F5183B16C3_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_C827BEB9_C4FD_4082_41DA_C1F5183B16C3_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_C827BEB9_C4FD_4082_41DA_C1F5183B16C3_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C827BEB9_C4FD_4082_41DA_C1F5183B16C3_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C827BEB9_C4FD_4082_41DA_C1F5183B16C3_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C827BEB9_C4FD_4082_41DA_C1F5183B16C3_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_C827BEB9_C4FD_4082_41DA_C1F5183B16C3_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C827BEB9_C4FD_4082_41DA_C1F5183B16C3_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C827BEB9_C4FD_4082_41DA_C1F5183B16C3_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C827BEB9_C4FD_4082_41DA_C1F5183B16C3_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_C827BEB9_C4FD_4082_41DA_C1F5183B16C3_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C827BEB9_C4FD_4082_41DA_C1F5183B16C3_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C827BEB9_C4FD_4082_41DA_C1F5183B16C3_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "TOMA 8",
 "mapLocations": [
  {
   "map": "this.map_F5C519CC_C64E_0A96_41DE_468FF3A48B98",
   "x": 987.35,
   "class": "PanoramaMapLocation",
   "angle": 56.81,
   "y": 534.43
  }
 ],
 "id": "panorama_C827BEB9_C4FD_4082_41DA_C1F5183B16C3",
 "overlays": [
  "this.overlay_D0F69D0C_C507_4182_41E7_98A842D5375E",
  "this.overlay_D38F378F_C505_409E_41E0_CFACFC6AB5FB",
  "this.overlay_CA614159_C5B4_92CE_41DF_B4A5174C7664",
  "this.overlay_D52DB2E6_C5B7_F7C5_41BE_F02276355C45",
  "this.overlay_E583F3B2_C64E_1EF3_41C5_F1B7F3BA9F76",
  "this.popup_E43CBD87_C64E_0A91_41E1_6384CAC51A86",
  "this.overlay_E2EFC356_C64E_3FB3_41E8_9121AA305A56",
  "this.popup_E0163729_C64E_079E_41DE_E6324211F338",
  "this.overlay_D75F3D55_C6D7_14FD_41E0_367D7CA02631"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 94.57,
   "class": "AdjacentPanorama",
   "backwardYaw": -78.25,
   "panorama": "this.panorama_C9D1609D_C4FE_C082_41E8_5B5168C3383D",
   "distance": 1
  },
  {
   "yaw": -153.5,
   "class": "AdjacentPanorama",
   "backwardYaw": -0.69,
   "panorama": "this.panorama_C9E4B9D4_C4FD_4082_41E5_B1AD8C2EDA9F",
   "distance": 1
  },
  {
   "yaw": 14.6,
   "class": "AdjacentPanorama",
   "backwardYaw": -166.25,
   "panorama": "this.panorama_C9E2F2E5_C4FD_C082_41E7_C6FF4D799690",
   "distance": 1
  },
  {
   "yaw": 38.41,
   "class": "AdjacentPanorama",
   "backwardYaw": 151.73,
   "panorama": "this.panorama_C827F766_C4FD_C18E_41E1_7617056AAA7D",
   "distance": 1
  }
 ],
 "class": "Panorama",
 "pitch": 0,
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C827BEB9_C4FD_4082_41DA_C1F5183B16C3_t.jpg",
 "hfovMax": 130
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_C8B66AEC_C6B1_1DD2_41E8_3AA639FFE66C_t.jpg",
 "id": "album_C8B66AEC_C6B1_1DD2_41E8_3AA639FFE66C",
 "width": 2000,
 "label": "IMG_0814",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_C8B66AEC_C6B1_1DD2_41E8_3AA639FFE66C.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1333
},
{
 "levels": [
  {
   "url": "media/popup_D5A70CDE_C5CE_0AB2_41DE_29AFBAB7BCE3_0_0.jpg",
   "width": 5190,
   "class": "ImageResourceLevel",
   "height": 2994
  },
  {
   "url": "media/popup_D5A70CDE_C5CE_0AB2_41DE_29AFBAB7BCE3_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2362
  },
  {
   "url": "media/popup_D5A70CDE_C5CE_0AB2_41DE_29AFBAB7BCE3_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1181
  },
  {
   "url": "media/popup_D5A70CDE_C5CE_0AB2_41DE_29AFBAB7BCE3_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 590
  },
  {
   "url": "media/popup_D5A70CDE_C5CE_0AB2_41DE_29AFBAB7BCE3_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 295
  }
 ],
 "id": "ImageResource_D89F3EF3_C5C6_0671_41C0_364A7AD7FD8D",
 "class": "ImageResource"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "hfov": 2.25,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_E43CBD87_C64E_0A91_41E1_6384CAC51A86",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/popup_E43CBD87_C64E_0A91_41E1_6384CAC51A86_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 718
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 2.87,
 "hideEasing": "cubic_out",
 "yaw": -27.43,
 "popupMaxWidth": "95%"
},
{
 "items": [
  {
   "media": "this.map_F5C519CC_C64E_0A96_41DE_468FF3A48B98",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem",
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
  }
 ],
 "id": "playList_1CFD3B27_04EC_5A59_416B_C743CB1887CA",
 "class": "PlayList"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_C8B3FCF4_C6BF_F5B2_41E2_7A5C6A87A738_t.jpg",
 "id": "album_C8B3FCF4_C6BF_F5B2_41E2_7A5C6A87A738",
 "width": 2000,
 "label": "IMG_0860",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_C8B3FCF4_C6BF_F5B2_41E2_7A5C6A87A738.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1333
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_C8F60194_C6B3_0C73_41E4_B028D371340E_t.jpg",
 "id": "album_C8F60194_C6B3_0C73_41E4_B028D371340E",
 "width": 2000,
 "label": "IMG_0871",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_C8F60194_C6B3_0C73_41E4_B028D371340E.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1333
},
{
 "initialPosition": {
  "yaw": 88.6,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 10000,
 "initialSequence": "this.sequence_1D63AC40_04EC_5ED6_417E_D1F3790B84B8",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "id": "camera_1D639C40_04EC_5ED6_4176_66B5735476C8",
 "idleSequence": "this.sequence_1D63AC40_04EC_5ED6_417E_D1F3790B84B8",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -12.33,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 10000,
 "initialSequence": "this.sequence_1F8AAE51_04EC_5AF6_4180_EA63BE4B4DA9",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "id": "camera_1F8A8E51_04EC_5AF6_417E_A1473B5AEB14",
 "idleSequence": "this.sequence_1F8AAE51_04EC_5AF6_4180_EA63BE4B4DA9",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_C9E4B9D4_C4FD_4082_41E5_B1AD8C2EDA9F_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_C9E4B9D4_C4FD_4082_41E5_B1AD8C2EDA9F_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C9E4B9D4_C4FD_4082_41E5_B1AD8C2EDA9F_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C9E4B9D4_C4FD_4082_41E5_B1AD8C2EDA9F_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C9E4B9D4_C4FD_4082_41E5_B1AD8C2EDA9F_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_C9E4B9D4_C4FD_4082_41E5_B1AD8C2EDA9F_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C9E4B9D4_C4FD_4082_41E5_B1AD8C2EDA9F_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C9E4B9D4_C4FD_4082_41E5_B1AD8C2EDA9F_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C9E4B9D4_C4FD_4082_41E5_B1AD8C2EDA9F_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C9E4B9D4_C4FD_4082_41E5_B1AD8C2EDA9F_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_C9E4B9D4_C4FD_4082_41E5_B1AD8C2EDA9F_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C9E4B9D4_C4FD_4082_41E5_B1AD8C2EDA9F_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C9E4B9D4_C4FD_4082_41E5_B1AD8C2EDA9F_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_C9E4B9D4_C4FD_4082_41E5_B1AD8C2EDA9F_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_C9E4B9D4_C4FD_4082_41E5_B1AD8C2EDA9F_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C9E4B9D4_C4FD_4082_41E5_B1AD8C2EDA9F_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C9E4B9D4_C4FD_4082_41E5_B1AD8C2EDA9F_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C9E4B9D4_C4FD_4082_41E5_B1AD8C2EDA9F_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_C9E4B9D4_C4FD_4082_41E5_B1AD8C2EDA9F_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C9E4B9D4_C4FD_4082_41E5_B1AD8C2EDA9F_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C9E4B9D4_C4FD_4082_41E5_B1AD8C2EDA9F_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C9E4B9D4_C4FD_4082_41E5_B1AD8C2EDA9F_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_C9E4B9D4_C4FD_4082_41E5_B1AD8C2EDA9F_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C9E4B9D4_C4FD_4082_41E5_B1AD8C2EDA9F_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C9E4B9D4_C4FD_4082_41E5_B1AD8C2EDA9F_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "TOMA 7",
 "mapLocations": [
  {
   "map": "this.map_F5C519CC_C64E_0A96_41DE_468FF3A48B98",
   "x": 859.01,
   "class": "PanoramaMapLocation",
   "angle": 86.27,
   "y": 546.39
  }
 ],
 "id": "panorama_C9E4B9D4_C4FD_4082_41E5_B1AD8C2EDA9F",
 "overlays": [
  "this.overlay_D6614ADE_C51F_40BE_41D8_4B907D2E792E",
  "this.overlay_D17E988A_C51B_4086_41D7_1079FBBCFD13"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 93.17,
   "class": "AdjacentPanorama",
   "backwardYaw": -91.4,
   "panorama": "this.panorama_C82494D2_C4FE_C086_41D3_9F06A8CD9DE5",
   "distance": 1
  },
  {
   "yaw": -0.69,
   "class": "AdjacentPanorama",
   "backwardYaw": -153.5,
   "panorama": "this.panorama_C827BEB9_C4FD_4082_41DA_C1F5183B16C3",
   "distance": 1
  }
 ],
 "class": "Panorama",
 "pitch": 0,
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C9E4B9D4_C4FD_4082_41E5_B1AD8C2EDA9F_t.jpg",
 "hfovMax": 130
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "hfov": 5.35,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_DBDE0FEC_C646_0697_4199_7812456A1D60",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/popup_DBDE0FEC_C646_0697_4199_7812456A1D60_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 18.19,
 "hideEasing": "cubic_out",
 "yaw": -6.45,
 "popupMaxWidth": "95%"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_CD0DE787_C6B1_145D_41C8_14988D677F52_t.jpg",
 "id": "album_CD0DE787_C6B1_145D_41C8_14988D677F52",
 "width": 2000,
 "label": "IMG_0863",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_CD0DE787_C6B1_145D_41C8_14988D677F52.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1333
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_FF892D07_C65A_0B91_41E4_B664E5F48CBB.ogg",
  "mp3Url": "media/audio_FF892D07_C65A_0B91_41E4_B664E5F48CBB.mp3"
 },
 "id": "audio_FF892D07_C65A_0B91_41E4_B664E5F48CBB",
 "data": {
  "label": "Tree of life"
 }
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_C9E2F2E5_C4FD_C082_41E7_C6FF4D799690_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_C9E2F2E5_C4FD_C082_41E7_C6FF4D799690_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C9E2F2E5_C4FD_C082_41E7_C6FF4D799690_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C9E2F2E5_C4FD_C082_41E7_C6FF4D799690_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C9E2F2E5_C4FD_C082_41E7_C6FF4D799690_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_C9E2F2E5_C4FD_C082_41E7_C6FF4D799690_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C9E2F2E5_C4FD_C082_41E7_C6FF4D799690_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C9E2F2E5_C4FD_C082_41E7_C6FF4D799690_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C9E2F2E5_C4FD_C082_41E7_C6FF4D799690_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C9E2F2E5_C4FD_C082_41E7_C6FF4D799690_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_C9E2F2E5_C4FD_C082_41E7_C6FF4D799690_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C9E2F2E5_C4FD_C082_41E7_C6FF4D799690_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C9E2F2E5_C4FD_C082_41E7_C6FF4D799690_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_C9E2F2E5_C4FD_C082_41E7_C6FF4D799690_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_C9E2F2E5_C4FD_C082_41E7_C6FF4D799690_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C9E2F2E5_C4FD_C082_41E7_C6FF4D799690_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C9E2F2E5_C4FD_C082_41E7_C6FF4D799690_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C9E2F2E5_C4FD_C082_41E7_C6FF4D799690_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_C9E2F2E5_C4FD_C082_41E7_C6FF4D799690_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C9E2F2E5_C4FD_C082_41E7_C6FF4D799690_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C9E2F2E5_C4FD_C082_41E7_C6FF4D799690_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C9E2F2E5_C4FD_C082_41E7_C6FF4D799690_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_C9E2F2E5_C4FD_C082_41E7_C6FF4D799690_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C9E2F2E5_C4FD_C082_41E7_C6FF4D799690_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C9E2F2E5_C4FD_C082_41E7_C6FF4D799690_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "TOMA 9",
 "mapLocations": [
  {
   "map": "this.map_F5C519CC_C64E_0A96_41DE_468FF3A48B98",
   "x": 1109.64,
   "class": "PanoramaMapLocation",
   "angle": 56.51,
   "y": 512.08
  }
 ],
 "id": "panorama_C9E2F2E5_C4FD_C082_41E7_C6FF4D799690",
 "overlays": [
  "this.overlay_D0C0A55F_C506_C1BE_41D5_5B128886C673",
  "this.overlay_D0DB5B45_C505_4182_41D5_37A6FF620389",
  "this.overlay_CB9FAE19_C5AC_EE4E_41E5_42E7CE147CCE",
  "this.overlay_DFEF9030_C64A_198F_41DA_102F842C0199",
  "this.popup_DD39A4D0_C64A_1A8E_41BB_92F50121E7AB",
  "this.overlay_DCA01246_C64A_7992_41AE_49A706404C6C",
  "this.popup_DD91E230_C64A_398F_41E1_1AB14E2A5CC7",
  "this.overlay_EEB77F08_C6CA_079F_41DC_148213E6433C",
  "this.popup_879A87E7_C64A_0692_41DE_4C32FAFD1B23",
  "this.overlay_D75EC44C_C6D7_74D3_41E3_023CD12C9E52"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_C9D1609D_C4FE_C082_41E8_5B5168C3383D",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -166.25,
   "class": "AdjacentPanorama",
   "backwardYaw": 14.6,
   "panorama": "this.panorama_C827BEB9_C4FD_4082_41DA_C1F5183B16C3",
   "distance": 1
  },
  {
   "yaw": 56.51,
   "class": "AdjacentPanorama",
   "backwardYaw": 167.67,
   "panorama": "this.panorama_C827F766_C4FD_C18E_41E1_7617056AAA7D",
   "distance": 1
  }
 ],
 "class": "Panorama",
 "pitch": 0,
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C9E2F2E5_C4FD_C082_41E7_C6FF4D799690_t.jpg",
 "hfovMax": 130
},
{
 "viewerArea": "this.MainViewer",
 "id": "MainViewerVideoPlayer",
 "class": "VideoPlayer",
 "displayPlaybackBar": true
},
{
 "initialPosition": {
  "yaw": -136.86,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 10000,
 "initialSequence": "this.sequence_1DF5ACB4_04EC_5FBF_416B_55D1345D1285",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "id": "camera_1DF59CB4_04EC_5FBF_417F_6EB395D33868",
 "idleSequence": "this.sequence_1DF5ACB4_04EC_5FBF_416B_55D1345D1285",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 28.89,
  "class": "PanoramaCameraPosition",
  "pitch": 13.57
 },
 "timeToIdle": 10000,
 "initialSequence": "this.sequence_EEF5A83E_C753_FCAF_41D7_14FD2F06BD1F",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "id": "panorama_C827BB2C_C4FA_C182_41E0_B235998AA120_camera",
 "idleSequence": "this.sequence_EEF5A83E_C753_FCAF_41D7_14FD2F06BD1F",
 "class": "PanoramaCamera"
},
{
 "levels": [
  {
   "url": "media/popup_D4C24934_C5DE_0BF7_41E2_A5EE340606BD_0_0.jpg",
   "width": 6000,
   "class": "ImageResourceLevel",
   "height": 4000
  },
  {
   "url": "media/popup_D4C24934_C5DE_0BF7_41E2_A5EE340606BD_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2730
  },
  {
   "url": "media/popup_D4C24934_C5DE_0BF7_41E2_A5EE340606BD_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1365
  },
  {
   "url": "media/popup_D4C24934_C5DE_0BF7_41E2_A5EE340606BD_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/popup_D4C24934_C5DE_0BF7_41E2_A5EE340606BD_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "id": "ImageResource_D8993EF9_C5C6_0671_41D1_60D6785CDD27",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": 179.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 10000,
 "initialSequence": "this.sequence_1E50FD0C_04EC_5E6E_418F_97DDCEFDF044",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "id": "camera_1E50ED0B_04EC_5E6A_418A_A74A9935C7E3",
 "idleSequence": "this.sequence_1E50FD0C_04EC_5E6E_418F_97DDCEFDF044",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -28.27,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 10000,
 "initialSequence": "this.sequence_1E923D47_04EC_5ED9_418A_F198DA4AA307",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "id": "camera_1E922D47_04EC_5ED9_4185_5E3703A6B764",
 "idleSequence": "this.sequence_1E923D47_04EC_5ED9_418A_F198DA4AA307",
 "class": "PanoramaCamera"
},
{
 "levels": [
  {
   "url": "media/popup_879A87E7_C64A_0692_41DE_4C32FAFD1B23_0_0.jpg",
   "width": 2000,
   "class": "ImageResourceLevel",
   "height": 1157
  },
  {
   "url": "media/popup_879A87E7_C64A_0692_41DE_4C32FAFD1B23_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 592
  },
  {
   "url": "media/popup_879A87E7_C64A_0692_41DE_4C32FAFD1B23_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 296
  }
 ],
 "id": "ImageResource_C99209C1_C6D3_3FD5_41D4_B08A0A6E379C",
 "class": "ImageResource"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_CD7A26B3_C6B3_35B6_41E8_92428D0CBE6C_t.jpg",
 "id": "album_CD7A26B3_C6B3_35B6_41E8_92428D0CBE6C",
 "width": 2000,
 "label": "IMG_0867",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_CD7A26B3_C6B3_35B6_41E8_92428D0CBE6C.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1403
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_C80503CE_C6B7_33EF_41DD_6E5428BC9B25_t.jpg",
 "id": "album_C80503CE_C6B7_33EF_41DD_6E5428BC9B25",
 "width": 2000,
 "label": "IMG_0829",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_C80503CE_C6B7_33EF_41DD_6E5428BC9B25.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 2806
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "hfov": 2.68,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_CA793823_C5CA_0992_41DB_40CE5A216816",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/popup_CA793823_C5CA_0992_41DB_40CE5A216816_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 588
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -6.79,
 "hideEasing": "cubic_out",
 "yaw": -135.44,
 "popupMaxWidth": "95%"
},
{
 "levels": [
  {
   "url": "media/popup_ED019763_C6DA_0791_41E2_0CB39A715996_0_0.jpg",
   "width": 6000,
   "class": "ImageResourceLevel",
   "height": 4000
  },
  {
   "url": "media/popup_ED019763_C6DA_0791_41E2_0CB39A715996_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2730
  },
  {
   "url": "media/popup_ED019763_C6DA_0791_41E2_0CB39A715996_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1365
  },
  {
   "url": "media/popup_ED019763_C6DA_0791_41E2_0CB39A715996_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/popup_ED019763_C6DA_0791_41E2_0CB39A715996_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "id": "ImageResource_FA5DCFBD_C646_06F6_41DE_B3F1434BD417",
 "class": "ImageResource"
},
{
 "playList": "this.album_D4F164FE_C5DF_FA73_41BC_3482EC55C164_AlbumPlayList",
 "thumbnailUrl": "media/album_D4F164FE_C5DF_FA73_41BC_3482EC55C164_t.png",
 "id": "album_D4F164FE_C5DF_FA73_41BC_3482EC55C164",
 "label": "\u00c1lbum de Fotos",
 "class": "PhotoAlbum"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_CB9714E0_C6B1_15D3_41DA_368DB91D4861_t.jpg",
 "id": "album_CB9714E0_C6B1_15D3_41DA_368DB91D4861",
 "width": 2000,
 "label": "IMG_0836",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_CB9714E0_C6B1_15D3_41DA_368DB91D4861.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1333
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_CD041178_C6B3_0CB2_41A9_7A5D46262A5C_t.jpg",
 "id": "album_CD041178_C6B3_0CB2_41A9_7A5D46262A5C",
 "width": 2000,
 "label": "IMG_0847",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_CD041178_C6B3_0CB2_41A9_7A5D46262A5C.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1333
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_C9DD751B_C4FF_C186_4196_4DEB30E1C015_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_C9DD751B_C4FF_C186_4196_4DEB30E1C015_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C9DD751B_C4FF_C186_4196_4DEB30E1C015_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C9DD751B_C4FF_C186_4196_4DEB30E1C015_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C9DD751B_C4FF_C186_4196_4DEB30E1C015_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_C9DD751B_C4FF_C186_4196_4DEB30E1C015_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C9DD751B_C4FF_C186_4196_4DEB30E1C015_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C9DD751B_C4FF_C186_4196_4DEB30E1C015_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C9DD751B_C4FF_C186_4196_4DEB30E1C015_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C9DD751B_C4FF_C186_4196_4DEB30E1C015_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_C9DD751B_C4FF_C186_4196_4DEB30E1C015_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C9DD751B_C4FF_C186_4196_4DEB30E1C015_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C9DD751B_C4FF_C186_4196_4DEB30E1C015_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_C9DD751B_C4FF_C186_4196_4DEB30E1C015_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_C9DD751B_C4FF_C186_4196_4DEB30E1C015_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C9DD751B_C4FF_C186_4196_4DEB30E1C015_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C9DD751B_C4FF_C186_4196_4DEB30E1C015_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C9DD751B_C4FF_C186_4196_4DEB30E1C015_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_C9DD751B_C4FF_C186_4196_4DEB30E1C015_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C9DD751B_C4FF_C186_4196_4DEB30E1C015_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C9DD751B_C4FF_C186_4196_4DEB30E1C015_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C9DD751B_C4FF_C186_4196_4DEB30E1C015_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_C9DD751B_C4FF_C186_4196_4DEB30E1C015_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C9DD751B_C4FF_C186_4196_4DEB30E1C015_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C9DD751B_C4FF_C186_4196_4DEB30E1C015_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "TOMA 3",
 "mapLocations": [
  {
   "map": "this.map_F5C519CC_C64E_0A96_41DE_468FF3A48B98",
   "x": 721.43,
   "class": "PanoramaMapLocation",
   "angle": 17.95,
   "y": 876.17
  }
 ],
 "id": "panorama_C9DD751B_C4FF_C186_4196_4DEB30E1C015",
 "overlays": [
  "this.overlay_D732891E_C50D_C1BE_41BE_ADE1932A02ED",
  "this.overlay_D1F5E99D_C50D_4082_41E3_626A929DF186",
  "this.overlay_D6359067_C507_3F8E_41AB_798ED41DEB27",
  "this.overlay_DCC8C2EE_C64E_3E93_41E6_9CB31092AEE6",
  "this.overlay_E7A9CB5E_C646_0FB3_4196_C87BAAD2C8F6",
  "this.popup_DBDE0FEC_C646_0697_4199_7812456A1D60",
  "this.overlay_D8DBB7C1_C65A_0691_41D8_1E2FF38ECFBF",
  "this.popup_E60AF953_C65A_0BB2_41E6_55D75C8E6A0C",
  "this.overlay_D8B7B4AB_C65A_1A91_41D6_F487F117FD20",
  "this.popup_D977878C_C65A_0697_41D9_D36A4FDB9E22",
  "this.overlay_E4F7046D_C646_1996_41CD_A2D7EB33ADDE",
  "this.popup_E20E2003_C646_1991_41E4_D04255D1A62D",
  "this.overlay_EFCAC10D_C6C6_1B91_41C6_DEBB9B030129",
  "this.popup_EF863374_C6C6_1E77_41DA_E95E79086837",
  "this.overlay_D7B0AE91_C6D1_1475_41C5_AF4986580588",
  "this.overlay_EEB1623D_C773_0CAD_41D9_34F274314357",
  "this.overlay_DB61A108_CA99_BC2A_41E1_1451D66D9DDC"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -122.28,
   "class": "AdjacentPanorama",
   "backwardYaw": 33.17,
   "panorama": "this.panorama_C92BC70F_C4FF_419E_41CD_D07B20DE1D6F",
   "distance": 1
  },
  {
   "yaw": -101.78,
   "class": "AdjacentPanorama",
   "backwardYaw": 31.94,
   "panorama": "this.panorama_C8267EFE_C4FF_C07E_41CF_496ACBAA40DD",
   "distance": 1
  },
  {
   "yaw": 64.35,
   "class": "AdjacentPanorama",
   "backwardYaw": -108.38,
   "panorama": "this.panorama_C824FB0B_C4FF_4186_41D5_BDBD65AF1796",
   "distance": 1
  }
 ],
 "class": "Panorama",
 "pitch": 0,
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C9DD751B_C4FF_C186_4196_4DEB30E1C015_t.jpg",
 "hfovMax": 130
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_C8A4E4C6_C6B1_15DF_41E2_26847DB6704E_t.jpg",
 "id": "album_C8A4E4C6_C6B1_15DF_41E2_26847DB6704E",
 "width": 2000,
 "label": "IMG_0872",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_C8A4E4C6_C6B1_15DF_41E2_26847DB6704E.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1333
},
{
 "initialPosition": {
  "yaw": -115.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 10000,
 "initialSequence": "this.sequence_1E161CD0_04EC_5FF7_4185_5185F58F1948",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "id": "camera_1E160CD0_04EC_5FF7_4178_51FBE94C34A8",
 "idleSequence": "this.sequence_1E161CD0_04EC_5FF7_4185_5185F58F1948",
 "class": "PanoramaCamera"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_C893B9DB_C6B7_1FF6_41E1_CB693C59E444_t.jpg",
 "id": "album_C893B9DB_C6B7_1FF6_41E1_CB693C59E444",
 "width": 2000,
 "label": "IMG_0824",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_C893B9DB_C6B7_1FF6_41E1_CB693C59E444.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 2813
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_C827F766_C4FD_C18E_41E1_7617056AAA7D_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_C827F766_C4FD_C18E_41E1_7617056AAA7D_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C827F766_C4FD_C18E_41E1_7617056AAA7D_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C827F766_C4FD_C18E_41E1_7617056AAA7D_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C827F766_C4FD_C18E_41E1_7617056AAA7D_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_C827F766_C4FD_C18E_41E1_7617056AAA7D_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C827F766_C4FD_C18E_41E1_7617056AAA7D_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C827F766_C4FD_C18E_41E1_7617056AAA7D_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C827F766_C4FD_C18E_41E1_7617056AAA7D_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C827F766_C4FD_C18E_41E1_7617056AAA7D_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_C827F766_C4FD_C18E_41E1_7617056AAA7D_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C827F766_C4FD_C18E_41E1_7617056AAA7D_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C827F766_C4FD_C18E_41E1_7617056AAA7D_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_C827F766_C4FD_C18E_41E1_7617056AAA7D_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_C827F766_C4FD_C18E_41E1_7617056AAA7D_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C827F766_C4FD_C18E_41E1_7617056AAA7D_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C827F766_C4FD_C18E_41E1_7617056AAA7D_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C827F766_C4FD_C18E_41E1_7617056AAA7D_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_C827F766_C4FD_C18E_41E1_7617056AAA7D_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C827F766_C4FD_C18E_41E1_7617056AAA7D_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C827F766_C4FD_C18E_41E1_7617056AAA7D_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C827F766_C4FD_C18E_41E1_7617056AAA7D_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_C827F766_C4FD_C18E_41E1_7617056AAA7D_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C827F766_C4FD_C18E_41E1_7617056AAA7D_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C827F766_C4FD_C18E_41E1_7617056AAA7D_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "TOMA 10",
 "mapLocations": [
  {
   "map": "this.map_F5C519CC_C64E_0A96_41DE_468FF3A48B98",
   "x": 1240.42,
   "class": "PanoramaMapLocation",
   "angle": 122.3,
   "y": 530.97
  }
 ],
 "id": "panorama_C827F766_C4FD_C18E_41E1_7617056AAA7D",
 "overlays": [
  "this.overlay_D41AA161_C5B5_92FE_41E0_A6F3F1BA64A2",
  "this.overlay_D7C47943_C5B4_92C3_41E3_57AAB82C0AF9",
  "this.overlay_CA4667C5_C5CE_0691_41E3_0F398F9AFB05",
  "this.popup_D5A70CDE_C5CE_0AB2_41DE_29AFBAB7BCE3",
  "this.overlay_D40769D6_C5CE_0AB2_41CA_316818CEEBE9",
  "this.popup_CA3E6698_C5CE_06BF_41E1_6DC8C0E4028E",
  "this.overlay_D487524D_C5CE_1996_41E0_F797BFE28067",
  "this.popup_D58739C8_C5CE_0A9F_41D5_3BF976B382AD",
  "this.overlay_D4F5F55F_C5CA_1BB2_41E0_0D1AB869F59B",
  "this.popup_D5B2A5D0_C5CA_FA8F_41CA_9A62A7682858",
  "this.overlay_D4644496_C5DE_7AB2_41D2_EACBFEDF909C",
  "this.popup_D4C24934_C5DE_0BF7_41E2_A5EE340606BD",
  "this.overlay_E3268D82_C64E_0A92_41E4_7275EAF4B510",
  "this.popup_E2D09D16_C64A_0BB3_41E6_65B494656442",
  "this.overlay_E2F57779_C64A_067E_41D0_43158C735EE1",
  "this.popup_E01BB82B_C64A_0991_41C5_23A1C8836C2B",
  "this.overlay_87D63F7B_C646_0672_41D4_2FC4B3C2965B",
  "this.overlay_D745A945_C6D7_1CDD_41E7_BBE7C04B06A1"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 151.73,
   "class": "AdjacentPanorama",
   "backwardYaw": 38.41,
   "panorama": "this.panorama_C827BEB9_C4FD_4082_41DA_C1F5183B16C3",
   "distance": 1
  },
  {
   "yaw": 167.67,
   "class": "AdjacentPanorama",
   "backwardYaw": 56.51,
   "panorama": "this.panorama_C9E2F2E5_C4FD_C082_41E7_C6FF4D799690",
   "distance": 1
  },
  {
   "panorama": "this.panorama_C9E31C62_C4FD_4786_41CC_396030872F5C",
   "class": "AdjacentPanorama"
  }
 ],
 "class": "Panorama",
 "pitch": 0,
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C827F766_C4FD_C18E_41E1_7617056AAA7D_t.jpg",
 "hfovMax": 130
},
{
 "levels": [
  {
   "url": "media/popup_E20E2003_C646_1991_41E4_D04255D1A62D_0_0.jpg",
   "width": 5816,
   "class": "ImageResourceLevel",
   "height": 3954
  },
  {
   "url": "media/popup_E20E2003_C646_1991_41E4_D04255D1A62D_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2784
  },
  {
   "url": "media/popup_E20E2003_C646_1991_41E4_D04255D1A62D_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1392
  },
  {
   "url": "media/popup_E20E2003_C646_1991_41E4_D04255D1A62D_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 696
  },
  {
   "url": "media/popup_E20E2003_C646_1991_41E4_D04255D1A62D_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 348
  }
 ],
 "id": "ImageResource_E20DA35D_C64A_1FB6_41B3_B689C80843B5",
 "class": "ImageResource"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_C8B5F013_C6B3_0C76_41D4_BC607BA25336_t.jpg",
 "id": "album_C8B5F013_C6B3_0C76_41D4_BC607BA25336",
 "width": 2000,
 "label": "IMG_0845",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_C8B5F013_C6B3_0C76_41D4_BC607BA25336.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1163
},
{
 "initialPosition": {
  "yaw": -85.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 10000,
 "initialSequence": "this.sequence_1D05DB87_04EC_5A5A_418B_A7DB0BA6CE04",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "id": "camera_1D05CB87_04EC_5A5A_4161_75178D2BEB8C",
 "idleSequence": "this.sequence_1D05DB87_04EC_5A5A_418B_A7DB0BA6CE04",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "media": "this.panorama_C92BC70F_C4FF_419E_41CD_D07B20DE1D6F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C92BC70F_C4FF_419E_41CD_D07B20DE1D6F_camera"
  },
  {
   "media": "this.panorama_C8267EFE_C4FF_C07E_41CF_496ACBAA40DD",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C8267EFE_C4FF_C07E_41CF_496ACBAA40DD_camera"
  },
  {
   "media": "this.panorama_C9DD751B_C4FF_C186_4196_4DEB30E1C015",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C9DD751B_C4FF_C186_4196_4DEB30E1C015_camera"
  },
  {
   "media": "this.panorama_C824FB0B_C4FF_4186_41D5_BDBD65AF1796",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C824FB0B_C4FF_4186_41D5_BDBD65AF1796_camera"
  },
  {
   "media": "this.panorama_C82494D2_C4FE_C086_41D3_9F06A8CD9DE5",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C82494D2_C4FE_C086_41D3_9F06A8CD9DE5_camera"
  },
  {
   "media": "this.panorama_C9D1609D_C4FE_C082_41E8_5B5168C3383D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C9D1609D_C4FE_C082_41E8_5B5168C3383D_camera"
  },
  {
   "media": "this.panorama_C9E4B9D4_C4FD_4082_41E5_B1AD8C2EDA9F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C9E4B9D4_C4FD_4082_41E5_B1AD8C2EDA9F_camera"
  },
  {
   "media": "this.panorama_C827BEB9_C4FD_4082_41DA_C1F5183B16C3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C827BEB9_C4FD_4082_41DA_C1F5183B16C3_camera"
  },
  {
   "media": "this.panorama_C9E2F2E5_C4FD_C082_41E7_C6FF4D799690",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C9E2F2E5_C4FD_C082_41E7_C6FF4D799690_camera"
  },
  {
   "media": "this.panorama_C827F766_C4FD_C18E_41E1_7617056AAA7D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C827F766_C4FD_C18E_41E1_7617056AAA7D_camera"
  },
  {
   "media": "this.panorama_C9E31C62_C4FD_4786_41CC_396030872F5C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C9E31C62_C4FD_4786_41CC_396030872F5C_camera"
  },
  {
   "media": "this.panorama_C827BB2C_C4FA_C182_41E0_B235998AA120",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C827BB2C_C4FA_C182_41E0_B235998AA120_camera"
  },
  {
   "media": "this.album_D4F164FE_C5DF_FA73_41BC_3482EC55C164",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 0)"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_C824FB0B_C4FF_4186_41D5_BDBD65AF1796_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_C824FB0B_C4FF_4186_41D5_BDBD65AF1796_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C824FB0B_C4FF_4186_41D5_BDBD65AF1796_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C824FB0B_C4FF_4186_41D5_BDBD65AF1796_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C824FB0B_C4FF_4186_41D5_BDBD65AF1796_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_C824FB0B_C4FF_4186_41D5_BDBD65AF1796_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C824FB0B_C4FF_4186_41D5_BDBD65AF1796_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C824FB0B_C4FF_4186_41D5_BDBD65AF1796_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C824FB0B_C4FF_4186_41D5_BDBD65AF1796_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C824FB0B_C4FF_4186_41D5_BDBD65AF1796_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_C824FB0B_C4FF_4186_41D5_BDBD65AF1796_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C824FB0B_C4FF_4186_41D5_BDBD65AF1796_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C824FB0B_C4FF_4186_41D5_BDBD65AF1796_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_C824FB0B_C4FF_4186_41D5_BDBD65AF1796_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_C824FB0B_C4FF_4186_41D5_BDBD65AF1796_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C824FB0B_C4FF_4186_41D5_BDBD65AF1796_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C824FB0B_C4FF_4186_41D5_BDBD65AF1796_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C824FB0B_C4FF_4186_41D5_BDBD65AF1796_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_C824FB0B_C4FF_4186_41D5_BDBD65AF1796_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C824FB0B_C4FF_4186_41D5_BDBD65AF1796_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C824FB0B_C4FF_4186_41D5_BDBD65AF1796_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C824FB0B_C4FF_4186_41D5_BDBD65AF1796_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_C824FB0B_C4FF_4186_41D5_BDBD65AF1796_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C824FB0B_C4FF_4186_41D5_BDBD65AF1796_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C824FB0B_C4FF_4186_41D5_BDBD65AF1796_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "TOMA 4",
 "mapLocations": [
  {
   "map": "this.map_F5C519CC_C64E_0A96_41DE_468FF3A48B98",
   "x": 840.19,
   "class": "PanoramaMapLocation",
   "angle": 14.27,
   "y": 867.54
  }
 ],
 "id": "panorama_C824FB0B_C4FF_4186_41D5_BDBD65AF1796",
 "overlays": [
  "this.overlay_D6FDE94E_C507_C19E_41D9_F5D555C05D0D",
  "this.overlay_D1DE46CF_C505_409E_41D4_88968EDFCA0D",
  "this.overlay_E7D592D9_C649_FEB1_41E5_E536B53F8939",
  "this.popup_E51705F4_C64A_3A77_41CD_365DD4606D1F",
  "this.overlay_E7A94CF3_C64A_0A71_41C0_A8A165D0A124",
  "this.popup_E2A1E6D8_C64A_06BF_41D3_EAACEF935DC2",
  "this.overlay_E7B471A3_C64A_1A91_41E5_362DEEFA854A",
  "this.popup_E2899575_C64A_1A71_41DE_248D27D396EB",
  "this.overlay_ED8AC876_C6C6_0A72_41D2_2EAD37202C57",
  "this.popup_E813A50D_C6C6_1B91_41E4_4C260036A65E",
  "this.overlay_D7B36AE4_C6D1_3DD2_41E5_DEDA220CBE40",
  "this.overlay_E730E039_C751_0CB5_41C6_9B6B5D1F1BD1",
  "this.overlay_D8DACAD7_CA99_AC25_41E6_9744BA8DC2AC"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -9.55,
   "class": "AdjacentPanorama",
   "backwardYaw": 91.78,
   "panorama": "this.panorama_C82494D2_C4FE_C086_41D3_9F06A8CD9DE5",
   "distance": 1
  },
  {
   "yaw": -114.07,
   "class": "AdjacentPanorama",
   "backwardYaw": 43.14,
   "panorama": "this.panorama_C92BC70F_C4FF_419E_41CD_D07B20DE1D6F",
   "distance": 1
  },
  {
   "yaw": -108.38,
   "class": "AdjacentPanorama",
   "backwardYaw": 64.35,
   "panorama": "this.panorama_C9DD751B_C4FF_C186_4196_4DEB30E1C015",
   "distance": 1
  }
 ],
 "class": "Panorama",
 "pitch": 0,
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C824FB0B_C4FF_4186_41D5_BDBD65AF1796_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 13.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 10000,
 "initialSequence": "this.sequence_1E720D29_04EC_5EA9_415C_7D72F0C5CC07",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "id": "camera_1E727D29_04EC_5EA9_4180_45343B87562E",
 "idleSequence": "this.sequence_1E720D29_04EC_5EA9_415C_7D72F0C5CC07",
 "class": "PanoramaCamera"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_CBDD333C_C6B3_0CB3_41E7_310D1BFB3259_t.jpg",
 "id": "album_CBDD333C_C6B3_0CB3_41E7_310D1BFB3259",
 "width": 2000,
 "label": "IMG_0332",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_CBDD333C_C6B3_0CB3_41E7_310D1BFB3259.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1333
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_CDC1DFF3_C6B3_33B5_41D9_CE9A0D85CF20_t.jpg",
 "id": "album_CDC1DFF3_C6B3_33B5_41D9_CE9A0D85CF20",
 "width": 2000,
 "label": "IMG_0344",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_CDC1DFF3_C6B3_33B5_41D9_CE9A0D85CF20.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1333
},
{
 "levels": [
  {
   "url": "media/popup_EFB39F66_C6DE_0792_41C1_AD0C4A699B44_0_0.jpg",
   "width": 3203,
   "class": "ImageResourceLevel",
   "height": 4431
  },
  {
   "url": "media/popup_EFB39F66_C6DE_0792_41C1_AD0C4A699B44_0_1.jpg",
   "width": 2960,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_EFB39F66_C6DE_0792_41C1_AD0C4A699B44_0_2.jpg",
   "width": 1480,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_EFB39F66_C6DE_0792_41C1_AD0C4A699B44_0_3.jpg",
   "width": 740,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_EFB39F66_C6DE_0792_41C1_AD0C4A699B44_0_4.jpg",
   "width": 370,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_FA5DFFC0_C646_068E_41E7_F14D44F0DC54",
 "class": "ImageResource"
},
{
 "levels": [
  {
   "url": "media/popup_EF863374_C6C6_1E77_41DA_E95E79086837_0_0.jpg",
   "width": 6000,
   "class": "ImageResourceLevel",
   "height": 4000
  },
  {
   "url": "media/popup_EF863374_C6C6_1E77_41DA_E95E79086837_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2730
  },
  {
   "url": "media/popup_EF863374_C6C6_1E77_41DA_E95E79086837_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1365
  },
  {
   "url": "media/popup_EF863374_C6C6_1E77_41DA_E95E79086837_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/popup_EF863374_C6C6_1E77_41DA_E95E79086837_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "id": "ImageResource_FA5FDFB9_C646_06FE_41E6_0D7CFD3BBA74",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": -20.6,
  "class": "PanoramaCameraPosition",
  "pitch": 12.31
 },
 "timeToIdle": 10000,
 "initialSequence": "this.sequence_ED2000B2_C751_0DB6_41DC_BB237EBF7771",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "id": "panorama_C8267EFE_C4FF_C07E_41CF_496ACBAA40DD_camera",
 "idleSequence": "this.sequence_ED2000B2_C751_0DB6_41DC_BB237EBF7771",
 "class": "PanoramaCamera"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_CA21A633_C6B3_14B5_41E6_90A1814570F4_t.jpg",
 "id": "album_CA21A633_C6B3_14B5_41E6_90A1814570F4",
 "width": 2000,
 "label": "IMG_0809",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_CA21A633_C6B3_14B5_41E6_90A1814570F4.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1333
},
{
 "levels": [
  {
   "url": "media/popup_DD39A4D0_C64A_1A8E_41BB_92F50121E7AB_0_0.jpg",
   "width": 4830,
   "class": "ImageResourceLevel",
   "height": 2736
  },
  {
   "url": "media/popup_DD39A4D0_C64A_1A8E_41BB_92F50121E7AB_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2320
  },
  {
   "url": "media/popup_DD39A4D0_C64A_1A8E_41BB_92F50121E7AB_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1160
  },
  {
   "url": "media/popup_DD39A4D0_C64A_1A8E_41BB_92F50121E7AB_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 580
  },
  {
   "url": "media/popup_DD39A4D0_C64A_1A8E_41BB_92F50121E7AB_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 290
  }
 ],
 "id": "ImageResource_E58060AC_C64A_3A96_41E4_333FE94842EA",
 "class": "ImageResource"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_CB199EAA_C6B7_7457_41E3_59CE2E700BE5_t.jpg",
 "id": "album_CB199EAA_C6B7_7457_41E3_59CE2E700BE5",
 "width": 2000,
 "label": "IMG_0833",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_CB199EAA_C6B7_7457_41E3_59CE2E700BE5.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1333
},
{
 "initialPosition": {
  "yaw": -86.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 10000,
 "initialSequence": "this.sequence_1F28FDF8_04EC_59B6_418F_DAD57E8437BA",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "id": "camera_1F28EDF8_04EC_59B6_416A_190099EE283E",
 "idleSequence": "this.sequence_1F28FDF8_04EC_59B6_418F_DAD57E8437BA",
 "class": "PanoramaCamera"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_C8354D5D_C6B7_14ED_41E0_16CD08E2771F_t.jpg",
 "id": "album_C8354D5D_C6B7_14ED_41E0_16CD08E2771F",
 "width": 2000,
 "label": "IMG_0835",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_C8354D5D_C6B7_14ED_41E0_16CD08E2771F.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1333
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_CDCB62B5_C6B7_0DB2_41C1_9A4CDD2CD8B2_t.jpg",
 "id": "album_CDCB62B5_C6B7_0DB2_41C1_9A4CDD2CD8B2",
 "width": 2000,
 "label": "IMG_0822",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_CDCB62B5_C6B7_0DB2_41C1_9A4CDD2CD8B2.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1333
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "hfov": 2.35,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_E2899575_C64A_1A71_41DE_248D27D396EB",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/popup_E2899575_C64A_1A71_41DE_248D27D396EB_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -2.01,
 "hideEasing": "cubic_out",
 "yaw": 81.28,
 "popupMaxWidth": "95%"
},
{
 "initialPosition": {
  "yaw": 37.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 10000,
 "initialSequence": "this.sequence_1F0EADDC_04EC_59EE_4183_8F621AD5B2FC",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "id": "camera_1F0E9DDC_04EC_59EE_418A_EDC72B86028A",
 "idleSequence": "this.sequence_1F0EADDC_04EC_59EE_4183_8F621AD5B2FC",
 "class": "PanoramaCamera"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_CA1508CF_C6B7_1DED_419B_D5BFED27A92A_t.jpg",
 "id": "album_CA1508CF_C6B7_1DED_419B_D5BFED27A92A",
 "width": 2000,
 "label": "IMG_0830",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_CA1508CF_C6B7_1DED_419B_D5BFED27A92A.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 2819
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "hfov": 3.87,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_E2D09D16_C64A_0BB3_41E6_65B494656442",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/popup_E2D09D16_C64A_0BB3_41E6_65B494656442_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 0.05,
 "hideEasing": "cubic_out",
 "yaw": -104.98,
 "popupMaxWidth": "95%"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_C827BB2C_C4FA_C182_41E0_B235998AA120_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_C827BB2C_C4FA_C182_41E0_B235998AA120_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C827BB2C_C4FA_C182_41E0_B235998AA120_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C827BB2C_C4FA_C182_41E0_B235998AA120_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C827BB2C_C4FA_C182_41E0_B235998AA120_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_C827BB2C_C4FA_C182_41E0_B235998AA120_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C827BB2C_C4FA_C182_41E0_B235998AA120_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C827BB2C_C4FA_C182_41E0_B235998AA120_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C827BB2C_C4FA_C182_41E0_B235998AA120_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C827BB2C_C4FA_C182_41E0_B235998AA120_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_C827BB2C_C4FA_C182_41E0_B235998AA120_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C827BB2C_C4FA_C182_41E0_B235998AA120_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C827BB2C_C4FA_C182_41E0_B235998AA120_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_C827BB2C_C4FA_C182_41E0_B235998AA120_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_C827BB2C_C4FA_C182_41E0_B235998AA120_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C827BB2C_C4FA_C182_41E0_B235998AA120_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C827BB2C_C4FA_C182_41E0_B235998AA120_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C827BB2C_C4FA_C182_41E0_B235998AA120_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_C827BB2C_C4FA_C182_41E0_B235998AA120_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C827BB2C_C4FA_C182_41E0_B235998AA120_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C827BB2C_C4FA_C182_41E0_B235998AA120_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C827BB2C_C4FA_C182_41E0_B235998AA120_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_C827BB2C_C4FA_C182_41E0_B235998AA120_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C827BB2C_C4FA_C182_41E0_B235998AA120_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C827BB2C_C4FA_C182_41E0_B235998AA120_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "TOMA 12",
 "mapLocations": [
  {
   "map": "this.map_F5C519CC_C64E_0A96_41DE_468FF3A48B98",
   "x": 1532.37,
   "class": "PanoramaMapLocation",
   "angle": 143,
   "y": 525.05
  }
 ],
 "id": "panorama_C827BB2C_C4FA_C182_41E0_B235998AA120",
 "overlays": [
  "this.overlay_D4950F15_C5BF_EE47_41C5_FBF85B832E1D",
  "this.popup_D7B5EFEA_C5BF_ADCD_41E2_36D10C16E11A",
  "this.overlay_CBF56384_C5C6_7E97_41D8_AB604BA98BA7",
  "this.overlay_D55CF91B_C5DA_0BB1_41C2_9F4A0226D72A",
  "this.popup_D4985570_C5DA_3B8F_41CB_B7AA65C8E220",
  "this.overlay_D5067E24_C5DA_0997_41E0_B47102B3973F",
  "this.popup_D448F5F9_C5DA_7A7E_41DA_1AEB7AD52C70",
  "this.overlay_D743A8EA_C6D7_FDD6_41D3_BDB6A962C598"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 126.47,
   "class": "AdjacentPanorama",
   "backwardYaw": -1.96,
   "panorama": "this.panorama_C9E31C62_C4FD_4786_41CC_396030872F5C",
   "distance": 1
  }
 ],
 "class": "Panorama",
 "pitch": 0,
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C827BB2C_C4FA_C182_41E0_B235998AA120_t.jpg",
 "hfovMax": 130
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_C8A6B52E_C6B7_34AC_41DE_A6C4A6ECBAE0_t.jpg",
 "id": "album_C8A6B52E_C6B7_34AC_41DE_A6C4A6ECBAE0",
 "width": 2000,
 "label": "IMG_0834",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_C8A6B52E_C6B7_34AC_41DE_A6C4A6ECBAE0.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1133
},
{
 "levels": [
  {
   "url": "media/popup_D95E51A8_C65A_1A9F_41B2_3031B6C0768E_0_0.jpg",
   "width": 6000,
   "class": "ImageResourceLevel",
   "height": 4000
  },
  {
   "url": "media/popup_D95E51A8_C65A_1A9F_41B2_3031B6C0768E_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2730
  },
  {
   "url": "media/popup_D95E51A8_C65A_1A9F_41B2_3031B6C0768E_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1365
  },
  {
   "url": "media/popup_D95E51A8_C65A_1A9F_41B2_3031B6C0768E_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/popup_D95E51A8_C65A_1A9F_41B2_3031B6C0768E_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "id": "ImageResource_EE4A9B49_C646_0F9E_41DA_1292D6F0B3FB",
 "class": "ImageResource"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_CA502F24_C6B3_7453_41B7_0FDBB42242A0_t.jpg",
 "id": "album_CA502F24_C6B3_7453_41B7_0FDBB42242A0",
 "width": 2000,
 "label": "IMG_0846",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_CA502F24_C6B3_7453_41B7_0FDBB42242A0.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1158
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_CD15F01F_C6B1_0C6E_4199_5C267728934C_t.jpg",
 "id": "album_CD15F01F_C6B1_0C6E_4199_5C267728934C",
 "width": 2000,
 "label": "IMG_0844",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_CD15F01F_C6B1_0C6E_4199_5C267728934C.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1149
},
{
 "levels": [
  {
   "url": "media/popup_E1077AF2_C751_3DB6_41AA_D3633C3A52EA_0_0.jpg",
   "width": 2000,
   "class": "ImageResourceLevel",
   "height": 1333
  },
  {
   "url": "media/popup_E1077AF2_C751_3DB6_41AA_D3633C3A52EA_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/popup_E1077AF2_C751_3DB6_41AA_D3633C3A52EA_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "id": "ImageResource_ECF1BFBE_C757_73AF_41C3_8268A21900A0",
 "class": "ImageResource"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "hfov": 2.25,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_ED019763_C6DA_0791_41E2_0CB39A715996",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/popup_ED019763_C6DA_0791_41E2_0CB39A715996_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -1.04,
 "hideEasing": "cubic_out",
 "yaw": -29.77,
 "popupMaxWidth": "95%"
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_62AD73E7_74A7_9CF6_41C5_55E9CFDD3B7E",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_CAFB8A0E_C6B1_1C6F_41A1_5950D6035C55_t.jpg",
 "id": "album_CAFB8A0E_C6B1_1C6F_41A1_5950D6035C55",
 "width": 2000,
 "label": "IMG_0864",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_CAFB8A0E_C6B1_1C6F_41A1_5950D6035C55.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1333
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "hfov": 5.12,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_E60AF953_C65A_0BB2_41E6_55D75C8E6A0C",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/popup_E60AF953_C65A_0BB2_41E6_55D75C8E6A0C_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 24.57,
 "hideEasing": "cubic_out",
 "yaw": 7.72,
 "popupMaxWidth": "95%"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_CB073E2C_C6B3_7453_41C7_B87366FFC112_t.jpg",
 "id": "album_CB073E2C_C6B3_7453_41C7_B87366FFC112",
 "width": 2000,
 "label": "IMG_0358",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_CB073E2C_C6B3_7453_41C7_B87366FFC112.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1333
},
{
 "levels": [
  {
   "url": "media/popup_CA793823_C5CA_0992_41DB_40CE5A216816_0_0.jpg",
   "width": 5106,
   "class": "ImageResourceLevel",
   "height": 2934
  },
  {
   "url": "media/popup_CA793823_C5CA_0992_41DB_40CE5A216816_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2353
  },
  {
   "url": "media/popup_CA793823_C5CA_0992_41DB_40CE5A216816_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1176
  },
  {
   "url": "media/popup_CA793823_C5CA_0992_41DB_40CE5A216816_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 588
  },
  {
   "url": "media/popup_CA793823_C5CA_0992_41DB_40CE5A216816_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 294
  }
 ],
 "id": "ImageResource_D8843EFB_C5C6_0671_41C7_195028308CE9",
 "class": "ImageResource"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "hfov": 2.35,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_EE194675_C6DE_0676_41E1_08A1A35A1F20",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/popup_EE194675_C6DE_0676_41E1_08A1A35A1F20_0_3.jpg",
    "width": 737,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 4.98,
 "hideEasing": "cubic_out",
 "yaw": 25.86,
 "popupMaxWidth": "95%"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_CA343BD5_C6B1_33F2_41E8_4B7744659681_t.jpg",
 "id": "album_CA343BD5_C6B1_33F2_41E8_4B7744659681",
 "width": 2000,
 "label": "IMG_0837",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_CA343BD5_C6B1_33F2_41E8_4B7744659681.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1157
},
{
 "initialPosition": {
  "yaw": -123.49,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 10000,
 "initialSequence": "this.sequence_1D3EABC3_04EC_59D9_4165_A7EBD1C7B279",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "id": "camera_1D3E9BC3_04EC_59D9_418D_0862803EF237",
 "idleSequence": "this.sequence_1D3EABC3_04EC_59D9_4165_A7EBD1C7B279",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "media": "this.map_F5C519CC_C64E_0A96_41DE_468FF3A48B98",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem",
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
  }
 ],
 "id": "playList_1CFDAB27_04EC_5A59_4162_18FF9A4607FE",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 63.56,
  "class": "PanoramaCameraPosition",
  "pitch": -2.51
 },
 "timeToIdle": 10000,
 "initialSequence": "this.sequence_EE907789_C751_3455_41CA_2D051CEB6AB0",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "id": "panorama_C9DD751B_C4FF_C186_4196_4DEB30E1C015_camera",
 "idleSequence": "this.sequence_EE907789_C751_3455_41CA_2D051CEB6AB0",
 "class": "PanoramaCamera"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "hfov": 2.24,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_D7B5EFEA_C5BF_ADCD_41E2_36D10C16E11A",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/popup_D7B5EFEA_C5BF_ADCD_41E2_36D10C16E11A_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 592
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -6.41,
 "hideEasing": "cubic_out",
 "yaw": 112.65,
 "popupMaxWidth": "95%"
},
{
 "headerBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "id": "window_E6827E9F_C6B3_746D_41D4_58911472F0DA",
 "backgroundOpacity": 1,
 "titleFontColor": "#000000",
 "width": 800,
 "closeButtonIconHeight": 12,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingRight": 5,
 "titlePaddingTop": 5,
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "height": 800,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "backgroundColor": [],
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "bodyBackgroundOpacity": 1,
 "borderSize": 0,
 "titleFontSize": "1.29vmin",
 "headerPaddingRight": 10,
 "title": "",
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "shadowHorizontalLength": 3,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "footerHeight": 5,
 "headerBackgroundOpacity": 1,
 "scrollBarColor": "#000000",
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBorderColor": "#000000",
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "layout": "vertical",
 "closeButtonBorderRadius": 11,
 "shadowVerticalLength": 0,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "children": [
  "this.image_uid1CF1DB1B_04EC_5A6A_4180_21A27DB51E1E_0",
  "this.htmlText_E6825E9F_C6B3_746D_41E1_0333A29D2DB6"
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "class": "Window",
 "paddingTop": 0,
 "paddingBottom": 0,
 "titlePaddingLeft": 5,
 "closeButtonIconColor": "#000000",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColor": [],
 "bodyPaddingBottom": 5,
 "shadowSpread": 1,
 "data": {
  "name": "Window17248"
 },
 "titleFontFamily": "Arial",
 "bodyBorderSize": 0
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_CB08260E_C6B3_746F_41B2_7C5706477F11_t.jpg",
 "id": "album_CB08260E_C6B3_746F_41B2_7C5706477F11",
 "width": 2000,
 "label": "IMG_0357",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_CB08260E_C6B3_746F_41B2_7C5706477F11.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1333
},
{
 "duration": 400,
 "id": "effect_4E3E2032_5705_DAC6_41CE_6A6E562AB368",
 "class": "SlideInEffect",
 "from": "left",
 "easing": "quad_in"
},
{
 "levels": [
  {
   "url": "media/popup_DBDE0FEC_C646_0697_4199_7812456A1D60_0_0.jpg",
   "width": 6000,
   "class": "ImageResourceLevel",
   "height": 4000
  },
  {
   "url": "media/popup_DBDE0FEC_C646_0697_4199_7812456A1D60_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2730
  },
  {
   "url": "media/popup_DBDE0FEC_C646_0697_4199_7812456A1D60_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1365
  },
  {
   "url": "media/popup_DBDE0FEC_C646_0697_4199_7812456A1D60_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/popup_DBDE0FEC_C646_0697_4199_7812456A1D60_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "id": "ImageResource_EE49AB4C_C646_0F96_41E0_3C743F746E73",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": -47.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 10000,
 "initialSequence": "this.sequence_1E8CBD66_04EC_5EDA_418D_9ACE7AC80F7A",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "id": "camera_1E8CAD66_04EC_5EDA_4187_AA302DAC0CC7",
 "idleSequence": "this.sequence_1E8CBD66_04EC_5EDA_418D_9ACE7AC80F7A",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 178.87,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 10000,
 "initialSequence": "this.sequence_1D1F2B69_04EC_5AD6_418E_0EB973545019",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "id": "camera_1D1F1B69_04EC_5AD6_4186_532162B2D132",
 "idleSequence": "this.sequence_1D1F2B69_04EC_5AD6_418E_0EB973545019",
 "class": "PanoramaCamera"
},
{
 "levels": [
  {
   "url": "media/popup_EC7CA972_C6DE_0A73_41E2_4DF6619CFE5B_0_0.jpg",
   "width": 3504,
   "class": "ImageResourceLevel",
   "height": 4821
  },
  {
   "url": "media/popup_EC7CA972_C6DE_0A73_41E2_4DF6619CFE5B_0_1.jpg",
   "width": 2977,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_EC7CA972_C6DE_0A73_41E2_4DF6619CFE5B_0_2.jpg",
   "width": 1488,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_EC7CA972_C6DE_0A73_41E2_4DF6619CFE5B_0_3.jpg",
   "width": 744,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_EC7CA972_C6DE_0A73_41E2_4DF6619CFE5B_0_4.jpg",
   "width": 372,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_FA5AEFBF_C646_06F2_4187_BD672925D68E",
 "class": "ImageResource"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "hfov": 5,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_D9F14EEF_C65E_0691_41D3_34EE603EF11B",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/popup_D9F14EEF_C65E_0691_41D3_34EE603EF11B_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 0.53,
 "hideEasing": "cubic_out",
 "yaw": 8.64,
 "popupMaxWidth": "95%"
},
{
 "thumbnailUrl": "media/video_D88C35BE_CA8E_E467_41D1_4DFF72CE9B0B_t.jpg",
 "id": "video_D88C35BE_CA8E_E467_41D1_4DFF72CE9B0B",
 "width": 640,
 "loop": false,
 "class": "Video",
 "label": "Paraguay waving flag FINAL 640x360",
 "scaleMode": "fit_inside",
 "height": 360,
 "video": {
  "width": 640,
  "mp4Url": "media/video_D88C35BE_CA8E_E467_41D1_4DFF72CE9B0B.mp4",
  "class": "VideoResource",
  "height": 360
 }
},
{
 "levels": [
  {
   "url": "media/popup_D4985570_C5DA_3B8F_41CB_B7AA65C8E220_0_0.jpg",
   "width": 6000,
   "class": "ImageResourceLevel",
   "height": 4000
  },
  {
   "url": "media/popup_D4985570_C5DA_3B8F_41CB_B7AA65C8E220_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2730
  },
  {
   "url": "media/popup_D4985570_C5DA_3B8F_41CB_B7AA65C8E220_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1365
  },
  {
   "url": "media/popup_D4985570_C5DA_3B8F_41CB_B7AA65C8E220_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/popup_D4985570_C5DA_3B8F_41CB_B7AA65C8E220_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "id": "ImageResource_D8839EFB_C5C6_0671_41E1_8BA8050AEDEF",
 "class": "ImageResource"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "hfov": 3.86,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_D5B2A5D0_C5CA_FA8F_41CA_9A62A7682858",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/popup_D5B2A5D0_C5CA_FA8F_41CA_9A62A7682858_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -12.64,
 "hideEasing": "cubic_out",
 "yaw": 108.58,
 "popupMaxWidth": "95%"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "hfov": 1.59,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_EB0A7FC9_C6DA_0691_41E4_1C8F609DC992",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/popup_EB0A7FC9_C6DA_0691_41E4_1C8F609DC992_0_2.jpg",
    "width": 726,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 3.75,
 "hideEasing": "cubic_out",
 "yaw": -17.42,
 "popupMaxWidth": "95%"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "hfov": 4.02,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_D4985570_C5DA_3B8F_41CB_B7AA65C8E220",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/popup_D4985570_C5DA_3B8F_41CB_B7AA65C8E220_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -1.78,
 "hideEasing": "cubic_out",
 "yaw": 155.16,
 "popupMaxWidth": "95%"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "hfov": 2.87,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_E2A1E6D8_C64A_06BF_41D3_EAACEF935DC2",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/popup_E2A1E6D8_C64A_06BF_41D3_EAACEF935DC2_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -0.04,
 "hideEasing": "cubic_out",
 "yaw": 89.02,
 "popupMaxWidth": "95%"
},
{
 "levels": [
  {
   "url": "media/popup_E01BB82B_C64A_0991_41C5_23A1C8836C2B_0_0.jpg",
   "width": 6000,
   "class": "ImageResourceLevel",
   "height": 4000
  },
  {
   "url": "media/popup_E01BB82B_C64A_0991_41C5_23A1C8836C2B_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2730
  },
  {
   "url": "media/popup_E01BB82B_C64A_0991_41C5_23A1C8836C2B_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1365
  },
  {
   "url": "media/popup_E01BB82B_C64A_0991_41C5_23A1C8836C2B_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/popup_E01BB82B_C64A_0991_41C5_23A1C8836C2B_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "id": "ImageResource_E20B036B_C64A_1F92_41DC_3B5FCACDCB6B",
 "class": "ImageResource"
},
{
 "levels": [
  {
   "url": "media/popup_E813A50D_C6C6_1B91_41E4_4C260036A65E_0_0.jpg",
   "width": 6000,
   "class": "ImageResourceLevel",
   "height": 4000
  },
  {
   "url": "media/popup_E813A50D_C6C6_1B91_41E4_4C260036A65E_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2730
  },
  {
   "url": "media/popup_E813A50D_C6C6_1B91_41E4_4C260036A65E_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1365
  },
  {
   "url": "media/popup_E813A50D_C6C6_1B91_41E4_4C260036A65E_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/popup_E813A50D_C6C6_1B91_41E4_4C260036A65E_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "id": "ImageResource_FA5C5FBC_C646_06F6_41D2_C7F22ECD8998",
 "class": "ImageResource"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "hfov": 5.13,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_D58739C8_C5CE_0A9F_41D5_3BF976B382AD",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/popup_D58739C8_C5CE_0A9F_41D5_3BF976B382AD_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -16.33,
 "hideEasing": "cubic_out",
 "yaw": 96.34,
 "popupMaxWidth": "95%"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_CAE168BB_C6B1_3DB6_41D6_AA7BB11A413B_t.jpg",
 "id": "album_CAE168BB_C6B1_3DB6_41D6_AA7BB11A413B",
 "width": 2000,
 "label": "IMG_0874",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_CAE168BB_C6B1_3DB6_41D6_AA7BB11A413B.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1333
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_CBB17D2C_C6B3_F453_41D3_EC3B0B9FE358_t.jpg",
 "id": "album_CBB17D2C_C6B3_F453_41D3_EC3B0B9FE358",
 "width": 2000,
 "label": "IMG_0812",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_CBB17D2C_C6B3_F453_41D3_EC3B0B9FE358.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1333
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_CACEB777_C6B3_14BD_41E6_9EDE818425D7_t.jpg",
 "id": "album_CACEB777_C6B3_14BD_41E6_9EDE818425D7",
 "width": 2000,
 "label": "IMG_0362",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_CACEB777_C6B3_14BD_41E6_9EDE818425D7.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1333
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_C92BC70F_C4FF_419E_41CD_D07B20DE1D6F_camera",
 "idleSequence": "this.sequence_ED1E0FD9_C751_33F5_41DA_1352C4DCF0C5",
 "initialPosition": {
  "yaw": -7.46,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 4.27
 },
 "timeToIdle": 10000,
 "initialSequence": "this.sequence_ED1E0FD9_C751_33F5_41DA_1352C4DCF0C5",
 "manualZoomSpeed": 2,
 "displayOriginPosition": {
  "yaw": -7.46,
  "hfov": 165,
  "class": "RotationalCameraDisplayPosition",
  "stereographicFactor": 1,
  "pitch": -90
 },
 "class": "PanoramaCamera",
 "displayMovements": [
  {
   "duration": 1000,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "linear"
  },
  {
   "targetHfov": 90,
   "duration": 2000,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "cubic_in_out",
   "targetStereographicFactor": 0,
   "targetPitch": 4.27
  }
 ]
},
{
 "fieldOfViewOverlayInsideColor": "#0000CC",
 "id": "map_F5C519CC_C64E_0A96_41DE_468FF3A48B98",
 "fieldOfViewOverlayOutsideColor": "#000000",
 "width": 1920,
 "label": "Mapa Satelital",
 "image": {
  "levels": [
   {
    "url": "media/map_F5C519CC_C64E_0A96_41DE_468FF3A48B98.jpeg",
    "width": 1920,
    "class": "ImageResourceLevel",
    "height": 1080
   },
   {
    "url": "media/map_F5C519CC_C64E_0A96_41DE_468FF3A48B98_lq.jpeg",
    "width": 341,
    "tags": "preload",
    "class": "ImageResourceLevel",
    "height": 192
   }
  ],
  "class": "ImageResource"
 },
 "minimumZoomFactor": 0.5,
 "class": "Map",
 "overlays": [
  "this.overlay_F210CD20_C64E_0B8F_41E4_AAC1A0EF9DC0",
  "this.overlay_F3A0F7B6_C64A_06F2_41D9_C9187E07D307",
  "this.overlay_F35D432A_C64A_7F93_41E1_071111DE1D12",
  "this.overlay_F0F54E96_C64A_06B2_41E0_46EC81FBA5AB",
  "this.overlay_FED6415D_C64A_1BB6_41C1_E381FC7001CF",
  "this.overlay_FF05456A_C64A_FB93_41BE_10665B642C1C",
  "this.overlay_FC7F8D4A_C64A_0B93_41DF_955209B13972",
  "this.overlay_FD712E34_C64A_09F6_41C8_16371E526812",
  "this.overlay_F5E2543D_C64A_79F6_418A_1994704B5F08",
  "this.overlay_F2DA76DA_C64A_06B3_41BE_1F9453287B25",
  "this.overlay_F3A6DE1A_C64A_09B3_41E8_4636EA44519B",
  "this.overlay_F368BCF3_C64A_0A72_41D1_7146E01BA4ED"
 ],
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "thumbnailUrl": "media/map_F5C519CC_C64E_0A96_41DE_468FF3A48B98_t.jpg",
 "scaleMode": "fit_inside",
 "fieldOfViewOverlayOutsideOpacity": 0,
 "initialZoomFactor": 1,
 "fieldOfViewOverlayRadiusScale": 0.3,
 "maximumZoomFactor": 1.2,
 "height": 1080
},
{
 "thumbnailUrl": "media/video_CAABBB3C_C46D_3C51_41D7_31BA83D3BCD9_t.jpg",
 "id": "video_CAABBB3C_C46D_3C51_41D7_31BA83D3BCD9",
 "width": 700,
 "loop": false,
 "class": "Video",
 "label": "Smoke green screen",
 "scaleMode": "fit_inside",
 "height": 880,
 "video": {
  "width": 700,
  "mp4Url": "media/video_CAABBB3C_C46D_3C51_41D7_31BA83D3BCD9.mp4",
  "class": "VideoResource",
  "height": 880
 }
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "hfov": 5.53,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_D977878C_C65A_0697_41D9_D36A4FDB9E22",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/popup_D977878C_C65A_0697_41D9_D36A4FDB9E22_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -10.94,
 "hideEasing": "cubic_out",
 "yaw": -76.01,
 "popupMaxWidth": "95%"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "hfov": 2.18,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_EFB39F66_C6DE_0792_41C1_AD0C4A699B44",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/popup_EFB39F66_C6DE_0792_41C1_AD0C4A699B44_0_3.jpg",
    "width": 740,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 5.04,
 "hideEasing": "cubic_out",
 "yaw": 56.57,
 "popupMaxWidth": "95%"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_CD601A7C_C6B7_1CB3_41D9_EFADB8718C99_t.jpg",
 "id": "album_CD601A7C_C6B7_1CB3_41D9_EFADB8718C99",
 "width": 2000,
 "label": "IMG_0877",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_CD601A7C_C6B7_1CB3_41D9_EFADB8718C99.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1333
},
{
 "levels": [
  {
   "url": "media/popup_D448F5F9_C5DA_7A7E_41DA_1AEB7AD52C70_0_0.jpg",
   "width": 6000,
   "class": "ImageResourceLevel",
   "height": 4000
  },
  {
   "url": "media/popup_D448F5F9_C5DA_7A7E_41DA_1AEB7AD52C70_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2730
  },
  {
   "url": "media/popup_D448F5F9_C5DA_7A7E_41DA_1AEB7AD52C70_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1365
  },
  {
   "url": "media/popup_D448F5F9_C5DA_7A7E_41DA_1AEB7AD52C70_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/popup_D448F5F9_C5DA_7A7E_41DA_1AEB7AD52C70_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "id": "ImageResource_D8804EFB_C5C6_0671_41DC_027B1192525F",
 "class": "ImageResource"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_C89410B6_C6B3_0DBF_41AD_D230A0F79A59_t.jpg",
 "id": "album_C89410B6_C6B3_0DBF_41AD_D230A0F79A59",
 "width": 2000,
 "label": "IMG_0848",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_C89410B6_C6B3_0DBF_41AD_D230A0F79A59.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1333
},
{
 "initialPosition": {
  "yaw": 78.22,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 10000,
 "initialSequence": "this.sequence_1FC52E8D_04EC_5A69_4184_2E49117EF48E",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "id": "camera_1FC51E8D_04EC_5A69_4171_88EF7A3B61EB",
 "idleSequence": "this.sequence_1FC52E8D_04EC_5A69_4184_2E49117EF48E",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 58.28,
  "class": "PanoramaCameraPosition",
  "pitch": -20.1
 },
 "timeToIdle": 10000,
 "initialSequence": "this.sequence_EEFD1221_C753_0C55_41E7_BBB4AACA95F9",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "id": "panorama_C827F766_C4FD_C18E_41E1_7617056AAA7D_camera",
 "idleSequence": "this.sequence_EEFD1221_C753_0C55_41E7_BBB4AACA95F9",
 "class": "PanoramaCamera"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "hfov": 3.87,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_D4C24934_C5DE_0BF7_41E2_A5EE340606BD",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/popup_D4C24934_C5DE_0BF7_41E2_A5EE340606BD_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 0.39,
 "hideEasing": "cubic_out",
 "yaw": -99.71,
 "popupMaxWidth": "95%"
},
{
 "levels": [
  {
   "url": "media/popup_EE194675_C6DE_0676_41E1_08A1A35A1F20_0_0.jpg",
   "width": 3521,
   "class": "ImageResourceLevel",
   "height": 4891
  },
  {
   "url": "media/popup_EE194675_C6DE_0676_41E1_08A1A35A1F20_0_1.jpg",
   "width": 2948,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_EE194675_C6DE_0676_41E1_08A1A35A1F20_0_2.jpg",
   "width": 1474,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_EE194675_C6DE_0676_41E1_08A1A35A1F20_0_3.jpg",
   "width": 737,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_EE194675_C6DE_0676_41E1_08A1A35A1F20_0_4.jpg",
   "width": 368,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_FA5D0FBE_C646_06F2_41E6_5D5E078016A5",
 "class": "ImageResource"
},
{
 "items": [
  {
   "media": "this.video_CAABBB3C_C46D_3C51_41D7_31BA83D3BCD9",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_1CFD2B27_04EC_5A59_4173_CF97968A03A1, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_1CFD2B27_04EC_5A59_4173_CF97968A03A1, 0)"
  }
 ],
 "id": "playList_1CFD2B27_04EC_5A59_4173_CF97968A03A1",
 "class": "PlayList"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_CBC39476_C6B1_14BF_41AB_70CEFA2C15E9_t.jpg",
 "id": "album_CBC39476_C6B1_14BF_41AB_70CEFA2C15E9",
 "width": 2000,
 "label": "IMG_0843",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_CBC39476_C6B1_14BF_41AB_70CEFA2C15E9.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1333
},
{
 "levels": [
  {
   "url": "media/popup_D977878C_C65A_0697_41D9_D36A4FDB9E22_0_0.jpg",
   "width": 6000,
   "class": "ImageResourceLevel",
   "height": 4000
  },
  {
   "url": "media/popup_D977878C_C65A_0697_41D9_D36A4FDB9E22_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2730
  },
  {
   "url": "media/popup_D977878C_C65A_0697_41D9_D36A4FDB9E22_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1365
  },
  {
   "url": "media/popup_D977878C_C65A_0697_41D9_D36A4FDB9E22_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/popup_D977878C_C65A_0697_41D9_D36A4FDB9E22_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "id": "ImageResource_EE745B4D_C646_0F96_41E2_0A142F02CCD3",
 "class": "ImageResource"
},
{
 "levels": [
  {
   "url": "media/popup_E2899575_C64A_1A71_41DE_248D27D396EB_0_0.jpg",
   "width": 6000,
   "class": "ImageResourceLevel",
   "height": 4000
  },
  {
   "url": "media/popup_E2899575_C64A_1A71_41DE_248D27D396EB_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2730
  },
  {
   "url": "media/popup_E2899575_C64A_1A71_41DE_248D27D396EB_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1365
  },
  {
   "url": "media/popup_E2899575_C64A_1A71_41DE_248D27D396EB_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/popup_E2899575_C64A_1A71_41DE_248D27D396EB_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "id": "ImageResource_E20F3360_C64A_1F8E_41E3_505AC7372205",
 "class": "ImageResource"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_CBB31B4B_C6B7_1CD6_41CB_A053E4C7A082_t.jpg",
 "id": "album_CBB31B4B_C6B7_1CD6_41CB_A053E4C7A082",
 "width": 2000,
 "label": "IMG_0876",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_CBB31B4B_C6B7_1CD6_41CB_A053E4C7A082.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 3000
},
{
 "initialPosition": {
  "yaw": -51.5,
  "class": "PanoramaCameraPosition",
  "pitch": -30.9
 },
 "timeToIdle": 10000,
 "initialSequence": "this.sequence_EDB256D0_C753_35F3_41E8_E47BBD354DFE",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "id": "panorama_C9E2F2E5_C4FD_C082_41E7_C6FF4D799690_camera",
 "idleSequence": "this.sequence_EDB256D0_C753_35F3_41E8_E47BBD354DFE",
 "class": "PanoramaCamera"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_CA235DD9_C6B3_17F5_41D4_F8FB8516DB9C_t.jpg",
 "id": "album_CA235DD9_C6B3_17F5_41D4_F8FB8516DB9C",
 "width": 2000,
 "label": "IMG_0352",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_CA235DD9_C6B3_17F5_41D4_F8FB8516DB9C.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1360
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "hfov": 5.59,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_ECF8E543_C6DA_3B91_41C0_5E74C714EE66",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/popup_ECF8E543_C6DA_3B91_41C0_5E74C714EE66_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 407
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 33.58,
 "hideEasing": "cubic_out",
 "yaw": 51.6,
 "popupMaxWidth": "95%"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_CD1089F3_C6B1_3FB6_41CB_1C7563F0B1F6_t.jpg",
 "id": "album_CD1089F3_C6B1_3FB6_41CB_1C7563F0B1F6",
 "width": 2000,
 "label": "IMG_0854",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_CD1089F3_C6B1_3FB6_41CB_1C7563F0B1F6.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 3000
},
{
 "levels": [
  {
   "url": "media/popup_E51705F4_C64A_3A77_41CD_365DD4606D1F_0_0.jpg",
   "width": 6000,
   "class": "ImageResourceLevel",
   "height": 4000
  },
  {
   "url": "media/popup_E51705F4_C64A_3A77_41CD_365DD4606D1F_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2730
  },
  {
   "url": "media/popup_E51705F4_C64A_3A77_41CD_365DD4606D1F_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1365
  },
  {
   "url": "media/popup_E51705F4_C64A_3A77_41CD_365DD4606D1F_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/popup_E51705F4_C64A_3A77_41CD_365DD4606D1F_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "id": "ImageResource_E20E235E_C64A_1FB2_41DD_833D99F57CBF",
 "class": "ImageResource"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "hfov": 2.24,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_E1077AF2_C751_3DB6_41AA_D3633C3A52EA",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/popup_E1077AF2_C751_3DB6_41AA_D3633C3A52EA_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -5.38,
 "hideEasing": "cubic_out",
 "yaw": -88.62,
 "popupMaxWidth": "95%"
},
{
 "initialPosition": {
  "yaw": -148.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 10000,
 "initialSequence": "this.sequence_1D5A0BFF_04EC_59AA_415C_D7B4670FB183",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "id": "camera_1D5A6BFF_04EC_59AA_4183_5BA60F846D55",
 "idleSequence": "this.sequence_1D5A0BFF_04EC_59AA_415C_D7B4670FB183",
 "class": "PanoramaCamera"
},
{
 "levels": [
  {
   "url": "media/popup_DD91E230_C64A_398F_41E1_1AB14E2A5CC7_0_0.jpg",
   "width": 4973,
   "class": "ImageResourceLevel",
   "height": 2875
  },
  {
   "url": "media/popup_DD91E230_C64A_398F_41E1_1AB14E2A5CC7_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2367
  },
  {
   "url": "media/popup_DD91E230_C64A_398F_41E1_1AB14E2A5CC7_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1183
  },
  {
   "url": "media/popup_DD91E230_C64A_398F_41E1_1AB14E2A5CC7_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 591
  },
  {
   "url": "media/popup_DD91E230_C64A_398F_41E1_1AB14E2A5CC7_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 295
  }
 ],
 "id": "ImageResource_E58270AD_C64A_3A96_41C2_90011E7351E3",
 "class": "ImageResource"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "hfov": 2.83,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_879A87E7_C64A_0692_41DE_4C32FAFD1B23",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/popup_879A87E7_C64A_0692_41DE_4C32FAFD1B23_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 592
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -6.43,
 "hideEasing": "cubic_out",
 "yaw": 21.14,
 "popupMaxWidth": "95%"
},
{
 "initialPosition": {
  "yaw": 65.93,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 10000,
 "initialSequence": "this.sequence_1ECD3DA0_04EC_5E57_4179_0A96B62785EC",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "id": "camera_1ECD2DA0_04EC_5E57_417D_1B95836AF420",
 "idleSequence": "this.sequence_1ECD3DA0_04EC_5E57_4179_0A96B62785EC",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 10000,
 "initialSequence": "this.sequence_EEF31CFE_C753_15AF_41DE_19C0ACAC8087",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "id": "panorama_C9E31C62_C4FD_4786_41CC_396030872F5C_camera",
 "idleSequence": "this.sequence_EEF31CFE_C753_15AF_41DE_19C0ACAC8087",
 "class": "PanoramaCamera"
},
{
 "levels": [
  {
   "url": "media/popup_D5902247_C5C9_F992_41E4_2867E6517AC5_0_0.jpg",
   "width": 5058,
   "class": "ImageResourceLevel",
   "height": 2940
  },
  {
   "url": "media/popup_D5902247_C5C9_F992_41E4_2867E6517AC5_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2380
  },
  {
   "url": "media/popup_D5902247_C5C9_F992_41E4_2867E6517AC5_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1190
  },
  {
   "url": "media/popup_D5902247_C5C9_F992_41E4_2867E6517AC5_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 595
  },
  {
   "url": "media/popup_D5902247_C5C9_F992_41E4_2867E6517AC5_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 297
  }
 ],
 "id": "ImageResource_D8874EFB_C5C6_0671_41E1_CB6C1DAE4F26",
 "class": "ImageResource"
},
{
 "viewerArea": "this.MapViewer",
 "id": "MapViewerMapPlayer",
 "class": "MapPlayer",
 "movementMode": "constrained"
},
{
 "initialPosition": {
  "yaw": 178.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 10000,
 "initialSequence": "this.sequence_1EEEBDBE_04EC_59AB_418F_43ECE97C569C",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "id": "camera_1EEE9DBE_04EC_59AB_4182_170AF9B3D919",
 "idleSequence": "this.sequence_1EEEBDBE_04EC_59AB_418F_43ECE97C569C",
 "class": "PanoramaCamera"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "hfov": 3.27,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_D448F5F9_C5DA_7A7E_41DA_1AEB7AD52C70",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/popup_D448F5F9_C5DA_7A7E_41DA_1AEB7AD52C70_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 8.34,
 "hideEasing": "cubic_out",
 "yaw": 161.71,
 "popupMaxWidth": "95%"
},
{
 "initialPosition": {
  "yaw": 55.02,
  "class": "PanoramaCameraPosition",
  "pitch": 31.4
 },
 "timeToIdle": 10000,
 "initialSequence": "this.sequence_ED1D480A_C753_1C57_41DD_05EA46A12B90",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "id": "panorama_C9D1609D_C4FE_C082_41E8_5B5168C3383D_camera",
 "idleSequence": "this.sequence_ED1D480A_C753_1C57_41DD_05EA46A12B90",
 "class": "PanoramaCamera"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_CB77A15A_C6B3_0CF7_41E6_87E739C5A12B_t.jpg",
 "id": "album_CB77A15A_C6B3_0CF7_41E6_87E739C5A12B",
 "width": 2000,
 "label": "IMG_0806",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_CB77A15A_C6B3_0CF7_41E6_87E739C5A12B.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1333
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_CA560910_C6B0_FC72_41DB_C4381087C563_t.jpg",
 "id": "album_CA560910_C6B0_FC72_41DB_C4381087C563",
 "width": 2000,
 "label": "IMG_0857",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_CA560910_C6B0_FC72_41DB_C4381087C563.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1333
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "hfov": 5.61,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_E51705F4_C64A_3A77_41CD_365DD4606D1F",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/popup_E51705F4_C64A_3A77_41CD_365DD4606D1F_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -5.57,
 "hideEasing": "cubic_out",
 "yaw": 62.48,
 "popupMaxWidth": "95%"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_CBDE4AB6_C6B1_FDBE_41E4_32B6E7E6B6D5_t.jpg",
 "id": "album_CBDE4AB6_C6B1_FDBE_41E4_32B6E7E6B6D5",
 "width": 2000,
 "label": "IMG_0855",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_CBDE4AB6_C6B1_FDBE_41E4_32B6E7E6B6D5.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1333
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_C9E31C62_C4FD_4786_41CC_396030872F5C_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_C9E31C62_C4FD_4786_41CC_396030872F5C_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C9E31C62_C4FD_4786_41CC_396030872F5C_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C9E31C62_C4FD_4786_41CC_396030872F5C_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C9E31C62_C4FD_4786_41CC_396030872F5C_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_C9E31C62_C4FD_4786_41CC_396030872F5C_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C9E31C62_C4FD_4786_41CC_396030872F5C_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C9E31C62_C4FD_4786_41CC_396030872F5C_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C9E31C62_C4FD_4786_41CC_396030872F5C_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C9E31C62_C4FD_4786_41CC_396030872F5C_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_C9E31C62_C4FD_4786_41CC_396030872F5C_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C9E31C62_C4FD_4786_41CC_396030872F5C_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C9E31C62_C4FD_4786_41CC_396030872F5C_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_C9E31C62_C4FD_4786_41CC_396030872F5C_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_C9E31C62_C4FD_4786_41CC_396030872F5C_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C9E31C62_C4FD_4786_41CC_396030872F5C_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C9E31C62_C4FD_4786_41CC_396030872F5C_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C9E31C62_C4FD_4786_41CC_396030872F5C_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_C9E31C62_C4FD_4786_41CC_396030872F5C_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C9E31C62_C4FD_4786_41CC_396030872F5C_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C9E31C62_C4FD_4786_41CC_396030872F5C_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C9E31C62_C4FD_4786_41CC_396030872F5C_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_C9E31C62_C4FD_4786_41CC_396030872F5C_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C9E31C62_C4FD_4786_41CC_396030872F5C_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C9E31C62_C4FD_4786_41CC_396030872F5C_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "TOMA 11",
 "mapLocations": [
  {
   "map": "this.map_F5C519CC_C64E_0A96_41DE_468FF3A48B98",
   "x": 1369.72,
   "class": "PanoramaMapLocation",
   "angle": 94.15,
   "y": 525.8
  }
 ],
 "id": "panorama_C9E31C62_C4FD_4786_41CC_396030872F5C",
 "overlays": [
  "this.overlay_D4B7B90C_C5BB_7245_41E1_ECF0B750C58B",
  "this.overlay_D626F336_C5BD_B645_419A_AF50EE7C3300",
  "this.overlay_D6656C6B_C5BD_72C3_41CA_36F6321DCEC2",
  "this.overlay_CA82FDD7_C5C6_0AB1_41AD_D7E2D53B7B27",
  "this.popup_D5902247_C5C9_F992_41E4_2867E6517AC5",
  "this.overlay_D5058104_C5CA_7B97_41C6_368CFBCF8980",
  "this.popup_CA793823_C5CA_0992_41DB_40CE5A216816",
  "this.overlay_D75C7DAD_C6D7_37AD_41DE_22E88B019F95"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_C827BEB9_C4FD_4082_41DA_C1F5183B16C3",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_C9E2F2E5_C4FD_C082_41E7_C6FF4D799690",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -1.96,
   "class": "AdjacentPanorama",
   "backwardYaw": 126.47,
   "panorama": "this.panorama_C827BB2C_C4FA_C182_41E0_B235998AA120",
   "distance": 1
  }
 ],
 "class": "Panorama",
 "pitch": 0,
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C9E31C62_C4FD_4786_41CC_396030872F5C_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_C9D1609D_C4FE_C082_41E8_5B5168C3383D_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_C9D1609D_C4FE_C082_41E8_5B5168C3383D_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C9D1609D_C4FE_C082_41E8_5B5168C3383D_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C9D1609D_C4FE_C082_41E8_5B5168C3383D_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C9D1609D_C4FE_C082_41E8_5B5168C3383D_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_C9D1609D_C4FE_C082_41E8_5B5168C3383D_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C9D1609D_C4FE_C082_41E8_5B5168C3383D_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C9D1609D_C4FE_C082_41E8_5B5168C3383D_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C9D1609D_C4FE_C082_41E8_5B5168C3383D_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C9D1609D_C4FE_C082_41E8_5B5168C3383D_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_C9D1609D_C4FE_C082_41E8_5B5168C3383D_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C9D1609D_C4FE_C082_41E8_5B5168C3383D_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C9D1609D_C4FE_C082_41E8_5B5168C3383D_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_C9D1609D_C4FE_C082_41E8_5B5168C3383D_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_C9D1609D_C4FE_C082_41E8_5B5168C3383D_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C9D1609D_C4FE_C082_41E8_5B5168C3383D_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C9D1609D_C4FE_C082_41E8_5B5168C3383D_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C9D1609D_C4FE_C082_41E8_5B5168C3383D_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_C9D1609D_C4FE_C082_41E8_5B5168C3383D_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C9D1609D_C4FE_C082_41E8_5B5168C3383D_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C9D1609D_C4FE_C082_41E8_5B5168C3383D_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C9D1609D_C4FE_C082_41E8_5B5168C3383D_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_C9D1609D_C4FE_C082_41E8_5B5168C3383D_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C9D1609D_C4FE_C082_41E8_5B5168C3383D_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C9D1609D_C4FE_C082_41E8_5B5168C3383D_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "TOMA 6",
 "mapLocations": [
  {
   "map": "this.map_F5C519CC_C64E_0A96_41DE_468FF3A48B98",
   "x": 993.05,
   "class": "PanoramaMapLocation",
   "angle": 46.38,
   "y": 643.2
  }
 ],
 "id": "panorama_C9D1609D_C4FE_C082_41E8_5B5168C3383D",
 "overlays": [
  "this.overlay_D18FDA86_C51D_408E_41D4_D48F531CC0A4",
  "this.overlay_D0FFE060_C51B_5F82_418A_A79DF88A8AE8",
  "this.overlay_EF82DD6D_C6DE_0B91_41DC_8B0160F3FA64",
  "this.popup_EE194675_C6DE_0676_41E1_08A1A35A1F20",
  "this.overlay_EEFBFD8A_C6DE_0A92_418D_F68E66014169",
  "this.popup_EC7CA972_C6DE_0A73_41E2_4DF6619CFE5B",
  "this.overlay_EE8A7F6D_C6DE_0796_41E3_A8D02A9DD46C",
  "this.popup_EFB39F66_C6DE_0792_41C1_AD0C4A699B44",
  "this.overlay_EEA8A61B_C6DA_39B2_41C7_E96D3FEA28A1",
  "this.popup_EB0A7FC9_C6DA_0691_41E4_1C8F609DC992",
  "this.overlay_EA7C64A6_C6DA_1A92_41D0_BDAEE971CC76",
  "this.popup_ECF8E543_C6DA_3B91_41C0_5E74C714EE66",
  "this.overlay_D72B253B_C6D1_74B6_41E2_84BC6DE87931",
  "this.overlay_E10DF63D_C751_14B2_41BB_8DDB71CB7F33",
  "this.popup_E1077AF2_C751_3DB6_41AA_D3633C3A52EA"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -142.79,
   "class": "AdjacentPanorama",
   "backwardYaw": -1.13,
   "panorama": "this.panorama_C82494D2_C4FE_C086_41D3_9F06A8CD9DE5",
   "distance": 1
  },
  {
   "yaw": -78.25,
   "class": "AdjacentPanorama",
   "backwardYaw": 94.57,
   "panorama": "this.panorama_C827BEB9_C4FD_4082_41DA_C1F5183B16C3",
   "distance": 1
  }
 ],
 "class": "Panorama",
 "pitch": 0,
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C9D1609D_C4FE_C082_41E8_5B5168C3383D_t.jpg",
 "hfovMax": 130
},
{
 "levels": [
  {
   "url": "media/popup_ECF8E543_C6DA_3B91_41C0_5E74C714EE66_0_0.jpg",
   "width": 4860,
   "class": "ImageResourceLevel",
   "height": 1932
  },
  {
   "url": "media/popup_ECF8E543_C6DA_3B91_41C0_5E74C714EE66_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 1628
  },
  {
   "url": "media/popup_ECF8E543_C6DA_3B91_41C0_5E74C714EE66_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 814
  },
  {
   "url": "media/popup_ECF8E543_C6DA_3B91_41C0_5E74C714EE66_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 407
  },
  {
   "url": "media/popup_ECF8E543_C6DA_3B91_41C0_5E74C714EE66_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 203
  }
 ],
 "id": "ImageResource_FA5ADFC1_C646_068E_41B6_7B077128AEF2",
 "class": "ImageResource"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_CA5E013B_C6B3_0CB6_41E3_882B37B785E1_t.jpg",
 "id": "album_CA5E013B_C6B3_0CB6_41E3_882B37B785E1",
 "width": 2000,
 "label": "IMG_0810",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_CA5E013B_C6B3_0CB6_41E3_882B37B785E1.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1333
},
{
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_C82494D2_C4FE_C086_41D3_9F06A8CD9DE5_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_C82494D2_C4FE_C086_41D3_9F06A8CD9DE5_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C82494D2_C4FE_C086_41D3_9F06A8CD9DE5_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C82494D2_C4FE_C086_41D3_9F06A8CD9DE5_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C82494D2_C4FE_C086_41D3_9F06A8CD9DE5_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_C82494D2_C4FE_C086_41D3_9F06A8CD9DE5_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C82494D2_C4FE_C086_41D3_9F06A8CD9DE5_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C82494D2_C4FE_C086_41D3_9F06A8CD9DE5_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C82494D2_C4FE_C086_41D3_9F06A8CD9DE5_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C82494D2_C4FE_C086_41D3_9F06A8CD9DE5_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_C82494D2_C4FE_C086_41D3_9F06A8CD9DE5_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C82494D2_C4FE_C086_41D3_9F06A8CD9DE5_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C82494D2_C4FE_C086_41D3_9F06A8CD9DE5_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_C82494D2_C4FE_C086_41D3_9F06A8CD9DE5_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_C82494D2_C4FE_C086_41D3_9F06A8CD9DE5_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C82494D2_C4FE_C086_41D3_9F06A8CD9DE5_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C82494D2_C4FE_C086_41D3_9F06A8CD9DE5_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C82494D2_C4FE_C086_41D3_9F06A8CD9DE5_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_C82494D2_C4FE_C086_41D3_9F06A8CD9DE5_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C82494D2_C4FE_C086_41D3_9F06A8CD9DE5_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C82494D2_C4FE_C086_41D3_9F06A8CD9DE5_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C82494D2_C4FE_C086_41D3_9F06A8CD9DE5_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_C82494D2_C4FE_C086_41D3_9F06A8CD9DE5_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C82494D2_C4FE_C086_41D3_9F06A8CD9DE5_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C82494D2_C4FE_C086_41D3_9F06A8CD9DE5_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "TOMA 5",
 "mapLocations": [
  {
   "map": "this.map_F5C519CC_C64E_0A96_41DE_468FF3A48B98",
   "x": 853.98,
   "class": "PanoramaMapLocation",
   "angle": 86.27,
   "y": 652.37
  }
 ],
 "id": "panorama_C82494D2_C4FE_C086_41D3_9F06A8CD9DE5",
 "overlays": [
  "this.overlay_D131359C_C51B_4082_41D0_BF0D2C5A993B",
  "this.overlay_D6526E95_C51B_C082_41B2_CD426961059F",
  "this.overlay_D1D2E548_C51D_4182_41DD_28221377A90B",
  "this.overlay_ECDEA486_C6DA_1A93_41AD_AD127859FBB5",
  "this.popup_ED019763_C6DA_0791_41E2_0CB39A715996",
  "this.overlay_D7480654_C6D1_14F2_41E2_E1B54A57B98F",
  "this.overlay_D936D8B6_C6B3_FDBF_41B8_79DF6F1CD148"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -1.13,
   "class": "AdjacentPanorama",
   "backwardYaw": -142.79,
   "panorama": "this.panorama_C9D1609D_C4FE_C082_41E8_5B5168C3383D",
   "distance": 1
  },
  {
   "yaw": -91.4,
   "class": "AdjacentPanorama",
   "backwardYaw": 93.17,
   "panorama": "this.panorama_C9E4B9D4_C4FD_4082_41E5_B1AD8C2EDA9F",
   "distance": 1
  },
  {
   "yaw": 91.78,
   "class": "AdjacentPanorama",
   "backwardYaw": -9.55,
   "panorama": "this.panorama_C824FB0B_C4FF_4186_41D5_BDBD65AF1796",
   "distance": 1
  }
 ],
 "class": "Panorama",
 "pitch": 0,
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C82494D2_C4FE_C086_41D3_9F06A8CD9DE5_t.jpg",
 "hfovMax": 130
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_CA1EE26D_C6B3_0CAD_41AC_9385B0596B6D_t.jpg",
 "id": "album_CA1EE26D_C6B3_0CAD_41AC_9385B0596B6D",
 "width": 2000,
 "label": "IMG_0851",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_CA1EE26D_C6B3_0CAD_41AC_9385B0596B6D.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1333
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "hfov": 13.82,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_E0163729_C64E_079E_41DE_E6324211F338",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/popup_E0163729_C64E_079E_41DE_E6324211F338_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -37.12,
 "hideEasing": "cubic_out",
 "yaw": -57.03,
 "popupMaxWidth": "95%"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_CD08354C_C6B7_34D3_41E4_AC80AB29358C_t.jpg",
 "id": "album_CD08354C_C6B7_34D3_41E4_AC80AB29358C",
 "width": 2000,
 "label": "IMG_0823",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_CD08354C_C6B7_34D3_41E4_AC80AB29358C.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1333
},
{
 "levels": [
  {
   "url": "media/popup_E0163729_C64E_079E_41DE_E6324211F338_0_0.jpg",
   "width": 3592,
   "class": "ImageResourceLevel",
   "height": 2022
  },
  {
   "url": "media/popup_E0163729_C64E_079E_41DE_E6324211F338_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1152
  },
  {
   "url": "media/popup_E0163729_C64E_079E_41DE_E6324211F338_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_E0163729_C64E_079E_41DE_E6324211F338_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_EA60B314_C64E_1FB6_41D9_4916032A9102",
 "class": "ImageResource"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "hfov": 10.36,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_DD39A4D0_C64A_1A8E_41BB_92F50121E7AB",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/popup_DD39A4D0_C64A_1A8E_41BB_92F50121E7AB_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 580
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -30.9,
 "hideEasing": "cubic_out",
 "yaw": -51.73,
 "popupMaxWidth": "95%"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_C83F458E_C6B1_746E_41AB_219D4E0F87C2_t.jpg",
 "id": "album_C83F458E_C6B1_746E_41AB_219D4E0F87C2",
 "width": 2000,
 "label": "IMG_0838",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_C83F458E_C6B1_746E_41AB_219D4E0F87C2.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1156
},
{
 "levels": [
  {
   "url": "media/popup_E2D09D16_C64A_0BB3_41E6_65B494656442_0_0.jpg",
   "width": 6000,
   "class": "ImageResourceLevel",
   "height": 4000
  },
  {
   "url": "media/popup_E2D09D16_C64A_0BB3_41E6_65B494656442_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2730
  },
  {
   "url": "media/popup_E2D09D16_C64A_0BB3_41E6_65B494656442_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1365
  },
  {
   "url": "media/popup_E2D09D16_C64A_0BB3_41E6_65B494656442_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/popup_E2D09D16_C64A_0BB3_41E6_65B494656442_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "id": "ImageResource_E20AB36A_C64A_1F92_41CD_52915ED3855E",
 "class": "ImageResource"
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_EEDF7E7B_C773_14B5_41E3_02F0055BA9AE.ogg",
  "mp3Url": "media/audio_EEDF7E7B_C773_14B5_41E3_02F0055BA9AE.mp3"
 },
 "id": "audio_EEDF7E7B_C773_14B5_41E3_02F0055BA9AE",
 "data": {
  "label": "Steam Train Sounds _ Steam Train Journey-EcbqjpBOsmk"
 }
},
{
 "items": [
  {
   "media": "this.video_D88C35BE_CA8E_E467_41D1_4DFF72CE9B0B",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_1CFCCB27_04EC_5A59_417A_24941EA6D690, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_1CFCCB27_04EC_5A59_417A_24941EA6D690, 0)"
  }
 ],
 "id": "playList_1CFCCB27_04EC_5A59_417A_24941EA6D690",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 57.03,
  "class": "PanoramaCameraPosition",
  "pitch": -2.26
 },
 "timeToIdle": 10000,
 "initialSequence": "this.sequence_EED6AE86_C751_145F_41DF_2DA760209FC5",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "id": "panorama_C824FB0B_C4FF_4186_41D5_BDBD65AF1796_camera",
 "idleSequence": "this.sequence_EED6AE86_C751_145F_41DF_2DA760209FC5",
 "class": "PanoramaCamera"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "hfov": 4.95,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_D95E51A8_C65A_1A9F_41B2_3031B6C0768E",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/popup_D95E51A8_C65A_1A9F_41B2_3031B6C0768E_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -8.22,
 "hideEasing": "cubic_out",
 "yaw": 15.81,
 "popupMaxWidth": "95%"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_CD324C9F_C6B1_146D_41B8_9139A2DF802C_t.jpg",
 "id": "album_CD324C9F_C6B1_146D_41B8_9139A2DF802C",
 "width": 2000,
 "label": "IMG_0821",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_CD324C9F_C6B1_146D_41B8_9139A2DF802C.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1333
},
{
 "initialPosition": {
  "yaw": 26.5,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 10000,
 "initialSequence": "this.sequence_1D9E3C5D_04EC_5EE9_4174_92B2DD4D7FF8",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "id": "camera_1D9E2C5D_04EC_5EE9_4186_FAA4F545984E",
 "idleSequence": "this.sequence_1D9E3C5D_04EC_5EE9_4174_92B2DD4D7FF8",
 "class": "PanoramaCamera"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_CD2E7DD8_C6B1_17F2_41E8_7F71647A9DB1_t.jpg",
 "id": "album_CD2E7DD8_C6B1_17F2_41E8_7F71647A9DB1",
 "width": 2000,
 "label": "IMG_0820",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_CD2E7DD8_C6B1_17F2_41E8_7F71647A9DB1.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1333
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_CD0268CB_C6B3_1DD6_41E2_5804F20F58AA_t.jpg",
 "id": "album_CD0268CB_C6B3_1DD6_41E2_5804F20F58AA",
 "width": 2000,
 "label": "IMG_0866",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_CD0268CB_C6B3_1DD6_41E2_5804F20F58AA.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 3000
},
{
 "levels": [
  {
   "url": "media/popup_D9F14EEF_C65E_0691_41D3_34EE603EF11B_0_0.jpg",
   "width": 6000,
   "class": "ImageResourceLevel",
   "height": 4000
  },
  {
   "url": "media/popup_D9F14EEF_C65E_0691_41D3_34EE603EF11B_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2730
  },
  {
   "url": "media/popup_D9F14EEF_C65E_0691_41D3_34EE603EF11B_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1365
  },
  {
   "url": "media/popup_D9F14EEF_C65E_0691_41D3_34EE603EF11B_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/popup_D9F14EEF_C65E_0691_41D3_34EE603EF11B_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "id": "ImageResource_EE487B4B_C646_0F92_41D6_FD80BCA67D71",
 "class": "ImageResource"
},
{
 "buttonToggleHotspots": [
  "this.IconButton_0C431D49_0334_FED6_418B_80DDFBCF8527",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96"
 ],
 "class": "PanoramaPlayer",
 "buttonToggleGyroscope": [
  "this.IconButton_0C433D49_0334_FED6_4187_6A29D717A54B",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A"
 ],
 "displayPlaybackBar": true,
 "touchControlMode": "drag_rotation",
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "buttonCardboardView": [
  "this.IconButton_0C43FD49_0334_FED6_417C_95AF1425050C",
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB"
 ],
 "mouseControlMode": "drag_rotation"
},
{
 "initialPosition": {
  "yaw": -141.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 10000,
 "initialSequence": "this.sequence_1D33ABA5_04EC_5A5E_416B_883426964629",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "id": "camera_1D339BA5_04EC_5A5E_4181_4ED6ED952E17",
 "idleSequence": "this.sequence_1D33ABA5_04EC_5A5E_416B_883426964629",
 "class": "PanoramaCamera"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "hfov": 3.63,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_D5902247_C5C9_F992_41E4_2867E6517AC5",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/popup_D5902247_C5C9_F992_41E4_2867E6517AC5_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 595
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -8.26,
 "hideEasing": "cubic_out",
 "yaw": -66.98,
 "popupMaxWidth": "95%"
},
{
 "items": [
  "this.PanoramaPlayListItem_1CFC5B28_04EC_5A57_4175_DA900AB49CA4",
  "this.PanoramaPlayListItem_1CE3CB28_04EC_5A57_4175_C73C043B1530",
  "this.PanoramaPlayListItem_1CE39B29_04EC_5AA9_4186_709CD5380564",
  "this.PanoramaPlayListItem_1CE36B29_04EC_5AA9_4158_B18EA34A6A10",
  "this.PanoramaPlayListItem_1CE27B2A_04EC_5AAB_4174_371177AF3340",
  "this.PanoramaPlayListItem_1CE1CB2A_04EC_5AAB_4186_05DEC228EAFE",
  "this.PanoramaPlayListItem_1CE18B2B_04EC_5AAA_4179_275A25AB14F8",
  "this.PanoramaPlayListItem_1CE15B2B_04EC_5AAA_4185_37B392C5F3BD",
  "this.PanoramaPlayListItem_1CE12B2C_04EC_5AAE_4162_B09CE600DAA2",
  "this.PanoramaPlayListItem_1CE0FB2C_04EC_5AAE_417B_81A7FF04786C",
  "this.PanoramaPlayListItem_1CE04B2D_04EC_5AAE_418F_91568A8F550A",
  "this.PanoramaPlayListItem_1CE01B2D_04EC_5AAE_4137_4E1B2A9C98D0",
  {
   "media": "this.album_D4F164FE_C5DF_FA73_41BC_3482EC55C164",
   "end": "this.trigger('tourEnded')",
   "class": "PhotoAlbumPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 0)",
   "player": "this.MainViewerPhotoAlbumPlayer"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_CB82F2E5_C6BF_0DDD_41DE_AC08A6A3F4A2_t.jpg",
 "id": "album_CB82F2E5_C6BF_0DDD_41DE_AC08A6A3F4A2",
 "width": 2000,
 "label": "IMG_0859",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_CB82F2E5_C6BF_0DDD_41DE_AC08A6A3F4A2.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1333
},
{
 "initialPosition": {
  "yaw": -91.44,
  "class": "PanoramaCameraPosition",
  "pitch": -1
 },
 "timeToIdle": 10000,
 "initialSequence": "this.sequence_EEBFEAB8_C750_FDB2_41AE_CC071DB8363C",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "id": "panorama_C82494D2_C4FE_C086_41D3_9F06A8CD9DE5_camera",
 "idleSequence": "this.sequence_EEBFEAB8_C750_FDB2_41AE_CC071DB8363C",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 57.72,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 10000,
 "initialSequence": "this.sequence_1EACFD83_04EC_5E5A_4190_4722D00A5FE9",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "id": "camera_1EACED83_04EC_5E5A_418D_6C83B76608D3",
 "idleSequence": "this.sequence_1EACFD83_04EC_5E5A_4190_4722D00A5FE9",
 "class": "PanoramaCamera"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_CA2126CE_C6B3_15EF_41C6_B4E109B67429_t.jpg",
 "id": "album_CA2126CE_C6B3_15EF_41C6_B4E109B67429",
 "width": 2000,
 "label": "IMG_0346",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_CA2126CE_C6B3_15EF_41C6_B4E109B67429.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1333
},
{
 "initialPosition": {
  "yaw": -88.22,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 10000,
 "initialSequence": "this.sequence_1DDA8C98_04EC_5E76_4170_5FD21B72A04C",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "id": "camera_1DDAEC97_04EC_5E7A_4182_B7227D015CC3",
 "idleSequence": "this.sequence_1DDA8C98_04EC_5E76_4170_5FD21B72A04C",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -53.53,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 10000,
 "initialSequence": "this.sequence_1DB99C7B_04EC_5EAA_4174_6A47EF276D81",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "id": "camera_1DB98C7B_04EC_5EAA_4150_6217B75FAC76",
 "idleSequence": "this.sequence_1DB99C7B_04EC_5EAA_4174_6A47EF276D81",
 "class": "PanoramaCamera"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_CD662833_C6B3_1CB5_41D6_9066236A2086_t.jpg",
 "id": "album_CD662833_C6B3_1CB5_41D6_9066236A2086",
 "width": 2000,
 "label": "IMG_0329",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_CD662833_C6B3_1CB5_41D6_9066236A2086.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1333
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_CADF7166_C6B7_0CDF_41E8_CDD619444D15_t.jpg",
 "id": "album_CADF7166_C6B7_0CDF_41E8_CDD619444D15",
 "width": 2000,
 "label": "IMG_0826",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_CADF7166_C6B7_0CDF_41E8_CDD619444D15.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 2767
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_C92BC70F_C4FF_419E_41CD_D07B20DE1D6F_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_C92BC70F_C4FF_419E_41CD_D07B20DE1D6F_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C92BC70F_C4FF_419E_41CD_D07B20DE1D6F_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C92BC70F_C4FF_419E_41CD_D07B20DE1D6F_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C92BC70F_C4FF_419E_41CD_D07B20DE1D6F_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_C92BC70F_C4FF_419E_41CD_D07B20DE1D6F_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C92BC70F_C4FF_419E_41CD_D07B20DE1D6F_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C92BC70F_C4FF_419E_41CD_D07B20DE1D6F_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C92BC70F_C4FF_419E_41CD_D07B20DE1D6F_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C92BC70F_C4FF_419E_41CD_D07B20DE1D6F_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_C92BC70F_C4FF_419E_41CD_D07B20DE1D6F_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C92BC70F_C4FF_419E_41CD_D07B20DE1D6F_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C92BC70F_C4FF_419E_41CD_D07B20DE1D6F_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_C92BC70F_C4FF_419E_41CD_D07B20DE1D6F_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_C92BC70F_C4FF_419E_41CD_D07B20DE1D6F_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C92BC70F_C4FF_419E_41CD_D07B20DE1D6F_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C92BC70F_C4FF_419E_41CD_D07B20DE1D6F_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C92BC70F_C4FF_419E_41CD_D07B20DE1D6F_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_C92BC70F_C4FF_419E_41CD_D07B20DE1D6F_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C92BC70F_C4FF_419E_41CD_D07B20DE1D6F_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C92BC70F_C4FF_419E_41CD_D07B20DE1D6F_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C92BC70F_C4FF_419E_41CD_D07B20DE1D6F_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_C92BC70F_C4FF_419E_41CD_D07B20DE1D6F_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C92BC70F_C4FF_419E_41CD_D07B20DE1D6F_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C92BC70F_C4FF_419E_41CD_D07B20DE1D6F_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "TOMA 1",
 "mapLocations": [
  {
   "map": "this.map_F5C519CC_C64E_0A96_41DE_468FF3A48B98",
   "x": 550.01,
   "class": "PanoramaMapLocation",
   "angle": 38.57,
   "y": 917.48
  }
 ],
 "id": "panorama_C92BC70F_C4FF_419E_41CD_D07B20DE1D6F",
 "hfovMin": "200%",
 "overlays": [
  "this.overlay_CB748E13_C51B_4386_41E1_6AB181D6C493",
  "this.overlay_D506794E_C50B_419E_41A3_62FC4C74B46A",
  "this.overlay_D702BCA0_C50B_C082_41B6_29C1229177B9",
  "this.overlay_D4251A55_C6D1_FCFD_41C7_D530ABB808D6",
  "this.overlay_D8A9C4DA_C753_75F7_41E1_608C68AFAE07",
  "this.overlay_EE93D92F_C751_3CAD_41E8_51AE7AE9D7E8",
  "this.overlay_D8E127B1_CA8E_E47D_41E7_8095363DBB0A",
  "this.overlay_C1685B2F_FC82_3434_41D7_ED70A7EA52AF",
  "this.overlay_C3A10091_FC82_74ED_41EA_4201E268B22F"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -14.25,
   "class": "AdjacentPanorama",
   "backwardYaw": 132.02,
   "panorama": "this.panorama_C8267EFE_C4FF_C07E_41CF_496ACBAA40DD",
   "distance": 1
  },
  {
   "yaw": 33.17,
   "class": "AdjacentPanorama",
   "backwardYaw": -122.28,
   "panorama": "this.panorama_C9DD751B_C4FF_C186_4196_4DEB30E1C015",
   "distance": 1
  },
  {
   "yaw": 43.14,
   "class": "AdjacentPanorama",
   "backwardYaw": -114.07,
   "panorama": "this.panorama_C824FB0B_C4FF_4186_41D5_BDBD65AF1796",
   "distance": 1
  }
 ],
 "class": "Panorama",
 "pitch": 0,
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C92BC70F_C4FF_419E_41CD_D07B20DE1D6F_t.jpg",
 "hfovMax": 130
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "hfov": 2.35,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_E813A50D_C6C6_1B91_41E4_4C260036A65E",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/popup_E813A50D_C6C6_1B91_41E4_4C260036A65E_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 1.34,
 "hideEasing": "cubic_out",
 "yaw": 98.31,
 "popupMaxWidth": "95%"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_C8267EFE_C4FF_C07E_41CF_496ACBAA40DD_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_C8267EFE_C4FF_C07E_41CF_496ACBAA40DD_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C8267EFE_C4FF_C07E_41CF_496ACBAA40DD_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C8267EFE_C4FF_C07E_41CF_496ACBAA40DD_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C8267EFE_C4FF_C07E_41CF_496ACBAA40DD_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_C8267EFE_C4FF_C07E_41CF_496ACBAA40DD_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C8267EFE_C4FF_C07E_41CF_496ACBAA40DD_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C8267EFE_C4FF_C07E_41CF_496ACBAA40DD_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C8267EFE_C4FF_C07E_41CF_496ACBAA40DD_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C8267EFE_C4FF_C07E_41CF_496ACBAA40DD_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_C8267EFE_C4FF_C07E_41CF_496ACBAA40DD_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C8267EFE_C4FF_C07E_41CF_496ACBAA40DD_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C8267EFE_C4FF_C07E_41CF_496ACBAA40DD_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_C8267EFE_C4FF_C07E_41CF_496ACBAA40DD_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_C8267EFE_C4FF_C07E_41CF_496ACBAA40DD_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C8267EFE_C4FF_C07E_41CF_496ACBAA40DD_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C8267EFE_C4FF_C07E_41CF_496ACBAA40DD_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C8267EFE_C4FF_C07E_41CF_496ACBAA40DD_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_C8267EFE_C4FF_C07E_41CF_496ACBAA40DD_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C8267EFE_C4FF_C07E_41CF_496ACBAA40DD_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C8267EFE_C4FF_C07E_41CF_496ACBAA40DD_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C8267EFE_C4FF_C07E_41CF_496ACBAA40DD_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_C8267EFE_C4FF_C07E_41CF_496ACBAA40DD_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C8267EFE_C4FF_C07E_41CF_496ACBAA40DD_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C8267EFE_C4FF_C07E_41CF_496ACBAA40DD_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "TOMA 2",
 "mapLocations": [
  {
   "map": "this.map_F5C519CC_C64E_0A96_41DE_468FF3A48B98",
   "x": 588.74,
   "class": "PanoramaMapLocation",
   "angle": 69.72,
   "y": 860.61
  }
 ],
 "id": "panorama_C8267EFE_C4FF_C07E_41CF_496ACBAA40DD",
 "overlays": [
  "this.overlay_D4DE515A_C50D_C186_41DB_6836FE83ED10",
  "this.overlay_D44277F9_C50F_C082_41D6_11652CC6CE78",
  "this.overlay_DCA15C2C_C64E_0997_41C1_015E07446A3D",
  "this.overlay_D81E8539_C65A_1BFE_41E5_AEA5718CFCD4",
  "this.popup_D95E51A8_C65A_1A9F_41B2_3031B6C0768E",
  "this.overlay_D8B4E2A6_C65E_3E93_41C8_23DE8EB0AFF5",
  "this.popup_D9F14EEF_C65E_0691_41D3_34EE603EF11B",
  "this.overlay_D7A624D9_C6D1_15F5_41D0_3CA21FD33E94",
  "this.overlay_EDB5F065_C771_0CDD_41D3_0EDF35E5F52B",
  "this.overlay_DB0E06B0_CA8B_A47A_41D3_6BB54549496E"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 132.02,
   "class": "AdjacentPanorama",
   "backwardYaw": -14.25,
   "panorama": "this.panorama_C92BC70F_C4FF_419E_41CD_D07B20DE1D6F",
   "distance": 1
  },
  {
   "yaw": 31.94,
   "class": "AdjacentPanorama",
   "backwardYaw": -101.78,
   "panorama": "this.panorama_C9DD751B_C4FF_C186_4196_4DEB30E1C015",
   "distance": 1
  }
 ],
 "class": "Panorama",
 "pitch": 0,
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C8267EFE_C4FF_C07E_41CF_496ACBAA40DD_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 71.62,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 10000,
 "initialSequence": "this.sequence_1D4B3C1D_04EC_5E6E_418B_B27C70627F6E",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "id": "camera_1D4B2C1D_04EC_5E6E_418E_69DC6378F72F",
 "idleSequence": "this.sequence_1D4B3C1D_04EC_5E6E_418B_B27C70627F6E",
 "class": "PanoramaCamera"
},
{
 "levels": [
  {
   "url": "media/popup_E60AF953_C65A_0BB2_41E6_55D75C8E6A0C_0_0.jpg",
   "width": 5768,
   "class": "ImageResourceLevel",
   "height": 3845
  },
  {
   "url": "media/popup_E60AF953_C65A_0BB2_41E6_55D75C8E6A0C_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2730
  },
  {
   "url": "media/popup_E60AF953_C65A_0BB2_41E6_55D75C8E6A0C_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1365
  },
  {
   "url": "media/popup_E60AF953_C65A_0BB2_41E6_55D75C8E6A0C_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/popup_E60AF953_C65A_0BB2_41E6_55D75C8E6A0C_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "id": "ImageResource_EE76AB4C_C646_0F96_41C1_EB27600AF12F",
 "class": "ImageResource"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_CB90BE33_C6B1_14B5_41E7_D9EEEC80F671_t.jpg",
 "id": "album_CB90BE33_C6B1_14B5_41E7_D9EEEC80F671",
 "width": 2000,
 "label": "IMG_0839",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_CB90BE33_C6B1_14B5_41E7_D9EEEC80F671.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1333
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_CAB74A15_C6B1_1C72_41B1_40BC613F8936_t.jpg",
 "id": "album_CAB74A15_C6B1_1C72_41B1_40BC613F8936",
 "width": 2000,
 "label": "IMG_0873",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_CAB74A15_C6B1_1C72_41B1_40BC613F8936.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1333
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_CDC696FF_C6B7_15AD_41E6_6EABFE55C69A_t.jpg",
 "id": "album_CDC696FF_C6B7_15AD_41E6_6EABFE55C69A",
 "width": 2000,
 "label": "IMG_0827",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_CDC696FF_C6B7_15AD_41E6_6EABFE55C69A.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 2778
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "hfov": 2.46,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_EC7CA972_C6DE_0A73_41E2_4DF6619CFE5B",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/popup_EC7CA972_C6DE_0A73_41E2_4DF6619CFE5B_0_3.jpg",
    "width": 744,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 5.1,
 "hideEasing": "cubic_out",
 "yaw": 12.56,
 "popupMaxWidth": "95%"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_CD3F0C17_C6B1_147D_41E0_A089339E041A_t.jpg",
 "id": "album_CD3F0C17_C6B1_147D_41E0_A089339E041A",
 "width": 2000,
 "label": "IMG_0840",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_CD3F0C17_C6B1_147D_41E0_A089339E041A.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1333
},
{
 "duration": 400,
 "id": "effect_4CD06BFB_5705_AD47_41BD_DD626E481855",
 "class": "SlideInEffect",
 "from": "left",
 "easing": "quad_in"
},
{
 "levels": [
  {
   "url": "media/popup_D7B5EFEA_C5BF_ADCD_41E2_36D10C16E11A_0_0.jpg",
   "width": 5146,
   "class": "ImageResourceLevel",
   "height": 2979
  },
  {
   "url": "media/popup_D7B5EFEA_C5BF_ADCD_41E2_36D10C16E11A_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2371
  },
  {
   "url": "media/popup_D7B5EFEA_C5BF_ADCD_41E2_36D10C16E11A_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1185
  },
  {
   "url": "media/popup_D7B5EFEA_C5BF_ADCD_41E2_36D10C16E11A_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 592
  },
  {
   "url": "media/popup_D7B5EFEA_C5BF_ADCD_41E2_36D10C16E11A_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 296
  }
 ],
 "id": "ImageResource_D8852EFB_C5C6_0671_41BC_7837149ACB23",
 "class": "ImageResource"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "hfov": 5.65,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_CA3E6698_C5CE_06BF_41E1_6DC8C0E4028E",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/popup_CA3E6698_C5CE_06BF_41E1_6DC8C0E4028E_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -18.19,
 "hideEasing": "cubic_out",
 "yaw": 56.98,
 "popupMaxWidth": "95%"
},
{
 "duration": 400,
 "to": "left",
 "id": "effect_4DE9D19D_5705_5DFD_41C8_A84F2FF661E6",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "initialPosition": {
  "yaw": 101.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 10000,
 "initialSequence": "this.sequence_1E30BCEF_04EC_5FAA_4173_5DF35789CB8A",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "id": "camera_1E30ACEF_04EC_5FAA_4175_CAB7969AE45A",
 "idleSequence": "this.sequence_1E30BCEF_04EC_5FAA_4173_5DF35789CB8A",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -146.83,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 10000,
 "initialSequence": "this.sequence_1D2A7BE1_04EC_59D6_4176_09BE36DBF2D6",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "id": "camera_1D2A6BE1_04EC_59D6_4176_DE2B4855683E",
 "idleSequence": "this.sequence_1D2A7BE1_04EC_59D6_4176_09BE36DBF2D6",
 "class": "PanoramaCamera"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_CD3A8B26_C6B1_1C5F_41DA_3E74DF8D9E36_t.jpg",
 "id": "album_CD3A8B26_C6B1_1C5F_41DA_3E74DF8D9E36",
 "width": 2000,
 "label": "IMG_0841",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_CD3A8B26_C6B1_1C5F_41DA_3E74DF8D9E36.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1333
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_CDCFAAF6_C6B3_3DBF_41BF_F09045E6ACFF_t.jpg",
 "id": "album_CDCFAAF6_C6B3_3DBF_41BF_F09045E6ACFF",
 "width": 2000,
 "label": "IMG_0807",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_CDCFAAF6_C6B3_3DBF_41BF_F09045E6ACFF.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1333
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_CBDDCDF5_C6B7_77BD_41E0_D2633E4E1A6A_t.jpg",
 "id": "album_CBDDCDF5_C6B7_77BD_41E0_D2633E4E1A6A",
 "width": 2000,
 "label": "IMG_0825",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_CBDDCDF5_C6B7_77BD_41E0_D2633E4E1A6A.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 795
},
{
 "levels": [
  {
   "url": "media/popup_CA3E6698_C5CE_06BF_41E1_6DC8C0E4028E_0_0.jpg",
   "width": 6000,
   "class": "ImageResourceLevel",
   "height": 4000
  },
  {
   "url": "media/popup_CA3E6698_C5CE_06BF_41E1_6DC8C0E4028E_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2730
  },
  {
   "url": "media/popup_CA3E6698_C5CE_06BF_41E1_6DC8C0E4028E_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1365
  },
  {
   "url": "media/popup_CA3E6698_C5CE_06BF_41E1_6DC8C0E4028E_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/popup_CA3E6698_C5CE_06BF_41E1_6DC8C0E4028E_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "id": "ImageResource_D89B2EF6_C5C6_0673_41CF_26C6EC758DF2",
 "class": "ImageResource"
},
{
 "levels": [
  {
   "url": "media/popup_D5B2A5D0_C5CA_FA8F_41CA_9A62A7682858_0_0.jpg",
   "width": 6000,
   "class": "ImageResourceLevel",
   "height": 4000
  },
  {
   "url": "media/popup_D5B2A5D0_C5CA_FA8F_41CA_9A62A7682858_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2730
  },
  {
   "url": "media/popup_D5B2A5D0_C5CA_FA8F_41CA_9A62A7682858_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1365
  },
  {
   "url": "media/popup_D5B2A5D0_C5CA_FA8F_41CA_9A62A7682858_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/popup_D5B2A5D0_C5CA_FA8F_41CA_9A62A7682858_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "id": "ImageResource_D886EEF8_C5C6_067F_41DE_A627444679F2",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": 165.75,
  "hfov": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 10000,
 "initialSequence": "this.sequence_1FA4AE70_04EC_5AB6_4185_28B85CA10967",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "id": "camera_1FA4FE70_04EC_5AB6_417A_1097572955AE",
 "idleSequence": "this.sequence_1FA4AE70_04EC_5AB6_4185_28B85CA10967",
 "class": "PanoramaCamera"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "hfov": 3.96,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_EF863374_C6C6_1E77_41DA_E95E79086837",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/popup_EF863374_C6C6_1E77_41DA_E95E79086837_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -2.4,
 "hideEasing": "cubic_out",
 "yaw": 47.12,
 "popupMaxWidth": "95%"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_CB87D58F_C6B3_746D_41DE_EBC8F06B9351_t.jpg",
 "id": "album_CB87D58F_C6B3_746D_41DE_EBC8F06B9351",
 "width": 2000,
 "label": "IMG_0870",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_CB87D58F_C6B3_746D_41DE_EBC8F06B9351.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1333
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_CB003D98_C6B7_F473_41DB_2B45AE379536_t.jpg",
 "id": "album_CB003D98_C6B7_F473_41DB_2B45AE379536",
 "width": 2000,
 "label": "IMG_0828",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_CB003D98_C6B7_F473_41DB_2B45AE379536.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 2752
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_CB8EC9FF_C6B3_1FAD_41E4_5B10552E9EF5_t.jpg",
 "id": "album_CB8EC9FF_C6B3_1FAD_41E4_5B10552E9EF5",
 "width": 2000,
 "label": "IMG_0813",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_CB8EC9FF_C6B3_1FAD_41E4_5B10552E9EF5.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1333
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_E675AC4B_C74F_74D6_41C5_C55FDC7B9BBC_t.jpg",
 "id": "photo_E675AC4B_C74F_74D6_41C5_C55FDC7B9BBC",
 "width": 960,
 "label": "397231_309899002390394_448733591_n",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/photo_E675AC4B_C74F_74D6_41C5_C55FDC7B9BBC.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 710
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "hfov": 2.03,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_DD91E230_C64A_398F_41E1_1AB14E2A5CC7",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/popup_DD91E230_C64A_398F_41E1_1AB14E2A5CC7_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 591
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -4.12,
 "hideEasing": "cubic_out",
 "yaw": 35.36,
 "popupMaxWidth": "95%"
},
{
 "initialPosition": {
  "yaw": 170.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 10000,
 "initialSequence": "this.sequence_1F49BE15_04EC_5A79_416E_7788AB407327",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "id": "camera_1F498E15_04EC_5A79_418D_E81C6B20C93E",
 "idleSequence": "this.sequence_1F49BE15_04EC_5A79_416E_7788AB407327",
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_FF266924_C65A_0B96_41D0_60AB8A9ABB15.ogg",
  "mp3Url": "media/audio_FF266924_C65A_0B96_41D0_60AB8A9ABB15.mp3"
 },
 "id": "audio_FF266924_C65A_0B96_41D0_60AB8A9ABB15",
 "data": {
  "label": "Transcendence"
 }
},
{
 "progressBarBorderSize": 0,
 "id": "MainViewer",
 "left": 0,
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "minHeight": 50,
 "toolTipFontFamily": "Arial",
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "borderSize": 0,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipBackgroundColor": "#F6F6F6",
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 0,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "toolTipShadowVerticalLength": 0,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "progressBorderRadius": 0,
 "borderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "top": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 5,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "class": "ViewerArea",
 "paddingTop": 0,
 "progressBorderColor": "#000000",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipFontSize": "18px",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_14F80305_1BED_F1EE_4193_B39F49D6928C",
 "left": 38,
 "width": 413,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "visible",
 "children": [
  "this.Image_D11D2773_C206_7714_41E3_7BBA45F51C47"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "top": 9,
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "height": 116,
 "minWidth": 1,
 "layout": "horizontal",
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 5,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--STICKER"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0C434D49_0334_FED6_417F_78ADD8B2D4F6",
 "left": "0.06%",
 "width": 330,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "children": [
  "this.Container_0C438D48_0334_FED6_4187_7AAF8DD38E8D",
  "this.Container_0C43CD48_0334_FED6_4173_3A6EA8849449"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "verticalAlign": "top",
 "height": "100%",
 "minWidth": 1,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--- LEFT PANEL 2"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "backgroundOpacity": 0,
 "width": 115.05,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "height": 641,
 "minWidth": 1,
 "layout": "absolute",
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-- SETTINGS"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_04FE7C2D_1216_75ED_4197_E539B3CD3A95",
 "left": "0%",
 "children": [
  "this.Container_04FF5C2C_1216_7593_41B2_1B5CFADF351D",
  "this.Container_04FF9C2D_1216_75ED_41A8_E3495D8F554E"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_04FE7C2D_1216_75ED_4197_E539B3CD3A95, false, 0, null, null, false)",
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "--INFO"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--PANORAMA LIST"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_1812EA3F_1663_8BEF_41AF_0A4CCC089B5F",
 "left": "0%",
 "children": [
  "this.Container_1813AA3E_1663_8BF1_41A2_CA5EE3718362",
  "this.Container_1812AA3F_1663_8BEF_41A4_02F566B1BC6D"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_1812EA3F_1663_8BEF_41AF_0A4CCC089B5F, false, 0, null, null, false)",
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--LOCATION"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--FLOORPLAN"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0DEC3FED_12FA_D26D_419F_4067E8C6DA08",
 "left": "0%",
 "children": [
  "this.Container_0DEF7FEC_12FA_D293_4197_332CA20EDBCF",
  "this.Container_0DEC1FED_12FA_D26D_41AE_8CE7699C44D8"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--CONTACT"
 },
 "shadow": false,
 "visible": false
},
{
 "id": "veilPopupPanorama",
 "left": 0,
 "backgroundOpacity": 0.55,
 "right": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 0,
 "top": 0,
 "bottom": 0,
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 0,
 "showEffect": {
  "duration": 350,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "borderSize": 0,
 "class": "UIComponent",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "data": {
  "name": "UIComponent8143"
 },
 "shadow": false,
 "visible": false
},
{
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "backgroundOpacity": 1,
 "right": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColorRatios": [],
 "propagateClick": false,
 "minHeight": 0,
 "top": 0,
 "bottom": 0,
 "backgroundColor": [],
 "minWidth": 0,
 "borderSize": 0,
 "class": "ZoomImage",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "scaleMode": "custom",
 "data": {
  "name": "ZoomImage8144"
 },
 "shadow": false,
 "visible": false
},
{
 "textDecoration": "none",
 "fontFamily": "Arial",
 "horizontalAlign": "center",
 "id": "closeButtonPopupPanorama",
 "backgroundOpacity": 0.3,
 "shadowColor": "#000000",
 "right": 10,
 "iconHeight": 20,
 "paddingRight": 5,
 "paddingLeft": 5,
 "borderRadius": 0,
 "iconColor": "#000000",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "propagateClick": false,
 "minHeight": 0,
 "top": 10,
 "verticalAlign": "middle",
 "rollOverIconColor": "#666666",
 "pressedIconColor": "#888888",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderColor": "#000000",
 "minWidth": 0,
 "mode": "push",
 "showEffect": {
  "duration": 350,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "class": "CloseButton",
 "paddingTop": 5,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 5,
 "label": "",
 "fontStyle": "normal",
 "borderSize": 0,
 "iconLineWidth": 5,
 "gap": 5,
 "layout": "horizontal",
 "data": {
  "name": "CloseButton8145"
 },
 "fontSize": "1.29vmin",
 "shadow": false,
 "iconWidth": 20,
 "visible": false,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_0C430D49_0334_FED6_4163_9F75278C70D8",
 "backgroundOpacity": 0,
 "width": 30,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 30,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_0C430D49_0334_FED6_4163_9F75278C70D8_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_0C430D49_0334_FED6_4163_9F75278C70D8.png",
 "data": {
  "name": "IconButton Sound"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "backgroundOpacity": 0,
 "width": 58,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "data": {
  "name": "IconButton MUTE"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_0C43ED49_0334_FED6_4177_B2E23B39B26B",
 "backgroundOpacity": 0,
 "width": 30,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 30,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_0C43ED49_0334_FED6_4177_B2E23B39B26B_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_0C43ED49_0334_FED6_4177_B2E23B39B26B.png",
 "data": {
  "name": "IconButton Fullscreen"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "backgroundOpacity": 0,
 "width": 58,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 10000,
 "movements": [
  {
   "targetYaw": -57.03,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -36.18,
   "pitchSpeed": 26.25,
   "easing": "cubic_in_out",
   "yawSpeed": 51.74
  },
  {
   "targetYaw": -121.47,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -98.6,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.2,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -31.53,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -6.72,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -5.4,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.96,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 20.73,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 40.32,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.95,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 79.51,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.2,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 107.4,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -7.22,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 152.62,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 1.32,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_1F6A8E33_04EC_5AB9_418F_679690EAB294",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 10000,
 "movements": [
  {
   "targetYaw": -36.05,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -5.21,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -21.23,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 34.79,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 0.63,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.2,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_EEF1A4AD_C753_3452_41CC_47B618F4E39E",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 10000,
 "movements": [
  {
   "targetYaw": -121.47,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -98.6,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.2,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -31.53,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -6.72,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -5.4,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.96,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 20.73,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 40.32,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.95,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 79.51,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.2,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 107.4,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -7.22,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 152.62,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 1.32,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_EEF3007C_C753_0CB3_41E6_2AC2AD2AAC91",
 "restartMovementOnUserInteraction": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.04,
   "yaw": 94.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C827BEB9_C4FD_4082_41DA_C1F5183B16C3_1_HS_0_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.48
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Punto 4",
   "click": "this.startPanoramaWithCamera(this.panorama_C9D1609D_C4FE_C082_41E8_5B5168C3383D, this.camera_1E30ACEF_04EC_5FAA_4175_CAB7969AE45A); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 15.04,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C827BEB9_C4FD_4082_41DA_C1F5183B16C3_1_HS_0_0.png",
      "width": 418,
      "class": "ImageResourceLevel",
      "height": 365
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.48,
   "yaw": 94.57
  }
 ],
 "id": "overlay_D0F69D0C_C507_4182_41E7_98A842D5375E",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.47,
   "yaw": 14.6,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C827BEB9_C4FD_4082_41DA_C1F5183B16C3_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.42
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Punto 8",
   "click": "this.startPanoramaWithCamera(this.panorama_C9E2F2E5_C4FD_C082_41E7_C6FF4D799690, this.camera_1E727D29_04EC_5EA9_4180_45343B87562E); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 12.47,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C827BEB9_C4FD_4082_41DA_C1F5183B16C3_1_HS_1_0.png",
      "width": 348,
      "class": "ImageResourceLevel",
      "height": 371
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.42,
   "yaw": 14.6
  }
 ],
 "id": "overlay_D38F378F_C505_409E_41E0_CFACFC6AB5FB",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.3,
   "yaw": -153.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C827BEB9_C4FD_4082_41DA_C1F5183B16C3_1_HS_2_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.32
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Punto 6",
   "click": "this.startPanoramaWithCamera(this.panorama_C9E4B9D4_C4FD_4082_41E5_B1AD8C2EDA9F, this.camera_1E50ED0B_04EC_5E6A_418A_A74A9935C7E3); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 13.3,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C827BEB9_C4FD_4082_41DA_C1F5183B16C3_1_HS_2_0.png",
      "width": 369,
      "class": "ImageResourceLevel",
      "height": 300
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.32,
   "yaw": -153.5
  }
 ],
 "id": "overlay_CA614159_C5B4_92CE_41DF_B4A5174C7664",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.39,
   "yaw": 38.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C827BEB9_C4FD_4082_41DA_C1F5183B16C3_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.97
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Punto 9",
   "click": "this.startPanoramaWithCamera(this.panorama_C827F766_C4FD_C18E_41E1_7617056AAA7D, this.camera_1E922D47_04EC_5ED9_4185_5E3703A6B764); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C827BEB9_C4FD_4082_41DA_C1F5183B16C3_1_HS_3_0.png",
      "width": 150,
      "class": "ImageResourceLevel",
      "height": 150
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.97,
   "yaw": 38.41
  }
 ],
 "id": "overlay_D52DB2E6_C5B7_F7C5_41BE_F02276355C45",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.25,
   "yaw": -27.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C827BEB9_C4FD_4082_41DA_C1F5183B16C3_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.87
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_E43CBD87_C64E_0A91_41E1_6384CAC51A86, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_E20F3363_C64A_1F92_41E0_F9C4B9C07AB6, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D38554C3_F586_7C6D_41E7_58FA7358D8C8",
   "pitch": 2.87,
   "hfov": 2.25,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -27.43,
   "distance": 100
  }
 ],
 "id": "overlay_E583F3B2_C64E_1EF3_41C5_F1B7F3BA9F76",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.82,
   "yaw": -57.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C827BEB9_C4FD_4082_41DA_C1F5183B16C3_1_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -37.12
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_E0163729_C64E_079E_41DE_E6324211F338, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_EA60B314_C64E_1FB6_41D9_4916032A9102, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D38514C3_F586_7C6D_41DC_EA915B622E84",
   "pitch": -37.12,
   "hfov": 13.82,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -57.03,
   "distance": 100
  }
 ],
 "id": "overlay_E2EFC356_C64E_3FB3_41E8_9121AA305A56",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "bleachingDistance": 0.4,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 17.4,
 "bleaching": 0.7,
 "id": "overlay_D75F3D55_C6D7_14FD_41E0_367D7CA02631",
 "yaw": 169.7
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 10000,
 "movements": [
  {
   "targetYaw": -91.44,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1,
   "pitchSpeed": 31.5,
   "easing": "cubic_in_out",
   "yawSpeed": 62.28
  },
  {
   "targetYaw": 2.89,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 7.85,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -0.88,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.31,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -30.02,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.45,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -1.13,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.2,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_1D63AC40_04EC_5ED6_417E_D1F3790B84B8",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 10000,
 "movements": [
  {
   "targetYaw": 58.28,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -20.1,
   "pitchSpeed": 33.28,
   "easing": "cubic_in_out",
   "yawSpeed": 65.87
  },
  {
   "targetYaw": 94.58,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -16.27,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 106.14,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -13.25,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 123.73,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -7.47,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 56.4,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 2.58,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 7.91,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 3.58,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -95.84,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 12.62,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -155.38,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 10.36,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -41.07,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.45,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_1F8AAE51_04EC_5AF6_4180_EA63BE4B4DA9",
 "restartMovementOnUserInteraction": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.22,
   "yaw": 93.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C9E4B9D4_C4FD_4082_41E5_B1AD8C2EDA9F_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.74
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C82494D2_C4FE_C086_41D3_9F06A8CD9DE5, this.camera_1D639C40_04EC_5ED6_4176_66B5735476C8); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 12.22,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C9E4B9D4_C4FD_4082_41E5_B1AD8C2EDA9F_1_HS_0_0.png",
      "width": 345,
      "class": "ImageResourceLevel",
      "height": 308
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.74,
   "yaw": 93.17
  }
 ],
 "id": "overlay_D6614ADE_C51F_40BE_41D8_4B907D2E792E",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.58,
   "yaw": -0.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C9E4B9D4_C4FD_4082_41E5_B1AD8C2EDA9F_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.21
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C827BEB9_C4FD_4082_41DA_C1F5183B16C3, this.camera_1D9E2C5D_04EC_5EE9_4186_FAA4F545984E); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 10.58,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C9E4B9D4_C4FD_4082_41E5_B1AD8C2EDA9F_1_HS_1_0.png",
      "width": 295,
      "class": "ImageResourceLevel",
      "height": 311
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.21,
   "yaw": -0.69
  }
 ],
 "id": "overlay_D17E988A_C51B_4086_41D7_1079FBBCFD13",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.59,
   "yaw": -166.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C9E2F2E5_C4FD_C082_41E7_C6FF4D799690_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.46
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Punto 7",
   "click": "this.startPanoramaWithCamera(this.panorama_C827BEB9_C4FD_4082_41DA_C1F5183B16C3, this.camera_1F6AEE33_04EC_5AB9_4186_9E2120948443); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 10.59,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C9E2F2E5_C4FD_C082_41E7_C6FF4D799690_1_HS_0_0.png",
      "width": 295,
      "class": "ImageResourceLevel",
      "height": 311
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.46,
   "yaw": -166.25
  }
 ],
 "id": "overlay_D0C0A55F_C506_C1BE_41D5_5B128886C673",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.03,
   "yaw": 136.53,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C9E2F2E5_C4FD_C082_41E7_C6FF4D799690_1_HS_1_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.48
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Punto 4",
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 15.03,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C9E2F2E5_C4FD_C082_41E7_C6FF4D799690_1_HS_1_0.png",
      "width": 418,
      "class": "ImageResourceLevel",
      "height": 365
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.48,
   "yaw": 136.53
  }
 ],
 "id": "overlay_D0DB5B45_C505_4182_41D5_37A6FF620389",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.33,
   "yaw": 56.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C9E2F2E5_C4FD_C082_41E7_C6FF4D799690_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.49
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Punto 8",
   "click": "this.startPanoramaWithCamera(this.panorama_C827F766_C4FD_C18E_41E1_7617056AAA7D, this.camera_1F8A8E51_04EC_5AF6_417E_A1473B5AEB14); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 11.33,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C9E2F2E5_C4FD_C082_41E7_C6FF4D799690_1_HS_2_0.png",
      "width": 315,
      "class": "ImageResourceLevel",
      "height": 300
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.49,
   "yaw": 56.51
  }
 ],
 "id": "overlay_CB9FAE19_C5AC_EE4E_41E5_42E7CE147CCE",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.36,
   "yaw": -51.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C9E2F2E5_C4FD_C082_41E7_C6FF4D799690_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.9
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_DD39A4D0_C64A_1A8E_41BB_92F50121E7AB, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_E58060AC_C64A_3A96_41E4_333FE94842EA, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D384F4C5_F586_7C75_41E9_AFE155F54B5B",
   "pitch": -30.9,
   "hfov": 10.36,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -51.73,
   "distance": 100
  }
 ],
 "id": "overlay_DFEF9030_C64A_198F_41DA_102F842C0199",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.03,
   "yaw": 35.36,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C9E2F2E5_C4FD_C082_41E7_C6FF4D799690_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.12
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_DD91E230_C64A_398F_41E1_1AB14E2A5CC7, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_E58270AD_C64A_3A96_41C2_90011E7351E3, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D384B4C5_F586_7C75_41EC_9BC77EB666DC",
   "pitch": -4.12,
   "hfov": 2.03,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 35.36,
   "distance": 100
  }
 ],
 "id": "overlay_DCA01246_C64A_7992_41AE_49A706404C6C",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.83,
   "yaw": 21.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C9E2F2E5_C4FD_C082_41E7_C6FF4D799690_1_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.43
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_879A87E7_C64A_0692_41DE_4C32FAFD1B23, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_C99209C1_C6D3_3FD5_41D4_B08A0A6E379C, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D39B44C5_F586_7C75_4185_9390CF6F74EB",
   "pitch": -6.43,
   "hfov": 2.83,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 21.14,
   "distance": 100
  }
 ],
 "id": "overlay_EEB77F08_C6CA_079F_41DC_148213E6433C",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "bleachingDistance": 0.4,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 32.97,
 "bleaching": 0.7,
 "id": "overlay_D75EC44C_C6D7_74D3_41E3_023CD12C9E52",
 "yaw": -156.13
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 10000,
 "movements": [
  {
   "targetYaw": -7.46,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 4.27,
   "pitchSpeed": 44.15,
   "easing": "cubic_in_out",
   "yawSpeed": 87.71
  },
  {
   "targetYaw": 40.32,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -66.45,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.82,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -118.7,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.31,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -7.16,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 4.08,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_1DF5ACB4_04EC_5FBF_416B_55D1345D1285",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 10000,
 "movements": [
  {
   "targetYaw": 102.37,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.82,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 147.09,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.95,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 170.45,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 9.61,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -176.99,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 12.12,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -131.77,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 3.33,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_EEF5A83E_C753_FCAF_41D7_14FD2F06BD1F",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 10000,
 "movements": [
  {
   "targetYaw": 0.75,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.26,
   "pitchSpeed": 78.63,
   "easing": "cubic_in_out",
   "yawSpeed": 156.98
  },
  {
   "targetYaw": -36.05,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -5.21,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -21.23,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 34.79,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 0.63,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.2,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_1E50FD0C_04EC_5E6E_418F_97DDCEFDF044",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 10000,
 "movements": [
  {
   "targetYaw": 58.28,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -20.1,
   "pitchSpeed": 40.07,
   "easing": "cubic_in_out",
   "yawSpeed": 79.5
  },
  {
   "targetYaw": 94.58,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -16.27,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 106.14,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -13.25,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 123.73,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -7.47,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 56.4,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 2.58,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 7.91,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 3.58,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -95.84,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 12.62,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -155.38,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 10.36,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -41.07,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.45,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_1E923D47_04EC_5ED9_418A_F198DA4AA307",
 "restartMovementOnUserInteraction": true
},
{
 "items": [
  {
   "media": "this.album_CD662833_C6B3_1CB5_41D6_9066236A2086",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.42",
     "class": "PhotoCameraPosition",
     "y": "0.37",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_CBDD333C_C6B3_0CB3_41E7_310D1BFB3259",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.55",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_CDC1DFF3_C6B3_33B5_41D9_CE9A0D85CF20",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.46",
     "class": "PhotoCameraPosition",
     "y": "0.63",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_CA2126CE_C6B3_15EF_41C6_B4E109B67429",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.67",
     "class": "PhotoCameraPosition",
     "y": "0.56",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_CA235DD9_C6B3_17F5_41D4_F8FB8516DB9C",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.57",
     "class": "PhotoCameraPosition",
     "y": "0.30",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_CB08260E_C6B3_746F_41B2_7C5706477F11",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.31",
     "class": "PhotoCameraPosition",
     "y": "0.61",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_CB073E2C_C6B3_7453_41C7_B87366FFC112",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.37",
     "class": "PhotoCameraPosition",
     "y": "0.52",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_CACEB777_C6B3_14BD_41E6_9EDE818425D7",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.72",
     "class": "PhotoCameraPosition",
     "y": "0.73",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_CB77A15A_C6B3_0CF7_41E6_87E739C5A12B",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.69",
     "class": "PhotoCameraPosition",
     "y": "0.67",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_CDCFAAF6_C6B3_3DBF_41BF_F09045E6ACFF",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.70",
     "class": "PhotoCameraPosition",
     "y": "0.27",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_CA21A633_C6B3_14B5_41E6_90A1814570F4",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.57",
     "class": "PhotoCameraPosition",
     "y": "0.49",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_CA5E013B_C6B3_0CB6_41E3_882B37B785E1",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.38",
     "class": "PhotoCameraPosition",
     "y": "0.54",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_CBB17D2C_C6B3_F453_41D3_EC3B0B9FE358",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.68",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_CB8EC9FF_C6B3_1FAD_41E4_5B10552E9EF5",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.58",
     "class": "PhotoCameraPosition",
     "y": "0.75",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_C8B66AEC_C6B1_1DD2_41E8_3AA639FFE66C",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.59",
     "class": "PhotoCameraPosition",
     "y": "0.25",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_CBEACB2B_C6B1_3C55_41BA_9C7B7A251B5A",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.55",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_CD2E7DD8_C6B1_17F2_41E8_7F71647A9DB1",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.34",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_CD324C9F_C6B1_146D_41B8_9139A2DF802C",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.29",
     "class": "PhotoCameraPosition",
     "y": "0.39",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_CDCB62B5_C6B7_0DB2_41C1_9A4CDD2CD8B2",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.38",
     "class": "PhotoCameraPosition",
     "y": "0.29",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_CD08354C_C6B7_34D3_41E4_AC80AB29358C",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.43",
     "class": "PhotoCameraPosition",
     "y": "0.30",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_C893B9DB_C6B7_1FF6_41E1_CB693C59E444",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.60",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_CBDDCDF5_C6B7_77BD_41E0_D2633E4E1A6A",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.43",
     "class": "PhotoCameraPosition",
     "y": "0.68",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_CADF7166_C6B7_0CDF_41E8_CDD619444D15",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.26",
     "class": "PhotoCameraPosition",
     "y": "0.59",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_CDC696FF_C6B7_15AD_41E6_6EABFE55C69A",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.30",
     "class": "PhotoCameraPosition",
     "y": "0.30",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_CB003D98_C6B7_F473_41DB_2B45AE379536",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.53",
     "class": "PhotoCameraPosition",
     "y": "0.43",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_C80503CE_C6B7_33EF_41DD_6E5428BC9B25",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.66",
     "class": "PhotoCameraPosition",
     "y": "0.63",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_CA1508CF_C6B7_1DED_419B_D5BFED27A92A",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.36",
     "class": "PhotoCameraPosition",
     "y": "0.57",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_CB199EAA_C6B7_7457_41E3_59CE2E700BE5",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.33",
     "class": "PhotoCameraPosition",
     "y": "0.65",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_C8A6B52E_C6B7_34AC_41DE_A6C4A6ECBAE0",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.43",
     "class": "PhotoCameraPosition",
     "y": "0.72",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_C8354D5D_C6B7_14ED_41E0_16CD08E2771F",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.64",
     "class": "PhotoCameraPosition",
     "y": "0.73",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_CB9714E0_C6B1_15D3_41DA_368DB91D4861",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.34",
     "class": "PhotoCameraPosition",
     "y": "0.64",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_CA343BD5_C6B1_33F2_41E8_4B7744659681",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.46",
     "class": "PhotoCameraPosition",
     "y": "0.43",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_C83F458E_C6B1_746E_41AB_219D4E0F87C2",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.26",
     "class": "PhotoCameraPosition",
     "y": "0.28",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_CB90BE33_C6B1_14B5_41E7_D9EEEC80F671",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.53",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_CD3F0C17_C6B1_147D_41E0_A089339E041A",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.43",
     "class": "PhotoCameraPosition",
     "y": "0.40",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_CD3A8B26_C6B1_1C5F_41DA_3E74DF8D9E36",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.49",
     "class": "PhotoCameraPosition",
     "y": "0.71",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_CB8496A3_C6B1_1456_41B2_9D36FFD3A876",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.57",
     "class": "PhotoCameraPosition",
     "y": "0.27",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_CBC39476_C6B1_14BF_41AB_70CEFA2C15E9",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.58",
     "class": "PhotoCameraPosition",
     "y": "0.63",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_CD15F01F_C6B1_0C6E_4199_5C267728934C",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.74",
     "class": "PhotoCameraPosition",
     "y": "0.44",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_C8B5F013_C6B3_0C76_41D4_BC607BA25336",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.63",
     "class": "PhotoCameraPosition",
     "y": "0.37",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_CA502F24_C6B3_7453_41B7_0FDBB42242A0",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.70",
     "class": "PhotoCameraPosition",
     "y": "0.33",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_CD041178_C6B3_0CB2_41A9_7A5D46262A5C",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.46",
     "class": "PhotoCameraPosition",
     "y": "0.56",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_C89410B6_C6B3_0DBF_41AD_D230A0F79A59",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.30",
     "class": "PhotoCameraPosition",
     "y": "0.43",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_CA9671E0_C6B3_0FD2_41DD_BAA7542C1DB9",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.29",
     "class": "PhotoCameraPosition",
     "y": "0.32",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_CA1EE26D_C6B3_0CAD_41AC_9385B0596B6D",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.72",
     "class": "PhotoCameraPosition",
     "y": "0.42",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_CD2A968C_C6B1_1453_41E0_F3E069435A94",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.42",
     "class": "PhotoCameraPosition",
     "y": "0.41",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_CD1089F3_C6B1_3FB6_41CB_1C7563F0B1F6",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.32",
     "class": "PhotoCameraPosition",
     "y": "0.44",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_CBDE4AB6_C6B1_FDBE_41E4_32B6E7E6B6D5",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.54",
     "class": "PhotoCameraPosition",
     "y": "0.73",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_CB0E1C1E_C6B1_346F_41B0_FD6D91C77467",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.49",
     "class": "PhotoCameraPosition",
     "y": "0.35",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_CA560910_C6B0_FC72_41DB_C4381087C563",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.25",
     "class": "PhotoCameraPosition",
     "y": "0.51",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_CB82F2E5_C6BF_0DDD_41DE_AC08A6A3F4A2",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.37",
     "class": "PhotoCameraPosition",
     "y": "0.61",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_C8B3FCF4_C6BF_F5B2_41E2_7A5C6A87A738",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.67",
     "class": "PhotoCameraPosition",
     "y": "0.69",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_CD0DE787_C6B1_145D_41C8_14988D677F52",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.59",
     "class": "PhotoCameraPosition",
     "y": "0.45",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_CAFB8A0E_C6B1_1C6F_41A1_5950D6035C55",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.60",
     "class": "PhotoCameraPosition",
     "y": "0.69",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_CB86DC88_C6B0_F453_41E7_16F57BD9146F",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.39",
     "class": "PhotoCameraPosition",
     "y": "0.42",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_CD0268CB_C6B3_1DD6_41E2_5804F20F58AA",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.57",
     "class": "PhotoCameraPosition",
     "y": "0.48",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_CD7A26B3_C6B3_35B6_41E8_92428D0CBE6C",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.51",
     "class": "PhotoCameraPosition",
     "y": "0.41",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_CBB3F8FE_C6B3_1DAF_41E7_E80DFC329A38",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.28",
     "class": "PhotoCameraPosition",
     "y": "0.42",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_CB87D58F_C6B3_746D_41DE_EBC8F06B9351",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.68",
     "class": "PhotoCameraPosition",
     "y": "0.58",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_C8F60194_C6B3_0C73_41E4_B028D371340E",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.39",
     "class": "PhotoCameraPosition",
     "y": "0.49",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_C8A4E4C6_C6B1_15DF_41E2_26847DB6704E",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.63",
     "class": "PhotoCameraPosition",
     "y": "0.55",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_CAB74A15_C6B1_1C72_41B1_40BC613F8936",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.25",
     "class": "PhotoCameraPosition",
     "y": "0.65",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_CAE168BB_C6B1_3DB6_41D6_AA7BB11A413B",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.59",
     "class": "PhotoCameraPosition",
     "y": "0.31",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_CAF363E5_C6B1_13DD_41E4_6AB157F897C4",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.73",
     "class": "PhotoCameraPosition",
     "y": "0.63",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_CBB31B4B_C6B7_1CD6_41CB_A053E4C7A082",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.31",
     "class": "PhotoCameraPosition",
     "y": "0.41",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_CD601A7C_C6B7_1CB3_41D9_EFADB8718C99",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.71",
     "class": "PhotoCameraPosition",
     "y": "0.45",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  }
 ],
 "id": "album_D4F164FE_C5DF_FA73_41BC_3482EC55C164_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.86,
   "yaw": -101.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C9DD751B_C4FF_C186_4196_4DEB30E1C015_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.67
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Maquina 151 - Frente",
   "click": "this.startPanoramaWithCamera(this.panorama_C8267EFE_C4FF_C07E_41CF_496ACBAA40DD, this.camera_1D5A6BFF_04EC_59AA_4183_5BA60F846D55); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 10.86,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C9DD751B_C4FF_C186_4196_4DEB30E1C015_1_HS_0_0.png",
      "width": 302,
      "class": "ImageResourceLevel",
      "height": 357
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.67,
   "yaw": -101.78
  }
 ],
 "id": "overlay_D732891E_C50D_C1BE_41BE_ADE1932A02ED",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.17,
   "yaw": -122.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C9DD751B_C4FF_C186_4196_4DEB30E1C015_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.2
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Estacionamiento",
   "click": "this.startPanoramaWithCamera(this.panorama_C92BC70F_C4FF_419E_41CD_D07B20DE1D6F, this.camera_1D2A6BE1_04EC_59D6_4176_DE2B4855683E); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C9DD751B_C4FF_C186_4196_4DEB30E1C015_1_HS_1_0.png",
      "width": 227,
      "class": "ImageResourceLevel",
      "height": 231
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.2,
   "yaw": -122.28
  }
 ],
 "id": "overlay_D1F5E99D_C50D_4082_41E3_626A929DF186",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.85,
   "yaw": 64.35,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C9DD751B_C4FF_C186_4196_4DEB30E1C015_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.99
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C824FB0B_C4FF_4186_41D5_BDBD65AF1796, this.camera_1D4B2C1D_04EC_5E6E_418E_69DC6378F72F); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.85,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C9DD751B_C4FF_C186_4196_4DEB30E1C015_1_HS_2_0.png",
      "width": 191,
      "class": "ImageResourceLevel",
      "height": 199
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.99,
   "yaw": 64.35
  }
 ],
 "id": "overlay_D6359067_C507_3F8E_41AB_798ED41DEB27",
 "data": {
  "label": "Image"
 }
},
{
 "yaw": -83.46,
 "blending": 0,
 "id": "overlay_DCC8C2EE_C64E_3E93_41E6_9CB31092AEE6",
 "roll": -1.74,
 "loop": true,
 "class": "VideoPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/overlay_DCC8C2EE_C64E_3E93_41E6_9CB31092AEE6_t.jpg",
    "width": 700,
    "class": "ImageResourceLevel",
    "height": 880
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 27.07,
 "chromaSmoothing": 0.36,
 "rotationX": 51.57,
 "chromaColor": "#1CCD25",
 "autoplay": true,
 "vfov": 25.34,
 "rotationY": -1.38,
 "useHandCursor": true,
 "hfov": 20.18,
 "enabledInCardboard": true,
 "distance": 50,
 "videoVisibleOnStop": false,
 "chromaThreshold": 0.07,
 "data": {
  "label": "Video"
 },
 "video": {
  "width": 700,
  "mp4Url": "media/video_CAABBB3C_C46D_3C51_41D7_31BA83D3BCD9.mp4",
  "class": "VideoResource",
  "height": 880
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.35,
   "yaw": -6.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C9DD751B_C4FF_C186_4196_4DEB30E1C015_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 18.19
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_DBDE0FEC_C646_0697_4199_7812456A1D60, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_EE49AB4C_C646_0F96_41E0_3C743F746E73, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D389A3F3_F586_742D_41C2_4EB54DD6A1E2",
   "pitch": 18.19,
   "hfov": 5.35,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -6.45,
   "distance": 100
  }
 ],
 "id": "overlay_E7A9CB5E_C646_0FB3_4196_C87BAAD2C8F6",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.12,
   "yaw": 7.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C9DD751B_C4FF_C186_4196_4DEB30E1C015_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 24.57
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_E60AF953_C65A_0BB2_41E6_55D75C8E6A0C, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_EE76AB4C_C646_0F96_41C1_EB27600AF12F, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D38863F3_F586_742D_41E8_CEF02D6FB631",
   "pitch": 24.57,
   "hfov": 5.12,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 7.72,
   "distance": 100
  }
 ],
 "id": "overlay_D8DBB7C1_C65A_0691_41D8_1E2FF38ECFBF",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.53,
   "yaw": -76.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C9DD751B_C4FF_C186_4196_4DEB30E1C015_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.94
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_D977878C_C65A_0697_41D9_D36A4FDB9E22, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_EE745B4D_C646_0F96_41E2_0A142F02CCD3, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D38833F4_F586_742B_41CA_A0AB6C7D14BB",
   "pitch": -10.94,
   "hfov": 5.53,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -76.01,
   "distance": 100
  }
 ],
 "id": "overlay_D8B7B4AB_C65A_1A91_41D6_F487F117FD20",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.61,
   "yaw": 17.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C9DD751B_C4FF_C186_4196_4DEB30E1C015_1_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.41
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_E20E2003_C646_1991_41E4_D04255D1A62D, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_E20DA35D_C64A_1FB6_41B3_B689C80843B5, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D388F3F4_F586_742B_41CB_A6DF3E6991AE",
   "pitch": 5.41,
   "hfov": 5.61,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 17.27,
   "distance": 100
  }
 ],
 "id": "overlay_E4F7046D_C646_1996_41CD_A2D7EB33ADDE",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.96,
   "yaw": 47.12,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C9DD751B_C4FF_C186_4196_4DEB30E1C015_1_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.4
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_EF863374_C6C6_1E77_41DA_E95E79086837, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_FA5FDFB9_C646_06FE_41E6_0D7CFD3BBA74, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D38883F4_F586_742B_41DF_4A02104B8B66",
   "pitch": -2.4,
   "hfov": 3.96,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 47.12,
   "distance": 100
  }
 ],
 "id": "overlay_EFCAC10D_C6C6_1B91_41C6_DEBB9B030129",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "bleachingDistance": 0.4,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 52.82,
 "bleaching": 0.7,
 "id": "overlay_D7B0AE91_C6D1_1475_41C5_AF4986580588",
 "yaw": -125.48
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.36,
   "yaw": -15.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C9DD751B_C4FF_C186_4196_4DEB30E1C015_1_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.09
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 2, this.audio_EEDF7E7B_C773_14B5_41E3_02F0055BA9AE)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 4.36,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C9DD751B_C4FF_C186_4196_4DEB30E1C015_1_HS_8_0.png",
      "width": 122,
      "class": "ImageResourceLevel",
      "height": 129
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.09,
   "yaw": -15.87
  }
 ],
 "id": "overlay_EEB1623D_C773_0CAD_41D9_34F274314357",
 "data": {
  "label": "Image"
 }
},
{
 "yaw": -113.07,
 "blending": 0,
 "id": "overlay_DB61A108_CA99_BC2A_41E1_1451D66D9DDC",
 "roll": -0.12,
 "loop": true,
 "class": "VideoPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/overlay_DB61A108_CA99_BC2A_41E1_1451D66D9DDC_t.jpg",
    "width": 640,
    "class": "ImageResourceLevel",
    "height": 360
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 12.22,
 "chromaSmoothing": 0.05,
 "rotationX": -12.17,
 "chromaColor": "#002A00",
 "autoplay": true,
 "vfov": 4.3,
 "rotationY": 3.17,
 "useHandCursor": true,
 "hfov": 6.3,
 "enabledInCardboard": true,
 "distance": 50,
 "videoVisibleOnStop": false,
 "chromaThreshold": 0.04,
 "data": {
  "label": "Video"
 },
 "video": {
  "width": 640,
  "mp4Url": "media/video_D88C35BE_CA8E_E467_41D1_4DFF72CE9B0B.mp4",
  "class": "VideoResource",
  "height": 360
 }
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 10000,
 "movements": [
  {
   "targetYaw": 63.56,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.51,
   "pitchSpeed": 108,
   "easing": "cubic_in_out",
   "yawSpeed": 216
  },
  {
   "targetYaw": 46.1,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 3.08,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -2.64,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 8.35,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -79.26,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 8.6,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -111.67,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 2.07,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -115.94,
   "hfovSpeed": 33.25,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetPitch": 11.37,
   "targetHfov": 30,
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 63.68,
   "hfovSpeed": 33.25,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetPitch": -2.45,
   "targetHfov": 100,
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_1E161CD0_04EC_5FF7_4185_5185F58F1948",
 "restartMovementOnUserInteraction": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.5,
   "yaw": 151.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C827F766_C4FD_C18E_41E1_7617056AAA7D_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.88
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C827BEB9_C4FD_4082_41DA_C1F5183B16C3, this.camera_1D339BA5_04EC_5A5E_4181_4ED6ED952E17); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.5,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C827F766_C4FD_C18E_41E1_7617056AAA7D_1_HS_0_0.png",
      "width": 180,
      "class": "ImageResourceLevel",
      "height": 189
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.88,
   "yaw": 151.73
  }
 ],
 "id": "overlay_D41AA161_C5B5_92FE_41E0_A6F3F1BA64A2",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10,
   "yaw": 167.67,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C827F766_C4FD_C18E_41E1_7617056AAA7D_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.18
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C9E2F2E5_C4FD_C082_41E7_C6FF4D799690, this.camera_1D3E9BC3_04EC_59D9_418D_0862803EF237); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 10,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C827F766_C4FD_C18E_41E1_7617056AAA7D_1_HS_1_0.png",
      "width": 278,
      "class": "ImageResourceLevel",
      "height": 268
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.18,
   "yaw": 167.67
  }
 ],
 "id": "overlay_D7C47943_C5B4_92C3_41E3_57AAB82C0AF9",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.53,
   "yaw": -21.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C827F766_C4FD_C18E_41E1_7617056AAA7D_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.27
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_D5A70CDE_C5CE_0AB2_41DE_29AFBAB7BCE3, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_D89F3EF3_C5C6_0671_41C0_364A7AD7FD8D, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D384B4C7_F586_7C75_41D1_4EDD2DC7FE20",
   "pitch": -7.27,
   "hfov": 4.53,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -21.04,
   "distance": 100
  }
 ],
 "id": "overlay_CA4667C5_C5CE_0691_41E3_0F398F9AFB05",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.65,
   "yaw": 56.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C827F766_C4FD_C18E_41E1_7617056AAA7D_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.19
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_CA3E6698_C5CE_06BF_41E1_6DC8C0E4028E, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_D89B2EF6_C5C6_0673_41CF_26C6EC758DF2, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D39B74C7_F586_7C75_41D6_2FFC73C94749",
   "pitch": -18.19,
   "hfov": 5.65,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 56.98,
   "distance": 100
  }
 ],
 "id": "overlay_D40769D6_C5CE_0AB2_41CA_316818CEEBE9",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.13,
   "yaw": 96.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C827F766_C4FD_C18E_41E1_7617056AAA7D_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.33
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_D58739C8_C5CE_0A9F_41D5_3BF976B382AD, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_D899FEF7_C5C6_0671_41D2_47133B958500, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D39B24C7_F586_7C75_41E9_78AE9E89B0B6",
   "pitch": -16.33,
   "hfov": 5.13,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 96.34,
   "distance": 50
  }
 ],
 "id": "overlay_D487524D_C5CE_1996_41E0_F797BFE28067",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.86,
   "yaw": 108.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C827F766_C4FD_C18E_41E1_7617056AAA7D_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.64
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_D5B2A5D0_C5CA_FA8F_41CA_9A62A7682858, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_D886EEF8_C5C6_067F_41DE_A627444679F2, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D39BF4C8_F586_7C7B_41DD_9062EF92EE00",
   "pitch": -12.64,
   "hfov": 3.86,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 108.58,
   "distance": 100
  }
 ],
 "id": "overlay_D4F5F55F_C5CA_1BB2_41E0_0D1AB869F59B",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.87,
   "yaw": -99.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C827F766_C4FD_C18E_41E1_7617056AAA7D_1_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.39
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_D4C24934_C5DE_0BF7_41E2_A5EE340606BD, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_D8993EF9_C5C6_0671_41D1_60D6785CDD27, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D39BB4C8_F586_7C7B_41E0_4860C20BE29C",
   "pitch": 0.39,
   "hfov": 3.87,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -99.71,
   "distance": 100
  }
 ],
 "id": "overlay_D4644496_C5DE_7AB2_41D2_EACBFEDF909C",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.87,
   "yaw": -104.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C827F766_C4FD_C18E_41E1_7617056AAA7D_1_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.05
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_E2D09D16_C64A_0BB3_41E6_65B494656442, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_E20AB36A_C64A_1F92_41CD_52915ED3855E, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D39A44C8_F586_7C7B_41BC_CBDCF855546F",
   "pitch": 0.05,
   "hfov": 3.87,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -104.98,
   "distance": 100
  }
 ],
 "id": "overlay_E3268D82_C64E_0A92_41E4_7275EAF4B510",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.8,
   "yaw": -84.16,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C827F766_C4FD_C18E_41E1_7617056AAA7D_1_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 10.68
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_E01BB82B_C64A_0991_41C5_23A1C8836C2B, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_E20B036B_C64A_1F92_41DC_3B5FCACDCB6B, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D39A04C9_F586_7C7D_41BE_916C8662D2F8",
   "pitch": 10.68,
   "hfov": 3.8,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -84.16,
   "distance": 100
  }
 ],
 "id": "overlay_E2F57779_C64A_067E_41D0_43158C735EE1",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.4,
   "yaw": -38.44,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C827F766_C4FD_C18E_41E1_7617056AAA7D_1_HS_9_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.4,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C827F766_C4FD_C18E_41E1_7617056AAA7D_1_HS_9_0.png",
      "width": 150,
      "class": "ImageResourceLevel",
      "height": 150
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1,
   "yaw": -38.44
  }
 ],
 "id": "overlay_87D63F7B_C646_0672_41D4_2FC4B3C2965B",
 "data": {
  "label": "Image"
 }
},
{
 "bleachingDistance": 0.4,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 13.88,
 "bleaching": 0.7,
 "id": "overlay_D745A945_C6D7_1CDD_41E7_BBE7C04B06A1",
 "yaw": 122.72
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 10000,
 "movements": [
  {
   "targetYaw": -57.03,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -36.18,
   "pitchSpeed": 11.17,
   "easing": "cubic_in_out",
   "yawSpeed": 21.43
  },
  {
   "targetYaw": -121.47,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -98.6,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.2,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -31.53,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -6.72,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -5.4,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.96,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 20.73,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 40.32,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.95,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 79.51,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.2,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 107.4,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -7.22,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 152.62,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 1.32,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_1D05DB87_04EC_5A5A_418B_A7DB0BA6CE04",
 "restartMovementOnUserInteraction": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.31,
   "yaw": -108.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C824FB0B_C4FF_4186_41D5_BDBD65AF1796_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.47
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "M\u00e1quina 151 - Lado Derecho",
   "click": "this.startPanoramaWithCamera(this.panorama_C9DD751B_C4FF_C186_4196_4DEB30E1C015, this.camera_1E160CD0_04EC_5FF7_4178_51FBE94C34A8); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.31,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C824FB0B_C4FF_4186_41D5_BDBD65AF1796_1_HS_0_0.png",
      "width": 203,
      "class": "ImageResourceLevel",
      "height": 205
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.47,
   "yaw": -108.38
  }
 ],
 "id": "overlay_D6FDE94E_C507_C19E_41D9_F5D555C05D0D",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.06,
   "yaw": -9.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C824FB0B_C4FF_4186_41D5_BDBD65AF1796_1_HS_1_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.59
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Entrada al Taller",
   "click": "this.startPanoramaWithCamera(this.panorama_C82494D2_C4FE_C086_41D3_9F06A8CD9DE5, this.camera_1DDAEC97_04EC_5E7A_4182_B7227D015CC3); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.06,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C824FB0B_C4FF_4186_41D5_BDBD65AF1796_1_HS_1_0.png",
      "width": 196,
      "class": "ImageResourceLevel",
      "height": 184
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.59,
   "yaw": -9.55
  }
 ],
 "id": "overlay_D1DE46CF_C505_409E_41D4_88968EDFCA0D",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.61,
   "yaw": 62.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C824FB0B_C4FF_4186_41D5_BDBD65AF1796_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.57
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_E51705F4_C64A_3A77_41CD_365DD4606D1F, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_E20E235E_C64A_1FB2_41DD_833D99F57CBF, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D38FB3F6_F586_7417_41C0_AC68BF7D0D3C",
   "pitch": -5.57,
   "hfov": 5.61,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 62.48,
   "distance": 100
  }
 ],
 "id": "overlay_E7D592D9_C649_FEB1_41E5_E536B53F8939",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.87,
   "yaw": 89.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C824FB0B_C4FF_4186_41D5_BDBD65AF1796_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.04
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_E2A1E6D8_C64A_06BF_41D3_EAACEF935DC2, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_E20EB35F_C64A_1FB2_41CC_3A051A7D2E5D, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D38E43F6_F586_7417_41DE_214C61BBD35C",
   "pitch": -0.04,
   "hfov": 2.87,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 89.02,
   "distance": 100
  }
 ],
 "id": "overlay_E7A94CF3_C64A_0A71_41C0_A8A165D0A124",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.35,
   "yaw": 81.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C824FB0B_C4FF_4186_41D5_BDBD65AF1796_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.01
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_E2899575_C64A_1A71_41DE_248D27D396EB, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_E20F3360_C64A_1F8E_41E3_505AC7372205, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D38E03F7_F586_7416_41E5_112D3F09BE60",
   "pitch": -2.01,
   "hfov": 2.35,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 81.28,
   "distance": 100
  }
 ],
 "id": "overlay_E7B471A3_C64A_1A91_41E5_362DEEFA854A",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.35,
   "yaw": 98.31,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C824FB0B_C4FF_4186_41D5_BDBD65AF1796_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.34
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_E813A50D_C6C6_1B91_41E4_4C260036A65E, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_FA5C5FBC_C646_06F6_41D2_C7F22ECD8998, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D38EC3F7_F586_7416_41E5_8660657E9F09",
   "pitch": 1.34,
   "hfov": 2.35,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 98.31,
   "distance": 100
  }
 ],
 "id": "overlay_ED8AC876_C6C6_0A72_41D2_2EAD37202C57",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "bleachingDistance": 0.4,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 51.31,
 "bleaching": 0.7,
 "id": "overlay_D7B36AE4_C6D1_3DD2_41E5_DEDA220CBE40",
 "yaw": -118.2
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.1,
   "yaw": -114.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C824FB0B_C4FF_4186_41D5_BDBD65AF1796_1_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.28
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C92BC70F_C4FF_419E_41CD_D07B20DE1D6F, this.camera_1DF59CB4_04EC_5FBF_417F_6EB395D33868); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 4.1,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C824FB0B_C4FF_4186_41D5_BDBD65AF1796_1_HS_6_0.png",
      "width": 113,
      "class": "ImageResourceLevel",
      "height": 116
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.28,
   "yaw": -114.07
  }
 ],
 "id": "overlay_E730E039_C751_0CB5_41C6_9B6B5D1F1BD1",
 "data": {
  "label": "Image"
 }
},
{
 "yaw": -108.38,
 "blending": 0,
 "id": "overlay_D8DACAD7_CA99_AC25_41E6_9744BA8DC2AC",
 "roll": -0.21,
 "loop": true,
 "class": "VideoPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/overlay_D8DACAD7_CA99_AC25_41E6_9744BA8DC2AC_t.jpg",
    "width": 640,
    "class": "ImageResourceLevel",
    "height": 360
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 8.26,
 "chromaSmoothing": 0.05,
 "rotationX": -27.28,
 "chromaColor": "#002A00",
 "autoplay": true,
 "vfov": 2.43,
 "rotationY": 11,
 "useHandCursor": true,
 "hfov": 3.36,
 "enabledInCardboard": true,
 "distance": 50,
 "videoVisibleOnStop": false,
 "chromaThreshold": 0.04,
 "data": {
  "label": "Video"
 },
 "video": {
  "width": 640,
  "mp4Url": "media/video_D88C35BE_CA8E_E467_41D1_4DFF72CE9B0B.mp4",
  "class": "VideoResource",
  "height": 360
 }
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 10000,
 "movements": [
  {
   "targetYaw": -51.5,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -30.9,
   "pitchSpeed": 16.42,
   "easing": "cubic_in_out",
   "yawSpeed": 31.99
  },
  {
   "targetYaw": 19.97,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -7.73,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 35.05,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.71,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 64.44,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.82,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 84.28,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.31,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 158.9,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.46,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -144.33,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -117.19,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -12.25,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -72.98,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 20.41,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -27.01,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 14.63,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_1E720D29_04EC_5EA9_415C_7D72F0C5CC07",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 10000,
 "movements": [
  {
   "targetYaw": 22.74,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.95,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -35.55,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -18.03,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -156.39,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 1.32,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 31.03,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.96,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_ED2000B2_C751_0DB6_41DC_BB237EBF7771",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 10000,
 "movements": [
  {
   "targetYaw": 0.75,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.26,
   "pitchSpeed": 39.09,
   "easing": "cubic_in_out",
   "yawSpeed": 77.53
  },
  {
   "targetYaw": -36.05,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -5.21,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -21.23,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 34.79,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 0.63,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.2,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_1F28FDF8_04EC_59B6_418F_DAD57E8437BA",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 10000,
 "movements": [
  {
   "targetYaw": 55.02,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 31.4,
   "pitchSpeed": 8.53,
   "easing": "cubic_in_out",
   "yawSpeed": 16.12
  },
  {
   "targetYaw": -12.44,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -5.72,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 5.15,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -6.22,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 35.3,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -7.73,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 63.68,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -7.98,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -129.5,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -89.31,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -6.22,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -106.64,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.57,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_1F0EADDC_04EC_59EE_4183_8F621AD5B2FC",
 "restartMovementOnUserInteraction": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.24,
   "yaw": 112.65,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C827BB2C_C4FA_C182_41E0_B235998AA120_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.41
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_D7B5EFEA_C5BF_ADCD_41E2_36D10C16E11A, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_D8852EFB_C5C6_0671_41BC_7837149ACB23, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D398A4CC_F586_7C7B_41D9_D3AFE2687AE9",
   "pitch": -6.41,
   "hfov": 2.24,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 112.65,
   "distance": 100
  }
 ],
 "id": "overlay_D4950F15_C5BF_EE47_41C5_FBF85B832E1D",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.61,
   "yaw": 126.47,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C827BB2C_C4FA_C182_41E0_B235998AA120_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.21
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C9E31C62_C4FD_4786_41CC_396030872F5C, this.camera_1EEE9DBE_04EC_59AB_4182_170AF9B3D919); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 9.61,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C827BB2C_C4FA_C182_41E0_B235998AA120_1_HS_1_0.png",
      "width": 267,
      "class": "ImageResourceLevel",
      "height": 257
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.21,
   "yaw": 126.47
  }
 ],
 "id": "overlay_CBF56384_C5C6_7E97_41D8_AB604BA98BA7",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.02,
   "yaw": 155.16,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C827BB2C_C4FA_C182_41E0_B235998AA120_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.78
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_D4985570_C5DA_3B8F_41CB_B7AA65C8E220, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_D8839EFB_C5C6_0671_41E1_8BA8050AEDEF, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D39F14CC_F586_7C7B_41D9_AC58B8DB4144",
   "pitch": -1.78,
   "hfov": 4.02,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 155.16,
   "distance": 100
  }
 ],
 "id": "overlay_D55CF91B_C5DA_0BB1_41C2_9F4A0226D72A",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.27,
   "yaw": 161.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C827BB2C_C4FA_C182_41E0_B235998AA120_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.34
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_D448F5F9_C5DA_7A7E_41DA_1AEB7AD52C70, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_D8804EFB_C5C6_0671_41DC_027B1192525F, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D39F24CC_F586_7C7B_41C9_8269412D5A06",
   "pitch": 8.34,
   "hfov": 3.27,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 161.71,
   "distance": 100
  }
 ],
 "id": "overlay_D5067E24_C5DA_0997_41E0_B47102B3973F",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "bleachingDistance": 0.4,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 12.62,
 "bleaching": 0.7,
 "id": "overlay_D743A8EA_C6D7_FDD6_41D3_BDB6A962C598",
 "yaw": 105.14
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 10000,
 "movements": [
  {
   "targetYaw": -51.5,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -30.9,
   "pitchSpeed": 17.74,
   "easing": "cubic_in_out",
   "yawSpeed": 34.63
  },
  {
   "targetYaw": 19.97,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -7.73,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 35.05,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.71,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 64.44,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.82,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 84.28,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.31,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 158.9,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.46,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -144.33,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -117.19,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -12.25,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -72.98,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 20.41,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -27.01,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 14.63,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_1D3EABC3_04EC_59D9_4165_A7EBD1C7B279",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 10000,
 "movements": [
  {
   "targetYaw": 46.1,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 3.08,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -2.64,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 8.35,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -79.26,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 8.6,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -111.67,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 2.07,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -115.94,
   "hfovSpeed": 33.25,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetPitch": 11.37,
   "targetHfov": 30,
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 63.68,
   "hfovSpeed": 33.25,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetPitch": -2.45,
   "targetHfov": 100,
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_EE907789_C751_3455_41CA_2D051CEB6AB0",
 "restartMovementOnUserInteraction": true
},
{
 "horizontalAlign": "center",
 "id": "image_uid1CF1DB1B_04EC_5A6A_4180_21A27DB51E1E_0",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "media/photo_E675AC4B_C74F_74D6_41C5_C55FDC7B9BBC.jpg",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "height": "55%",
 "minWidth": 0,
 "class": "Image",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image8142"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_E6825E9F_C6B3_746D_41E1_0333A29D2DB6",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "44%",
 "minWidth": 0,
 "class": "HTMLText",
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:18px;\"><B>Sapucai - Taller de trenes, a\u00f1o 1894</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:18px;\">La ciudad de Sapuc\u00e1i fue fundada bajo la presidencia de Emiliano Gonz\u00e1lez Navero en el a\u00f1o 1910.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:18px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:18px;\">Es una t\u00edpica ciudad construida alrededor de la estaci\u00f3n ferrocarrilera, de interesante trazado urbano. La Villa de los Ingleses de la ciudad se trata del peque\u00f1o barrio donde se encuentran los talleres del antiguo Ferrocarril Central Presidente Carlos Antonio L\u00f3pez (FCPCAL) y las casas de los trabajadores de dicho lugar.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:18px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:18px;\">Partiendo de la ciudad de Asunci\u00f3n por la Ruta N\u00ba 1, Mcal. Francisco Solano L\u00f3pez, hasta llegar a la capital del departamento de Paraguar\u00ed, que dista 66 km, se toma un ramal ahora pavimentado de aproximadamente 24 km para llegar a Sapuc\u00e1i.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:18px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:18px;\">Haciendo un poco de historia recordemos que en 1856 llega al Paraguay la primera locomotora a vapor, inici\u00e1ndose as\u00ed la presencia del ferrocarril como medio de comunicaci\u00f3n de alta velocidad que imprime al pa\u00eds un ritmo por primera vez superior a la tracci\u00f3n animal.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:18px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:18px;\">Lastimosamente, luego, todo el material de acero tuvo que ser fundido para fabricar armamentos durante la Guerra de la Triple Alianza (1864-1870).</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:18px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:18px;\">El ferrocarril paraguayo fue inaugurado en 1861 con el trayecto Asunci\u00f3n - Trinidad.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:18px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:18px;\">En 1887, se empezaron las construcciones de las estaciones de Escobar, Sapuc\u00e1i y Caballero, entre otros.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:18px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:18px;\">En Sapuc\u00e1i, se instalaron los talleres m\u00e1s grandes del Ferrocarril Central del Paraguay. Es por eso que en las inmediaciones de la estaci\u00f3n de Sapuc\u00e1i y de los talleres, se construyeron casas para que vivan los trabajadores del ferrocarril y los ingenieros ingleses que se encargaban de la parte t\u00e9cnica.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:18px;\">El motivo por cual se instalaron en Sapucai los Talleres para Trenes fu\u00e9 principalmente por la presencia de gran cantidad de Agua, elemento importante para los Talleres de trenes y los habitantes de la Villa inglesa.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:18px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:18px;\">La villa inglesa fu\u00e9 el primer Barrio cerrado que tuvo el Paraguay.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:18px;\">Construyeron el Primer Viaducto de Sudam\u00e9rica en el mismo lugar (fotos),</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:18px;\">Los Talleres estaban preparados o equipados para armar una Locomotora para el Ferrocarril Central del Paraguay \"Carlos A. L\u00f3pez\"</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:18px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:18px;\">Contaban con las mejores herramientas y maquinarias para dicho fin.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:18px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:18px;\">Los ingleses trajeron consigo el entonces novedoso deporte del f\u00fatbol, y se cuenta que los primeros encuentros tanto de varones como de mujeres se hicieron en Sapuc\u00e1i.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:18px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:18px;\">Paraguay fue el sexto pa\u00eds de Am\u00e9rica del Sur que cont\u00f3 con un ferrocarril a vapor (despu\u00e9s de la Guyana Brit\u00e1nica, Per\u00fa, Chile, Brasil y Argentina). El primer tramo del ferrocarril es anterior a la Guerra de la Triple Alianza y cumpli\u00f3 un papel importante en la defensa paraguaya. El edificio de la Estaci\u00f3n Central de Asunci\u00f3n data de 1863, antes del inicio de esa guerra, durante la que sirvi\u00f3 como hospital (y antes para conciertos musicales).</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:18px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:18px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText17249"
 },
 "shadow": false
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 10000,
 "movements": [
  {
   "targetYaw": -20.6,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 12.31,
   "pitchSpeed": 11.56,
   "easing": "cubic_in_out",
   "yawSpeed": 22.22
  },
  {
   "targetYaw": 22.74,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.95,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -35.55,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -18.03,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -156.39,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 1.32,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 31.03,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.96,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_1E8CBD66_04EC_5EDA_418D_9ACE7AC80F7A",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 10000,
 "movements": [
  {
   "targetYaw": -91.44,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1,
   "pitchSpeed": 46.79,
   "easing": "cubic_in_out",
   "yawSpeed": 93.01
  },
  {
   "targetYaw": 2.89,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 7.85,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -0.88,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.31,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -30.02,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.45,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -1.13,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.2,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_1D1F2B69_04EC_5AD6_418E_0EB973545019",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 10000,
 "movements": [
  {
   "targetYaw": 40.32,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -66.45,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.82,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -118.7,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.31,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -7.16,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 4.08,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_ED1E0FD9_C751_33F5_41DA_1352C4DCF0C5",
 "restartMovementOnUserInteraction": true
},
{
 "useHandCursor": true,
 "map": {
  "width": 51.02,
  "x": 524.5,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_F5C519CC_C64E_0A96_41DE_468FF3A48B98_HS_0_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 891.52,
  "offsetY": 0,
  "height": 51.93,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 524.5,
  "y": 891.52,
  "width": 51.02,
  "class": "HotspotMapOverlayImage",
  "image": {
   "levels": [
    {
     "url": "media/map_F5C519CC_C64E_0A96_41DE_468FF3A48B98_HS_0.png",
     "width": 51,
     "class": "ImageResourceLevel",
     "height": 51
    }
   ],
   "class": "ImageResource"
  },
  "height": 51.93
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_F210CD20_C64E_0B8F_41E4_AAC1A0EF9DC0",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "map": {
  "width": 51.02,
  "x": 563.23,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_F5C519CC_C64E_0A96_41DE_468FF3A48B98_HS_1_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 834.65,
  "offsetY": 0,
  "height": 51.93,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 563.23,
  "y": 834.65,
  "width": 51.02,
  "class": "HotspotMapOverlayImage",
  "image": {
   "levels": [
    {
     "url": "media/map_F5C519CC_C64E_0A96_41DE_468FF3A48B98_HS_1.png",
     "width": 51,
     "class": "ImageResourceLevel",
     "height": 51
    }
   ],
   "class": "ImageResource"
  },
  "height": 51.93
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_F3A0F7B6_C64A_06F2_41D9_C9187E07D307",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "map": {
  "width": 51.02,
  "x": 695.92,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_F5C519CC_C64E_0A96_41DE_468FF3A48B98_HS_2_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 850.21,
  "offsetY": 0,
  "height": 51.93,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 695.92,
  "y": 850.21,
  "width": 51.02,
  "class": "HotspotMapOverlayImage",
  "image": {
   "levels": [
    {
     "url": "media/map_F5C519CC_C64E_0A96_41DE_468FF3A48B98_HS_2.png",
     "width": 51,
     "class": "ImageResourceLevel",
     "height": 51
    }
   ],
   "class": "ImageResource"
  },
  "height": 51.93
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_F35D432A_C64A_7F93_41E1_071111DE1D12",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "map": {
  "width": 51.02,
  "x": 814.68,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_F5C519CC_C64E_0A96_41DE_468FF3A48B98_HS_3_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 841.58,
  "offsetY": 0,
  "height": 51.93,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 814.68,
  "y": 841.58,
  "width": 51.02,
  "class": "HotspotMapOverlayImage",
  "image": {
   "levels": [
    {
     "url": "media/map_F5C519CC_C64E_0A96_41DE_468FF3A48B98_HS_3.png",
     "width": 51,
     "class": "ImageResourceLevel",
     "height": 51
    }
   ],
   "class": "ImageResource"
  },
  "height": 51.93
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_F0F54E96_C64A_06B2_41E0_46EC81FBA5AB",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "map": {
  "width": 51.02,
  "x": 828.47,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_F5C519CC_C64E_0A96_41DE_468FF3A48B98_HS_4_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 626.41,
  "offsetY": 0,
  "height": 51.93,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 828.47,
  "y": 626.41,
  "width": 51.02,
  "class": "HotspotMapOverlayImage",
  "image": {
   "levels": [
    {
     "url": "media/map_F5C519CC_C64E_0A96_41DE_468FF3A48B98_HS_4.png",
     "width": 51,
     "class": "ImageResourceLevel",
     "height": 51
    }
   ],
   "class": "ImageResource"
  },
  "height": 51.93
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_FED6415D_C64A_1BB6_41C1_E381FC7001CF",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "map": {
  "width": 51.02,
  "x": 833.49,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_F5C519CC_C64E_0A96_41DE_468FF3A48B98_HS_5_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 520.42,
  "offsetY": 0,
  "height": 51.93,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 833.49,
  "y": 520.42,
  "width": 51.02,
  "class": "HotspotMapOverlayImage",
  "image": {
   "levels": [
    {
     "url": "media/map_F5C519CC_C64E_0A96_41DE_468FF3A48B98_HS_5.png",
     "width": 51,
     "class": "ImageResourceLevel",
     "height": 51
    }
   ],
   "class": "ImageResource"
  },
  "height": 51.93
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_FF05456A_C64A_FB93_41BE_10665B642C1C",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "map": {
  "width": 51.02,
  "x": 967.54,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_F5C519CC_C64E_0A96_41DE_468FF3A48B98_HS_6_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 617.24,
  "offsetY": 0,
  "height": 51.93,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 967.54,
  "y": 617.24,
  "width": 51.02,
  "class": "HotspotMapOverlayImage",
  "image": {
   "levels": [
    {
     "url": "media/map_F5C519CC_C64E_0A96_41DE_468FF3A48B98_HS_6.png",
     "width": 51,
     "class": "ImageResourceLevel",
     "height": 51
    }
   ],
   "class": "ImageResource"
  },
  "height": 51.93
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_FC7F8D4A_C64A_0B93_41DF_955209B13972",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "map": {
  "width": 51.02,
  "x": 961.83,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_F5C519CC_C64E_0A96_41DE_468FF3A48B98_HS_7_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 508.47,
  "offsetY": 0,
  "height": 51.93,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 961.83,
  "y": 508.47,
  "width": 51.02,
  "class": "HotspotMapOverlayImage",
  "image": {
   "levels": [
    {
     "url": "media/map_F5C519CC_C64E_0A96_41DE_468FF3A48B98_HS_7.png",
     "width": 51,
     "class": "ImageResourceLevel",
     "height": 51
    }
   ],
   "class": "ImageResource"
  },
  "height": 51.93
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_FD712E34_C64A_09F6_41C8_16371E526812",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "map": {
  "width": 51.02,
  "x": 1084.13,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_F5C519CC_C64E_0A96_41DE_468FF3A48B98_HS_8_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 486.11,
  "offsetY": 0,
  "height": 51.93,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 1084.13,
  "y": 486.11,
  "width": 51.02,
  "class": "HotspotMapOverlayImage",
  "image": {
   "levels": [
    {
     "url": "media/map_F5C519CC_C64E_0A96_41DE_468FF3A48B98_HS_8.png",
     "width": 51,
     "class": "ImageResourceLevel",
     "height": 51
    }
   ],
   "class": "ImageResource"
  },
  "height": 51.93
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_F5E2543D_C64A_79F6_418A_1994704B5F08",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "map": {
  "width": 51.02,
  "x": 1214.91,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_F5C519CC_C64E_0A96_41DE_468FF3A48B98_HS_9_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 505,
  "offsetY": 0,
  "height": 51.93,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 1214.91,
  "y": 505,
  "width": 51.02,
  "class": "HotspotMapOverlayImage",
  "image": {
   "levels": [
    {
     "url": "media/map_F5C519CC_C64E_0A96_41DE_468FF3A48B98_HS_9.png",
     "width": 51,
     "class": "ImageResourceLevel",
     "height": 51
    }
   ],
   "class": "ImageResource"
  },
  "height": 51.93
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_F2DA76DA_C64A_06B3_41BE_1F9453287B25",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "map": {
  "width": 51.02,
  "x": 1344.2,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_F5C519CC_C64E_0A96_41DE_468FF3A48B98_HS_10_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 499.84,
  "offsetY": 0,
  "height": 51.93,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 1344.2,
  "y": 499.84,
  "width": 51.02,
  "class": "HotspotMapOverlayImage",
  "image": {
   "levels": [
    {
     "url": "media/map_F5C519CC_C64E_0A96_41DE_468FF3A48B98_HS_10.png",
     "width": 51,
     "class": "ImageResourceLevel",
     "height": 51
    }
   ],
   "class": "ImageResource"
  },
  "height": 51.93
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_F3A6DE1A_C64A_09B3_41E8_4636EA44519B",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "map": {
  "width": 51.02,
  "x": 1506.85,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_F5C519CC_C64E_0A96_41DE_468FF3A48B98_HS_11_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 499.09,
  "offsetY": 0,
  "height": 51.93,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 1506.85,
  "y": 499.09,
  "width": 51.02,
  "class": "HotspotMapOverlayImage",
  "image": {
   "levels": [
    {
     "url": "media/map_F5C519CC_C64E_0A96_41DE_468FF3A48B98_HS_11.png",
     "width": 51,
     "class": "ImageResourceLevel",
     "height": 51
    }
   ],
   "class": "ImageResource"
  },
  "height": 51.93
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_F368BCF3_C64A_0A72_41D1_7146E01BA4ED",
 "data": {
  "label": "Image"
 }
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 10000,
 "movements": [
  {
   "targetYaw": 63.56,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.51,
   "pitchSpeed": 14.02,
   "easing": "cubic_in_out",
   "yawSpeed": 27.16
  },
  {
   "targetYaw": 46.1,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 3.08,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -2.64,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 8.35,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -79.26,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 8.6,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -111.67,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 2.07,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -115.94,
   "hfovSpeed": 33.25,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetPitch": 11.37,
   "targetHfov": 30,
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 63.68,
   "hfovSpeed": 33.25,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetPitch": -2.45,
   "targetHfov": 100,
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_1FC52E8D_04EC_5A69_4184_2E49117EF48E",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 10000,
 "movements": [
  {
   "targetYaw": 94.58,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -16.27,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 106.14,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -13.25,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 123.73,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -7.47,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 56.4,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 2.58,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 7.91,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 3.58,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -95.84,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 12.62,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -155.38,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 10.36,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -41.07,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.45,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_EEFD1221_C753_0C55_41E7_BBB4AACA95F9",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 10000,
 "movements": [
  {
   "targetYaw": 19.97,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -7.73,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 35.05,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.71,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 64.44,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.82,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 84.28,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.31,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 158.9,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.46,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -144.33,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -117.19,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -12.25,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -72.98,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 20.41,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -27.01,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 14.63,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_EDB256D0_C753_35F3_41E8_E47BBD354DFE",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 10000,
 "movements": [
  {
   "targetYaw": -20.6,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 12.31,
   "pitchSpeed": 46.05,
   "easing": "cubic_in_out",
   "yawSpeed": 91.52
  },
  {
   "targetYaw": 22.74,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.95,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -35.55,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -18.03,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -156.39,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 1.32,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 31.03,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.96,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_1D5A0BFF_04EC_59AA_415C_D7B4670FB183",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 10000,
 "movements": [
  {
   "targetYaw": 57.03,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.26,
   "pitchSpeed": 3.25,
   "easing": "cubic_in_out",
   "yawSpeed": 5.52
  },
  {
   "targetYaw": -8.42,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.96,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -85.04,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 1.82,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -106.14,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 1.82,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -9.17,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -5.46,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_1ECD3DA0_04EC_5E57_4179_0A96B62785EC",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 10000,
 "movements": [
  {
   "targetYaw": 128,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 3.58,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 57.91,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 1.82,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -32.28,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 8.35,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -67.45,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -7.22,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -70.47,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 13.13,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -110.16,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 12.88,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -133.78,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -7.73,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -147.34,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 6.09,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -168.44,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 6.34,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_EEF31CFE_C753_15AF_41DE_19C0ACAC8087",
 "restartMovementOnUserInteraction": true
},
{
 "progressBarBorderSize": 0,
 "id": "MapViewer",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "minHeight": 1,
 "toolTipFontFamily": "Arial",
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "minWidth": 1,
 "playbackBarBackgroundOpacity": 1,
 "height": "93%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipBackgroundColor": "#F6F6F6",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "borderSize": 0,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "toolTipShadowVerticalLength": 0,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "class": "ViewerArea",
 "paddingTop": 0,
 "progressBorderColor": "#000000",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipFontSize": "18px",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Floor Plan"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 10000,
 "movements": [
  {
   "targetYaw": 0,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0,
   "pitchSpeed": 23.32,
   "easing": "cubic_in_out",
   "yawSpeed": 45.84
  },
  {
   "targetYaw": 128,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 3.58,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 57.91,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 1.82,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -32.28,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 8.35,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -67.45,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -7.22,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -70.47,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 13.13,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -110.16,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 12.88,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -133.78,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -7.73,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -147.34,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 6.09,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -168.44,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 6.34,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_1EEEBDBE_04EC_59AB_418F_43ECE97C569C",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 10000,
 "movements": [
  {
   "targetYaw": -12.44,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -5.72,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 5.15,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -6.22,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 35.3,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -7.73,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 63.68,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -7.98,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -129.5,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -89.31,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -6.22,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -106.64,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.57,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_ED1D480A_C753_1C57_41DD_05EA46A12B90",
 "restartMovementOnUserInteraction": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.27,
   "yaw": -177.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C9E31C62_C4FD_4786_41CC_396030872F5C_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.59
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.27,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C9E31C62_C4FD_4786_41CC_396030872F5C_1_HS_0_0.png",
      "width": 146,
      "class": "ImageResourceLevel",
      "height": 156
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.59,
   "yaw": -177.95
  }
 ],
 "id": "overlay_D4B7B90C_C5BB_7245_41E1_ECF0B750C58B",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.86,
   "yaw": 177.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C9E31C62_C4FD_4786_41CC_396030872F5C_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.8
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 4.86,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C9E31C62_C4FD_4786_41CC_396030872F5C_1_HS_1_0.png",
      "width": 134,
      "class": "ImageResourceLevel",
      "height": 130
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.8,
   "yaw": 177.46
  }
 ],
 "id": "overlay_D626F336_C5BD_B645_419A_AF50EE7C3300",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.7,
   "yaw": -1.96,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C9E31C62_C4FD_4786_41CC_396030872F5C_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.03
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C827BB2C_C4FA_C182_41E0_B235998AA120, this.camera_1DB98C7B_04EC_5EAA_4150_6217B75FAC76); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C9E31C62_C4FD_4786_41CC_396030872F5C_1_HS_2_0.png",
      "width": 242,
      "class": "ImageResourceLevel",
      "height": 256
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.03,
   "yaw": -1.96
  }
 ],
 "id": "overlay_D6656C6B_C5BD_72C3_41CA_36F6321DCEC2",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.63,
   "yaw": -66.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C9E31C62_C4FD_4786_41CC_396030872F5C_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.26
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_D5902247_C5C9_F992_41E4_2867E6517AC5, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_D8874EFB_C5C6_0671_41E1_CB6C1DAE4F26, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D39984CB_F586_7C7D_41EC_D241BEC550E8",
   "pitch": -8.26,
   "hfov": 3.63,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -66.98,
   "distance": 100
  }
 ],
 "id": "overlay_CA82FDD7_C5C6_0AB1_41AD_D7E2D53B7B27",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.68,
   "yaw": -135.44,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C9E31C62_C4FD_4786_41CC_396030872F5C_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.79
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_CA793823_C5CA_0992_41DB_40CE5A216816, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_D8843EFB_C5C6_0671_41C7_195028308CE9, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D39854CB_F586_7C7D_41D9_43CB8068D9C0",
   "pitch": -6.79,
   "hfov": 2.68,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -135.44,
   "distance": 100
  }
 ],
 "id": "overlay_D5058104_C5CA_7B97_41C6_368CFBCF8980",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "bleachingDistance": 0.4,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 14.88,
 "bleaching": 0.7,
 "id": "overlay_D75C7DAD_C6D7_37AD_41DE_22E88B019F95",
 "yaw": 152.11
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.96,
   "yaw": -142.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C9D1609D_C4FE_C082_41E8_5B5168C3383D_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.29
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C82494D2_C4FE_C086_41D3_9F06A8CD9DE5, this.camera_1D1F1B69_04EC_5AD6_4186_532162B2D132); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 12.96,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C9D1609D_C4FE_C082_41E8_5B5168C3383D_1_HS_0_0.png",
      "width": 360,
      "class": "ImageResourceLevel",
      "height": 344
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.29,
   "yaw": -142.79
  }
 ],
 "id": "overlay_D18FDA86_C51D_408E_41D4_D48F531CC0A4",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.34,
   "yaw": -78.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C9D1609D_C4FE_C082_41E8_5B5168C3383D_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.86
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C827BEB9_C4FD_4082_41DA_C1F5183B16C3, this.camera_1D05CB87_04EC_5A5A_4161_75178D2BEB8C); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 15.34,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C9D1609D_C4FE_C082_41E8_5B5168C3383D_1_HS_1_0.png",
      "width": 426,
      "class": "ImageResourceLevel",
      "height": 477
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.86,
   "yaw": -78.25
  }
 ],
 "id": "overlay_D0FFE060_C51B_5F82_418A_A79DF88A8AE8",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.5,
   "yaw": 25.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C9D1609D_C4FE_C082_41E8_5B5168C3383D_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.98
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_EE194675_C6DE_0676_41E1_08A1A35A1F20, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_FA5D0FBE_C646_06F2_41E6_5D5E078016A5, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D38184BE_F586_7C16_41EA_C62D2CBD9FC5",
   "pitch": 4.98,
   "hfov": 3.5,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 25.86,
   "distance": 100
  }
 ],
 "id": "overlay_EF82DD6D_C6DE_0B91_41DC_8B0160F3FA64",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.44,
   "yaw": 12.56,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C9D1609D_C4FE_C082_41E8_5B5168C3383D_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.1
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_EC7CA972_C6DE_0A73_41E2_4DF6619CFE5B, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_FA5AEFBF_C646_06F2_4187_BD672925D68E, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D38044BE_F586_7C16_41C4_C5473554DD15",
   "pitch": 5.1,
   "hfov": 3.44,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 12.56,
   "distance": 100
  }
 ],
 "id": "overlay_EEFBFD8A_C6DE_0A92_418D_F68E66014169",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.14,
   "yaw": 56.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C9D1609D_C4FE_C082_41E8_5B5168C3383D_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.04
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_EFB39F66_C6DE_0792_41C1_AD0C4A699B44, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_FA5DFFC0_C646_068E_41E7_F14D44F0DC54, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D38004BF_F586_7C16_41E4_BC4084C7E4B3",
   "pitch": 5.04,
   "hfov": 3.14,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 56.57,
   "distance": 100
  }
 ],
 "id": "overlay_EE8A7F6D_C6DE_0796_41E3_A8D02A9DD46C",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.25,
   "yaw": -17.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C9D1609D_C4FE_C082_41E8_5B5168C3383D_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.75
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_EB0A7FC9_C6DA_0691_41E4_1C8F609DC992, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_FA5D4FC0_C646_068E_41E3_4F387A48CA08, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D380D4BF_F586_7C16_41C1_EF0755541E29",
   "pitch": 3.75,
   "hfov": 2.25,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -17.42,
   "distance": 100
  }
 ],
 "id": "overlay_EEA8A61B_C6DA_39B2_41C7_E96D3FEA28A1",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.59,
   "yaw": 51.6,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C9D1609D_C4FE_C082_41E8_5B5168C3383D_1_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 33.58
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_ECF8E543_C6DA_3B91_41C0_5E74C714EE66, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_FA5ADFC1_C646_068E_41B6_7B077128AEF2, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D38094C0_F586_7C6A_41ED_2D27EFCB08FE",
   "pitch": 33.58,
   "hfov": 5.59,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 51.6,
   "distance": 100
  }
 ],
 "id": "overlay_EA7C64A6_C6DA_1A92_41D0_BDAEE971CC76",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "bleachingDistance": 0.4,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 48.55,
 "bleaching": 0.7,
 "id": "overlay_D72B253B_C6D1_74B6_41E2_84BC6DE87931",
 "yaw": -157.14
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.24,
   "yaw": -88.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C9D1609D_C4FE_C082_41E8_5B5168C3383D_1_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.38
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_E1077AF2_C751_3DB6_41AA_D3633C3A52EA, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_ECF1BFBE_C757_73AF_41C3_8268A21900A0, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D38744C1_F586_7C6A_41D5_F494236D49C6",
   "pitch": -5.38,
   "hfov": 2.24,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -88.62,
   "distance": 100
  }
 ],
 "id": "overlay_E10DF63D_C751_14B2_41BB_8DDB71CB7F33",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.58,
   "yaw": 91.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C82494D2_C4FE_C086_41D3_9F06A8CD9DE5_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.72
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Punto 3",
   "click": "this.startPanoramaWithCamera(this.panorama_C824FB0B_C4FF_4186_41D5_BDBD65AF1796, this.camera_1F498E15_04EC_5A79_418D_E81C6B20C93E); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 10.58,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C82494D2_C4FE_C086_41D3_9F06A8CD9DE5_1_HS_0_0.png",
      "width": 293,
      "class": "ImageResourceLevel",
      "height": 296
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.72,
   "yaw": 91.78
  }
 ],
 "id": "overlay_D131359C_C51B_4082_41D0_BF0D2C5A993B",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.62,
   "yaw": -1.13,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C82494D2_C4FE_C086_41D3_9F06A8CD9DE5_1_HS_1_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.69
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Sal\u00f3n de Introducci\u00f3n",
   "click": "this.startPanoramaWithCamera(this.panorama_C9D1609D_C4FE_C082_41E8_5B5168C3383D, this.camera_1F0E9DDC_04EC_59EE_418A_EDC72B86028A); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 11.62,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C82494D2_C4FE_C086_41D3_9F06A8CD9DE5_1_HS_1_0.png",
      "width": 323,
      "class": "ImageResourceLevel",
      "height": 270
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.69,
   "yaw": -1.13
  }
 ],
 "id": "overlay_D6526E95_C51B_C082_41B2_CD426961059F",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.94,
   "yaw": -91.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C82494D2_C4FE_C086_41D3_9F06A8CD9DE5_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.07
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Acceso al Taller",
   "click": "this.startPanoramaWithCamera(this.panorama_C9E4B9D4_C4FD_4082_41E5_B1AD8C2EDA9F, this.camera_1F28EDF8_04EC_59B6_416A_190099EE283E); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 10.94,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C82494D2_C4FE_C086_41D3_9F06A8CD9DE5_1_HS_2_0.png",
      "width": 307,
      "class": "ImageResourceLevel",
      "height": 345
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.07,
   "yaw": -91.4
  }
 ],
 "id": "overlay_D1D2E548_C51D_4182_41DD_28221377A90B",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.25,
   "yaw": -29.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C82494D2_C4FE_C086_41D3_9F06A8CD9DE5_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.04
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_ED019763_C6DA_0791_41E2_0CB39A715996, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_FA5DCFBD_C646_06F6_41DE_B3F1434BD417, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D38DF3F9_F586_741A_41B9_93D35AA004EE",
   "pitch": -1.04,
   "hfov": 2.25,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -29.77,
   "distance": 100
  }
 ],
 "id": "overlay_ECDEA486_C6DA_1A93_41AD_AD127859FBB5",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "bleachingDistance": 0.4,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 46.04,
 "bleaching": 0.7,
 "id": "overlay_D7480654_C6D1_14F2_41E2_E1B54A57B98F",
 "yaw": 162.41
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.14,
   "yaw": 34.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C82494D2_C4FE_C086_41D3_9F06A8CD9DE5_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.14
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showWindow(this.window_E6827E9F_C6B3_746D_41D4_58911472F0DA, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_D38DA3F9_F586_741A_41C9_2F6B1D327F51",
   "pitch": 7.14,
   "hfov": 13.14,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 34.5,
   "distance": 100
  }
 ],
 "id": "overlay_D936D8B6_C6B3_FDBF_41B8_79DF6F1CD148",
 "data": {
  "label": "Info Red 01"
 }
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 10000,
 "movements": [
  {
   "targetYaw": -8.42,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.96,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -85.04,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 1.82,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -106.14,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 1.82,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -9.17,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -5.46,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_EED6AE86_C751_145F_41DF_2DA760209FC5",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 10000,
 "movements": [
  {
   "targetYaw": -57.03,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -36.18,
   "pitchSpeed": 21.12,
   "easing": "cubic_in_out",
   "yawSpeed": 41.43
  },
  {
   "targetYaw": -121.47,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -98.6,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.2,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -31.53,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -6.72,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -5.4,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.96,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 20.73,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 40.32,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.95,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 79.51,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.2,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 107.4,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -7.22,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 152.62,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 1.32,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_1D9E3C5D_04EC_5EE9_4174_92B2DD4D7FF8",
 "restartMovementOnUserInteraction": true
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_0C431D49_0334_FED6_418B_80DDFBCF8527",
 "backgroundOpacity": 0,
 "width": 30,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 30,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_0C431D49_0334_FED6_418B_80DDFBCF8527_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_0C431D49_0334_FED6_418B_80DDFBCF8527.png",
 "data": {
  "name": "IconButton Hs visibility"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "backgroundOpacity": 0,
 "width": 58,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "data": {
  "name": "IconButton HS "
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_0C433D49_0334_FED6_4187_6A29D717A54B",
 "backgroundOpacity": 0,
 "width": 34,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 34,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_0C433D49_0334_FED6_4187_6A29D717A54B_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_0C433D49_0334_FED6_4187_6A29D717A54B.png",
 "data": {
  "name": "IconButton Gyroscopic"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "backgroundOpacity": 0,
 "width": 58,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "data": {
  "name": "IconButton GYRO"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_0C43FD49_0334_FED6_417C_95AF1425050C",
 "backgroundOpacity": 0,
 "width": 30,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 30,
 "minWidth": 1,
 "mode": "push",
 "transparencyActive": true,
 "class": "IconButton",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_0C43FD49_0334_FED6_417C_95AF1425050C.png",
 "data": {
  "name": "IconButton VR"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "backgroundOpacity": 0,
 "width": 58,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "propagateClick": true,
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "transparencyActive": true,
 "class": "IconButton",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "data": {
  "name": "IconButton VR"
 },
 "shadow": false,
 "visible": false,
 "cursor": "hand"
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 10000,
 "movements": [
  {
   "targetYaw": -57.03,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -36.18,
   "pitchSpeed": 21.33,
   "easing": "cubic_in_out",
   "yawSpeed": 41.85
  },
  {
   "targetYaw": -121.47,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -98.6,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.2,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -31.53,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -6.72,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -5.4,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.96,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 20.73,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 40.32,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.95,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 79.51,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.2,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 107.4,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -7.22,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 152.62,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 1.32,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_1D33ABA5_04EC_5A5E_416B_883426964629",
 "restartMovementOnUserInteraction": true
},
{
 "media": "this.panorama_C92BC70F_C4FF_419E_41CD_D07B20DE1D6F",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_1CFC5B28_04EC_5A57_4175_DA900AB49CA4, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 0, 1)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_1CFC5B28_04EC_5A57_4175_DA900AB49CA4",
 "camera": "this.panorama_C92BC70F_C4FF_419E_41CD_D07B20DE1D6F_camera"
},
{
 "media": "this.panorama_C8267EFE_C4FF_C07E_41CF_496ACBAA40DD",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_1CE3CB28_04EC_5A57_4175_C73C043B1530, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 2)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_1CE3CB28_04EC_5A57_4175_C73C043B1530",
 "camera": "this.panorama_C8267EFE_C4FF_C07E_41CF_496ACBAA40DD_camera"
},
{
 "media": "this.panorama_C9DD751B_C4FF_C186_4196_4DEB30E1C015",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_1CE39B29_04EC_5AA9_4186_709CD5380564, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 2, 3)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_1CE39B29_04EC_5AA9_4186_709CD5380564",
 "camera": "this.panorama_C9DD751B_C4FF_C186_4196_4DEB30E1C015_camera"
},
{
 "media": "this.panorama_C824FB0B_C4FF_4186_41D5_BDBD65AF1796",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_1CE36B29_04EC_5AA9_4158_B18EA34A6A10, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 3, 4)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_1CE36B29_04EC_5AA9_4158_B18EA34A6A10",
 "camera": "this.panorama_C824FB0B_C4FF_4186_41D5_BDBD65AF1796_camera"
},
{
 "media": "this.panorama_C82494D2_C4FE_C086_41D3_9F06A8CD9DE5",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_1CE27B2A_04EC_5AAB_4174_371177AF3340, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 4, 5)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_1CE27B2A_04EC_5AAB_4174_371177AF3340",
 "camera": "this.panorama_C82494D2_C4FE_C086_41D3_9F06A8CD9DE5_camera"
},
{
 "media": "this.panorama_C9D1609D_C4FE_C082_41E8_5B5168C3383D",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_1CE1CB2A_04EC_5AAB_4186_05DEC228EAFE, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 5, 6)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_1CE1CB2A_04EC_5AAB_4186_05DEC228EAFE",
 "camera": "this.panorama_C9D1609D_C4FE_C082_41E8_5B5168C3383D_camera"
},
{
 "media": "this.panorama_C9E4B9D4_C4FD_4082_41E5_B1AD8C2EDA9F",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_1CE18B2B_04EC_5AAA_4179_275A25AB14F8, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 6, 7)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_1CE18B2B_04EC_5AAA_4179_275A25AB14F8",
 "camera": "this.panorama_C9E4B9D4_C4FD_4082_41E5_B1AD8C2EDA9F_camera"
},
{
 "media": "this.panorama_C827BEB9_C4FD_4082_41DA_C1F5183B16C3",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_1CE15B2B_04EC_5AAA_4185_37B392C5F3BD, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 7, 8)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_1CE15B2B_04EC_5AAA_4185_37B392C5F3BD",
 "camera": "this.panorama_C827BEB9_C4FD_4082_41DA_C1F5183B16C3_camera"
},
{
 "media": "this.panorama_C9E2F2E5_C4FD_C082_41E7_C6FF4D799690",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_1CE12B2C_04EC_5AAE_4162_B09CE600DAA2, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 8, 9)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_1CE12B2C_04EC_5AAE_4162_B09CE600DAA2",
 "camera": "this.panorama_C9E2F2E5_C4FD_C082_41E7_C6FF4D799690_camera"
},
{
 "media": "this.panorama_C827F766_C4FD_C18E_41E1_7617056AAA7D",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_1CE0FB2C_04EC_5AAE_417B_81A7FF04786C, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 9, 10)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_1CE0FB2C_04EC_5AAE_417B_81A7FF04786C",
 "camera": "this.panorama_C827F766_C4FD_C18E_41E1_7617056AAA7D_camera"
},
{
 "media": "this.panorama_C9E31C62_C4FD_4786_41CC_396030872F5C",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_1CE04B2D_04EC_5AAE_418F_91568A8F550A, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 10, 11)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_1CE04B2D_04EC_5AAE_418F_91568A8F550A",
 "camera": "this.panorama_C9E31C62_C4FD_4786_41CC_396030872F5C_camera"
},
{
 "media": "this.panorama_C827BB2C_C4FA_C182_41E0_B235998AA120",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_1CE01B2D_04EC_5AAE_4137_4E1B2A9C98D0, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 11, 12)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_1CE01B2D_04EC_5AAE_4137_4E1B2A9C98D0",
 "camera": "this.panorama_C827BB2C_C4FA_C182_41E0_B235998AA120_camera"
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 10000,
 "movements": [
  {
   "targetYaw": 2.89,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 7.85,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -0.88,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.31,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -30.02,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.45,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -1.13,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.2,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_EEBFEAB8_C750_FDB2_41AE_CC071DB8363C",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 10000,
 "movements": [
  {
   "targetYaw": 63.56,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.51,
   "pitchSpeed": 6.57,
   "easing": "cubic_in_out",
   "yawSpeed": 12.18
  },
  {
   "targetYaw": 46.1,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 3.08,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -2.64,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 8.35,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -79.26,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 8.6,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -111.67,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 2.07,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -115.94,
   "hfovSpeed": 33.25,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetPitch": 11.37,
   "targetHfov": 30,
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 63.68,
   "hfovSpeed": 33.25,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "easing": "cubic_in_out",
   "pitchSpeed": 17.05,
   "targetPitch": -2.45,
   "targetHfov": 100,
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_1EACFD83_04EC_5E5A_4190_4722D00A5FE9",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 10000,
 "movements": [
  {
   "targetYaw": -91.44,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1,
   "pitchSpeed": 1.57,
   "easing": "cubic_in_out",
   "yawSpeed": 2.15
  },
  {
   "targetYaw": 2.89,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 7.85,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -0.88,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.31,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -30.02,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.45,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -1.13,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -3.2,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_1DDA8C98_04EC_5E76_4170_5FD21B72A04C",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 10000,
 "movements": [
  {
   "targetYaw": 28.89,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 13.57,
   "pitchSpeed": 18.98,
   "easing": "cubic_in_out",
   "yawSpeed": 37.12
  },
  {
   "targetYaw": 102.37,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.82,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 147.09,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.95,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 170.45,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 9.61,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -176.99,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 12.12,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -131.77,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 3.33,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_1DB99C7B_04EC_5EAA_4174_6A47EF276D81",
 "restartMovementOnUserInteraction": true
},
{
 "yaw": -8.09,
 "blending": 0,
 "id": "overlay_CB748E13_C51B_4386_41E1_6AB181D6C493",
 "roll": -0.86,
 "loop": true,
 "class": "VideoPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/overlay_CB748E13_C51B_4386_41E1_6AB181D6C493_t.jpg",
    "width": 700,
    "class": "ImageResourceLevel",
    "height": 880
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 26.1,
 "chromaSmoothing": 0.36,
 "rotationX": -26.5,
 "chromaColor": "#1CCD25",
 "autoplay": true,
 "vfov": 21.56,
 "rotationY": -2.16,
 "useHandCursor": true,
 "hfov": 20.48,
 "enabledInCardboard": true,
 "distance": 50,
 "videoVisibleOnStop": false,
 "chromaThreshold": 0.07,
 "data": {
  "label": "Video"
 },
 "video": {
  "width": 700,
  "mp4Url": "media/video_CAABBB3C_C46D_3C51_41D7_31BA83D3BCD9.mp4",
  "class": "VideoResource",
  "height": 880
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.93,
   "yaw": -14.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92BC70F_C4FF_419E_41CD_D07B20DE1D6F_1_HS_0_0_0_map.gif",
      "width": 15,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.35
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Maquina 151",
   "click": "this.startPanoramaWithCamera(this.panorama_C8267EFE_C4FF_C07E_41CF_496ACBAA40DD, this.camera_1E8CAD66_04EC_5EDA_4187_AA302DAC0CC7); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 19.93,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92BC70F_C4FF_419E_41CD_D07B20DE1D6F_1_HS_0_0.png",
      "width": 569,
      "class": "ImageResourceLevel",
      "height": 578
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.35,
   "yaw": -14.25
  }
 ],
 "id": "overlay_D506794E_C50B_419E_41A3_62FC4C74B46A",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.44,
   "yaw": 33.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92BC70F_C4FF_419E_41CD_D07B20DE1D6F_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.08
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Maquina 151 - Lado Derecho",
   "click": "this.startPanoramaWithCamera(this.panorama_C9DD751B_C4FF_C186_4196_4DEB30E1C015, this.camera_1EACED83_04EC_5E5A_418D_6C83B76608D3); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 9.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92BC70F_C4FF_419E_41CD_D07B20DE1D6F_1_HS_1_0.png",
      "width": 264,
      "class": "ImageResourceLevel",
      "height": 269
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.08,
   "yaw": 33.17
  }
 ],
 "id": "overlay_D702BCA0_C50B_C082_41B6_29C1229177B9",
 "data": {
  "label": "Image"
 }
},
{
 "bleachingDistance": 0.4,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 55.33,
 "bleaching": 0.7,
 "id": "overlay_D4251A55_C6D1_FCFD_41C7_D530ABB808D6",
 "yaw": -139.8
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.39,
   "yaw": 43.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92BC70F_C4FF_419E_41CD_D07B20DE1D6F_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.16
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C824FB0B_C4FF_4186_41D5_BDBD65AF1796, this.camera_1ECD2DA0_04EC_5E57_417D_1B95836AF420); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92BC70F_C4FF_419E_41CD_D07B20DE1D6F_1_HS_4_0.png",
      "width": 150,
      "class": "ImageResourceLevel",
      "height": 150
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.16,
   "yaw": 43.14
  }
 ],
 "id": "overlay_D8A9C4DA_C753_75F7_41E1_608C68AFAE07",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.64,
   "yaw": -0.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92BC70F_C4FF_419E_41CD_D07B20DE1D6F_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 19
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.52
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_EEDF7E7B_C773_14B5_41E3_02F0055BA9AE)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 2.64,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92BC70F_C4FF_419E_41CD_D07B20DE1D6F_1_HS_5_0.png",
      "width": 73,
      "class": "ImageResourceLevel",
      "height": 87
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.52,
   "yaw": -0.48
  }
 ],
 "id": "overlay_EE93D92F_C751_3CAD_41E8_51AE7AE9D7E8",
 "data": {
  "label": "Image"
 }
},
{
 "yaw": -121.53,
 "blending": 0,
 "id": "overlay_D8E127B1_CA8E_E47D_41E7_8095363DBB0A",
 "roll": -0.72,
 "loop": true,
 "class": "VideoPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/overlay_D8E127B1_CA8E_E47D_41E7_8095363DBB0A_t.jpg",
    "width": 640,
    "class": "ImageResourceLevel",
    "height": 360
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 19.1,
 "chromaSmoothing": 0.05,
 "rotationX": -21.38,
 "chromaColor": "#002A00",
 "autoplay": true,
 "vfov": 7.54,
 "rotationY": -8.28,
 "useHandCursor": true,
 "hfov": 9.9,
 "enabledInCardboard": true,
 "distance": 50,
 "videoVisibleOnStop": false,
 "chromaThreshold": 0.04,
 "data": {
  "label": "Video"
 },
 "video": {
  "width": 640,
  "mp4Url": "media/video_D88C35BE_CA8E_E467_41D1_4DFF72CE9B0B.mp4",
  "class": "VideoResource",
  "height": 360
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.84,
   "yaw": -96.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92BC70F_C4FF_419E_41CD_D07B20DE1D6F_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 18.41
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.openLink('https://pnh.visitapy.com', '_top')",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 10.84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92BC70F_C4FF_419E_41CD_D07B20DE1D6F_0_HS_7_0.png",
      "width": 317,
      "class": "ImageResourceLevel",
      "height": 317
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 18.41,
   "yaw": -96.04
  }
 ],
 "id": "overlay_C1685B2F_FC82_3434_41D7_ED70A7EA52AF",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.98,
   "yaw": -95.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92BC70F_C4FF_419E_41CD_D07B20DE1D6F_0_HS_8_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 26
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 22.12
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.openLink('https://pnh.visitapy.com', '_blank')",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C92BC70F_C4FF_419E_41CD_D07B20DE1D6F_0_HS_8_0.png",
      "width": 299,
      "class": "ImageResourceLevel",
      "height": 487
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 22.12,
   "hfov": 9.98,
   "yaw": -95.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_C3A10091_FC82_74ED_41EA_4201E268B22F",
 "data": {
  "label": "   Ir al Pante\u00f3n\u000d Nacional de los\u000d        H\u00e9roes"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.42,
   "yaw": 132.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C8267EFE_C4FF_C07E_41CF_496ACBAA40DD_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.98
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Estacionamiento",
   "click": "this.startPanoramaWithCamera(this.panorama_C92BC70F_C4FF_419E_41CD_D07B20DE1D6F, this.camera_1FA4FE70_04EC_5AB6_417A_1097572955AE); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 17.42,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C8267EFE_C4FF_C07E_41CF_496ACBAA40DD_1_HS_0_0.png",
      "width": 488,
      "class": "ImageResourceLevel",
      "height": 558
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.98,
   "yaw": 132.02
  }
 ],
 "id": "overlay_D4DE515A_C50D_C186_41DB_6836FE83ED10",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.86,
   "yaw": 31.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C8267EFE_C4FF_C07E_41CF_496ACBAA40DD_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.9
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Maquina 151 - Lado Derecho",
   "click": "this.startPanoramaWithCamera(this.panorama_C9DD751B_C4FF_C186_4196_4DEB30E1C015, this.camera_1FC51E8D_04EC_5A69_4171_88EF7A3B61EB); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 13.86,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C8267EFE_C4FF_C07E_41CF_496ACBAA40DD_1_HS_1_0.png",
      "width": 386,
      "class": "ImageResourceLevel",
      "height": 372
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.9,
   "yaw": 31.94
  }
 ],
 "id": "overlay_D44277F9_C50F_C082_41D6_11652CC6CE78",
 "data": {
  "label": "Image"
 }
},
{
 "yaw": -19.71,
 "blending": 0,
 "id": "overlay_DCA15C2C_C64E_0997_41C1_015E07446A3D",
 "roll": -1.33,
 "loop": true,
 "class": "VideoPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/overlay_DCA15C2C_C64E_0997_41C1_015E07446A3D_t.jpg",
    "width": 700,
    "class": "ImageResourceLevel",
    "height": 880
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 40.19,
 "chromaSmoothing": 0.36,
 "rotationX": 50.33,
 "chromaColor": "#1CCD25",
 "autoplay": true,
 "vfov": 31.96,
 "rotationY": -1.01,
 "useHandCursor": true,
 "hfov": 23.89,
 "enabledInCardboard": true,
 "distance": 50,
 "videoVisibleOnStop": false,
 "chromaThreshold": 0.07,
 "data": {
  "label": "Video"
 },
 "video": {
  "width": 700,
  "mp4Url": "media/video_CAABBB3C_C46D_3C51_41D7_31BA83D3BCD9.mp4",
  "class": "VideoResource",
  "height": 880
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.95,
   "yaw": 15.81,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C8267EFE_C4FF_C07E_41CF_496ACBAA40DD_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.22
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_D95E51A8_C65A_1A9F_41B2_3031B6C0768E, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_EE4A9B49_C646_0F9E_41DA_1292D6F0B3FB, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D38A73D9_F586_741D_41ED_4B517F669087",
   "pitch": -8.22,
   "hfov": 4.95,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 15.81,
   "distance": 100
  }
 ],
 "id": "overlay_D81E8539_C65A_1BFE_41E5_AEA5718CFCD4",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5,
   "yaw": 8.64,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C8267EFE_C4FF_C07E_41CF_496ACBAA40DD_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.53
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_D9F14EEF_C65E_0691_41D3_34EE603EF11B, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_EE487B4B_C646_0F92_41D6_FD80BCA67D71, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D38AF3F1_F586_742D_4196_A1346069A180",
   "pitch": 0.53,
   "hfov": 5,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 8.64,
   "distance": 100
  }
 ],
 "id": "overlay_D8B4E2A6_C65E_3E93_41C8_23DE8EB0AFF5",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "bleachingDistance": 0.4,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 53.57,
 "bleaching": 0.7,
 "id": "overlay_D7A624D9_C6D1_15F5_41D0_3CA21FD33E94",
 "yaw": -166.18
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.81,
   "yaw": -5.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C8267EFE_C4FF_C07E_41CF_496ACBAA40DD_1_HS_4_0_0_map.gif",
      "width": 15,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 10.39
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 1, this.audio_EEDF7E7B_C773_14B5_41E3_02F0055BA9AE)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 3.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C8267EFE_C4FF_C07E_41CF_496ACBAA40DD_1_HS_4_0.png",
      "width": 107,
      "class": "ImageResourceLevel",
      "height": 126
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 10.39,
   "yaw": -5.45
  }
 ],
 "id": "overlay_EDB5F065_C771_0CDD_41D3_0EDF35E5F52B",
 "data": {
  "label": "Image"
 }
},
{
 "yaw": -163,
 "blending": 0,
 "id": "overlay_DB0E06B0_CA8B_A47A_41D3_6BB54549496E",
 "roll": -0.68,
 "loop": true,
 "class": "VideoPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/overlay_DB0E06B0_CA8B_A47A_41D3_6BB54549496E_t.jpg",
    "width": 640,
    "class": "ImageResourceLevel",
    "height": 360
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 16.77,
 "chromaSmoothing": 0.05,
 "rotationX": -12.8,
 "chromaColor": "#002A00",
 "autoplay": true,
 "vfov": 7.21,
 "rotationY": -7.32,
 "useHandCursor": true,
 "hfov": 9.99,
 "enabledInCardboard": true,
 "distance": 50,
 "videoVisibleOnStop": false,
 "chromaThreshold": 0.04,
 "data": {
  "label": "Video"
 },
 "video": {
  "width": 640,
  "mp4Url": "media/video_D88C35BE_CA8E_E467_41D1_4DFF72CE9B0B.mp4",
  "class": "VideoResource",
  "height": 360
 }
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 10000,
 "movements": [
  {
   "targetYaw": 57.03,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.26,
   "pitchSpeed": 4.62,
   "easing": "cubic_in_out",
   "yawSpeed": 8.27
  },
  {
   "targetYaw": -8.42,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.96,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -85.04,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 1.82,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -106.14,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 1.82,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -9.17,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -5.46,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_1D4B3C1D_04EC_5E6E_418B_B27C70627F6E",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 10000,
 "movements": [
  {
   "targetYaw": 55.02,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 31.4,
   "pitchSpeed": 12.74,
   "easing": "cubic_in_out",
   "yawSpeed": 24.58
  },
  {
   "targetYaw": -12.44,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -5.72,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 5.15,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -6.22,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 35.3,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -7.73,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": 63.68,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -7.98,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -129.5,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.19,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -89.31,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -6.22,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -106.64,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.57,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_1E30BCEF_04EC_5FAA_4173_5DF35789CB8A",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 10000,
 "movements": [
  {
   "targetYaw": -7.46,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 4.27,
   "pitchSpeed": 47.47,
   "easing": "cubic_in_out",
   "yawSpeed": 94.38
  },
  {
   "targetYaw": 40.32,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -66.45,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.82,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -118.7,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.31,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -7.16,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 4.08,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_1D2A7BE1_04EC_59D6_4176_09BE36DBF2D6",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 10000,
 "movements": [
  {
   "targetYaw": -7.46,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 4.27,
   "pitchSpeed": 58.75,
   "easing": "cubic_in_out",
   "yawSpeed": 117.04
  },
  {
   "targetYaw": 40.32,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -1.7,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -66.45,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.82,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -118.7,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 0.31,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -7.16,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 4.08,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_1FA4AE70_04EC_5AB6_4185_28B85CA10967",
 "restartMovementOnUserInteraction": true
},
{
 "class": "PanoramaCameraSequence",
 "restartMovementDelay": 10000,
 "movements": [
  {
   "targetYaw": 57.03,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -2.26,
   "pitchSpeed": 28.8,
   "easing": "cubic_in_out",
   "yawSpeed": 56.86
  },
  {
   "targetYaw": -8.42,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -4.96,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -85.04,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 1.82,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -106.14,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": 1.82,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  },
  {
   "targetYaw": -9.17,
   "class": "TargetPanoramaCameraMovement",
   "path": "shortest",
   "targetPitch": -5.46,
   "pitchSpeed": 17.05,
   "easing": "cubic_in_out",
   "yawSpeed": 33.25
  }
 ],
 "id": "sequence_1F49BE15_04EC_5A79_416E_7788AB407327",
 "restartMovementOnUserInteraction": true
},
{
 "horizontalAlign": "center",
 "maxHeight": 364,
 "maxWidth": 1199,
 "id": "Image_D11D2773_C206_7714_41E3_7BBA45F51C47",
 "backgroundOpacity": 0,
 "width": "93.22%",
 "borderRadius": 0,
 "url": "skin/Image_D11D2773_C206_7714_41E3_7BBA45F51C47.png",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "height": "100%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "class": "Image",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image6538"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0C438D48_0334_FED6_4187_7AAF8DD38E8D",
 "left": "0%",
 "width": 66,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "children": [
  "this.Container_0C43BD48_0334_FED6_4184_569A6090129C",
  "this.IconButton_0C43AD48_0334_FED6_4176_B4F825BD3B48"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "verticalAlign": "top",
 "height": "100%",
 "minWidth": 1,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- COLLAPSE"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0C43CD48_0334_FED6_4173_3A6EA8849449",
 "left": "0%",
 "children": [
  "this.Container_0C43FD48_0334_FED6_417A_E5E082A381AC",
  "this.IconButton_0C435D49_0334_FED6_4156_DB6D5F03E21F"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "creationPolicy": "inAdvance",
 "height": "100%",
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- EXPANDED"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "backgroundOpacity": 0,
 "width": 110,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "overflow": "visible",
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "height": 110,
 "minWidth": 1,
 "layout": "horizontal",
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "button menu sup"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "backgroundOpacity": 0,
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "width": "91.304%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": true,
 "bottom": "0%",
 "height": "85.959%",
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "vertical",
 "scrollBarWidth": 10,
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 3,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-button set"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_04FF5C2C_1216_7593_41B2_1B5CFADF351D",
 "left": "10%",
 "children": [
  "this.Container_04FF2C2C_1216_7593_4195_88C3C7049763",
  "this.Container_04FF0C2C_1216_7593_419A_8AC354592A51"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "10%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "top": "5%",
 "verticalAlign": "top",
 "bottom": "5%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "horizontal",
 "shadowHorizontalLength": 0,
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "shadowVerticalLength": 0,
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "data": {
  "name": "Global"
 }
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_04FF9C2D_1216_75ED_41A8_E3495D8F554E",
 "left": "10%",
 "children": [
  "this.IconButton_04FE6C2D_1216_75ED_41A3_C531DD2D317A"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "10%",
 "scrollBarMargin": 2,
 "paddingRight": 20,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "propagateClick": true,
 "top": "5%",
 "verticalAlign": "top",
 "bottom": "84.02%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "layout": "vertical",
 "class": "Container",
 "paddingTop": 20,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "2%",
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "2%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "top": "5%",
 "verticalAlign": "top",
 "bottom": "5%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "vertical",
 "shadowHorizontalLength": 0,
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "shadowVerticalLength": 0,
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "data": {
  "name": "Global"
 }
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_1813AA3E_1663_8BF1_41A2_CA5EE3718362",
 "left": "2%",
 "children": [
  "this.Container_1813DA3E_1663_8BF1_4193_F28A53801FBC"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "2%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "top": "2%",
 "verticalAlign": "top",
 "bottom": "2%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "horizontal",
 "shadowHorizontalLength": 0,
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "shadowVerticalLength": 0,
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "data": {
  "name": "Global"
 }
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_1812AA3F_1663_8BEF_41A4_02F566B1BC6D",
 "left": "2%",
 "children": [
  "this.IconButton_1812DA3F_1663_8BEF_41A5_6E0723037CA1"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "2%",
 "scrollBarMargin": 2,
 "paddingRight": 20,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "propagateClick": true,
 "top": "2%",
 "verticalAlign": "top",
 "bottom": "93%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "layout": "vertical",
 "class": "Container",
 "paddingTop": 10,
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "5%",
 "children": [
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
  "this.MapViewer"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "5%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "top": "5%",
 "verticalAlign": "bottom",
 "bottom": "5%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "vertical",
 "shadowHorizontalLength": 0,
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "shadowVerticalLength": 0,
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "data": {
  "name": "Global"
 }
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0DEF7FEC_12FA_D293_4197_332CA20EDBCF",
 "left": "2%",
 "children": [
  "this.Container_0DEC9FEC_12FA_D293_41A0_DAD5B350B643",
  "this.Container_0DECBFED_12FA_D26D_41AD_EE1B8CC7BCC8"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "2%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "top": "2%",
 "verticalAlign": "top",
 "bottom": "2%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "horizontal",
 "shadowHorizontalLength": 0,
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "shadowVerticalLength": 0,
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "data": {
  "name": "Global"
 }
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_0DEC1FED_12FA_D26D_41AE_8CE7699C44D8",
 "left": "2%",
 "children": [
  "this.IconButton_0DEC0FED_12FA_D26D_41B1_C01AE2D2C1D4"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "2%",
 "scrollBarMargin": 2,
 "paddingRight": 20,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "propagateClick": true,
 "minHeight": 1,
 "top": "2%",
 "verticalAlign": "top",
 "bottom": "87%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "layout": "vertical",
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 20,
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "shadow": false
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C827BEB9_C4FD_4082_41DA_C1F5183B16C3_1_HS_5_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_D38554C3_F586_7C6D_41E7_58FA7358D8C8",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C827BEB9_C4FD_4082_41DA_C1F5183B16C3_1_HS_6_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_D38514C3_F586_7C6D_41DC_EA915B622E84",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C9E2F2E5_C4FD_C082_41E7_C6FF4D799690_1_HS_3_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_D384F4C5_F586_7C75_41E9_AFE155F54B5B",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C9E2F2E5_C4FD_C082_41E7_C6FF4D799690_1_HS_5_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_D384B4C5_F586_7C75_41EC_9BC77EB666DC",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C9E2F2E5_C4FD_C082_41E7_C6FF4D799690_1_HS_6_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_D39B44C5_F586_7C75_4185_9390CF6F74EB",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C9DD751B_C4FF_C186_4196_4DEB30E1C015_1_HS_3_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_D389A3F3_F586_742D_41C2_4EB54DD6A1E2",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C9DD751B_C4FF_C186_4196_4DEB30E1C015_1_HS_4_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_D38863F3_F586_742D_41E8_CEF02D6FB631",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C9DD751B_C4FF_C186_4196_4DEB30E1C015_1_HS_5_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_D38833F4_F586_742B_41CA_A0AB6C7D14BB",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C9DD751B_C4FF_C186_4196_4DEB30E1C015_1_HS_6_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_D388F3F4_F586_742B_41CB_A6DF3E6991AE",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C9DD751B_C4FF_C186_4196_4DEB30E1C015_1_HS_7_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_D38883F4_F586_742B_41DF_4A02104B8B66",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C827F766_C4FD_C18E_41E1_7617056AAA7D_1_HS_2_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_D384B4C7_F586_7C75_41D1_4EDD2DC7FE20",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C827F766_C4FD_C18E_41E1_7617056AAA7D_1_HS_3_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_D39B74C7_F586_7C75_41D6_2FFC73C94749",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C827F766_C4FD_C18E_41E1_7617056AAA7D_1_HS_4_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_D39B24C7_F586_7C75_41E9_78AE9E89B0B6",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C827F766_C4FD_C18E_41E1_7617056AAA7D_1_HS_5_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_D39BF4C8_F586_7C7B_41DD_9062EF92EE00",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C827F766_C4FD_C18E_41E1_7617056AAA7D_1_HS_6_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_D39BB4C8_F586_7C7B_41E0_4860C20BE29C",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C827F766_C4FD_C18E_41E1_7617056AAA7D_1_HS_7_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_D39A44C8_F586_7C7B_41BC_CBDCF855546F",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C827F766_C4FD_C18E_41E1_7617056AAA7D_1_HS_8_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_D39A04C9_F586_7C7D_41BE_916C8662D2F8",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C824FB0B_C4FF_4186_41D5_BDBD65AF1796_1_HS_2_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_D38FB3F6_F586_7417_41C0_AC68BF7D0D3C",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C824FB0B_C4FF_4186_41D5_BDBD65AF1796_1_HS_3_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_D38E43F6_F586_7417_41DE_214C61BBD35C",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C824FB0B_C4FF_4186_41D5_BDBD65AF1796_1_HS_4_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_D38E03F7_F586_7416_41E5_112D3F09BE60",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C824FB0B_C4FF_4186_41D5_BDBD65AF1796_1_HS_5_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_D38EC3F7_F586_7416_41E5_8660657E9F09",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C827BB2C_C4FA_C182_41E0_B235998AA120_1_HS_0_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_D398A4CC_F586_7C7B_41D9_D3AFE2687AE9",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C827BB2C_C4FA_C182_41E0_B235998AA120_1_HS_2_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_D39F14CC_F586_7C7B_41D9_AC58B8DB4144",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C827BB2C_C4FA_C182_41E0_B235998AA120_1_HS_3_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_D39F24CC_F586_7C7B_41C9_8269412D5A06",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C9E31C62_C4FD_4786_41CC_396030872F5C_1_HS_3_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_D39984CB_F586_7C7D_41EC_D241BEC550E8",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C9E31C62_C4FD_4786_41CC_396030872F5C_1_HS_4_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_D39854CB_F586_7C7D_41D9_43CB8068D9C0",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C9D1609D_C4FE_C082_41E8_5B5168C3383D_1_HS_2_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_D38184BE_F586_7C16_41EA_C62D2CBD9FC5",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C9D1609D_C4FE_C082_41E8_5B5168C3383D_1_HS_3_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_D38044BE_F586_7C16_41C4_C5473554DD15",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C9D1609D_C4FE_C082_41E8_5B5168C3383D_1_HS_4_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_D38004BF_F586_7C16_41E4_BC4084C7E4B3",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C9D1609D_C4FE_C082_41E8_5B5168C3383D_1_HS_5_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_D380D4BF_F586_7C16_41C1_EF0755541E29",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C9D1609D_C4FE_C082_41E8_5B5168C3383D_1_HS_6_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_D38094C0_F586_7C6A_41ED_2D27EFCB08FE",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C9D1609D_C4FE_C082_41E8_5B5168C3383D_1_HS_7_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_D38744C1_F586_7C6A_41D5_F494236D49C6",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C82494D2_C4FE_C086_41D3_9F06A8CD9DE5_1_HS_3_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_D38DF3F9_F586_741A_41B9_93D35AA004EE",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C82494D2_C4FE_C086_41D3_9F06A8CD9DE5_1_HS_4_0.png",
   "width": 780,
   "class": "ImageResourceLevel",
   "height": 1170
  }
 ],
 "id": "AnimatedImageResource_D38DA3F9_F586_741A_41C9_2F6B1D327F51",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C8267EFE_C4FF_C07E_41CF_496ACBAA40DD_1_HS_2_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_D38A73D9_F586_741D_41ED_4B517F669087",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C8267EFE_C4FF_C07E_41CF_496ACBAA40DD_1_HS_3_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_D38AF3F1_F586_742D_4196_A1346069A180",
 "rowCount": 6,
 "colCount": 4
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0C43BD48_0334_FED6_4184_569A6090129C",
 "left": "0%",
 "width": 36,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.4,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container black"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxWidth": 50,
 "id": "IconButton_0C43AD48_0334_FED6_4176_B4F825BD3B48",
 "left": 10,
 "maxHeight": 50,
 "backgroundOpacity": 0,
 "width": 44,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_0C43AD48_0334_FED6_4176_B4F825BD3B48_rollover.png",
 "propagateClick": true,
 "top": "40%",
 "verticalAlign": "middle",
 "bottom": "40%",
 "minWidth": 1,
 "mode": "push",
 "transparencyActive": true,
 "class": "IconButton",
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_0C43CD48_0334_FED6_4173_3A6EA8849449, true, 0, this.effect_4CD06BFB_5705_AD47_41BD_DD626E481855, 'showEffect', false); this.setComponentVisibility(this.Container_0C438D48_0334_FED6_4187_7AAF8DD38E8D, false, 0, this.effect_4DE9D19D_5705_5DFD_41C8_A84F2FF661E6, 'hideEffect', false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_0C43AD48_0334_FED6_4176_B4F825BD3B48.png",
 "data": {
  "name": "IconButton arrow"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0C43FD48_0334_FED6_417A_E5E082A381AC",
 "left": "0%",
 "width": 300,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.7,
 "overflow": "scroll",
 "children": [
  "this.Image_0C43ED48_0334_FED6_4187_625DBBCE5D00",
  "this.Container_0C431D48_0334_FED6_416C_DF659D25A8A0",
  "this.Container_0C421D49_0334_FED6_4186_D39A3DF00320"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 40,
 "paddingLeft": 40,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 40,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 40,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxWidth": 50,
 "id": "IconButton_0C435D49_0334_FED6_4156_DB6D5F03E21F",
 "backgroundOpacity": 0,
 "maxHeight": 50,
 "right": 9,
 "width": 44,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_0C435D49_0334_FED6_4156_DB6D5F03E21F_rollover.png",
 "propagateClick": true,
 "top": "40%",
 "verticalAlign": "middle",
 "bottom": "40%",
 "minWidth": 1,
 "mode": "push",
 "transparencyActive": true,
 "class": "IconButton",
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_0C43CD48_0334_FED6_4173_3A6EA8849449, false, 0, this.effect_62AD73E7_74A7_9CF6_41C5_55E9CFDD3B7E, 'hideEffect', false); this.setComponentVisibility(this.Container_0C438D48_0334_FED6_4187_7AAF8DD38E8D, true, 0, this.effect_4E3E2032_5705_DAC6_41CE_6A6E562AB368, 'showEffect', false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_0C435D49_0334_FED6_4156_DB6D5F03E21F.png",
 "data": {
  "name": "IconButton collapse"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "backgroundOpacity": 0,
 "width": 60,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "height": 60,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "paddingBottom": 0,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "borderSize": 0,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "data": {
  "name": "image button menu"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "backgroundOpacity": 0,
 "width": 58,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "propagateClick": true,
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "transparencyActive": true,
 "class": "IconButton",
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.shareTwitter('https://mts.visitapy.com')",
 "borderSize": 0,
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "data": {
  "name": "IconButton TWITTER"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "backgroundOpacity": 0,
 "width": 58,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "propagateClick": true,
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "transparencyActive": true,
 "class": "IconButton",
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.shareFacebook('https://mts.visitapy.com')",
 "borderSize": 0,
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "data": {
  "name": "IconButton FB"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_04FF2C2C_1216_7593_4195_88C3C7049763",
 "backgroundOpacity": 1,
 "children": [
  "this.Image_3FD4A7B8_75D8_C15E_41C7_20F7251FAC21"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "50%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "class": "Container",
 "paddingTop": 10,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 10,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51,
 "id": "Container_04FF0C2C_1216_7593_419A_8AC354592A51",
 "backgroundOpacity": 1,
 "children": [
  "this.Container_04FF1C2C_1216_7593_417B_D7E74ABC91E3",
  "this.Container_04FFEC2C_1216_7593_41A4_4CD23AB66B04",
  "this.Container_04FF8C2D_1216_75ED_41A5_B4FCB592F167"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "50%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 60,
 "paddingRight": 60,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 450,
 "layout": "vertical",
 "height": "100%",
 "class": "Container",
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 20,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#0069A3",
 "data": {
  "name": "-right"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_04FE6C2D_1216_75ED_41A3_C531DD2D317A",
 "backgroundOpacity": 0,
 "width": "25%",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_04FE6C2D_1216_75ED_41A3_C531DD2D317A_rollover.png",
 "propagateClick": true,
 "height": "75%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_04FE6C2D_1216_75ED_41A3_C531DD2D317A_pressed.png",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_04FE7C2D_1216_75ED_4197_E539B3CD3A95, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_04FE6C2D_1216_75ED_41A3_C531DD2D317A.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "X"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "height": 50,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "header"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "itemLabelPosition": "bottom",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "backgroundOpacity": 0,
 "width": "100%",
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemBorderRadius": 0,
 "itemMinHeight": 50,
 "scrollBarMargin": 2,
 "rollOverItemLabelFontColor": "#987B55",
 "itemVerticalAlign": "top",
 "paddingLeft": 70,
 "itemPaddingLeft": 3,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "itemOpacity": 1,
 "height": "100%",
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "verticalAlign": "middle",
 "itemMinWidth": 50,
 "itemBackgroundColor": [],
 "minWidth": 1,
 "itemBackgroundColorRatios": [],
 "itemThumbnailOpacity": 1,
 "borderSize": 0,
 "itemPaddingRight": 3,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemPaddingTop": 3,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "scrollBarColor": "#987B55",
 "itemHeight": 156,
 "shadow": false,
 "itemLabelTextDecoration": "none",
 "itemBackgroundOpacity": 0,
 "selectedItemLabelFontColor": "#987B55",
 "scrollBarOpacity": 0.5,
 "itemLabelFontWeight": "bold",
 "itemThumbnailHeight": 125,
 "rollOverItemThumbnailShadow": true,
 "scrollBarVisible": "rollOver",
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontSize": 14,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "borderRadius": 5,
 "itemLabelGap": 7,
 "paddingRight": 70,
 "itemBackgroundColorDirection": "vertical",
 "itemThumbnailShadow": false,
 "selectedItemThumbnailShadow": true,
 "itemThumbnailWidth": 220,
 "itemLabelFontColor": "#666666",
 "itemHorizontalAlign": "center",
 "gap": 26,
 "class": "ThumbnailGrid",
 "selectedItemLabelFontWeight": "bold",
 "paddingBottom": 70,
 "itemPaddingBottom": 3,
 "itemMaxHeight": 1000,
 "paddingTop": 10,
 "itemLabelHorizontalAlign": "center",
 "itemLabelFontStyle": "normal",
 "itemWidth": 220,
 "itemMode": "normal",
 "data": {
  "name": "ThumbnailList5161"
 },
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "itemThumbnailBorderRadius": 10,
 "rollOverItemThumbnailShadowColor": "#987B55",
 "itemLabelFontFamily": "Times New Roman",
 "itemMaxWidth": 1000
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_1813DA3E_1663_8BF1_4193_F28A53801FBC",
 "backgroundOpacity": 1,
 "children": [
  "this.WebFrame_198A3B12_1666_89B6_41B5_4C2585EFD00E"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "99.97%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "class": "Container",
 "paddingTop": 10,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 10,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 40,
 "maxWidth": 40,
 "id": "IconButton_1812DA3F_1663_8BEF_41A5_6E0723037CA1",
 "backgroundOpacity": 0,
 "width": "3.062%",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 20,
 "rollOverIconURL": "skin/IconButton_1812DA3F_1663_8BEF_41A5_6E0723037CA1_rollover.png",
 "propagateClick": true,
 "height": "79.681%",
 "verticalAlign": "middle",
 "minWidth": 20,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_1812DA3F_1663_8BEF_41A5_6E0723037CA1_pressed.png",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_1812EA3F_1663_8BEF_41AF_0A4CCC089B5F, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_1812DA3F_1663_8BEF_41A5_6E0723037CA1.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "X"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "99.987%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "height": 56.55,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "header"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_0DEC9FEC_12FA_D293_41A0_DAD5B350B643",
 "backgroundOpacity": 1,
 "children": [
  "this.Image_3AA4B22B_75D8_C372_41DA_40A3EDD17B37"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "85%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "class": "Container",
 "paddingTop": 10,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 10,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51,
 "id": "Container_0DECBFED_12FA_D26D_41AD_EE1B8CC7BCC8",
 "backgroundOpacity": 1,
 "children": [
  "this.Container_0DECAFED_12FA_D26D_4191_988031ED4C85",
  "this.Container_0DECDFED_12FA_D26D_41A3_11915FF353DB",
  "this.Container_0DECEFED_12FA_D26D_4184_68D80FD2C88F"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "50%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 50,
 "paddingRight": 50,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 460,
 "layout": "vertical",
 "height": "100%",
 "class": "Container",
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 20,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#0069A3",
 "data": {
  "name": "-right"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_0DEC0FED_12FA_D26D_41B1_C01AE2D2C1D4",
 "backgroundOpacity": 0,
 "width": 60,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_0DEC0FED_12FA_D26D_41B1_C01AE2D2C1D4_rollover.png",
 "propagateClick": true,
 "verticalAlign": "middle",
 "height": 60,
 "minWidth": 50,
 "mode": "push",
 "transparencyActive": true,
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_0DEC0FED_12FA_D26D_41B1_C01AE2D2C1D4_pressed.png",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_0DEC3FED_12FA_D26D_419F_4067E8C6DA08, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_0DEC0FED_12FA_D26D_41B1_C01AE2D2C1D4.png",
 "data": {
  "name": "X"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 1095,
 "maxWidth": 1095,
 "id": "Image_0C43ED48_0334_FED6_4187_625DBBCE5D00",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "skin/Image_0C43ED48_0334_FED6_4187_625DBBCE5D00.jpg",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 30,
 "propagateClick": true,
 "top": "0%",
 "height": "25.061%",
 "verticalAlign": "middle",
 "minWidth": 40,
 "class": "Image",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image Company"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0C431D48_0334_FED6_416C_DF659D25A8A0",
 "backgroundOpacity": 0,
 "children": [
  "this.Container_0C430D48_0334_FED6_4145_1E211728F658",
  "this.Button_03D37B27_0C7A_63B3_41A1_89572D8C8762",
  "this.Container_0C435D48_0334_FED6_4180_31E986AED01E",
  "this.Button_1FDDCF4A_0C0A_23FD_417A_1C14E098FDFD",
  "this.Container_0C437D48_0334_FED6_4186_D484F3BB9D32",
  "this.Button_1CA392FC_0C0A_2295_41A3_18DEA65FB6AD",
  "this.Container_0C429D48_0334_FED6_4184_5B627A559FB0",
  "this.Button_1FE4B611_0C0A_256F_418E_EA27E66F8360",
  "this.Container_0C42CD48_0334_FED7_4183_C8B09627F4AA",
  "this.Button_33E0F47E_11C1_A20D_419F_BB809AD89259",
  "this.Container_0C42ED49_0334_FED6_4187_F035BAC1122B"
 ],
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": true,
 "top": "25%",
 "bottom": "25%",
 "scrollBarWidth": 10,
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "vertical",
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Container buttons"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0C421D49_0334_FED6_4186_D39A3DF00320",
 "backgroundOpacity": 0,
 "children": [
  "this.Container_0C43DD49_0334_FED6_4188_BC6CB28AA37E",
  "this.Container_0C43CD49_0334_FED6_417D_336039055769",
  "this.HTMLText_0C432D49_0334_FED6_416F_E89F29514AE6"
 ],
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": true,
 "bottom": "0%",
 "scrollBarWidth": 10,
 "height": 120,
 "verticalAlign": "bottom",
 "minWidth": 1,
 "layout": "vertical",
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Container footer"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 897,
 "maxWidth": 1337,
 "id": "Image_3FD4A7B8_75D8_C15E_41C7_20F7251FAC21",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "skin/Image_3FD4A7B8_75D8_C15E_41C7_20F7251FAC21.jpg",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "height": "100%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "class": "Image",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_to_height",
 "data": {
  "name": "Image72337"
 },
 "shadow": false
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_04FF1C2C_1216_7593_417B_D7E74ABC91E3",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "height": 40,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79,
 "id": "Container_04FFEC2C_1216_7593_41A4_4CD23AB66B04",
 "backgroundOpacity": 0.3,
 "children": [
  "this.Container_095ED5F6_1BEA_B02B_41B1_5247CD8872B4",
  "this.Container_04FFDC2C_1216_7593_41A7_64E2588509FB"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 300,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 100,
 "layout": "vertical",
 "height": "100%",
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#E73B2C",
 "data": {
  "name": "Container text"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_04FF8C2D_1216_75ED_41A5_B4FCB592F167",
 "backgroundOpacity": 0.3,
 "width": 370,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "height": 40,
 "minWidth": 1,
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
 "left": "0%",
 "width": "77.115%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 80,
 "paddingRight": 0,
 "minHeight": 100,
 "propagateClick": true,
 "top": "0%",
 "height": "100%",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "class": "HTMLText",
 "paddingTop": 36,
 "paddingBottom": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#987b55;font-size:3.58vh;font-family:'Otama.ep';\"><B>PANORAMA LIST:</B></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText54192"
 },
 "shadow": false
},
{
 "horizontalAlign": "right",
 "maxHeight": 40,
 "maxWidth": 40,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "backgroundOpacity": 0,
 "width": 40,
 "right": 10,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 40,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.png",
 "propagateClick": true,
 "top": 10,
 "verticalAlign": "top",
 "height": 40,
 "minWidth": 40,
 "mode": "push",
 "transparencyActive": true,
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.png",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.png",
 "data": {
  "name": "X"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "id": "WebFrame_198A3B12_1666_89B6_41B5_4C2585EFD00E",
 "left": "0%",
 "backgroundOpacity": 1,
 "right": "0%",
 "paddingRight": 0,
 "insetBorder": false,
 "paddingLeft": 0,
 "borderRadius": 0,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6047.970640428188!2d-56.96036054461088!3d-25.66649235580886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945c1faf6eb999b9%3A0x35b44d2250a1b984!2sEstaci%C3%B3n%20de%20Tren%20de%20Sapucai!5e0!3m2!1ses-419!2spy!4v1579572151800!5m2!1ses-419!2spy",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "top": "0%",
 "bottom": "0%",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "class": "WebFrame",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "scrollEnabled": true,
 "data": {
  "name": "WebFrame5113"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
 "left": "0%",
 "width": "70%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 80,
 "paddingRight": 0,
 "minHeight": 100,
 "propagateClick": true,
 "top": "0%",
 "height": "100%",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "class": "HTMLText",
 "paddingTop": 15,
 "paddingBottom": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.58vh;font-family:'Cinzel Bold';\"><B>Planos</B></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText54192"
 },
 "shadow": false
},
{
 "horizontalAlign": "right",
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "backgroundOpacity": 0,
 "width": 60,
 "right": 7,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 40,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.png",
 "propagateClick": true,
 "top": 5,
 "verticalAlign": "top",
 "height": 60,
 "minWidth": 40,
 "mode": "push",
 "transparencyActive": true,
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.png",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.png",
 "data": {
  "name": "IconButton54739"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 897,
 "maxWidth": 1337,
 "id": "Image_3AA4B22B_75D8_C372_41DA_40A3EDD17B37",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "skin/Image_3AA4B22B_75D8_C372_41DA_40A3EDD17B37.jpg",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "height": "100%",
 "verticalAlign": "top",
 "minWidth": 1,
 "class": "Image",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image71348"
 },
 "shadow": false
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_0DECAFED_12FA_D26D_4191_988031ED4C85",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "height": 40,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79,
 "id": "Container_0DECDFED_12FA_D26D_41A3_11915FF353DB",
 "backgroundOpacity": 0.3,
 "children": [
  "this.Container_38BF7F5E_1C3A_D01A_41B5_74C8E50916F2",
  "this.Container_30C72FD2_121E_72B7_4185_0FFA7496FDA6",
  "this.HTMLText_0DECCFED_12FA_D26D_418B_9646D02C4859",
  "this.Button_0DECFFED_12FA_D26D_419B_F907711405D7"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 300,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 100,
 "layout": "vertical",
 "height": "100%",
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 30,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#E73B2C",
 "data": {
  "name": "Container text"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0DECEFED_12FA_D26D_4184_68D80FD2C88F",
 "backgroundOpacity": 0.3,
 "width": 370,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "horizontal",
 "height": "2.54%",
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0C430D48_0334_FED6_4145_1E211728F658",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Cinzel Bold",
 "horizontalAlign": "center",
 "id": "Button_03D37B27_0C7A_63B3_41A1_89572D8C8762",
 "backgroundOpacity": 0,
 "pressedFontColor": "#000000",
 "width": 220,
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#DB9B4D"
 ],
 "click": "this.setComponentVisibility(this.Container_04FE7C2D_1216_75ED_4197_E539B3CD3A95, true, 0, null, null, false)",
 "iconHeight": 0,
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "pressedBackgroundOpacity": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 40,
 "rollOverFontColor": "#DB9B4D",
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000"
 ],
 "fontSize": 14,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Info",
 "fontStyle": "normal",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0,
 "data": {
  "name": "Button house info"
 },
 "shadow": false,
 "iconWidth": 0,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontWeight": "bold"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0C435D48_0334_FED6_4180_31E986AED01E",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Cinzel Bold",
 "horizontalAlign": "center",
 "id": "Button_1FDDCF4A_0C0A_23FD_417A_1C14E098FDFD",
 "backgroundOpacity": 0,
 "pressedFontColor": "#000000",
 "width": 220,
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#DB9B4D"
 ],
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "iconHeight": 32,
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 40,
 "rollOverFontColor": "#DB9B4D",
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 14,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Vistas y Fotos",
 "fontStyle": "normal",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0,
 "data": {
  "name": "Button panorama list"
 },
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontWeight": "bold"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0C437D48_0334_FED6_4186_D484F3BB9D32",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Cinzel Bold",
 "horizontalAlign": "center",
 "id": "Button_1CA392FC_0C0A_2295_41A3_18DEA65FB6AD",
 "backgroundOpacity": 0,
 "pressedFontColor": "#000000",
 "width": 220,
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#DB9B4D"
 ],
 "click": "this.setComponentVisibility(this.Container_1812EA3F_1663_8BEF_41AF_0A4CCC089B5F, true, 0, null, null, false)",
 "iconHeight": 32,
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 40,
 "rollOverFontColor": "#DB9B4D",
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 14,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Ubicaci\u00f3n",
 "fontStyle": "normal",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0,
 "data": {
  "name": "Button location"
 },
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontWeight": "bold"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0C429D48_0334_FED6_4184_5B627A559FB0",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Cinzel Bold",
 "horizontalAlign": "center",
 "id": "Button_1FE4B611_0C0A_256F_418E_EA27E66F8360",
 "backgroundOpacity": 0,
 "pressedFontColor": "#000000",
 "width": 220,
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#DB9B4D"
 ],
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
 "iconHeight": 32,
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 40,
 "rollOverFontColor": "#DB9B4D",
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 14,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Planos",
 "fontStyle": "normal",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0,
 "data": {
  "name": "Button floorplan"
 },
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontWeight": "bold"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0C42CD48_0334_FED7_4183_C8B09627F4AA",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Cinzel Bold",
 "horizontalAlign": "center",
 "id": "Button_33E0F47E_11C1_A20D_419F_BB809AD89259",
 "backgroundOpacity": 0,
 "pressedFontColor": "#000000",
 "width": 220,
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#DB9B4D"
 ],
 "click": "this.setComponentVisibility(this.Container_0DEC3FED_12FA_D26D_419F_4067E8C6DA08, true, 0, null, null, false)",
 "iconHeight": 32,
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 40,
 "rollOverFontColor": "#DB9B4D",
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 14,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Contacto",
 "fontStyle": "normal",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0,
 "data": {
  "name": "Button contact"
 },
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontWeight": "bold"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0C42ED49_0334_FED6_4187_F035BAC1122B",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0C43DD49_0334_FED6_4188_BC6CB28AA37E",
 "backgroundOpacity": 1,
 "width": 40,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "height": 2,
 "minWidth": 1,
 "layout": "horizontal",
 "backgroundColor": [
  "#5CA1DE"
 ],
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "blue line"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0C43CD49_0334_FED6_417D_336039055769",
 "backgroundOpacity": 0,
 "children": [
  "this.IconButton_0C43FD49_0334_FED6_417C_95AF1425050C",
  "this.IconButton_0C43ED49_0334_FED6_4177_B2E23B39B26B",
  "this.IconButton_0C431D49_0334_FED6_418B_80DDFBCF8527",
  "this.IconButton_0C430D49_0334_FED6_4163_9F75278C70D8",
  "this.IconButton_0C433D49_0334_FED6_4187_6A29D717A54B"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": 40,
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "horizontal",
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 16,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Container settings"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_0C432D49_0334_FED6_416F_E89F29514AE6",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "height": 78,
 "minWidth": 1,
 "class": "HTMLText",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Company Name</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>info@loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText47602"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0,
 "id": "Container_095ED5F6_1BEA_B02B_41B1_5247CD8872B4",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_04FFCC2C_1216_7593_41A3_D345BDE131A2",
  "this.Container_0BD17D93_1236_F6B5_4193_247950F46092"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": "30%",
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container header"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_04FFDC2C_1216_7593_41A7_64E2588509FB",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_0B1CF751_121B_B3B2_41AA_8DF6E24BB6F1",
  "this.HTMLText_04FFBC2C_1216_7593_41A4_E1B06B145F04"
 ],
 "scrollBarVisible": "always",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "horizontal",
 "height": "75%",
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 20,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- content"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0,
 "id": "Container_38BF7F5E_1C3A_D01A_41B5_74C8E50916F2",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_335E39B6_12FA_FEFE_41AA_91C449696299"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": "44%",
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container header contact"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_30C72FD2_121E_72B7_4185_0FFA7496FDA6",
 "backgroundOpacity": 1,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "height": 7,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#000000"
 ],
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container25772"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_0DECCFED_12FA_D26D_418B_9646D02C4859",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "height": "100%",
 "minWidth": 1,
 "class": "HTMLText",
 "paddingTop": 0,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#987b55;font-size:3.58vh;font-family:'Antonio';\"><B>\u00a1Espero que hayan disfrutado!</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.24vh;font-family:'Open Sans Semibold';\">Aunque nuestra estad\u00eda por Sapuc\u00e1i fue relativamente breve, vamos a seguir actualizando cada punto oportunamente. \u00a1Gracias por visitarnos!</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.58vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#987b55;font-size:3.58vh;font-family:'Antonio';\"><B>CONTACTO:</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.56vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.24vh;font-family:'Open Sans Semibold';\">E-mail:</SPAN><SPAN STYLE=\"color:#999999;font-size:2.24vh;font-family:'Open Sans Semibold';\"> </SPAN><SPAN STYLE=\"color:#f3a22e;\"><A HREF=\"mailto:rholand@rbucci.com\" TARGET=\"_blank\" STYLE=\"text-decoration:none; color:inherit;\"><SPAN STYLE=\"color:#0000ff;font-size:2.24vh;font-family:'Open Sans Semibold';\"><U>rholand@rbucci.com</U></SPAN></A></SPAN><SPAN STYLE=\"color:#999999;font-size:2.24vh;font-family:'Open Sans Semibold';\"> </SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.56vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.24vh;font-family:'Open Sans Semibold';\">Web: </SPAN><SPAN STYLE=\"color:#f3a22e;\"><A HREF=\"http://rbucci.com\" TARGET=\"_blank\" STYLE=\"text-decoration:none; color:inherit;\"><SPAN STYLE=\"color:#0000ff;font-size:2.24vh;font-family:'Open Sans Semibold';\"><U>www.rbucci.com</U></SPAN></A></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.56vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.24vh;font-family:'Open Sans Semibold';\">Tlf.:</SPAN><SPAN STYLE=\"color:#999999;font-size:2.24vh;font-family:'Open Sans Semibold';\"> </SPAN><SPAN STYLE=\"color:#f3a22e;\"><A HREF=\"https://api.whatsapp.com/send?phone=595981408400&amp;text=Hola, me gustÃ³ el Paseo Digital del PanteÃ³n!\" TARGET=\"_blank\" STYLE=\"text-decoration:none; color:inherit;\"><SPAN STYLE=\"color:#0000ff;font-size:2.24vh;font-family:'Open Sans Semibold';\"><U>+595 981 408 400</U></SPAN></A></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.24vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#987B55",
 "data": {
  "name": "HTMLText"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Antonio",
 "horizontalAlign": "center",
 "id": "Button_0DECFFED_12FA_D26D_419B_F907711405D7",
 "backgroundOpacity": 1,
 "width": "35%",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "click": "this.openLink('https://api.whatsapp.com/send?phone=595981408400&text=Hola,%20me%20gust%C3%B3%20el%20Paseo%20Digital%20del%20Pante%C3%B3n!', '_blank')",
 "iconHeight": 32,
 "paddingRight": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "borderRadius": 10,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 30,
 "layout": "horizontal",
 "backgroundColor": [
  "#25D366"
 ],
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "height": "12%",
 "fontSize": "3.26vh",
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "WhatsApp",
 "fontStyle": "normal",
 "borderSize": 0,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 1,
 "data": {
  "name": "Button31015"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontWeight": "bold"
},
{
 "scrollBarOpacity": 0,
 "id": "HTMLText_04FFCC2C_1216_7593_41A3_D345BDE131A2",
 "left": "0%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "bottom": "18.77%",
 "height": "60.825%",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "class": "HTMLText",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.37vh;font-family:'Cinzel Bold';\"><B>Museo de Trenes de Sapuc\u00e1i - Paraguar\u00ed</B></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#996633",
 "data": {
  "name": "HTMLText18899"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0BD17D93_1236_F6B5_4193_247950F46092",
 "left": "0.19%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 1,
 "right": "0.19%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "bottom": "14.08%",
 "height": 7,
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_0B1CF751_121B_B3B2_41AA_8DF6E24BB6F1",
 "backgroundOpacity": 0,
 "width": "50%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "height": "100%",
 "minWidth": 1,
 "class": "HTMLText",
 "paddingTop": 20,
 "paddingBottom": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#987b55;font-size:2.8vh;font-family:'Antonio';\"><B>Informaci\u00f3n General</B></SPAN><SPAN STYLE=\"font-size:1.68vh;\"> </SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.68vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.79vh;font-family:'Open Sans Semibold';\">Nos encontramos a 90 km de Asunci\u00f3n y a 24 Km de Paraguar\u00ed. Esta reliqua, un recuerdo de pasados gloriosos del Paraguay, es donde los trenes llegaron a su descanso.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.79vh;font-family:'Open Sans Semibold';\">Este taller conserva las gigantes m\u00e1quinas inglesas que funcionaban a vapor por un mecanismo de poleas y altas temperaturas.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.79vh;font-family:'Open Sans Semibold';\">Dentro del paseo van a poder apreciar las grandes herramientas y espacios de trabajo de esa \u00e9poca que se utilizaban para fabricar piezas para el mantenimiento de tan bellas obras de ingenier\u00eda.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.79vh;font-family:'Open Sans Semibold';\">Adentro del taller existen cepilladoras, tornos, rectificadoras, tornos horizontales para fabricar ejes de vagones y martillos para doblar rieles.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.79vh;font-family:'Open Sans Semibold';\">Posterior a un periodo de decadencia, por el desarme de la red ferroviaria paraguaya, el taller Sapuc\u00e1i qued\u00f3 inactivo.</SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#987B55",
 "data": {
  "name": "HTMLText12940"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_04FFBC2C_1216_7593_41A4_E1B06B145F04",
 "backgroundOpacity": 0,
 "width": "50%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "height": "100%",
 "minWidth": 1,
 "class": "HTMLText",
 "paddingTop": 20,
 "paddingBottom": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:1.68vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.68vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.68vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.79vh;font-family:'Open Sans Semibold';\">En 1854 Don Carlos Antonio L\u00f3pez contrat\u00f3 a ingenieros ingleses para proyectar el ferrocarril desde Asunci\u00f3n hasta Paraguar\u00ed. El 21 de septiembre de 1861 se inaugur\u00f3 el primer tramo, entre la estaci\u00f3n Central y Trinidad. En agosto de 1864 las v\u00edas llegaron a Paraguar\u00ed \u00faltima estaci\u00f3n construida antes de la Guerra del 70. Tras la guerra, en 1886 las obras se extendieron hasta Villarrica. En 1894, en poder de la sociedad inglesa \u201cThe Paraguay Central Railway Co\u201d, terminaron los talleres de Sapucai.</SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#987B55",
 "data": {
  "name": "HTMLText19460"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0,
 "id": "HTMLText_335E39B6_12FA_FEFE_41AA_91C449696299",
 "left": "0%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "0%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "top": 0,
 "height": "100%",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "class": "HTMLText",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:5.93vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:5.93vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.93vh;font-family:'Cinzel Bold';\"><B>CONTACTO</B></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#BBD149",
 "data": {
  "name": "HTMLText23803"
 },
 "shadow": false
}],
 "backgroundPreloadEnabled": true,
 "class": "Player",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "scripts": {
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "registerKey": function(key, value){  window[key] = value; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getKey": function(key){  return window[key]; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "existsKey": function(key){  return key in window; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "unregisterKey": function(key){  delete window[key]; }
 },
 "buttonToggleFullscreen": [
  "this.IconButton_0C43ED49_0334_FED6_4177_B2E23B39B26B",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0"
 ],
 "scrollBarColor": "#000000",
 "data": {
  "name": "Player468"
 },
 "mouseWheelEnabled": true,
 "shadow": false,
 "downloadEnabled": false,
 "defaultVRPointer": "laser"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
