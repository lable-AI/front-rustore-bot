import React from "react";
import {styled} from "@mui/system";
import {Box, Typography} from "@mui/material";
import {alpha} from "@mui/material/styles";

const StyledTag = styled(Box)(({theme, color}) => ({
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha('#fff', 0.3),
	border: '1px solid ' + alpha(color, 0.15),
	padding: '4px 12px',
	userSelect: 'none',
}))

const StyledTypography = styled(Typography)(({theme, color}) => ({
	color
}))

export function Tag({children, color='#666'}){
	return (
		<StyledTag color={color}>
			<StyledTypography variant={'subtitle2'}>
				#{children}
			</StyledTypography>
		</StyledTag>
	)
}