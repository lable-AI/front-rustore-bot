import PropTypes from 'prop-types';
import {
	Avatar,
	Badge,
	Box,
	IconButton,
	Stack,
	SvgIcon,
	Tooltip,
	useMediaQuery
} from '@mui/material';
import { grey } from '@mui/material/colors';

const SIDE_NAV_WIDTH = 280;
const TOP_NAV_HEIGHT = 64;

export const TopNav = (props) => {
	return (
		<>
			<Box
				component="header"
				sx={{
					backgroundColor: (theme) => '#fff',
					position: 'sticky',
					left: {
						lg: `${SIDE_NAV_WIDTH}px`
					},
					top: 0,
					width: {
						lg: `calc(100% - ${SIDE_NAV_WIDTH}px)`
					},
					borderBottom: '1px solid',
					borderColor: grey['300'],
					zIndex: (theme) => theme.zIndex.appBar
				}}>
				<Stack
					alignItems="center"
					direction="row"
					justifyContent="space-between"
					spacing={2}
					sx={{
						minHeight: TOP_NAV_HEIGHT,
						px: 2
					}}>
					<Stack
						alignItems="center"
						direction="row"
						spacing={2}
					>
					</Stack>
					<Stack
						alignItems="center"
						direction="row"
						spacing={2}>
					</Stack>
				</Stack>
			</Box>
		</>
	);
};

TopNav.propTypes = {
	onNavOpen: PropTypes.func
};
