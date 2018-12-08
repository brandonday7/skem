const randomAngle = () => {
	const positive = Math.random() > 0.5 ? true : false;
	if (positive) {
		return Math.floor(Math.random() * 15 + 1);
	} else {
		return Math.floor(Math.random() * 15 - 10);
	}
};

export { randomAngle };
