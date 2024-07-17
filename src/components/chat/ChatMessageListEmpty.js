import { Box, Grid, Paper, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { Stack, styled } from '@mui/system';
import { AcUnit } from '@mui/icons-material';
import { useContext } from 'react';
import { RequestContext } from '../pages/chat';


const StyledQuickRequestCard = styled(Paper)(({ theme }) => ({
	padding: '16px 20px',
	border: '1px solid',
	borderColor: theme.palette.divider,
	opacity: '0.75',
	cursor: 'pointer',
	transition: '0.2s',
	"&:hover": {
		opacity: '1',
		transform: 'translateY(-2px)',
		boxShadow: '0px 4px 22px rgba(0, 0, 0, 0.04), 0px 0px 0px 0.5px rgba(0, 0, 0, 0.03)'
	}
}));

const QuickRequestCard = ({request, icon, onClick}) => {
	return (
	  <StyledQuickRequestCard elevation={0} onClick={() => onClick(request)}>
		  <Stack direction="column" spacing={2}>
			  {icon}
			  <Typography variant={'body2'} sx={{opacity: '0.75'}}>{request}</Typography>
		  </Stack>
	  </StyledQuickRequestCard>
	)
}


const popularRequests = [
	{
		request: 'Как установить приложение из RuStore?',
		icon: <AcUnit fontSize="small" sx={{opacity: '1', color: '#E2BBE9'}} />
	},
	{
		request: 'Browse through the icons below to find the one you need. The search field supports synonyms—for example, try searching for "hamburger',
		icon: <AcUnit fontSize="small" sx={{opacity: '1', color: '#E2BBE9'}} />
	},
	{
		request: 'Browse through the icons below to find the one you need. The search field supports synonyms—for example, try searching for "hamburger',
		icon: <AcUnit fontSize="small" sx={{opacity: '1', color: '#E2BBE9'}} />
	},
	{
		request: 'Browse through the icons below to find the one you need. The search field supports synonyms—for example, try searching for "hamburger',
		icon: <AcUnit fontSize="small" sx={{opacity: '1', color: '#E2BBE9'}} />
	}
]

const ChatMessageListEmpty = () => {
	const {saveAnswer} = useContext(RequestContext)


	const pasteQuickAnswer = (request) => {
		saveAnswer(request)
	}

	return (
	  <Box
		width={'100%'}
		justifyContent={'center'}>
		  <Stack spacing={2} direction={'row'} alignItems={'start'} sx={{paddingRight: '40px'}}>
			  {/*<Grid item xs={2} sm={4} md={4} >*/}
			  {/*  <QuickRequestCard request={"Как установить какашку"} icon={<AcUnit fontSize="small" sx={{opacity: '1', color: '#5A639C'}} />} />*/}
			  {/*</Grid>*/}
			  {/*<Grid item xs={2} sm={4} md={4} >*/}
			  {/*  <QuickRequestCard request={"Как установить какашку"} icon={<AcUnit fontSize="small" sx={{opacity: '1', color: '#7776B3'}} />} />*/}
			  {/*</Grid>*/}
			  {/*<Grid item xs={2} sm={4} md={4} >*/}
			  {/*  <QuickRequestCard request={"Как установить какашку"} icon={<AcUnit fontSize="small" sx={{opacity: '1', color: '#9B86BD'}} />} />*/}
			  {/*</Grid>*/}
			  {/*<Grid item xs={2} sm={4} md={4}>*/}
			  {/*  <QuickRequestCard request={"Как установить какашку"} icon={<AcUnit fontSize="small" sx={{opacity: '1', color: '#E2BBE9'}} />} />*/}
			  {/*</Grid>*/}

			  {
				  popularRequests.map((pop, index) => <QuickRequestCard {...pop} onClick={pasteQuickAnswer} key={index}  />)
			  }
		  </Stack>
	  </Box>
	);
};

export default ChatMessageListEmpty