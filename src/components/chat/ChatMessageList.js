import ChatMessageItem from './ChatMessageItem';
import ChatAnswerItem from './ChatAnswerItem';
import { Stack, styled } from '@mui/system';
import ChatMessageListEmpty from './ChatMessageListEmpty';
import { useEffect, useState } from 'react';

const StyledMessageListItem = styled(Stack)(({ theme }) => ({
}));

const ChatMessageList = ({messages}) => {
	const [localMessages, setLocalMessages] = useState(messages);

	useEffect(() => {
		setLocalMessages(messages)
	}, [messages]);
	return (
	  <StyledMessageListItem spacing={3} alignItems="start">
		  {localMessages.map((message, index) => <ChatMessageItem key={index} {...message}/> )}
		  {localMessages.length === 0 && <ChatMessageListEmpty/>}
	  </StyledMessageListItem>
	)
}

export default ChatMessageList