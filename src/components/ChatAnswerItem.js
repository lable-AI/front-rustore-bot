import { spacing, Stack, styled } from '@mui/system';
import { Link, Paper, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

const StyledAnswerItem = styled(Paper)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	padding: "8px 12px",
	// background: grey[100],
	border: '1px solid',
	borderColor: theme.palette.divider,
	width: 'auto'
}));

const ChatAnswerItem = ({ article, text, url }) => {
	return (<StyledAnswerItem elevation={0}>
		<Stack spacing={1}>
			{/*<Link href={url} color={grey[900]} variant={'h6'}>{article}</Link>*/}
			<Typography variant="body1" color={grey[600]}>{text}</Typography>
		</Stack>
	</StyledAnswerItem>);
};

export default ChatAnswerItem