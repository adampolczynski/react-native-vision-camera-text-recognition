import { VisionCameraProxy } from 'react-native-vision-camera';
const LINKING_ERROR = `Can't load plugin translate.Try cleaning cache or reinstall plugin.`;
export function createTranslatorPlugin(options) {
  const plugin = VisionCameraProxy.initFrameProcessorPlugin('translate', {
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