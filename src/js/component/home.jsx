import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import Navbar from "../component/Navbar.jsx";
import Jumbotron from "../component/Jumbotron.jsx";
import BootstrapCard from "../component/Other.jsx";
import Footer from "../component/NavBottom.jsx";


//create your first component
const Home = () => {
	return (
		<div className="container-fluid w-100">
			<Navbar brand= "Start Bootstrap" home="Home" about = "About" services = "Servces" contact = "Contact"/>
			<Jumbotron title ="A very warm welcome!" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi praesentium, velit facilis quam laborum nemo distinctio suscipit fugit repellendus ut debitis delectus ex numquam repellat similique temporibus magni est? Illum?" buttonLabel="Call to action!" buttonUrl="https:www.bbc.com"/>
			<BootstrapCard title1="Some Mountainous Terrain" title2="A round of Golf" title3="Pebbles on the Shore" title4="Multiple Horizons" 
			cardImage1="https://cdn.pixabay.com/photo/2022/10/07/07/13/alps-7504344__340.jpg" cardImage2="https://cdn.pixabay.com/photo/2022/09/19/10/27/golf-7465213__340.jpg" cardImage3="https://cdn.pixabay.com/photo/2022/09/23/16/11/stones-7474749__340.jpg" cardImage4="https://cdn.pixabay.com/photo/2022/09/27/06/23/fog-7482180__340.jpg"
			description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi praesentium, velit facilis quam laborum nemo distinctio suscipit fugit repellendus ut debitis delectus ex numquam repellat similique temporibus magni est? Illum?" buttonLabel="Click here for more info" buttonUrl="https://www.bbc.com"/>
			<Footer text = " © 2022 Copyright:"/>
		</div>
	);
};

export default Home;
