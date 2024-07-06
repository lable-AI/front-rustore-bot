import { Box, IconButton, TextField, Typography } from '@mui/material';
import { Stack, styled } from '@mui/system';
import { Send } from '@mui/icons-material';
import { ourColor } from '../theme/colors';
import { alpha } from '@mui/material/styles';
import { useContext, useState } from 'react';
import { RequestContext } from '../pages/chat';


const StyledLoadingIndicator = styled(Typography)(({ theme }) => ({
	color: theme.palette.text.secondary,
	marginLeft: '8px',
	padding: '4px',
	position: 'absolute',
}))

const StyledErrorIndicator = styled(Typography)(({ theme }) => ({
	color: theme.palette.error.main,
	marginLeft: '8px',
	padding: '4px',
	position: 'absolute',
}))

const ChatInputField = ({onSend}) =>{
  	const {mutation} = useContext(RequestContext)
	const [searchValue, setSearchValue] = useState('');

	const sendHandler = () => {
		onSend(searchValue)
		setSearchValue('')
	}


	return (
	  <Box sx={{paddingBottom: '16px'}}>
		  <Stack width={'100%'} direction={'row'} alignItems={'start'}>
			  <TextField
				multiline
				maxRows={5}
				fullWidth={true}
				value={searchValue}
				label={'Ваш запрос'}
				onChange={(event) => {
					setSearchValue(event.target.value);
				}}
			  	onKeyDown={e => {

					  if(e.key==='Enter') {
						  e.preventDefault();
						  sendHandler();
					  }
				}}/>
			  <IconButton onClick={sendHandler}
						  disabled={searchValue.length === 0}
						  sx={{
							  marginTop: '16px'
						  }}>
				  <Send sx={{
					  color: searchValue ? ourColor.main : alpha(ourColor.main, 0.4)
				  }}/>
			  </IconButton>
		  </Stack>
	  </Box>
	);
};

export default ChatInputField;