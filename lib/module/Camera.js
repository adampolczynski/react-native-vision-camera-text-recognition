function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef, useMemo } from 'react';
import { Camera as VisionCamera, useFrameProcessor } from 'react-native-vision-camera';
import { createTextRecognitionPlugin } from './scanText';
import { useRunOnJS } from 'react-native-worklets-core';
import { createTranslatorPlugin } from './translateText';
export const Camera = /*#__PURE__*/forwardRef(function Camera(props, ref) {
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
  const useWorklets = useRunOnJS(data => {
    callback(data);
  }, [options]);
  const frameProcessor = useFrameProcessor(frame => {
    'worklet';

    const data = plugin(frame);
    // @ts-ignore
    useWorklets(data);
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, !!device && /*#__PURE__*/React.createElement(VisionCamera, _extends({
    pixelFormat: "yuv",
    ref: ref,
    frameProcessor: frameProcessor,
    device: device
  }, p)));
});
export function useTextRecognition(options) {
  return useMemo(() => createTextRecognitionPlugin(options), [options]);
}
export function useTranslate(options) {
  return useMemo(() => createTranslatorPlugin(options), [options]);
}
//# sourceMappingURL=Camera.js.map