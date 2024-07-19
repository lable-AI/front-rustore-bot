import {Container, Stack, Typography} from '@mui/material';
import {MarkdownRenderer} from '../components/markdownRenderer';
import {Layout as DashboardLayout} from '../layouts/layout';
import {CaseCard} from "../components/cases/caseCard/CaseCard";
import {cases} from "../other/data";
import {darkenHexColor} from "../utils/darkenColor";

const Page = () => (
	<Container sx={{

	}}>
		<Stack spacing={4}>
			{/*<Stack>*/}
			{/*	<Typography variant={'h4'}>*/}
			{/*		Успешные кейсы*/}
			{/*	</Typography>*/}
			{/*	<Typography variant={'subtitle2'}>*/}
			{/*		Команда Label AI бла бла выщазоуцзпоуцзп ку прукщпо пкпоуцзпцзпоцз пуопукорп*/}
			{/*	</Typography>*/}
			{/*</Stack>*/}

			<Stack direction={'row'} alignItems={'center'} spacing={3}>
				{
					cases.map((caseInfo, index) => (
						<CaseCard key={index} {...caseInfo}
								  color={darkenHexColor(caseInfo.background, 0.6)}/>
					))
				}
			</Stack>
		</Stack>


	</Container>
);

Page.getLayout = (page) => (
	<DashboardLayout>
		{page}
	</DashboardLayout>
);

export default Page;