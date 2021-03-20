import React from "react";
import Header from "../Header";
import ProjectList from "../ProjectList";
import Assistant from "../Assistant";
import Footer from "../Footer";
import "./ContentHandler.scss";


export default function ContentHandler() {
	return(
		<React.Fragment>
			<div className="maincontent">
				<Header/>
				<ProjectList/>
				<Assistant/>
				<Footer/>
			</div>
		</React.Fragment>
	);
}
