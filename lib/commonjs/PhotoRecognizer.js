"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PhotoRecognizer = PhotoRecognizer;
var _reactNative = require("react-native");
async function PhotoRecognizer(options) {
  const {
    PhotoRecognizerModule
  } = _reactNative.NativeModules;
  const {
    uri,
    orientation
  } = options;
  if (!uri) {
    throw Error("Can't resolve img uri");
  }
  if (_reactNative.Platform.OS === 'ios') {
    return await PhotoRecognizerModule.process(uri.replace('file://', ''), orientation || 'portrait');
  } else {
    return await PhotoRecognizerModule.process(uri);
  }
}
//# sourceMappingURL=PhotoRecognizer.js.map