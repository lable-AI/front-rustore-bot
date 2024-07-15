import { Stack, styled } from '@mui/system';
import { Card, CardContent, CardMedia, Link, Typography } from '@mui/material';
import { ourColor } from '../theme/colors';
import { Facebook, Instagram, Telegram } from '@mui/icons-material';
import React from 'react';

const StyledCard = styled(Card)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	width: '100%',
	filter: 'grayscale(100%)',
	transition: '0.15s',
	"&:hover":{
		filter: 'grayscale(0%)',
	}
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
	height: '138px',
	width: '138px',
	borderRadius: '100%',
	cursor: 'pointer',
	transition: '0.15s',
}));


function TeamItem({image, name, description, role, tg}) {
	return (
	  <StyledCard>
		  <StyledCardMedia
			image={image}
			title={name}
		  />
		  <CardContent>
			  <Stack spacing={2} alignItems="center">
				  <Stack spacing={0} alignItems="center">
					  <Typography variant="subtitle2" sx={{whiteSpace: 'nowrap'}}>
						  {name}
					  </Typography>
					  <Typography variant="body2"
								  color="textSecondary"
								  sx={{whiteSpace: 'nowrap'}}>
						  {role}
					  </Typography>
				  </Stack>
				  <Stack direction='row' spacing={1}>
					  <Link href={tg} justifyItems={'center'} color={ourColor.lightest}>
						  <Telegram fontSize={'small'} />
					  </Link>
					  <Link href={tg} justifyItems={'center'} color={ourColor.lightest}>
						  <Instagram fontSize={'small'}  />
					  </Link>
				  </Stack>
			  </Stack>

		  </CardContent>
	  </StyledCard>
	)
}

export default TeamItem;