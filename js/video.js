var video = document.querySelector(".video");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});
// Play Button
document.querySelector("#play").addEventListener("click", function() {
	video.play();
	let vol = document.querySelector("#volume").innerHTML = document.querySelector("#slider").value + "%";
	console.log(vol);
	console.log("Play Video");
});

// Pause Button
document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause Video");
});

// Slow Down
document.querySelector("#slower").addEventListener("click", function(){
	video.playbackRate *= 0.95;
	console.log("Now speed is " + video.playbackRate * 100 + "%");
});

// Speed Up
document.querySelector("#faster").addEventListener("click", function(){
	video.playbackRate /= 0.95;
	console.log("Now speed is " + video.playbackRate * 100 + "%");
});

// Skip Ahead
document.querySelector("#skip").addEventListener("click", function(){
	video.play();
	video.currentTime += 15;
	if (video.currentTime > video.duration) {
		video.currentTime = 0
	}
	console.log("Current time is " + video.currentTime);
});


// Mute
document.querySelector("#mute").addEventListener("click", function() {
	if(video.muted == false){
		video.muted = true;
		document.querySelector("#mute").innerHTML = 'Unmute';
	}
	else{
		video.muted = false;
		document.querySelector("#mute").innerHTML = 'Mute';
	}
});

// Volume Slider
document.querySelector("#slider").addEventListener("change", function() {
	document.querySelector("#volume").innerHTML = document.querySelector("#slider").value + "%";
	let vol =  document.querySelector("#slider").value * 0.01;
	video.volume = vol;
});

// Styled
document.querySelector("#vintage").addEventListener("click", function(){
	video.classList.add('oldSchool');
});

// Original
document.querySelector("#orig").addEventListener("click", function(){
	video.classList.remove('oldSchool');
});