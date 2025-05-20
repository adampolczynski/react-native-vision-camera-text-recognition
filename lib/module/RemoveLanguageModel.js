import { NativeModules } from 'react-native';
export async function RemoveLanguageModel(code) {
  const {
    RemoveLanguageModel: Remove
  } = NativeModules;
  return await Remove.remove(code);
}
//# sourceMappingURL=RemoveLanguageModel.js.map