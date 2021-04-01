/*
	AoiEngine
	Copyright (c) 2021 Sora Arakawa
	Licensed under the MIT License
*/

var canvas = null;
var g = null;

window.onload = function() {
	AoiInit();
}

function AoiInit() {
	canvas = document.getElementById("canvas");
	g = canvas.getContext("2d");
	g.fillRect(0, 0, 800, 480);
}