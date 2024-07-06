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
			<div style={{ position: 'relative', textAlign: 'center', color: 'white' }}>
				<img
				  src="https://kartinki.pics/uploads/posts/2020-07/1593666791_80-p-neitralnii-fon-94.jpg"
				  alt="Hero"
				  style={{
					  width: '100%',
					  height: '200px',
					  objectFit: 'cover',
					  borderRadius: '12px'
				  }}
				/>
				<div
				  style={{
					  position: 'absolute',
					  top: '50%',
					  left: '50%',
					  transform: 'translate(-50%, -50%)',
				  }}
				>
					<Typography variant="h2" component="h2">
						LABEL AI
					</Typography>
				</div>
			</div>
			<div>
				<Typography variant="h4"
							gutterBottom>
					Наша команда
				</Typography>
				<Typography variant="body1"
							paragraph>
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
			</div>
		</Stack>
	</Container>);
};

Page.getLayout = (page) => (<DashboardLayout>
	{page}
</DashboardLayout>);

export default Page;
