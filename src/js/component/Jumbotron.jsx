import React from "react";
import PropType from "prop-types";


const Jumbotron = (props) => {
	return (
			<div className="jumbotron mx-5 p-5">
				<h1 className="display-4 mt-3" >{props.title}</h1>
				<p className="lead">{props.description}</p>
				<a target ="_blank" className="btn btn-primary btn-lg mb-3" href={props.buttonUrl} role="button">
					{props.buttonLabel}
				</a>
			</div>
	);
};

Jumbotron.propTypes = {
	title: PropType.string,
	description: PropType.string,
	buttonLabel: PropType.string,
	buttonUrl: PropType.string,
};


export default Jumbotron;