import React from 'react';
import { Container, Typography, Card, CardContent, CardMedia, Link, Divider } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { Stack } from '@mui/system';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { styled } from '@mui/system';
import { mentors, solutions, teamMembers } from '../other/data';
import { Telegram } from '@mui/icons-material';
import { ourColor } from '../theme/colors';


const StyledCard = styled(Card)(({ theme }) => ({
	height: 400, width: '10%', display: 'flex', flexDirection: 'column'
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

const Page = () => {
	const settings = {
		dots: true, infinite: false, speed: 350, slidesToScroll: 1
	};

	return (<Container component={'main'} sx={{paddingBottom: '32px'}}>
		<Stack spacing={2}>

			<Stack spacing={3}>
				<Stack spacing={1} direction="row" alignItems={'center'}>
					<div style={{
						borderRadius: '12px',
						padding: '12px 16px',
						width: '100%',
						height: '200px',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						background: 'radial-gradient(circle, hsla(263, 29%, 63%, 0.2) 0%, hsla(291, 51%, 82%, 0.2) 100%)',
						filter: 'progid: DXImageTransform.Microsoft.gradient( startColorstr="#9B86BD", endColorstr="#E2BBE9", GradientType=1 )'
					}}>
						<Stack spacing={1} alignItems={'center'}>
							<Typography variant={'h3'}
										sx={{
											whiteSpace: 'nowrap'
										}}
										color={((theme) => theme.palette.text.primary)}>Label AI</Typography>
							<Typography variant={'body1'}
										sx={{
											whiteSpace: 'nowrap',
											opacity: '0.5'
										}}
										color={((theme) => theme.palette.text.primary)}>Наша команда</Typography>
						</Stack>

					</div>
					{/*<Typography variant={'h3'}*/}
					{/*			sx={{*/}

					{/*			}}*/}
					{/*			color={((theme) => theme.palette.text.secondary)}>Label AI</Typography>*/}
				</Stack>

				<Typography variant="body1"
							paragraph
				sx={{
					paddingLeft: '16px',
					borderLeft: '4px solid',
					borderColor: ((theme) => theme.palette.divider)
				}}>
					Мы молодая команда студентов, занимающаяся разработкой в области машинного
					обучения. Наша цель - создавать передовые
					технологии и решения для различных отраслей. Мы стремимся к непрерывному
					развитию и всегда открыты для новых идей и
					возможностей.
				</Typography>
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
		</Stack>
	</Container>);
};

Page.getLayout = (page) => (<DashboardLayout>
	{page}
</DashboardLayout>);

export default Page;
