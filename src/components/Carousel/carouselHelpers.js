const getMovement = movement => {
	if (movement === "left") return "left"
	else if (movement === "right") return "right"
	else return "none"
}

export { getMovement }