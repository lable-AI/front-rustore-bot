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
import React, { createContext, useEffect, useState } from 'react';
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
	  <RequestContext.Provider value={{ saveAnswer }}>
		<Container component="main">
			<Stack spacing={4}>
				<Stack spacing={1} direction="row">
					<div style={{
						borderRadius: '12px',
						padding: '12px 16px',
						width: 'min-content',
						background: 'radial-gradient(circle, hsla(263, 29%, 63%, 0.2) 0%, hsla(291, 51%, 82%, 0.2) 100%)',
						filter: 'progid: DXImageTransform.Microsoft.gradient( startColorstr="#9B86BD", endColorstr="#E2BBE9", GradientType=1 )'
					}}>
						<Typography variant={'h3'}
									color={((theme) => theme.palette.text.primary)}>Чат</Typography>
					</div>
					<Typography width={'120px'} variant={'body2'}
								color={((theme) => theme.palette.text.secondary)}>Задавайте свой
						вопрос, а Олег на него ответит</Typography>
				</Stack>
				<Stack spacing={2}>
					<ChatInputField onSend={saveAnswer}/>
					<ChatMessageList messages={messages}/>
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