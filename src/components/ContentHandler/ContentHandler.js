import React from "react";
import Header from "../../components/Header";
import ProjectList from "../../components/ProjectList";
import Assistant from "../../components/Assistant";
import Footer from "../../components/Footer";
import "./ContentHandler.scss";

export default function ContentHandler(props) {
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
