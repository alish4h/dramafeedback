cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-googleplus.GooglePlus",
    "file": "plugins/cordova-plugin-googleplus/www/GooglePlus.js",
    "pluginId": "cordova-plugin-googleplus",
    "clobbers": [
      "window.plugins.googleplus"
    ]
  },
  {
    "id": "cordova-plugin-dialogs.notification",
    "file": "plugins/cordova-plugin-dialogs/www/notification.js",
    "pluginId": "cordova-plugin-dialogs",
    "merges": [
      "navigator.notification"
    ]
  },
  {
    "id": "es6-promise-plugin.Promise",
    "file": "plugins/es6-promise-plugin/www/promise.js",
    "pluginId": "es6-promise-plugin",
    "runs": true
  },
  {
    "id": "nl-afas-cordova-plugin-securelocalstorage.SecureLocalStorage",
    "file": "plugins/nl-afas-cordova-plugin-securelocalstorage/www/plugins.SecureLocalStorage.js",
    "pluginId": "nl-afas-cordova-plugin-securelocalstorage",
    "clobbers": [
      "cordova.plugins.SecureLocalStorage"
    ]
  },
  {
    "id": "cordova-plugin-chrome-apps-common.events",
    "file": "plugins/cordova-plugin-chrome-apps-common/events.js",
    "pluginId": "cordova-plugin-chrome-apps-common",
    "clobbers": [
      "chrome.Event"
    ]
  },
  {
    "id": "cordova-plugin-chrome-apps-common.errors",
    "file": "plugins/cordova-plugin-chrome-apps-common/errors.js",
    "pluginId": "cordova-plugin-chrome-apps-common"
  },
  {
    "id": "cordova-plugin-chrome-apps-common.stubs",
    "file": "plugins/cordova-plugin-chrome-apps-common/stubs.js",
    "pluginId": "cordova-plugin-chrome-apps-common"
  },
  {
    "id": "cordova-plugin-chrome-apps-common.helpers",
    "file": "plugins/cordova-plugin-chrome-apps-common/helpers.js",
    "pluginId": "cordova-plugin-chrome-apps-common"
  },
  {
    "id": "cordova-plugin-chrome-apps-storage.Storage",
    "file": "plugins/cordova-plugin-chrome-apps-storage/storage.js",
    "pluginId": "cordova-plugin-chrome-apps-storage",
    "clobbers": [
      "chrome.storage"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-googleplus": "5.3.0",
  "cordova-plugin-dialogs": "2.0.1",
  "es6-promise-plugin": "4.2.2",
  "nl-afas-cordova-plugin-securelocalstorage": "0.1.18",
  "cordova-plugin-chrome-apps-common": "1.0.7",
  "cordova-plugin-chrome-apps-storage": "1.0.4"
};
// BOTTOM OF METADATA
});