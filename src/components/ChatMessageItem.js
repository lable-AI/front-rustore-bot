import React from 'react';
import { Stack, styled, useTheme } from '@mui/system';
import { Box, Paper, Typography } from '@mui/material';
import { system } from '../theme/colors';

const StyledMessageItem = styled(Paper)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	padding: theme.spacing(1),
	border: '1px solid',
	borderColor: theme.palette.divider,
}));

const ChatMessageItem = ({ request }) => {
	return (<>
		<StyledMessageItem elevation={0}>
			<Typography variant="body2">Ваш запрос:</Typography>
			<Typography variant="h6">{request}</Typography>
		</StyledMessageItem>

	</>);
};

export default ChatMessageItem;