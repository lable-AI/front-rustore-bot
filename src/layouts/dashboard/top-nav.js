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

const SIDE_NAV_WIDTH = 280;
const TOP_NAV_HEIGHT = 64;

export const TopNav = (props) => {
	return (
		<>
			<Box
				component="header"
				sx={{
					backgroundColor: (theme) => alpha(theme.palette.background.paper,1),
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
					py: 1,
					zIndex: (theme) => theme.zIndex.appBar
				}}>
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
						<Stack sx={{opacity: '0.5',transition: '0.25s',cursor: 'help',userSelect: 'none', "&:hover": {opacity: '1'}}}>
							<Typography variant="caption" sx={{opacity: '0.5'}}>
								Цитатник
							</Typography>
							<Typography variant="subtitle1">
								Талант выигрывает игры, но команда Label AI выигрывает хакатоны
							</Typography>
						</Stack>

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
