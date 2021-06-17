/*
	AoiEngine Ver.1.0 (Beta)
	Copyright (c) 2021 Sora Arakawa
	Licensed under the MIT License
*/

var canvas = null;
var g = null;
var w = 800;
var h = 480;
var frame = 0;
var time = 0;

window.onload = function() {
	AoiInit();
}

function AoiInit() {
	canvas = document.getElementById("canvas");
	g = canvas.getContext("2d");
	AoiMain();
}

function AoiMain() {
	g.fillStyle = "black";
	g.fillRect(0, 0, w, h);
	AoiDrawSample();
	frame++;
	if (frame >= 60) {
		frame = 0;
		time++;
	}
	requestAnimationFrame(AoiMain);
}

function AoiDrawSample() {
	g.fillStyle = "red";
	g.fillText(frame, 20, 20);
	g.fillText(time, 20, 60);
}