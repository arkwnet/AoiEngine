let logo = new Image();
logo.src = "img/logo.png";

window.onload = function() {
	AoiInit("canvas");
	AoiSetLoadingImage("img/loading.png");
	AoiShowLoading();
}

function main() {
	if (AoiFrame == 59 && AoiLoading === true) {
		AoiHideLoading();
	}
	AoiDrawImage(logo, 144, 145);
	AoiSetColor("#FFEE58");
	AoiDrawBox(20, 440, (AoiTime + ((AoiFrame * 1.66) / 100)) * 8, 20);
	AoiDrawText("Version: " + AoiVersion, 20, 30, "white", "14px sans-serif");
	AoiDrawText("Frame: " + AoiFrame, 20, 50, "white", "14px sans-serif");
	AoiDrawText("Time: " + AoiTime, 20, 70, "white", "14px sans-serif");
	AoiDrawText("Width: " + AoiWidth, 20, 90, "white", "14px sans-serif");
	AoiDrawText("Height: " + AoiHeight, 20, 110, "white", "14px sans-serif");
}