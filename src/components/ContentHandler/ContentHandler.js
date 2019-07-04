import React, {Component} from "react";
import Header from "../../components/Header";
import ProjectList from "../../components/ProjectList";
import Footer from "../../components/Footer";
import styles from "./ContentHandler.scss";

class ContentHandler extends Component {

	constructor(props) {
		super(props);

		this.state = {
			page: "home"
		}

		this.navChangeHandler = this.navChangeHandler.bind(this);
	}

	navChangeHandler = (selected) => {
		this.setState({
			page: selected
		});
	};

	render() {
		return(
			<div className="content">
				<div className="maincontent" style={styles.maincontent}>
					<Header/>
					<ProjectList/>
					<Footer/>
				</div>
			</div>
		);
	}
}

export default ContentHandler;