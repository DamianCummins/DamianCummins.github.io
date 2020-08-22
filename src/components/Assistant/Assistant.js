import React, { useEffect, useState } from "react";
import { GiftedChat } from 'react-web-gifted-chat';
import { Container } from "reactstrap";
import assistantUtil from "../../lib/assistantUtil";
import "./Assistant.scss";

export default function Assistant(props) {
	const [ messages, setMessages ] = useState([]);

	useEffect(() => {
		getMessage("What can you do?".replace(/[\n\r]+/g, ' '));
	}, []);

	useEffect(() => {
		if (messages.length > 0 && messages[0].user.id !== '2') {
			getMessage(messages[0].text.replace(/[\n\r]+/g, ' '), messages);
		}
	}, [messages])
	

	const onSend = (message = []) => {
		const chatMessages = GiftedChat.append(messages, message);
		setMessages(chatMessages);
	};

	const getMessage = (text, previousMessages) => {
		assistantUtil.predict(text)
			.then((response) => {
				const message = {
					id: Math.round(Math.random() * 1000000).toString(),
					text: response[0].response,
					createdAt: new Date(),
					user: {
						id: '2',
						name: 'dAImian Assistant',
					},
				};
				setMessages(GiftedChat.append(previousMessages, message));
			});
	};
	return (
		<React.Fragment>
			<Container className="assistantContainer">
				<div className="assistantTitle">
					<h3>Damian Assistant</h3>
					<i className="fas fa-grip-lines fa-2x" />
				</div>
				<div className="assistantChat">
					<GiftedChat
						placeholder="Send your message to Damian Assistant..."
						messages={messages}
						onSend={(message) => onSend(message)}
						multiline={false}
						user={{
							id: '1',
						}}
					/>
				</div>
			</Container>
		</React.Fragment>
	);
}
