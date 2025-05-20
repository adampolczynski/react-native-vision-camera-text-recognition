"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Camera = void 0;
exports.useTextRecognition = useTextRecognition;
exports.useTranslate = useTranslate;
var _react = _interopRequireWildcard(require("react"));
var _reactNativeVisionCamera = require("react-native-vision-camera");
var _scanText = require("./scanText");
var _reactNativeWorkletsCore = require("react-native-worklets-core");
var _translateText = require("./translateText");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const Camera = exports.Camera = /*#__PURE__*/(0, _react.forwardRef)(function Camera(props, ref) {
  const {
    device,
    callback,
    options,
    mode,
    ...p
  } = props;
  let plugin;
  if (mode === 'translate') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {
      translate
    } = useTranslate(options);
    plugin = translate;
  } else {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {
      scanText
    } = useTextRecognition(options);
    plugin = scanText;
  }
  const useWorklets = (0, _reactNativeWorkletsCore.useRunOnJS)(data => {
    callback(data);
  }, [options]);
  const frameProcessor = (0, _reactNativeVisionCamera.useFrameProcessor)(frame => {
    'worklet';

    const data = plugin(frame);
    // @ts-ignore
    useWorklets(data);
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !!device && /*#__PURE__*/_react.default.createElement(_reactNativeVisionCamera.Camera, _extends({
    pixelFormat: "yuv",
    ref: ref,
    frameProcessor: frameProcessor,
    device: device
  }, p)));
});
function useTextRecognition(options) {
  return (0, _react.useMemo)(() => (0, _scanText.createTextRecognitionPlugin)(options), [options]);
}
function useTranslate(options) {
  return (0, _react.useMemo)(() => (0, _translateText.createTranslatorPlugin)(options), [options]);
}
//# sourceMappingURL=Camera.js.map