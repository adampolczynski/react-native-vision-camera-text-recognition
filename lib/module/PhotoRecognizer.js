import { NativeModules, Platform } from 'react-native';
export async function PhotoRecognizer(options) {
  const {
    PhotoRecognizerModule
  } = NativeModules;
  const {
    uri,
    orientation
  } = options;
  if (!uri) {
    throw Error("Can't resolve img uri");
  }
  if (Platform.OS === 'ios') {
    return await PhotoRecognizerModule.process(uri.replace('file://', ''), orientation || 'portrait');
  } else {
    return await PhotoRecognizerModule.process(uri);
  }
}
//# sourceMappingURL=PhotoRecognizer.js.map