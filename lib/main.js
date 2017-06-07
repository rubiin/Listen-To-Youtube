var buttons = require('sdk/ui/button/action');
var panels = require("sdk/panel");
var self = require("sdk/self");
var tabs = require("sdk/tabs");
// Define keyboard shortcuts for showing and hiding a custom panel.
var { Hotkey } = require("sdk/hotkeys");

var button = buttons.ActionButton({
    id: "listenYT",
    label: "Listen To Youtube",
    icon: {
        "16": "./16.png",
        "32": "./32.png",
        "64": "./64.png"
    },
    onClick: handleClick
});


var showHotKey = Hotkey({
  combo: "accel-shift-d",
  onPress: function() {
   	tabs.open("http://www.youtubeinmp3.com/fetch/?video="+tabs.activeTab.url);
  }
});


var panel = panels.Panel({
    height:490,
	width:350,
    contentURL: self.data.url("panel.html"),
    contentScriptFile: [self.data.url("paneljs.js")]
});

function handleClick(state) {
    panel.show({
        position: button
    });
	
    panel.on("show", function () {
        panel.port.emit("show");
    });
}

panel.port.on("autodetecturl", function (text) {
	
	tabs.open("http://www.youtubeinmp3.com/fetch/?video="+tabs.activeTab.url);
});


//for dev abouts
panel.port.on("devurldata", function (text) {
	
	tabs.open("https://mozillians.org/en-US/u/Rubin/");
});


panel.port.on("urldata", function (text) {
	
	tabs.open("http://www.youtubeinmp3.com/fetch/?video="+text);
});


// http://www.youtubeinmp3.com/fetch/?video=https://www.youtube.com/watch?v=i62Zjga8JOM

//C:\Users\Lenovo\AppData\Roaming\Mozilla\Firefox\Profiles\7je5mdn1.default\extensions


