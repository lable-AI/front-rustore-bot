import React from 'react';
import { Container, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { Stack } from '@mui/system';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { styled } from '@mui/system';

//import styled from 'styled-components';

const StyledCard = styled(Card)(({ theme }) => ({
	height: 400, width: '10%', display: 'flex', flexDirection: 'column'
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
	height: 200, width: '100%', objectFit: 'cover'
}));

const StyledSlider = styled(Slider)(({ theme }) => ({
	'.slick-slide': {
		padding: theme.spacing(2)
	}, '.slick-list': {
		margin: -theme.spacing(2)
	}
}));

const StyledTypographyWithPadding = styled(Typography)(({ theme }) => ({
	paddingLeft: theme.spacing(2)
}));

const teamMembers = [
	{
		name: 'Гербылев Олег',
		role: 'Team Leader',
		description: 'Олег отвечает за техническую часть, ставит задачи и занимается разработкой.',
		image: 'https://sun9-23.userapi.com/impg/m64YdrZKN1f-rU114U1jzkwHC2Qy_0LrPTAMig/O2zhmMCBzYQ.jpg?size=853x1280&quality=95&sign=eeea99bf3952f4bab2e92cdebe3f7256&type=album'
	}, {
		name: 'Артур Насов',
		role: 'ML Developer',
		description: 'Артур занимается разработкой и настройкой разных ML-моделей.',
		image: 'https://via.placeholder.com/150'
	}, {
		name: 'Александр Шамшурин',
		role: 'Designer',
		description: 'Александр отвечает за дизайн продукта и представление его публике.',
		image: 'https://via.placeholder.com/150'
	}, {
		name: 'Никита Трошин',
		role: 'Frontend Developer',
		description: 'Никита отвечает за разработку визуальной части продукта.',
		image: 'https://via.placeholder.com/150'
	}
];

const mentors = [
	{
		name: 'Алексей Иванов',
		role: 'Senior Data Scientist',
		description: 'Алексей консультирует нас по вопросам архитектуры и оптимизации моделей.',
		image: 'https://via.placeholder.com/150'
	}, {
		name: 'Мария Сидорова',
		role: 'Tech Lead',
		description: 'Мария помогает нам в разработке и масштабировании наших приложений.',
		image: 'https://via.placeholder.com/150'
	}
];

const solutions = [
	{
		title: 'Система рекомендаций',
		description: 'Решение для персонализированных рекомендаций продуктов в интернет-магазинах.',
		image: 'https://via.placeholder.com/150'
	}, {
		title: 'Анализ текста',
		description: 'Инструмент для анализа тональности текста и извлечения ключевых слов.',
		image: 'https://via.placeholder.com/150'
	}
];

const Page = () => {
	const settings = {
		dots: true, infinite: false, speed: 350, slidesToScroll: 1
	};

	return (<Container>
		<Stack spacing={2}
			   sx={{ paddingTop: '16px' }}>
			<div>

				<StyledTypographyWithPadding variant="h4"
											 gutterBottom>
					Наша команда
				</StyledTypographyWithPadding>
				<StyledTypographyWithPadding variant="body1"
											 paragraph>
					Мы молодая команда студентов, занимающаяся разработкой в области машинного
					обучения. Наша цель - создавать передовые
					технологии и решения для различных отраслей. Мы стремимся к непрерывному
					развитию и всегда открыты для новых идей и
					возможностей.
				</StyledTypographyWithPadding>
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
			<div>
				<StyledTypographyWithPadding variant="h4"
											 gutterBottom>
					Наши менторы
				</StyledTypographyWithPadding>
				<StyledSlider {...settings}
							  slidesToShow={2}>
					{mentors.map((mentor, index) => (<StyledCard key={index}>
						<StyledCardMedia
						  image={mentor.image}
						  title={mentor.name}
						/>
						<CardContent sx={{ flexGrow: 1 }}>
							<Typography variant="h5"
										component="h2">
								{mentor.name}
							</Typography>
							<Typography variant="subtitle1"
										color="textSecondary">
								{mentor.role}
							</Typography>
							<Typography variant="body2"
										component="p">
								{mentor.description}
							</Typography>
						</CardContent>
					</StyledCard>))}
				</StyledSlider>
			</div>
			<div>
				<StyledTypographyWithPadding variant="h4"
											 gutterBottom>
					Готовые решения
				</StyledTypographyWithPadding>
				<StyledSlider {...settings}
							  slidesToShow={2}>
					{solutions.map((solution, index) => (<StyledCard key={index}>
						<StyledCardMedia
						  image={solution.image}
						  title={solution.title}
						/>
						<CardContent sx={{ flexGrow: 1 }}>
							<Typography variant="h5"
										component="h2">
								{solution.title}
							</Typography>
							<Typography variant="body2"
										component="p">
								{solution.description}
							</Typography>
						</CardContent>
					</StyledCard>))}
				</StyledSlider>
			</div>
		</Stack>
	</Container>);
};

Page.getLayout = (page) => (<DashboardLayout>
	{page}
</DashboardLayout>);

export default Page;
