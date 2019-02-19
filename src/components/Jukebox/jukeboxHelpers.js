const buttonCoords = (width, height) => ({
	name: "buttons",
	areas: [
		{
			name: "pause", 
			shape: "poly", 
			coords: [
				0.5782*width, 0.8648*height, 
				0.6259*width, 0.8648*height, 
				0.6259*width, 0.8986*height, 
				0.5782*width, 0.8986*height
			]
		},
		{
			name: "play", 
			shape: "poly", 
			coords: [
				0.6871*width, 0.8587*height, 
				0.6871*width, 0.9001*height, 
				0.7755*width, 0.8817*height
			]
		},
		{
			name: "next", 
			shape: "poly", 
			coords: [
				0.7891*width, 0.8679*height,
				0.8209*width, 0.8679*height,
				0.8231*width, 0.8587*height,
				0.873*width, 0.8771*height,
				0.8254*width, 0.8986*height,
				0.8231*width, 0.9171*height,
				0.7891*width, 0.9171*height
			]
		},
		{
			name: "none",
			shape: "poly",
			coords: [
				0.2268*width, 0.6144*height,
				width, 0.6144*height,
				width, height,
				0.2268*width, height
			]
		}
	]
})

const buttonTranslations = {
	pause: {x: "36.6vh", y: "-13.7vh", w: "4.2vh"},
	play: {x: "43.5vh", y: "-14.1vh", w: "7vh"},
	next: {x: "49.8vh", y: "-14.1vh", w: "7vh"}
}

const getMeTo = (song, childIndex) => {
	if (song === "dq") {
		if (childIndex === 1) return 2
		else if (childIndex === 2) return 1
		else return 0
	} else if (song === "dpoy") {
		if (childIndex === 0) return 1
		else if (childIndex === 2) return 2
		else return 0
	} else if (song === "smoy") {
		if (childIndex === 0) return 2
		else if (childIndex === 1) return 1
		else return 0
	}
}


export { buttonCoords, buttonTranslations, getMeTo }