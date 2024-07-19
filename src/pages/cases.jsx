import {Container, Stack, Typography} from '@mui/material';
import {Layout as DashboardLayout} from '../layouts/layout';
import {CaseCard} from "../components/cases/caseCard/CaseCard";
import {cases} from "../other/data";
import {darkenHexColor} from "../utils/darkenColor";
import {Masonry} from "@mui/lab";

const Page = () => (
	<Container sx={{}}>
		<Stack spacing={4}>
			<Masonry spacing={3}>
				{
					cases.map((caseInfo, index) => (
						<CaseCard {...caseInfo}
								  key={index}
								  color={darkenHexColor(caseInfo.background, 0.6)}/>
					))
				}
			</Masonry>
		</Stack>
	</Container>
);

Page.getLayout = (page) => (
	<DashboardLayout>
		{page}
	</DashboardLayout>
);

export default Page;