import PropTypes from 'prop-types';
import {
	Avatar,
	Badge,
	Box, Container,
	IconButton,
	Stack,
	SvgIcon,
	Tooltip, Typography,
	useMediaQuery
} from '@mui/material';
import { grey } from '@mui/material/colors';
import { alpha } from '@mui/material/styles';
import { styled } from '@mui/system';
import { Quote } from './quote/Quote';
import {items} from "../../../other/routes";
import {InPageNavItem} from "../inPageNav/item/inPageNavItem";
import React from "react";
import {usePathname} from "next/navigation";

const SIDE_NAV_WIDTH = 280;
const TOP_NAV_HEIGHT = 64;

const GRADIENT = 'linear-gradient(180deg,'
	+ ' rgba(238, 240, 244, 0.75) 0%,'
	+ ' rgba(231, 232, 246, 0.75) 33%,'
	+ ' rgba(241, 225, 241, 0.75) 100%)';

const StyledTopNavBar = styled(Box)(({ theme }) => ({
	background: GRADIENT,
	position: 'sticky',
	left: `${SIDE_NAV_WIDTH}px`,
	top: 0,
	// width: `calc(100% - ${SIDE_NAV_WIDTH}px)`,
	borderBottom: '1px solid',
	borderColor: theme.palette.divider,
	padding: "8px 0",
	zIndex: theme.zIndex.appBar,
	maxWidth: '100%',
}))

const LayoutContainer = styled('div')({
	display: 'flex',
	flex: '1 1 auto',
	flexDirection: 'column',
	width: '100%',
	padding: '0 24px'
});

export const TopNavBar = () => {
	const pathname = usePathname();

	return (
	  <StyledTopNavBar
		component="header">
		  <LayoutContainer>
			  <Container>
				  <Stack direction="row" spacing={3} sx={{
					  padding: '32px 0'
				  }}>
					  {
						  items.map((item) => {
							  const active = item.path ? (pathname === item.path) : false;

							  return (
								  <InPageNavItem key={item.title}
												 active={active}
												 {...item}/>
							  );
						  })
					  }
				  </Stack>
			  </Container>
		  </LayoutContainer>
		  {/*<Stack*/}
			{/*alignItems="center"*/}
			{/*direction="row"*/}
			{/*justifyContent="space-between"*/}
			{/*spacing={2}*/}
			{/*sx={{*/}
			{/*	minHeight: TOP_NAV_HEIGHT,*/}
			{/*	px: 6*/}
			{/*}}>*/}
			{/*  <Stack*/}
			{/*	alignItems="center"*/}
			{/*	direction="row"*/}
			{/*	spacing={2}>*/}

			{/*  </Stack>*/}
			{/*  <Stack*/}
			{/*	alignItems="center"*/}
			{/*	direction="row"*/}
			{/*	spacing={2}>*/}
			{/*  </Stack>*/}
		  {/*</Stack>*/}
	  </StyledTopNavBar>
	);
};