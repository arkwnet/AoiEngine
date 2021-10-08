/*
	AoiEngine Ver.1.2
	Copyright (c) 2021 Sora Arakawa
	Licensed under the MIT License
*/

const AoiVersion = "1.2";
let AoiCanvas = null;
let AoiContext = null;
let AoiWidth = null;
let AoiHeight = null;
let AoiFrame = 0;
let AoiTime = 0;
let AoiLoading = false;
let AoiLoadingImage = new Image();

function AoiInit(id) {
	AoiCanvas = document.getElementById(id);
	AoiWidth = AoiCanvas.clientWidth;
	AoiHeight = AoiCanvas.clientHeight;
	AoiContext = AoiCanvas.getContext("2d");
	AoiMain();
}

function AoiMain() {
	AoiContext.fillStyle = "black";
	AoiContext.fillRect(0, 0, AoiWidth, AoiHeight);
	main();
	if (AoiLoading === true) {
		AoiContext.fillStyle = "black";
		AoiContext.fillRect(0, 0, AoiWidth, AoiHeight);
		AoiContext.drawImage(AoiLoadingImage, 0, 0);
	}
	AoiFrame++;
	if (AoiFrame >= 60) {
		AoiFrame = 0;
		AoiTime++;
	}
	requestAnimationFrame(AoiMain);
}

function AoiDrawImage(img, x, y) {
	AoiContext.drawImage(img, x, y);
}

function AoiDrawText(text, x, y, color, font) {
	AoiContext.fillStyle = color;
	AoiContext.font = font;
	AoiContext.fillText(text, x, y);
}

function AoiDrawBox(x, y, w, h) {
	AoiContext.fillRect(x, y, w, h);
}

function AoiSetColor(color) {
	AoiContext.fillStyle = color;
}

function AoiGeneratePNGImage() {
	return AoiCanvas.toDataURL("image/png");
}

function AoiGenerateJPEGImage() {
	return AoiCanvas.toDataURL("image/jpeg");
}

function AoiShowLoading() {
	AoiLoading = true;
}

function AoiHideLoading() {
	AoiLoading = false;
}

function AoiSetLoadingImage(path) {
	AoiLoadingImage.src = path;
}