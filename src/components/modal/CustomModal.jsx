import {Box, Fade, keyframes, Modal, Slide, Typography} from "@mui/material";
import {Stack, styled} from "@mui/system";
import React, {useEffect, useState} from "react";
import {alpha} from "@mui/material/styles";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(-50%) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(-50%) scale(1);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateX(-50%) translateY(-50%) scale(1);
  }
  to {
    opacity: 0;
    transform: translateX(-50%) translateY(-50%) scale(0.9);
  }
`;

const StyledModalContent = styled(Box)(({theme, isOpen}) => ({
	position: 'absolute',
	top: '50%',
	left: '50%',
	backgroundColor: alpha(theme.palette.background.paper,0.85),
	backdropFilter: 'blur(20px)',
	borderRadius: theme.shape.borderRadius,
	padding: theme.spacing(4),
	outline: 'none',
	transition: '0.2s',
	animation: (isOpen ? fadeIn : fadeOut) + ' 0.2s cubic-bezier(0.4, 0, 0.2, 1) forwards'
}))

export function CustomModal({children, isOpen, handleClose}) {
	return (
		<Modal open={isOpen} onClose={handleClose}
			   aria-labelledby="modal-modal-title"
			   aria-describedby="modal-modal-description"
			   closeAfterTransition>
			<StyledModalContent isOpen={isOpen}>
				{children}
			</StyledModalContent>
		</Modal>
	)
}