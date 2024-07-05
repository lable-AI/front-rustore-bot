import Head from 'next/head';
import { Box } from '@mui/material';
import { Layout as DashboardLayout } from '../layouts/dashboard/layout';

const Page = () => (
	<>
		<Head>
			<title>
        Main | Label AI
			</title>
		</Head>
		<Box
			component="main"
			sx={{
				flexGrow: 1,
				py: 8
			}}
		>
      Поиск
		</Box>
	</>
);

Page.getLayout = (page) => (
	<DashboardLayout>
		{page}
	</DashboardLayout>
);

export default Page;