import React from "react";
import { Card, CardBody, CardImg, CardTitle, CardText, Col, Row, Container } from "reactstrap";
import messages from "./messages";
import styles from "./ProjectList.scss";
import projects from "../../data/projects.json"

export default class ProjectList extends React.Component {
	constructor(props) {
		super(props);

		this.state={};

		this.renderProjectCards = this.renderProjectCards.bind(this);
	}

	renderProjectCards = () => {
		return (
			<Row>
				{projects.map((project, idx) => 
					<Col className="project" xs="12" sm="6" md="4">
						<a href={project.url}>
							<Card>
								<CardImg width="100%" src={window.location.pathname + "/img/" + project.img}/>
								<div className="overlay">
									<h3>{project.type}</h3>
									<i className="fas fa-grip-lines fa-2x" />
									<h3>{project.title}</h3>
								</div>
							</Card>
						</a>
					</Col>
				)}
			</Row>
		)
	}

	render() {
		return(
			<div>
				<Container className="projectContainer">
					<div className="projectListTitle">
						<h3>Projects and Experience</h3>
						<i className="fas fa-grip-lines fa-2x" />
					</div>
					<div className="projectListContent">
						{this.renderProjectCards()}
					</div>
				</Container>
			</div>
		);
	}
}