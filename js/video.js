var video;

window.addEventListener("load", function () {
	console.log("Good job opening the window");

	// Initialize the video element
	video = document.getElementById("player1");
	video.autoplay = false;
	video.loop = false;
	video.load();

	// Play Video
	document.getElementById("play").addEventListener("click", function () {
		console.log("Play Video");
		video.play();
		document.getElementById("volume").textContent = `${Math.round(video.volume * 100)}%`;
	});

	// Pause Video
	document.getElementById("pause").addEventListener("click", function () {
		console.log("Pause Video");
		video.pause();
	});

	// Slow Down
	document.getElementById("slower").addEventListener("click", function () {
		video.playbackRate *= 0.9;
		console.log(`New speed: ${video.playbackRate.toFixed(5)}`);
	});

	// Speed Up
	document.getElementById("faster").addEventListener("click", function () {
		video.playbackRate /= 0.9;
		console.log(`New speed: ${video.playbackRate.toFixed(5)}`);
	});

	// Skip Ahead
	document.getElementById("skip").addEventListener("click", function () {
		if (video.currentTime + 10 >= video.duration) {
			video.currentTime = 0;
		} else {
			video.currentTime += 10;
		}
		console.log(`Current time: ${video.currentTime.toFixed(2)}s`);
	});

	// Mute & Unmute
	document.getElementById("mute").addEventListener("click", function () {
		video.muted = !video.muted;
		this.textContent = video.muted ? "Unmute" : "Mute";
	});

	// Volume Slider
	document.getElementById("slider").addEventListener("input", function () {
		video.volume = this.value / 100;
		video.muted = false;
		document.getElementById("mute").textContent = "Mute";
		document.getElementById("volume").textContent = `${Math.round(video.volume * 100)}%`;
	});

	// Add oldSchool class
	document.getElementById("vintage").addEventListener("click", function () {
		video.classList.add("oldSchool");
	});

	// Remove oldSchool class
	document.getElementById("orig").addEventListener("click", function () {
		video.classList.remove("oldSchool");
	});
});