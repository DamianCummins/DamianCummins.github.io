import React from "react";
import { Container } from "reactstrap";
import messages from "./messages";
import "./Footer.scss";

export default function Footer(props) {
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