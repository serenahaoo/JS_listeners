var video = document.getElementById("player1");
document.getElementById("slider").value = 0;
document.getElementById("volume").innerHTML = "0";

window.addEventListener("load", function() {
	console.log("Good job opening the window")

	video.load();
	video.loop = false;
	video.autoplay = false;
});


document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");

	video.play();
	document.getElementById("slider").value = 100;
	document.getElementById("volume").innerHTML = "100";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");

	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down Video");
	
	video.playbackRate *= 0.9;
	
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up Video");
	
	video.playbackRate *= 1.1; //not sure about this proportion
	
	console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Forward");

	video.currentTime += 10;

	console.log(video.currentTime);

	if (video.currentTime >= 68.926){
		video.currentTime = 0;
	}
	video.play();

});

document.querySelector("#mute").addEventListener("click", function() {
	
	if(document.getElementById("mute").innerHTML == "Mute"){
		console.log("Mute Video");
		video.muted = true;
		document.getElementById("mute").innerHTML = "Unmute";
	}
	else{
		console.log("Unmute Video");
		video.muted = false;
		document.getElementById("mute").innerHTML = "Mute";
	}
});

document.querySelector("#slider").addEventListener("click", function() {
	console.log("Change Volume");
	
	let volumeValue = document.getElementById("slider").value;

	if (volumeValue == 90){
		video.volume = 0.9;
		document.getElementById("volume").innerHTML = "90";
	}
	if (volumeValue == 80){
		video.volume = 0.8;
		document.getElementById("volume").innerHTML = "80";
	}
	if (volumeValue == 70){
		video.volume = 0.7;
		document.getElementById("volume").innerHTML = "70";
	}
	if (volumeValue == 60){
		video.volume = 0.6;
		document.getElementById("volume").innerHTML = "60";
	}
	if (volumeValue == 50){
		video.volume = 0.5;
		document.getElementById("volume").innerHTML = "50";
	}
	if (volumeValue == 40){
		video.volume = 0.4;
		document.getElementById("volume").innerHTML = "40";
	}
	if (volumeValue == 30){
		video.volume = 0.3;
		document.getElementById("volume").innerHTML = "30";
	}
	if (volumeValue == 20){
		video.volume = 0.2;
		document.getElementById("volume").innerHTML = "20";
	}
	if (volumeValue == 10){
		video.volume = 0.1;
		document.getElementById("volume").innerHTML = "10";
	}
	if (volumeValue ==0){
		video.volume = 0;
		document.getElementById("volume").innerHTML = "0";
	}
	
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Activate Old School Style");
	
	video.style.filter = "grayscale(100%)";
	video.style.width = "75%";
	video.style.border = "5px double grey"
	video.style.borderRadius = "20px";
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Activate Original Style");
	
	video.style.filter = "none";
	video.style.width = "90%";
	video.style.border = "2px solid black"
	video.style.margin = "0 auto";
	video.style.borderRadius = "0px";
});