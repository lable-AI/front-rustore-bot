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


const StyledCard = styled(Card)(({ theme }) => ({
	height: 400, display: 'flex', flexDirection: 'column'
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
	height: 200, width: '100%',
	objectPosition: '0 250px'
}));

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
				<Grid container spacing={4}>
					<Grid item xs={8}>
						<Stack spacing={3}>
							<Stack spacing={1} direction="row" alignItems={'center'}>
								<div style={{
									borderRadius: '12px',
									padding: '48px',
									width: '100%',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									background: GRADIENT,
								}}>
									<Stack width={'100%'} direction='row' alignItems={'center'} spacing={'6'} justifyContent={'space-between'}>
										<Stack spacing={2} >
											<AcUnit fontSize={'large'} sx={{color: ourColor.light}}/>
											<Stack spacing={1}>
												<Typography variant={'h3'}
															sx={{
																whiteSpace: 'nowrap'
															}}>Label AI</Typography>
												<Typography variant={'subtitle2'}
															sx={{
																opacity: '1'
															}}>Наша команда</Typography>
											</Stack>
											<Typography variant={'body2'}
														sx={{
															opacity: '1'
														}}>Мы ребята дружные</Typography>
										</Stack>
										<Stack spacing={2} >
											<Blind fontSize={'large'} sx={{color: ourColor.light}}/>
											<Stack spacing={1}>
												<Typography variant={'h3'}
															sx={{
																whiteSpace: 'nowrap'
															}}>12/24</Typography>
												<Typography variant={'subtitle2'}
															sx={{
																opacity: '1'
															}}>Блабла бла бла</Typography>
											</Stack>
											<Typography variant={'body2'}
														sx={{
															opacity: '1'
														}}>и еще что то</Typography>
										</Stack>
										<Stack spacing={2}>
											<Accessible fontSize={'large'} sx={{color: ourColor.light}}/>
											<Stack spacing={1}>
												<Typography variant={'h3'}
															sx={{
																whiteSpace: 'nowrap'
															}}>5</Typography>
												<Typography variant={'subtitle2'}
															sx={{
																opacity: '1'
															}}>Хакатонов унижено</Typography>
											</Stack>
											<Typography variant={'body2'}
														sx={{
															opacity: '1'
														}}>За 2 года</Typography>
										</Stack>

									</Stack>


								</div>
							</Stack>
							<StyledSlider {...settings}
										  slidesToShow={3}>
								{teamMembers.map((member, index) => (<StyledCard key={index}>
									  <StyledCardMedia
										image={member.image}
										title={member.name}
									  />
									  <CardContent sx={{ flexGrow: 1 }}>
										  <Stack spacing={2}>
											  <Stack spacing={2}>
												  <Stack>
													  <Typography variant="h5"
																  component="h2">
														  {member.name}
													  </Typography>
													  <Typography variant="subtitle1"
																  color="textSecondary">
														  {member.role}
													  </Typography>
												  </Stack>
												  <Typography variant="body2"
															  component="p">
													  {member.description}
												  </Typography>
												  <Stack sx={{position: 'absolute', bottom: '16px', left: '24px'}}>
													  <Link href={member.tg} justifyItems={'center'} color={ourColor.lightest}>
														  <Telegram />
													  </Link>
												  </Stack>
											  </Stack>
										  </Stack>
									  </CardContent>
								  </StyledCard>

								))}
							</StyledSlider>
						</Stack>

					</Grid>
					<Grid item xs>
						<Typography variant={'h5'}>
							Мы молодая команда студентов
						</Typography>
						<Typography variant="body1"
									paragraph
									xs
									sx={{
										paddingTop: '8px',
										opacity: '0.5'
									}}>
							занимающаяся разработкой в области машинного
							обучения. Наша цель - создавать передовые
							технологии и решения для различных отраслей. Мы стремимся к непрерывному
							развитию и всегда открыты для новых идей и
							возможностей.
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
