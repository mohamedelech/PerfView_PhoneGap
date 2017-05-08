cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-datepicker.DatePicker",
        "file": "plugins/cordova-plugin-datepicker/www/windows/DatePicker.js",
        "pluginId": "cordova-plugin-datepicker",
        "clobbers": [
            "datePicker"
        ]
    },
    {
        "id": "cordova-plugin-datepicker.DatePickerProxy",
        "file": "plugins/cordova-plugin-datepicker/src/windows/DatePickerProxy.js",
        "pluginId": "cordova-plugin-datepicker",
        "merges": [
            ""
        ]
    },
    {
        "id": "cordova-plugin-geolocation.GeolocationProxy",
        "file": "plugins/cordova-plugin-geolocation/src/windows/GeolocationProxy.js",
        "pluginId": "cordova-plugin-geolocation",
        "runs": true
    },
    {
        "id": "cordova-plugin-geolocation.Coordinates",
        "file": "plugins/cordova-plugin-geolocation/www/Coordinates.js",
        "pluginId": "cordova-plugin-geolocation",
        "clobbers": [
            "Coordinates"
        ]
    },
    {
        "id": "cordova-plugin-geolocation.PositionError",
        "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
        "pluginId": "cordova-plugin-geolocation",
        "clobbers": [
            "PositionError"
        ]
    },
    {
        "id": "cordova-plugin-geolocation.Position",
        "file": "plugins/cordova-plugin-geolocation/www/Position.js",
        "pluginId": "cordova-plugin-geolocation",
        "clobbers": [
            "Position"
        ]
    },
    {
        "id": "cordova-plugin-geolocation.geolocation",
        "file": "plugins/cordova-plugin-geolocation/www/geolocation.js",
        "pluginId": "cordova-plugin-geolocation",
        "clobbers": [
            "navigator.geolocation"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.2",
    "cordova-plugin-datepicker": "0.9.3",
    "cordova-plugin-compat": "1.1.0",
    "cordova-plugin-geolocation": "2.4.3"
};
// BOTTOM OF METADATA
});