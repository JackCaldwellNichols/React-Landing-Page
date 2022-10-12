import React from "react";
import PropType from "prop-types";

const BootstrapCard = (props) => {
	return (
        <div className="row mt-0">
            <div className="col">
                <div className="card m-5">
                    <img className="card-img-top" src={props.cardImage1} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{props.title1}</h5>
                        <p className="card-text">
                            {props.description}
                        </p>
                        <a target = "_blank" href={props.buttonUrl} className="btn btn-danger">
                            {props.buttonLabel}
                        </a>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card m-5">
                    <img className="card-img-top" src={props.cardImage2} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{props.title2}</h5>
                        <p className="card-text">
                        {props.description}
                        </p>
                        <a target = "_blank" href={props.buttonUrl} className="btn btn-success">
                            {props.buttonLabel}
                        </a>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card m-5">
                    <img className="card-img-top" src={props.cardImage3} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{props.title3}</h5>
                        <p className="card-text">
                            {props.description}
                        </p>
                        <a target = "_blank" href={props.buttonUrl} className="btn btn-warning">
                            {props.buttonLabel}
                        </a>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card m-5">
                    <img className="card-img-top" src={props.cardImage4} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{props.title4}</h5>
                        <p className="card-text">
                            {props.description}
                        </p>
                        <a target = "_blank" href={props.buttonUrl} className="btn btn-primary">
                            {props.buttonLabel}
                        </a>
                    </div>
                </div>
            </div>
        </div>   
	);
};

BootstrapCard.propTypes = {
	title1: PropType.string,
    title2: PropType.string,
    title3: PropType.string,
    title4: PropType.string,
    cardImage1: PropType.string,
    cardImage2: PropType.string,
    cardImage3: PropType.string,
    cardImage4: PropType.string,
	description: PropType.string,
    buttonLabel: PropType.string,
    buttonUrl: PropType.string
	
};


export default BootstrapCard;