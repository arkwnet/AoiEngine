let logo = new Image();
logo.src = "img/logo.png";

window.onload = function() {
	AoiInit("canvas");
}

function main() {
	AoiDrawImage(logo, 144, 145);
	AoiDrawText("Version: " + AoiVersion, 20, 30, "white", "14px sans-serif");
	AoiDrawText("Frame: " + AoiFrame, 20, 50, "white", "14px sans-serif");
	AoiDrawText("Time: " + AoiTime, 20, 70, "white", "14px sans-serif");
	AoiDrawText("Width: " + AoiWidth, 20, 90, "white", "14px sans-serif");
	AoiDrawText("Height: " + AoiHeight, 20, 110, "white", "14px sans-serif");
}