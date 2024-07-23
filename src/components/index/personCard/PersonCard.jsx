import { Stack, styled } from '@mui/system';
import { Card, CardContent, CardMedia, Link, Typography } from '@mui/material';
import { ourColor } from '../../../theme/colors';
import { Facebook, Instagram, Telegram } from '@mui/icons-material';
import React from 'react';

const StyledCard = styled(Card)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	width: '100%',
	transition: '0.15s',
	background: 'transparent',
	"&:hover":{
		opacity: '0.85',
		transform: 'translateY(2px)'
	}
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
	height: '138px',
	width: '138px',
	borderRadius: '100%',
	cursor: 'pointer',
	transition: '0.15s',
}));


function PersonCard({image, name, description, role, tg, inst, onClick}) {
	return (
	  <StyledCard onClick={onClick} sx={{pointerEvents: !onClick && 'none'}}>
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
			  </Stack>

		  </CardContent>
	  </StyledCard>
	)
}

export default PersonCard;