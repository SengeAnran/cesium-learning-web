import * as Cesium from "cesium/Cesium";
/**
 * 加载wms图层-使用WebMapServiceImageryProvider方式加载
 * @param {Object} viewer 地图视图
 * @param {Object} options
 *   -@param {String} id 图层标识
 *   -@param {String} url 图层服务地址
 */
export function addWMSLayer(viewer, options){
  // 参数处理
  const mapUrl = options.url.substr(0, options.url.indexOf("?"));
  const mapParameters = {
    url: mapUrl,
    parameters: {
      transparent: true,
      format: "image/png"
    }
  };
  const params = getUrlParam(options.url);
  Object.keys(params).forEach((key) => {
    if (params[key]) {
      mapParameters.parameters[key] = params[key];
    }
  });
  mapParameters.layers = mapParameters.parameters.layers;
  // 初始化图层
  var layer = new Cesium.WebMapServiceImageryProvider(mapParameters);
  var imageLayer = new Cesium.ImageryLayer(layer);
  // imageLayerList.push({ layer: imageLayer, name: options.name });
  viewer.imageryLayers.add(imageLayer);
}

const getUrlParam = (url) => {
  // str为？之后的参数部分字符串
  const str = url.substr(url.indexOf("?") + 1);
  // arr每个元素都是完整的参数键值
  const arr = str.split("&");
  // result为存储参数键值的集合
  const result = {};
  for (let i = 0; i < arr.length; i++) {
    // item的两个元素分别为参数名和参数值
    const item = arr[i].split("=");
    result[item[0]] = item[1];
  }
  return result;
};
