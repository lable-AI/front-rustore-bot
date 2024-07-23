import {Avatar, Box, Grid, Modal, Typography} from "@mui/material";
import {Stack, styled} from "@mui/system";
import React, {useEffect, useState} from "react";
import {CustomModal} from "../../modal/CustomModal";

const StyledAvatar = styled(Avatar)(({theme}) => ({
	width: '104px',
	height: '104px',
}))


export function PersonPopUp({isOpen, handleClose, currentPerson }) {
	if(!currentPerson) return null;
	return (
		<CustomModal isOpen={isOpen && currentPerson} handleClose={handleClose}>
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
		</CustomModal>
	)
}