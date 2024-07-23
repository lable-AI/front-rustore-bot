import {Avatar, AvatarGroup, Box, Divider, Grid, Stack, Typography} from "@mui/material";
import {borderRadius, styled} from "@mui/system";
import {alpha} from "@mui/material/styles";
import React from "react";
import {teamMembers} from "../../../other/data";
import {darkenHexColor} from "../../../utils/darkenColor";
import {Tag} from "../../tag/Tag";

const StyledCaseCard = styled(Box)(({theme, background, color}) => ({
	borderRadius: theme.shape.borderRadius,
	border: '1px solid ' + alpha(color, 0.15),
	background: 'linear-gradient(to bottom,'
		+ alpha(background, 0.4) + ' 0%,'
		+ alpha(background, 0.2) + ' 100%)',
	backgroundColor: 'white',
	padding: '16px',
	width: '260px',
	color
}))


const StyledImage = styled('img')(({theme, color}) => ({
	borderRadius: theme.shape.borderRadius,
	border: '4px solid ' + alpha(color, 0.3),
}))

const StyledYear = styled(Box)(({theme, color}) => ({
	padding: '0px 6px',
	border: '1px solid ' + alpha(color, 0.4),
	width: 'min-content',
	borderRadius: theme.shape.borderRadius,
	userSelect: 'none',
}))


const StyledTypography = styled(Typography)(({theme, color}) => ({
	color
}))

export function CaseCard({background, color, title, note, date, image, tags, team}) {
	return (
		<StyledCaseCard background={background} color={color}>
			<Stack spacing={2}>
				<Grid container spacing={0.5}>
					{
						tags.map(tag => (
							<Grid key={tag} item xs={'auto'}>
								<Tag color={color}>{tag}</Tag>
							</Grid>
						))
					}
				</Grid>
				<Stack spacing={0.5}>
					<Stack alignItems={'center'} direction={'row'} spacing={1}>
						<StyledTypography variant={'h5'}>{title}</StyledTypography>
						<StyledYear color={color}>
							<StyledTypography variant={'caption'}>{date}</StyledTypography>
						</StyledYear>
					</Stack>
					<StyledTypography variant={'subtitle2'}>{note}</StyledTypography>
				</Stack>

				{image && <StyledImage color={color}
							  src={image}
							  alt=""/>}
				<Divider/>
				<Stack direction={'row'} spacing={0.5}>
					{team.map(id => {

						return (
							<Avatar sx={{height: 32, width: 32}} key={id} src={teamMembers[id].image}/>
						)
					})}

				</Stack>

			</Stack>
		</StyledCaseCard>
	)
}