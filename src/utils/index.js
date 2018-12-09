const randomAngle = () => {
	const positive = Math.random() > 0.6 ? true : false;
	if (positive) {
		return Math.floor(Math.random() * 10 + 1);
	} else {
		return Math.floor(Math.random() * 10 - 10);
	}
};

export { randomAngle };
