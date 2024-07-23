import {Avatar, Box, Grid, Modal, Typography} from "@mui/material";
import {Stack, styled} from "@mui/system";
import React, {useEffect, useState} from "react";
import {CustomModal} from "../../modal/CustomModal";
import {Tag} from "../../tag/Tag";
import {CustomLink} from "../../link/CustomLink";
import {Instagram, Telegram} from "@mui/icons-material";

const StyledAvatar = styled(Avatar)(({theme}) => ({
	width: '104px',
	height: '104px',
}))


export function PersonModal({isOpen, handleClose, currentPerson}) {
	if (!currentPerson) return null;

	return (
		<CustomModal isOpen={isOpen && currentPerson} handleClose={handleClose}>
			<Stack sx={{width: '300px'}} spacing={3} alignItems="center">
				<StyledAvatar
					src={currentPerson.image}
				/>
				<Typography id="modal-modal-title" variant="h6">
					{currentPerson.name}
				</Typography>
				<Grid container spacing={0.5} width={'auto'}>
					{
						currentPerson.skills.map((skill, index) =>
							<Grid key={index} item xs={'auto'}>
								<Tag>{skill}</Tag>
							</Grid>
						)
					}
				</Grid>
				<Typography id="modal-modal-description" align="center">
					{currentPerson.description}
				</Typography>
				<Stack direction={'row'} spacing={1}>
					{
						currentPerson.tg && <CustomLink url={currentPerson.tg} title={currentPerson.tg.split('/').pop()}
										  icon={<Telegram sx={{opacity: '0.35'}}
														   fontSize="small"/>}/>
					}
				</Stack>
			</Stack>
		</CustomModal>
	)
}