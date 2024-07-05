import React from 'react';
import { Stack, styled, useTheme } from '@mui/system';
import { Box, Paper, Typography } from '@mui/material';
import { system } from '../../theme/colors';

function MessageItem(props) {
	const theme = useTheme()
	return (
	  <Box
		sx={{
			border: '1px solid',
			borderColor: system.divider,
			padding: '8px 16px',
		}}>
		  <Stack
			direction="column"
			justifyContent="flex-start"
			alignItems="flex-start"
			spacing={1}>
			  <Typography>kjfkwe</Typography>
			  <Typography>kjfkwe</Typography>
			  <Typography>kjfkwe</Typography>
			  <Typography>kjfkwe</Typography>
		  </Stack>
	  </Box>

	);
}

export default MessageItem;