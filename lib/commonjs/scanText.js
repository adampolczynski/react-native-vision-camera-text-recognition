"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTextRecognitionPlugin = createTextRecognitionPlugin;
var _reactNativeVisionCamera = require("react-native-vision-camera");
const LINKING_ERROR = `Can't load plugin scanText.Try cleaning cache or reinstall plugin.`;
function createTextRecognitionPlugin(options) {
  const plugin = _reactNativeVisionCamera.VisionCameraProxy.initFrameProcessorPlugin('scanText', {
    ...options
  });
  if (!plugin) {
    throw new Error(LINKING_ERROR);
  }
  return {
    scanText: frame => {
      'worklet';

      // @ts-ignore
      return plugin.call(frame);
    }
  };
}
//# sourceMappingURL=scanText.js.map