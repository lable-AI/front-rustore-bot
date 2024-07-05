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
import { useState } from 'react';
import { Stack, styled } from '@mui/system';
import { Send } from '@mui/icons-material';
import { ourColor, warning } from '../theme/colors';
import { alpha } from '@mui/material/styles';

const StyledMessageItem = styled(Paper)(({ theme }) => ({
	with: 400, display: 'flex', flexDirection: 'column', padding: theme.spacing(2), eval
}));

const MessageItem = ({title, body}) => {
	return (<StyledMessageItem elevation={2}>
		<Typography variant="h6">{title}</Typography>
		<Typography><Link href={''}>Link</Link></Typography>
		<Typography variant="body1">{body}</Typography>
	</StyledMessageItem>);
};

const Page = () => {
	const [searchValue, setSearchValue] = useState('');
	const [messages, setMessages] = useState([]);
	const [isLoaded, setLoaded] = useState(false);
	const [error, setError] = useState('');

	const sendRequest = () => {
		fetch('https://jsonplaceholder.typicode.com/posts')
		  .then(res => res.json())
		  .then(
			(result) => {
				setLoaded(true);
				setMessages(result);
			},
			(error) => {
				setLoaded(true);
				setError(error);
			}
		  )
	};

	return (<>
		<Head>
			<title>
				Label AI | Search
			</title>
		</Head>
		<Container component="main">
			<Stack spacing={2}>
				<Stack>
					{
						messages.map(message => {
							return (
							  <MessageItem key={message.id} {...message} />
							);
						})
					}
				</Stack>
				<Box>
					{
					  error && <Box color={'red'}>error: {error}</Box>
					}
					<Box>
						<TextField
						  multiline
						  maxRows={5}
						  value={searchValue}
						  label={'Ваш запрос'}
						  onChange={(event) => {
							  setSearchValue(event.target.value);
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