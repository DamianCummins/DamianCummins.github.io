import React from "react";
import { Container } from "reactstrap";
import messages from "./messages";
import styles from "./Footer.scss";

export default class Footer extends React.Component {
	constructor(props) {
		super(props);

		this.state={};
	}

	render() {
		return(
			<div className="content">
				<Container>
					<div className="footerContent">
						<span>{messages.text}</span>
					</div>
				</Container>
			</div>
		);
	}
}