import React from 'react';
import { Link } from "react-scroll";
import messages from "./messages";
import "./Header.scss";

const { Container } = require('reactstrap');

export default function Header() {
	return(
		<div className="content">
			<Container className="headerContainer">
				<div className="headerContent">
					<img src={"/img/avatar.jpg"} className="headerAvatar" alt="avatar"/>
					<div className="headerName">
						<h1 className="headerFirstName">Damian</h1><h1 className="headerLastName">Cummins</h1>
					</div>
					<h4>Full Stack Developer | AI Enthusiast</h4>
					<i className="fas fa-grip-lines" />
					<h4>Milton Keynes, UK</h4>
					<a href="mailto:damiancummins1@gmail.com"><h4>damiancummins1@gmail.com</h4></a>
					<div className="headerIcons">
						<a href={messages.githubLink} target="_blank" rel="noopener noreferrer"><i className="fab fa-fw fa-1x fa-github" /></a>
						<a href={messages.linkedInLink} target="_blank" rel="noopener noreferrer"><i className="fab fa-fw fa-1x fa-linkedin" /></a>
						<a href={messages.mediumLink} target="_blank" rel="noopener noreferrer"><i className="fab fa-fw fa-1x fa-medium" /></a>
					</div>
					<Link
						activeClass="active"
						to="projectContainer"
						spy={true}
						smooth={true}
						offset={0}
						duration= {200}
					>
						<i className="fas fa-chevron-down" />
					</Link>
				</div>
			</Container>
		</div>
	);
}
