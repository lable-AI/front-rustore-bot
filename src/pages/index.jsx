import React, {useEffect, useState} from 'react';
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
import {PersonModal} from "../components/index/personModal/PersonModal";

const StyledMentorList = styled(Stack)(({theme}) => ({
	border: '1px solid ' + theme.palette.divider,
	padding: '32px',
	width: 'min-content',
	borderRadius: theme.shape.borderRadius,
	height: 'min-content'
}))

const Page = () => {
	const [isPersonCardOpen, setIsPersonCardOpen] = useState(false);
	const [currentPerson, setCurrentPerson] = useState(null);

	function openPersonPopUp(person){
		setCurrentPerson(person);
	}

	useEffect(() => {
		setIsPersonCardOpen(!!currentPerson);
	}, [currentPerson]);

	useEffect(() => {
		if(!isPersonCardOpen) setCurrentPerson(null);
	}, [isPersonCardOpen]);

	const TeammateList = () => (
		<Stack direction={'row'} alignItems={'center'} spacing={3}>
			{teamMembers.map((member, index) => (
				<PersonCard onClick={() => openPersonPopUp(member)} key={index} {...member} />
			))}
		</Stack>
	)

	const MentorList = () => (
		<StyledMentorList alignItems={'center'}>
			<Stack direction={'row'} spacing={3} width={'min-content'}>
				<Typography variant={'h6'}>
					Наши менторы
				</Typography>
				{mentors.map((mentor, index) => (
					<PersonCard key={index} {...mentor} />
				))}
			</Stack>
		</StyledMentorList>
	)


	return (
		<>
			<Container component={'main'} sx={{paddingBottom: '32px'}}>
				<Stack spacing={2}>
					<Stack spacing={3}>
						<Stack spacing={2}>
							<Typography variant={'h5'}>
								Команда Label AI
							</Typography>
							<Grid container gap={8}>
								<Grid item xs>
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
								<Grid item xs>
									<Stack spacing={2}>
										<TeammateList/>
										<MentorList/>
									</Stack>
								</Grid>
							</Grid>


						</Stack>
					</Stack>
				</Stack>
			</Container>
			<PersonModal isOpen={isPersonCardOpen} currentPerson={currentPerson} handleClose={() => setIsPersonCardOpen(false)} />
		</>

	);
};

Page.getLayout = (page) => (<DashboardLayout>
	{page}
</DashboardLayout>);

export default Page;
