import {Stack, styled} from "@mui/system";
import {Instagram, ReadMore} from "@mui/icons-material";
import {Link, Paper, Typography} from "@mui/material";
import React from "react";


const StyledLinkItem = styled(Paper)(({ theme }) => ({
	padding: '6px 12px',
	border: '1px solid',
	backgroundColor: 'transparent',
	borderColor: theme.palette.divider,
	borderRadius: theme.shape.borderRadius,
	cursor: 'pointer',
	width: 'min-content',
	transition: '0.2s',
	"&:hover": {
		opacity: '1',
		transform: 'translateY(-1px)',
		boxShadow: '0px 4px 22px rgba(0, 0, 0, 0.04), 0px 0px 0px 0.5px rgba(0, 0, 0, 0.03)'
	}
}))

export function CustomLink({ url, title, icon }) {
	return (
		<StyledLinkItem elevation={0} >
			<Stack alignItems="center" spacing={1} direction="row">
				{icon}
				<Link sx={{textDecoration: 'none'}} href={url}>
					<Typography sx={{whiteSpace: 'nowrap'}} variant="body2">
						{title}
					</Typography>

				</Link>
			</Stack>
		</StyledLinkItem>
	)
}