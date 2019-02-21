import React from "react"
import { Link } from "react-router-dom"

const Credit = ({ name, site }) => (
	<a href={site} target="_blank" className="return-link">{name}</a>
)

export default Credit