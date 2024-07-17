import {Stack, styled} from "@mui/system";
import {Box, Typography} from "@mui/material";
import React from "react";


const StyledBackground = styled(Box)(({theme}) => ({
	borderRadius: '16px',
	padding: '48px',
	width: '100%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	background: theme.palette.gradient,
}))

export function TeamLogo(props) {
	return (
		<Stack spacing={1} direction="row" alignItems={'center'}>
			<StyledBackground>
				<Typography variant={'h3'}>
					Label AI
				</Typography>
			</StyledBackground>
		</Stack>
	)
}