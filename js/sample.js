var logo = new Image();
logo.src = "img/logo.png";

function main() {
	AoiDrawImage(logo, 144, 145);
	AoiDrawText("Frame: " + AoiFrame, 20, 30, "white", "14px sans-serif");
	AoiDrawText("Time: " + AoiTime, 20, 50, "white", "14px sans-serif");
}