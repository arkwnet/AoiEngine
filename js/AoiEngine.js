/*
	AoiEngine Ver.1.0 (Beta)
	Copyright (c) 2021 Sora Arakawa
	Licensed under the MIT License
*/

var AoiCanvas = null;
var AoiContext = null;
var AoiWidth = 800;
var AoiHeight = 480;
var AoiFrame = 0;
var AoiTime = 0;

window.onload = function() {
	AoiInit();
}

function AoiInit() {
	AoiCanvas = document.getElementById("canvas");
	AoiContext = canvas.getContext("2d");
	AoiMain();
}

function AoiMain() {
	AoiContext.fillStyle = "black";
	AoiContext.fillRect(0, 0, AoiWidth, AoiHeight);
	main();
	AoiFrame++;
	if (AoiFrame >= 60) {
		AoiFrame = 0;
		AoiTime++;
	}
	requestAnimationFrame(AoiMain);
}

function AoiDrawSample() {
	AoiContext.fillStyle = "red";
	AoiContext.fillText(frame, 20, 20);
	AoiContext.fillText(time, 20, 60);
}

function AoiDrawImage(img, x, y) {
	AoiContext.drawImage(img, x, y);
}

function AoiDrawText(text, x, y, color, font) {
	AoiContext.fillStyle = color;
	AoiContext.font = font;
	AoiContext.fillText(text, x, y);
}