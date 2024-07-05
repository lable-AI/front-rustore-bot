import Head from 'next/head';
import {
	Box,
	Button,
	Card,
	Container,
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

const StyledMessageItem = styled(Paper)(({ theme }) => ({
	with: 400, display: 'flex', flexDirection: 'column', padding: theme.spacing(2), eval
}));

const MessageItem = ({article, text, url, score}) => {
	return (<StyledMessageItem elevation={2}>
		<Typography variant="h6">{article}</Typography>
		<Typography><Link href={url}>Link</Link></Typography>
		<Typography variant="body1">{text}</Typography>
	</StyledMessageItem>);
};

const StyledLoadingItem = styled(Paper)(({ theme }) => ({
	backgroundColor: grey[100],
	width: 'min-content',
	padding: theme.spacing(2)
}))

const LoadingItem = () => {
	return (
	  <StyledLoadingItem elevation={0}>
		<Typography variant="body2">Подождите...</Typography>
	</StyledLoadingItem>
	);
};

const Page = () => {
	const [searchValue, setSearchValue] = useState('');
	const [messages, setMessages] = useState([]);
	const [isLoading, setLoading] = useState(false);
	const [error, setError] = useState('');

	const queryClient = useQueryClient()

	const getAnswer = (result) => {
		setLoading(true);
		return axios.get('https://668859650bc7155dc01b29df.mockapi.io/responses')
	}

	// Mutations
	const mutation = useMutation({
		mutationFn: getAnswer,
		onSuccess: () => {
			// Invalidate and refetch
			queryClient.invalidateQueries({ queryKey: ['search'] })
		},
	})

	const sendRequest = () => {
		mutation.mutate()
	}

	useEffect(() => {
		if(mutation.isSuccess && mutation.data.data){
			console.log(mutation.data.data)
			setMessages(prev => prev.concat(mutation.data.data))
		}
	}, [mutation.isSuccess]);

	return (<>
		<Head>
			<title>
				Label AI | Search
			</title>
		</Head>
		<Container component="main">
			<Stack spacing={2}>
				<Stack spacing={2}>
					{
						messages?.map((message, index) => {
							return (
							  <MessageItem key={index} {...message} />
							);
						})
					}
					{
						mutation.isLoading && <LoadingItem />
					}
				</Stack>
				<Box>
					{
					  mutation.isError && <Box color={'red'}>error: {mutation.error.message}</Box>
					}
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
							minWidth: '300px',
							width: 'auto',
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