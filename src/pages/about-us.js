import React from 'react';
import { Container, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { Stack } from '@mui/system';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { styled } from '@mui/system';
import { mentors, solutions, teamMembers } from '../other/data';


const StyledCard = styled(Card)(({ theme }) => ({
	height: 400, width: '10%', display: 'flex', flexDirection: 'column'
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
	height: 200, width: '100%', objectFit: 'contain'
}));

const StyledSlider = styled(Slider)(({ theme }) => ({
	'.slick-slide': {
		padding: theme.spacing(2)
	}, '.slick-list': {
		margin: -theme.spacing(2)
	}
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
						width: 'min-content',
						background: 'radial-gradient(circle, hsla(263, 29%, 63%, 0.2) 0%, hsla(291, 51%, 82%, 0.2) 100%)',
						filter: 'progid: DXImageTransform.Microsoft.gradient( startColorstr="#9B86BD", endColorstr="#E2BBE9", GradientType=1 )'
					}}>
						<Typography variant={'h3'}
									sx={{
										whiteSpace: 'nowrap'
									}}
									color={((theme) => theme.palette.text.primary)}>Наша команда</Typography>
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
					borderLeft: '2px dashed',
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
							  <Typography variant="h5"
										  component="h2">
								  {member.name}
							  </Typography>
							  <Typography variant="subtitle1"
										  color="textSecondary">
								  {member.role}
							  </Typography>
							  <Typography variant="body2"
										  component="p">
								  {member.description}
							  </Typography>
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
