import { Stack, styled } from '@mui/system';
import { Link, Paper } from '@mui/material';
import { ReadMore } from '@mui/icons-material';
import React from 'react';

const StyledLinkItem = styled(Paper)(({ theme }) => ({
	padding: '6px 8px',
	border: '1px solid',
	borderColor: theme.palette.divider,
	borderRadius: '8px',
	cursor: 'pointer',
	width: 'min-content',
}))

const LinkItem = ({url}) => {
	return (
	  <StyledLinkItem elevation={0} >
		  <Stack alignItems="center" spacing={1} direction="row">
			  <ReadMore sx={{opacity: '0.35'}} fontSize="small" />
			  <Link sx={{textDecoration: 'none'}} href={url}>
				  {url}
			  </Link>
		  </Stack>
	  </StyledLinkItem>
	)
}

export default LinkItem