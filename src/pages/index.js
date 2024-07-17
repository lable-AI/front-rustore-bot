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
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { Stack } from '@mui/system';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { styled } from '@mui/system';
import { mentors, solutions, teamMembers } from '../other/data';
import { Accessibility, Accessible, AcUnit, Blind, Telegram } from '@mui/icons-material';
import { ourColor } from '../theme/colors';
import TeamItem from '../components/TeamItem';
import MentorItem from '../components/MentorItem';

const StyledSlider = styled(Slider)(({ theme }) => ({
	'.slick-slide': {
		padding: theme.spacing(3),
		paddingLeft: 0

	}, '.slick-list': {
		margin: -theme.spacing(2),
	},
	'.slick-slide a': {
		pointerEvents: 'all'
	},

}));

const GRADIENT = 'linear-gradient(0deg,'
  + ' rgba(119,118,179,0.1) 0%,'
  + ' rgba(155,134,189,0.1) 100%)';

const Page = () => {
	const settings = {
		dots: true, infinite: false, speed: 350, slidesToScroll: 1
	};

	return (<Container component={'main'} sx={{paddingBottom: '32px'}}>
		<Stack spacing={2}>
			<Stack spacing={3}>
				<Grid container spacing={6}>
					<Grid item xs={8}>
						<Stack spacing={6}>
							<Stack spacing={1} direction="row" alignItems={'center'}>
								<div style={{
									borderRadius: '16px',
									padding: '48px',
									width: '100%',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									background: GRADIENT,
								}}>
									<Typography variant={'h3'}>
										Label AI
									</Typography>

								</div>
							</Stack>
							<Stack direction={'row'} alignItems={'center'} spacing={3}>
								{teamMembers.map((member, index) => (
								  <TeamItem key={index} {...member} />
								))}
							</Stack>
							<Stack spacing={4} alignItems={'center'}>
								<Typography variant={'h5'}>
									Наши менторы
								</Typography>
								<Divider width={'100%'} />
								<Stack direction={'row'} spacing={3} width={'min-content'}>
									{mentors.map((mentor, index) => (
									  <MentorItem key={index} {...mentor} />
									))}
								</Stack>
							</Stack>
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
							 — профессиональный коллектив студентов, специализирующихся на разработке и исследованиях в области обработки естественного языка (NLP). Мы занимаемся созданием и внедрением передовых технологий, направленных на улучшение взаимодействия человека с компьютером через естественный язык.Наши опытные наставники, помогают нам достигать высоких результатов.
						</Typography>
					</Grid>
				</Grid>


			</Stack>
		</Stack>
	</Container>);
};

Page.getLayout = (page) => (<DashboardLayout>
	{page}
</DashboardLayout>);

export default Page;
