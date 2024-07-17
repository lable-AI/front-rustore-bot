import {Container} from "@mui/material";
import {Layout as DashboardLayout} from "../layouts/dashboard/layout";

const Page = () => (
	<Container sx={{
		marginTop: '-32px'
	}}>
		articles
	</Container>
);

Page.getLayout = (page) => (
	<DashboardLayout>
		{page}
	</DashboardLayout>
);

export default Page;