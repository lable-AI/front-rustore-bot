import { Box, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

const ChatMessageListEmpty = () => {
	return (
	  <Box
		width={'100%'}
		justifyContent={'center'}>
		  <Typography
			align={'center'}
			color={grey[500]}
			variant={'body2'}>
			  История поиска
		  </Typography>
	  </Box>
	);
};

export default ChatMessageListEmpty