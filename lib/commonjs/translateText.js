"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTranslatorPlugin = createTranslatorPlugin;
var _reactNativeVisionCamera = require("react-native-vision-camera");
const LINKING_ERROR = `Can't load plugin translate.Try cleaning cache or reinstall plugin.`;
function createTranslatorPlugin(options) {
  const plugin = _reactNativeVisionCamera.VisionCameraProxy.initFrameProcessorPlugin('translate', {
    ...options
  });
  if (!plugin) {
    throw new Error(LINKING_ERROR);
  }
  return {
    translate: frame => {
      'worklet';

      return plugin.call(frame);
    }
  };
}
//# sourceMappingURL=translateText.js.map