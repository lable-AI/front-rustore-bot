import Head from 'next/head';
import {
	Box,
	Button,
	Card,
	Container,
	Divider,
	Grid,
	IconButton,
	Link,
	Paper,
	TextareaAutosize,
	TextField,
	Typography
} from '@mui/material';
import { Layout as DashboardLayout } from '../layouts/dashboard/layout';
import { createContext, useEffect, useState } from 'react';
import { Stack, styled } from '@mui/system';
import { Send } from '@mui/icons-material';
import { ourColor, warning } from '../theme/colors';
import { alpha } from '@mui/material/styles';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import axios from 'axios';
import { grey } from '@mui/material/colors';
import ChatMessageItem from '../components/ChatMessageItem';
import Readme from './readme';
import ChatInputField from '../components/ChatInputField';
import ChatAnswerItem from '../components/ChatAnswerItem';
import ChatMessageListEmpty from '../components/ChatMessageListEmpty';
import ChatMessageList from '../components/ChatMessageList';

export const RequestContext = createContext(null);

const Page = () => {
	const [messages, setMessages] = useState([]);

	// const getAnswer = (result) => axios.get('https://668859650bc7155dc01b29df.mockapi.io/responses')
	//
	// const mutation = useMutation(getAnswer);

	const saveAnswer = (request) => {
		setMessages(prev => [{request}, ...prev]);
	};
	//
	// useEffect(() => {
	// 	if (mutation.isSuccess && mutation.data.data) {
	// 		setMessages(prev => mutation.data.data.concat(prev));
	// 	}
	// }, [mutation.isSuccess]);

	return (
	  <RequestContext.Provider value={{ }}>
		<Container component="main">
			<Stack spacing={4}>
				<Stack>
					<Typography variant={'h4'} gutterBottom>Чат</Typography>
					<Typography variant={'body1'} color={'grey.500'}>Задавайте свой вопрос, а Олег
						на него ответит</Typography>
				</Stack>
				<Stack spacing={2}>
					<ChatInputField onSend={saveAnswer} />
					<ChatMessageList messages={messages} />
				</Stack>
			</Stack>
		</Container>
	</RequestContext.Provider>
	);
};

Page.getLayout = (page) => (
  <DashboardLayout>
	  <Head>
		  <title>
			  Label AI | Chat
		  </title>
	  </Head>
	  {page}
</DashboardLayout>);

export default Page;