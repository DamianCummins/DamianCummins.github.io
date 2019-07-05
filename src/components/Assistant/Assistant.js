import React from "react";
import { GiftedChat } from 'react-web-gifted-chat';
import { Container } from "reactstrap";
import assistantUtil from "../../lib/assistantUtil";
import messages from "./messages";
import styles from "./Assistant.scss";
import projects from "../../data/projects.json"

export default class Assistant extends React.Component {
	constructor (props) {
		super (props);
	
		this.state = {
		  messages: [],
		  conversationID: null,
		}
	}
	
	componentDidMount () {
		this.getMessage("What can you do?".replace(/[\n\r]+/g, ' '), );
	}

	onSend = (message = []) => {
		this.setState((previousState) => ({
			messages: GiftedChat.append(previousState.messages, message),
		}), () => {
			this.getMessage(message[0].text.replace(/[\n\r]+/g, ' '), );
		});
	}

	getMessage = async (text) => {
		assistantUtil.predict(text).then((response) => {
			console.log(response);
			let message = {
				_id: Math.round(Math.random() * 1000000).toString(),
				text: response[0].response,
				createdAt: new Date(),
				user: {
				  _id: '2',
				  name: 'dAImian Assistant',
				},
			};
			this.setState((previousState) => ({
				messages: GiftedChat.append(previousState.messages, message),
			}));
		});
	  }
	

	render() {
		return (
			<div>
				<Container className="assistantContainer">
					<div className="assistantTitle">
						<h3>Damian Assistant</h3>
						<i className="fas fa-grip-lines fa-2x" />
					</div>
					<div className="assistantChat">
						<GiftedChat
							placeholder="Send your message to Damian Assistant..."
							messages={this.state.messages}
							onSend={(messages) => this.onSend(messages)}
							multiline={false}
							user={{
								id: '1',
							}}
						/>
					</div>
				</Container>
			</div>
		);
	  }
}