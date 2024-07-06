import Head from 'next/head';
import {
	Box,
	Button,
	Card,
	Container, Divider,
	Grid,
	IconButton,
	Link,
	Paper,
	TextareaAutosize,
	TextField,
	Typography
} from '@mui/material';
import { Layout as DashboardLayout } from '../layouts/dashboard/layout';
import { useEffect, useState } from 'react';
import { Stack, styled } from '@mui/system';
import { Send } from '@mui/icons-material';
import { ourColor, warning } from '../theme/colors';
import { alpha } from '@mui/material/styles';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import axios from 'axios';
import { grey } from '@mui/material/colors';

const StyledAnswerItem = styled(Paper)(({ theme }) => ({
	display: 'flex', flexDirection: 'column', padding: theme.spacing(1),
	background: grey[100],
	width: 'auto'
}));

const AnswerItem = ({ article, text, url, score }) => {
	return (<StyledAnswerItem elevation={0}>
		<Typography variant="h6">{article}</Typography>
		<Typography><Link href={url}>Link</Link></Typography>
		<Typography variant="body1">{text}</Typography>
	</StyledAnswerItem>);
};

const StyledMessageItem = styled(Paper)(({ theme }) => ({
	display: 'flex', flexDirection: 'column', padding: theme.spacing(1),
}));

const MessageItem = ({ request }) => {
	return (
	  <>
		  <StyledMessageItem elevation={0}>
			  <Typography variant="h6">{request}</Typography>
		  </StyledMessageItem>

	  </>
	);
};

const StyledLoadingItem = styled(Paper)(({ theme }) => ({
	backgroundColor: grey[100], width: 'min-content', padding: theme.spacing(2)
}));

const LoadingItem = () => {
	return (<StyledLoadingItem elevation={0}>
		<Typography variant="body2">Подождите...</Typography>
	</StyledLoadingItem>);
};

const StyledMessageListItem = styled(Stack)(({ theme }) => ({
	border: '1px solid',
	borderColor: theme.palette.divider,
	padding: theme.spacing(2),
	borderRadius: theme.shape.borderRadius,
}))

const Page = () => {
	const [searchValue, setSearchValue] = useState('');
	const [messages, setMessages] = useState([]);
	const [isLoading, setLoading] = useState(false);
	const [error, setError] = useState('');

	const queryClient = useQueryClient();

	const getAnswer = (result) => {
		setLoading(true);
		return axios.get('https://668859650bc7155dc01b29df.mockapi.io/responses');
	};

	// Mutations
	const mutation = useMutation({
		mutationFn: getAnswer, onSuccess: () => {
			// Invalidate and refetch
			queryClient.invalidateQueries({ queryKey: ['search'] });
		}
	});

	const sendRequest = () => {
		setMessages(prev => prev.concat({request: searchValue}));
		mutation.mutate();
	};

	useEffect(() => {
		if (mutation.isSuccess && mutation.data.data) {
			console.log(mutation.data.data);
			setMessages(prev => prev.concat(mutation.data.data));
		}
	}, [mutation.isSuccess]);

	return (<>
		<Head>
			<title>
				Label AI | Search
			</title>
		</Head>
		<Container component="main">
			<Typography variant={'h4'} gutterBottom>Поиск</Typography>
			<Typography variant={'body1'}>бал блаб блабб б</Typography>
			<Stack spacing={2}>
				<StyledMessageListItem spacing={1} alignItems="start">
					{
						messages.map((message, index) => message?.request ?
						  (
							<>
								{index >1 && <Divider sx={{ width: '100%', paddingTop: '24px' }}/>}
								<MessageItem key={index} {...message}/>
							</>
						  ) : <AnswerItem key={index} {...message} />)
					}
					{mutation.isLoading && <LoadingItem/>}
				</StyledMessageListItem>
				<Box>
					{mutation.isError && <Box color={'red'}>error: {mutation.error.message}</Box>}
					<Box>
						<TextField
						  multiline
						  maxRows={5}
						  value={searchValue}
						  label={'Ваш запрос'}
						  onChange={(event) => {
							  setSearchValue(event.target.value);
						  }}
						  sx={{
							  minWidth: '300px', width: 'auto'
						  }}/>
						<IconButton onClick={sendRequest} disabled={searchValue.length === 0} sx={{
							marginTop: '16px'
						}}>
							<Send sx={{
								color: searchValue ? ourColor.main : alpha(ourColor.main, 0.4)
							}}/>
						</IconButton>
					</Box>
				</Box>

			</Stack>

		</Container>
	</>);
};

Page.getLayout = (page) => (<DashboardLayout>
	{page}
</DashboardLayout>);

export default Page;