import {Avatar, Box, Grid, Modal, Typography} from "@mui/material";
import {Stack, styled} from "@mui/system";
import React, {useEffect, useState} from "react";

const StyledPersonContent = styled(Box)(({theme}) => ({
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	backgroundColor: theme.palette.background.paper,
	borderRadius: theme.shape.borderRadius,
	padding: theme.spacing(4),
	outline: 'none',
	width: '500px',
}))

const StyledAvatar = styled(Avatar)(({theme}) => ({
	width: '104px',
	height: '104px',
}))


export function PersonPopUp({isOpen, handleClose, currentPerson }) {
	if(!currentPerson) return null;
	return (
		<Modal open={isOpen && currentPerson} onClose={handleClose}
			   aria-labelledby="modal-modal-title"
			   aria-describedby="modal-modal-description">
			<StyledPersonContent>
				<Stack spacing={2} alignItems="center">
					<StyledAvatar
						src={currentPerson.image}
					/>
					<Typography id="modal-modal-title" variant="h6">
						{currentPerson.name}
					</Typography>
					<Typography id="modal-modal-description" align="center">
						{currentPerson.description}
					</Typography>
				</Stack>

			</StyledPersonContent>
		</Modal>
	)
}