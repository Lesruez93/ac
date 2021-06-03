// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAvxx1WqABsnehs7YJaCG0LO4p7uChHVAo",
    authDomain: "lesterdemo-e054e.firebaseapp.com",
    databaseURL: "https://lesterdemo-e054e.firebaseio.com",
    projectId: "lesterdemo-e054e",
    storageBucket: "lesterdemo-e054e.appspot.com",
    messagingSenderId: "205218851412",
    appId: "1:205218851412:web:fdbce0380c725548d99bc1"
    // apiKey: 'AIzaSyCgrWOAJdIpE98-irq_o4DIkcoc47jiytY',
    // authDomain: 'dev-ion4fullpwa.firebaseapp.com',
    // databaseURL: 'https://dev-ion4fullpwa.firebaseio.com',
    // projectId: 'dev-ion4fullpwa',
    // storageBucket: 'dev-ion4fullpwa.appspot.com',
    // messagingSenderId: '110862065236'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
