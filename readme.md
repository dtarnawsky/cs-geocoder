# Geocoding Comparison

As part of investigating the options for geocoding in a [Capacitor](https://capacitorjs.com/) application there are 2 plugins that stand out:

- [cordova-plugin-nativegeocoder](https://github.com/sebastianbaar/cordova-plugin-nativegeocoder?tab=readme-ov-file#known-issues)
- [@capgo/nativegeocoder](https://github.com/Cap-go/capacitor-nativegeocoder)

## cordova-plugin-nativegeocoder

In an Angular project you can install [@awesome-cordova-plugins/native-geocoder](https://www.npmjs.com/package/@awesome-cordova-plugins/native-geocoder) and [@awesome-cordova-plugins/core](https://github.com/danielsogl/awesome-cordova-plugins?tab=readme-ov-file#installation) as an additional dependency to get Angular/Typescript support. Whilst this works it is lacking [documentation](https://danielsogl.gitbook.io/awesome-cordova-plugins/native-geocoder).

## @capgo/nativegeocoder

This project has built-in Typescript support and has [good documentation](https://github.com/Cap-go/capacitor-nativegeocoder?tab=readme-ov-file#install).

This plugin is based on the code of `cordova-plugin-nativegeocoder` so the functionality is equivalent.

## Conclusion

I would recommend using `@capgo/nativegeocoder` as the documentation is better, is type-safe by default and has no additional dependencies.