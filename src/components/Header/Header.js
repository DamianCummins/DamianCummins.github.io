import React from "react";
import { Container } from "reactstrap";
import { Link, animateScroll as scroll } from "react-scroll";
import messages from "./messages";
import styles from "./Header.scss";

export default class Header extends React.Component {
	constructor(props) {
		super(props);

		this.state={};
	}

	render() {
		return(
			<div className="content">
				<Container className="headerContainer">
					<div className="headerContent">
						<img src={"/img/avatar.jpg"} className="headerAvatar" alt="avatar"/>
						<div className="headerName">
							<h1 className="headerFirstName">Damian</h1><h1 className="headerLastName">Cummins</h1>
						</div>
						<h4>Full Stack Developer</h4><i className="fas fa-grip-lines" /><h4>AI Enthusiast</h4>
						<div className="headerIcons" style={styles.headerIcons}>
							<a href={messages.githubLink}><i className="fab fa-fw fa-1x fa-github" /></a>
							<a href={messages.linkedInLink}><i className="fab fa-fw fa-1x fa-linkedin" /></a>
							<a href={messages.mediumLink}><i className="fab fa-fw fa-1x fa-medium" /></a>
						</div>
						<Link
							activeClass="active"
							to="projectContainer"
							spy={true}
							smooth={true}
							offset={0}
							duration= {200}
						><i className="fas fa-chevron-down" /></Link>
					</div>
				</Container>
			</div>
		);
	}
}