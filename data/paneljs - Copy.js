

var butt=document.getElementById("para");
var butt1=document.getElementById("para1");
var textArea = document.getElementById("textbox");
var devUrlclick=document.getElementById("devUrl");


self.port.on("show", function onShow() {
	
//textArea.focus();
butt.onclick = function () {


text=textArea.value;
var index;
var temp = new Array();
temp = str.split(",");



for (index = 0; index < temp.length; index++) {
   setTimeout(function(){ self.port.emit("urldata",temp[undex]); }, 5000); 
}



};


devUrlclick.onclick = function () {

// for about developer
text="";
self.port.emit("devurldata",text);


};


butt1.onclick = function () {

// var btn = document.getElementById("para");


text="";
self.port.emit("autodetecturl",text);


};

});

/*


self.port.on("show", function onShow() {
textArea.focus();
self.port.emit("gotit", text);
});
*/
