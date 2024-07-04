import React from 'react';
import { Container, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { Stack } from '@mui/system';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { styled } from '@mui/system';

const StyledCard = styled(Card)(({ theme }) => ({
  height: 400,
  width: "10%",
  display: 'flex',
  flexDirection: 'column',
  margin: theme.spacing(2), // Добавление отступов между карточками
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: 200,
  width: '100%',
  objectFit: 'cover',
}));

const teamMembers = [
  {
    name: 'Гербылев Олег',
    role: 'Team Leader',
    description: 'Олег отвечает за техническую часть, ставит задачи и занимается разработкой.',
    image: 'https://sun9-23.userapi.com/impg/m64YdrZKN1f-rU114U1jzkwHC2Qy_0LrPTAMig/O2zhmMCBzYQ.jpg?size=853x1280&quality=95&sign=eeea99bf3952f4bab2e92cdebe3f7256&type=album',
  },
  {
    name: 'Артур Насов',
    role: 'ML Developer',
    description: 'Артур занимается разработкой и настройкой разных ML-моделей.',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Александр Шамшурин',
    role: 'Designer',
    description: 'Александр отвечает за дизайн продукта и представление его публике.',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Никита Трошин',
    role: 'Frontend Developer',
    description: 'Никита отвечает за разработку визуальной части продукта.',
    image: 'https://via.placeholder.com/150',
  },
];

const mentors = [
  {
    name: 'Алексей Иванов',
    role: 'Senior Data Scientist',
    description: 'Алексей консультирует нас по вопросам архитектуры и оптимизации моделей.',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Мария Сидорова',
    role: 'Tech Lead',
    description: 'Мария помогает нам в разработке и масштабировании наших приложений.',
    image: 'https://via.placeholder.com/150',
  },
];

const solutions = [
  {
    title: 'Система рекомендаций',
    description: 'Решение для персонализированных рекомендаций продуктов в интернет-магазинах.',
    image: 'https://via.placeholder.com/150',
  },
  {
    title: 'Анализ текста',
    description: 'Инструмент для анализа тональности текста и извлечения ключевых слов.',
    image: 'https://via.placeholder.com/150',
  },
];

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style }}
      onClick={onClick}
    />
  );
};

const Page = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: 30,
  };

  return (
    <Container>
      <Stack spacing={2}>
        <div style={{ position: 'relative', textAlign: 'center', color: 'white' }}>
          <img
            src="https://i.pinimg.com/originals/f6/e2/eb/f6e2eb6e964058e88f62742d537ad612.jpg"
            alt="Hero"
            style={{
              width: '100%',
              height: '400px',
              objectFit: 'cover',
              filter: 'brightness(0.5)',
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
            <Typography variant="h2" component="h1">
              TEST
            </Typography>
          </div>
        </div>
        <Typography variant="body1" paragraph>
          Мы молодая команда студентов, занимающаяся разработкой в области машинного обучения. Наша цель - создавать передовые
          технологии и решения для различных отраслей. Мы стремимся к непрерывному развитию и всегда открыты для новых идей и
          возможностей.
        </Typography>
        <div>
          <Typography variant="h4" gutterBottom>
            Наша команда
          </Typography>
          <Slider {...settings}>
            {teamMembers.map((member, index) => (
              <StyledCard key={index} >
                <StyledCardMedia 
                  image={member.image}
                  title={member.name}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" component="h2">
                    {member.name}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {member.role}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {member.description}
                  </Typography>
                </CardContent>
              </StyledCard>
            ))}
          </Slider>
        </div>
        <div>
          <Typography variant="h4" gutterBottom>
            Наши менторы
          </Typography>
          <Slider {...settings} >
            {mentors.map((mentor, index) => (
              <StyledCard key={index} >
                <StyledCardMedia
                  image={mentor.image}
                  title={mentor.name}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" component="h2">
                    {mentor.name}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {mentor.role}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {mentor.description}
                  </Typography>
                </CardContent>
              </StyledCard>
            ))}
          </Slider>
        </div>
        <div>
          <Typography variant="h4" gutterBottom>
            Готовые решения
          </Typography>
          <Slider {...settings}>
            {solutions.map((solution, index) => (
              <StyledCard key={index}>
                <StyledCardMedia
                  image={solution.image}
                  title={solution.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" component="h2">
                    {solution.title}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {solution.description}
                  </Typography>
                </CardContent>
              </StyledCard>
            ))}
          </Slider>
        </div>
      </Stack>
    </Container>
  );
};

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
