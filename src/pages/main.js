import Head from 'next/head';
import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';

const now = new Date();

const Page = () => (<>
	<Head>
		<title>
			Main | Label AI
		</title>
	</Head>
	<Box
	  component="main"
	  sx={{
		  flexGrow: 1, py: 8
	  }}
	>
		Проект для хака
	</Box>
</>);

Page.getLayout = (page) => (<DashboardLayout>
	{page}
</DashboardLayout>);

export default Page;
