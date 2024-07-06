import ChatMessageItem from './ChatMessageItem';
import ChatAnswerItem from './ChatAnswerItem';
import { Stack, styled } from '@mui/system';
import ChatMessageListEmpty from './ChatMessageListEmpty';

const StyledMessageListItem = styled(Stack)(({ theme }) => ({
}));

const ChatMessageList = ({messages}) => {
	return (
	  <StyledMessageListItem spacing={1} alignItems="start">
		  {messages.map((message, index) => message?.request ? (<>
			  <ChatMessageItem key={index} {...message}/>
		  </>) : <ChatAnswerItem key={index} {...message} />)
		  }
		  {messages.length === 0 && <ChatMessageListEmpty/>}
	  </StyledMessageListItem>
	)
}

export default ChatMessageList