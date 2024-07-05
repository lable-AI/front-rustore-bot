import Head from 'next/head';
import { Box, TextareaAutosize } from '@mui/material';
import { Layout as DashboardLayout } from '../layouts/dashboard/layout';

const Page = () => (<>
	<Head>
		<title>
			Main | Label AI
		</title>
	</Head>
	<Box component="main">
		<TextareaAutosize>

		</TextareaAutosize>
	</Box>
</>);

Page.getLayout = (page) => (<DashboardLayout>
	{page}
</DashboardLayout>);

export default Page;