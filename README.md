# rn-border-style-removed-stays-dashed

On Android, a `View` whose `borderStyle: 'dashed'` is removed keeps drawing a dashed border. This repository is [React Native's reproducer template](https://github.com/react-native-community/reproducer-react-native) (React Native 0.88.1) with one change, `ReproducerApp/App.tsx`: a 240×120 box with an 8 px red border and `borderStyle: 'dashed'`, a button that removes `borderStyle` from its style, and beside them the same box without `borderStyle`.

## Steps

1. Clone and install:
   ```sh
   git clone https://github.com/YevheniiKotyrlo/rn-border-style-removed-stays-dashed
   cd rn-border-style-removed-stays-dashed/ReproducerApp
   yarn install
   ```
2. Build and install the app on an Android device: `yarn android`, or `cd android && ./gradlew assembleRelease` and `adb install -r app/build/outputs/apk/release/app-release.apk`.
3. Tap **Remove borderStyle**.

Expected: the first box's border turns solid, like the box that never had `borderStyle`; the label reads "borderStyle removed".

What I see on a Galaxy S23 (Android 14): the label changes, and the border stays dashed.
