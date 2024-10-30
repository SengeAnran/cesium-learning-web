<template>
  <div id="cesiumContainer">
  </div>
</template>

<script>
import * as Cesium from "cesium/Cesium";

export default {
  name: "HelloWorld",

  mounted() {
    this.initCesium();
  },
  methods: {
    async initCesium() {
      // 密钥
      const defaultAccessToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3ODYwNDg3MS1lMGMwLTRkOTYtODU5Mi0yY2JhZWNmOGZjMWQiLCJpZCI6MjUxNTA1LCJpYXQiOjE3MzAyMDgzNzV9.otZgCDTr2OCqwHMh4YPvA9rwNq_Doc_UuTuElzTmyi8`;
      // 设置
      Cesium.Ion.defaultAccessToken = defaultAccessToken;
      // let viewer = new Cesium.Viewer("cesiumContainer");
      const viewer = new Cesium.Viewer("cesiumContainer", {
        infoBox: false,
        fullscreenButton: false,
        vrButton: false,
        geocoder: false,
        homeButton: false,
        sceneModePicker: false,
        selectionIndicator: false,
        timeline: false,
        navigationHelpButton: false,
        navigationInstructionsInitiallyVisible: false,
        animation: false,
        baseLayerPicker: false,
        // terrainProvider: await Cesium.createWorldTerrainAsync(),
        terrainProvider: Cesium.createWorldTerrain()
      });
      viewer._cesiumWidget._creditContainer.style.display = "none";
      viewer.scene.globe.depthTestAgainstTerrain = true;

      viewer.scene.debugShowFramesPerSecond = true;
      // 加载多图层
      // // layers: `${geoLayers}`,
      // const layerWMS = new Cesium.WebMapServiceImageryProvider({
      //   url: "/map/geoserver/gsLearning/wms",
      //   layers: "gsLearning:dom",
      //   parameters: {
      //     service: "WMS",
      //     transparent: true, //背景透明
      //     format: "image/png8",
      //     // exceptions: "application/vnd.ogc.se_inimage",
      //   },
      // });
      // viewer.imageryLayers.addImageryProvider(layerWMS);
      // console.log('SSSS',layerWMS);

      // // 定义目标位置和视角
      // var targetPosition = Cesium.Cartesian3.fromDegrees(
      //   102.54677295684814,
      //   24.92044687271119,
      //   3500
      // );
      // var heading = Cesium.Math.toRadians(90.0);
      // // var pitch = Cesium.Math.toRadians(-90.0);
      // var roll = Cesium.Math.toRadians(0.0);
      //
      // // 相机飞到目标点
      // viewer.camera.flyTo({
      //   destination: targetPosition,
      //   orientation: {
      //     // heading: heading,
      //     pitch: -90,
      //     // roll: roll
      //   },
      //   duration: 2 // 飞行动画时长
      // });
      /**
       *
       */
      // viewer.zoomTo(layerWMS);
      // eslint-disable-next-line max-len
      // const geoLayers = 'ningbo:A1_4326,ningbo:A2_4326';
      // 以前
      const tileset = new Cesium.Cesium3DTileset({
        url: "/geomap/tileset.json",
        // projectTo2D: true,
        // url: "https://www.liaomz.top/tiles/40866/tileset.json",
      });
      tileset.readyPromise.then(() => {
        viewer.scene.primitives.add(tileset);
      });
      // const tileset = viewer.scene.primitives.add(
      //   new Cesium.Cesium3DTileset({
      //     url: "https://www.liaomz.top/tiles/40866/tileset.json",
      //     //url: Cesium.IonResource.fromAssetId(96188),
      //   })
      // );
      // const tileset = await Cesium.Cesium3DTileset({
      //   url: "https://www.liaomz.top/tiles/40866/tileset.json",
      // });
      // viewer.scene.primitives.add(tileset);
      viewer.zoomTo(tileset); // 缩放到 tileset 范围
      // Cesium.Cesium3DTileset.fromUrl(
      //   // "https://www.liaomz.top/tiles/40866/tileset.json"
      //   "http://127.0.0.1:6080/dom.tif"
      // ).then((tileset) => {
      //   console.log('tileset', tileset);
      //   viewer.scene.primitives.add(tileset);
      //   viewer.zoomTo(tileset);
      // });
    }
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

