import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import MyCard from "./Navbar";
import Jumbo from "./Jumbotron";
import Card from "./Cards";
import Foo from "./Footer"
//create your first component
const Home = () => {
	return (
		<div className="">
			<MyCard/>
			<Jumbo/>
			<div class="row row-cols-1 row-cols-md-4 g-4">
				<Card/>
				<Card/>
				<Card/>
				<Card/> 
			</div>
			
			<Foo/>
		</div>
			
	);
};

export default Home;
