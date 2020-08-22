import React from "react";
import { Card, CardImg,  Col, Row, Container } from "reactstrap";
import "./ProjectList.scss";
import projects from "../../data/projects.json"

export default function ProjectList(props) {
	const renderProjectCards = () => {
		return (
			<Row>
				{projects.map((project, idx) => 
					<Col key={idx} className="project" xs="12" sm="6" md="4">
						<a href={project.url} target="_blank" rel="noopener noreferrer">
							<Card>
								<CardImg width="100%" src={"/img/" + project.img}/>
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
	};

	return(
		<div>
			<Container className="projectContainer">
				<div className="projectListTitle">
					<h3>Projects and Experience</h3>
					<i className="fas fa-grip-lines fa-2x" />
				</div>
				<div className="projectListContent">
					{renderProjectCards()}
				</div>
			</Container>
		</div>
	);
}
