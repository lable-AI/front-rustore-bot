import React, { useEffect, useState } from 'react';
import { Stack, styled, useTheme } from '@mui/system';
import { Box, CircularProgress, Divider, Paper, Typography } from '@mui/material';
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
	// const [isLoading, setLoading] = useState(false);

	const getAnswer = () => axios.get('https://668859650bc7155dc01b29df.mockapi.io/responses/1')

	const {isError, data, error, isSuccess, isLoading} = useQuery('getAnswer' + key, getAnswer)

	useEffect(() => {
		if(isSuccess && data.data){
			setAnswer(data.data)
		}
	}, [isSuccess]);
	//
	// useEffect(() => {
	// 	setLoading(isPending)
	// }, [isPending])

	return (<>
		<StyledMessageItem elevation={0}>
			<Stack spacing={2}>
				<Stack spacing={1} direction="row" alignItems="center">
					{ isLoading && <CircularProgress size={14} /> }
					<Typography sx={{paddingLeft: "8px"}} variant="h6">{request}</Typography>
				</Stack>

				{isSuccess && (
				  <>
					  <ChatAnswerItem {...answer} />
				  </>
				)}
			</Stack>

		</StyledMessageItem>

	</>);
};

export default ChatMessageItem;