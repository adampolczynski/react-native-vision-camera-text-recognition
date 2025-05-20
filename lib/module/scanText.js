import { VisionCameraProxy } from 'react-native-vision-camera';
const LINKING_ERROR = `Can't load plugin scanText.Try cleaning cache or reinstall plugin.`;
export function createTextRecognitionPlugin(options) {
  const plugin = VisionCameraProxy.initFrameProcessorPlugin('scanText', {
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