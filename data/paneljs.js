

var butt=document.getElementById("para");

var textArea = document.getElementById("textbox");
var devUrlclick=document.getElementById("devUrl");




self.port.on("show", function onShow() {
	
//textArea.focus();
butt.onclick = function () {


text=textArea.value;

self.port.emit("urldata",text);


};


devUrlclick.onclick = function () {

// for about developer
text="";
self.port.emit("devurldata",text);


};



});

/*


self.port.on("show", function onShow() {
textArea.focus();
self.port.emit("gotit", text);
});
*/
