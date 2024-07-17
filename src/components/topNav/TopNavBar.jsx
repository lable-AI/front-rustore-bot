import PropTypes from 'prop-types';
import {
	Avatar,
	Badge,
	Box,
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

const SIDE_NAV_WIDTH = 280;
const TOP_NAV_HEIGHT = 64;


const StyledTopNavBar = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.background.paper,
	position: 'sticky',
	left: `${SIDE_NAV_WIDTH}px`,
	top: 0,
	width: `calc(100% - ${SIDE_NAV_WIDTH}px)`,
	borderBottom: '1px solid',
	borderColor: theme.palette.divider,
	padding: "8px 0",
	zIndex: theme.zIndex.appBar
}))

export const TopNavBar = () => {
	return (
	  <StyledTopNavBar
		component="header">
		  <Stack
			alignItems="center"
			direction="row"
			justifyContent="space-between"
			spacing={2}
			sx={{
				minHeight: TOP_NAV_HEIGHT,
				px: 6
			}}>
			  <Stack
				alignItems="center"
				direction="row"
				spacing={2}>
				<Quote />
			  </Stack>
			  <Stack
				alignItems="center"
				direction="row"
				spacing={2}>
			  </Stack>
		  </Stack>
	  </StyledTopNavBar>
	);
};