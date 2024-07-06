import { usePathname } from 'next/navigation';
import PropTypes from 'prop-types';
import {
	Box, Button, Divider, Drawer, Link, Stack, SvgIcon, Typography, useMediaQuery
} from '@mui/material';
import { Scrollbar } from 'src/components/scrollbar';
import { items } from './config';
import { SideNavItem } from './side-nav-item';
import { grey } from '@mui/material/colors';
import { alpha } from '@mui/material/styles';
import { ourColor } from '../../theme/colors';

const SIDE_TOP_HEIGHT = 64;

export const SideNav = (props) => {
	const pathname = usePathname();

	const content = (
	  <Box
	  sx={{
		  display: 'flex', flexDirection: 'column', height: '100%'
	  }}>
		<Box sx={{ p: 2, height: SIDE_TOP_HEIGHT }}>
			<Box>
				{/* <Logo /> */}
				<Typography variant="h6"
							component="h6"
							align={'center'}>
					<Link href="/about-us"
						  style={{ textDecoration: 'none', color: grey[900] }}>Label AI</Link>
				</Typography>
			</Box>

		</Box>
		<Divider/>
		<Box
		  component="nav"
		  sx={{
			  flexGrow: 1, px: 2, py: 3
		  }}>
			<Stack
			  component="ul"
			  spacing={0.5}
			  sx={{
				  listStyle: 'none', p: 0, m: 0
			  }}>
				{items.map((item) => {
					const active = item.path ? (pathname === item.path) : false;

					return (<SideNavItem
					  active={active}
					  disabled={item.disabled}
					  external={item.external}
					  icon={item.icon}
					  key={item.title}
					  path={item.path}
					  title={item.title}
					/>);
				})}
			</Stack>
		</Box>
	</Box>);

	return (<Drawer
	  anchor="left"
	  open
	  PaperProps={{
		  sx: {
			  backgroundColor: 'neutral.200', color: 'common.white', width: 280,
			  background: alpha(ourColor.lightest, 0.2)
		  }
	  }}
	  variant={'permanent'}>
		{content}
	</Drawer>);
};

SideNav.propTypes = {
	onClose: PropTypes.func, open: PropTypes.bool
};
