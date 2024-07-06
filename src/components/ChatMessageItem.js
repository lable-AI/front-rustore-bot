import React, { useEffect, useState } from 'react';
import { Stack, styled, useTheme } from '@mui/system';
import { Box, Divider, Paper, Typography } from '@mui/material';
import { system } from '../theme/colors';
import ChatAnswerItem from './ChatAnswerItem';
import axios from 'axios';
import { useQuery } from 'react-query';

const StyledMessageItem = styled(Paper)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	padding: "10px 14px",
}));

const ChatMessageItem = ({ request, key }) => {
	const [answer, setAnswer] = useState({});

	const getAnswer = () => axios.get('https://668859650bc7155dc01b29df.mockapi.io/responses/1')

	const {isPending, isError, data, error, isSuccess} = useQuery('getAnswer' + key, getAnswer)

	useEffect(() => {
		if(isSuccess && data.data){
			setAnswer(data.data)
		}
	}, [isSuccess]);

	return (<>
		<StyledMessageItem elevation={0}>
			<Stack spacing={2}>
				<Typography sx={{paddingLeft: "8px"}} variant="h6">{request}</Typography>
				<Divider />
				<Stack>
					{
					  isSuccess && <ChatAnswerItem {...answer} />
					}
					{
					  isPending && 'Загрузка решений'
					}
				</Stack>
			</Stack>

		</StyledMessageItem>

	</>);
};

export default ChatMessageItem;