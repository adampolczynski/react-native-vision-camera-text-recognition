"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RemoveLanguageModel = RemoveLanguageModel;
var _reactNative = require("react-native");
async function RemoveLanguageModel(code) {
  const {
    RemoveLanguageModel: Remove
  } = _reactNative.NativeModules;
  return await Remove.remove(code);
}
//# sourceMappingURL=RemoveLanguageModel.js.map