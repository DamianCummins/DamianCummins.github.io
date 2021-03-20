import React from "react";
import messages from "./messages";
import "./Footer.scss";
const { Container } = require("reactstrap");

export default function Footer() {
	return (
		<React.Fragment>
			<Container>
				<div className="footerContent">
					<span>{messages.text}</span>
				</div>
			</Container>
		</React.Fragment>
	);
}