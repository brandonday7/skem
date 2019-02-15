const buttonCoords = {
	name: "buttons",
	areas: [
		{
			name: "pause", 
			shape: "poly", 
			coords: [255, 563, 276, 563, 276, 585, 255, 585]
		},
		{
			name: "play", 
			shape: "poly", 
			coords: [303, 559, 303, 586, 342, 574]
		},
		{
			name: "next", 
			shape: "poly", 
			coords: [
				348, 565,
				362, 565,
				363, 559,
				385, 571,
				364, 585,
				363, 579,
				348, 579
			]
		},
		{
			name: "none",
			shape: "poly",
			coords: [
				100, 400,
				500, 400,
				500, 700,
				100, 700
			]
		}
	]
}


export { buttonCoords }