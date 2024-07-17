import React from 'react';
import {
	Container,
	Typography,
	Card,
	CardContent,
	CardMedia,
	Link,
	Divider,
	Box, Grid
} from '@mui/material';
import {Layout as DashboardLayout} from 'src/layouts/layout';
import {Stack} from '@mui/system';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {styled} from '@mui/system';
import {mentors, solutions, teamMembers} from '../other/data';
import PersonCard from '../components/index/personCard/PersonCard';
import {TeamLogo} from "../components/index/teamLogo/TeamLogo";

const Page = () => {
	const TeammateList = () => (
		<Stack direction={'row'} alignItems={'center'} spacing={3}>
			{teamMembers.map((member, index) => (
				<PersonCard key={index} {...member} />
			))}
		</Stack>
	)

	const MentorList = () => (
		<Stack spacing={4} alignItems={'center'}>
			<Typography variant={'h5'}>
				Наши менторы
			</Typography>
			<Divider width={'100%'}/>
			<Stack direction={'row'} spacing={3} width={'min-content'}>
				{mentors.map((mentor, index) => (
					<PersonCard key={index} {...mentor} />
				))}
			</Stack>
		</Stack>
	)


	return (
		<Container component={'main'} sx={{paddingBottom: '32px'}}>
			<Stack spacing={2}>
				<Stack spacing={3}>
					<Grid container spacing={6}>
						<Grid item xs={8}>
							<Stack spacing={6}>
								<TeamLogo/>
								<TeammateList/>
								<MentorList/>
							</Stack>

						</Grid>
						<Grid item xs>
							<Typography variant={'h5'}>
								Команда Label AI
							</Typography>
							<Typography variant="body1"
										paragraph
										xs
										sx={{
											paddingTop: '8px',
											opacity: '0.5'
										}}>
								— профессиональный коллектив студентов, специализирующихся на
								разработке и исследованиях в области обработки естественного языка
								(NLP). Мы занимаемся созданием и внедрением передовых технологий,
								направленных на улучшение взаимодействия человека с компьютером
								через естественный язык.Наши опытные наставники, помогают нам
								достигать высоких результатов.
							</Typography>
						</Grid>
					</Grid>


				</Stack>
			</Stack>
		</Container>
	);
};

Page.getLayout = (page) => (<DashboardLayout>
	{page}
</DashboardLayout>);

export default Page;
