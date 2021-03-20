import React, { useEffect, useState } from "react";
import { GiftedChat, IMessage } from 'react-web-gifted-chat';
import assistantUtil from "../../lib/assistantUtil";
import "./Assistant.scss";

const { Container } = require("reactstrap");

export default function Assistant() {
	const [ messages, setMessages ] = useState<IMessage[]>([]);

	useEffect(() => {
		getMessage("What can you do?".replace(/[\n\r]+/g, ' '), []);
	}, []);

	useEffect(() => {
		if (messages.length > 0 && messages[0].user.id !== '2') {
			getMessage(messages[0].text.replace(/[\n\r]+/g, ' '), messages);
		}
	}, [messages])
	

	const onSend = (message: IMessage[] = []) => {
		const chatMessages = GiftedChat.append(messages, message);
		setMessages(chatMessages);
	};

	const getMessage = (text: string, previousMessages: IMessage[]) => {
		assistantUtil.predict(text)
			.then((response: PredictionResponse[]) => {
				const message = [{
					id: Math.round(Math.random() * 1000000).toString(),
					text: response[0] && response[0].response ? response[0].response : '',
					createdAt: new Date(),
					user: {
						id: '2',
						name: 'dAImian Assistant',
					},
				}];
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
						user={{
							id: '1',
						}}
					/>
				</div>
			</Container>
		</React.Fragment>
	);
}
