import { usePathname } from 'next/navigation';
import PropTypes from 'prop-types';
import {
	Box,
	Button,
	Divider,
	Drawer,
	keyframes,
	Link,
	ListItem,
	Stack,
	SvgIcon,
	Typography,
	useMediaQuery
} from '@mui/material';
import { items } from '../../../other/routes';
import { Handyman } from '@mui/icons-material';
import { SideNavItem } from './item/SideNavItem';
import { Logo } from './logo/Logo';
import { styled } from '@mui/system';

const GRADIENT = 'linear-gradient(180deg,'
  + ' rgba(238, 240, 244, 0.75) 0%,'
  + ' rgba(231, 232, 246, 0.75) 33%,'
  + ' rgba(241, 225, 241, 0.75) 100%)';

const StyledNav = styled(Stack)(({ theme }) => ({
	listStyle: 'none', padding: 0, margin: 0
}))

export const SideNavBar = (props) => {
	const pathname = usePathname();

	const content = (
	  <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
		<Stack sx={{ py:2,px:2, height: 64 }} justifyContent='center'>
			<Logo />
		</Stack>
		<Box
		  component="nav"
		  sx={{
			  flexGrow: 1, px: 2, py:2
		  }}>
			<Stack spacing={'auto'} height={'100%'}>
				<StyledNav
				  component="ul"
				  spacing={1}>
					{
						items.map((item) => {
						const active = item.path ? (pathname === item.path) : false;

						return (
						  <SideNavItem
						  {...item}
						  active={active}
						  key={item.title}
						  />
						);
					})
					}
				</StyledNav>
			</Stack>
		</Box>
	</Box>);

	return (
	  <Drawer
	  anchor="left"
	  open
	  PaperProps={{
		  sx: {
			  color: 'common.white', width: 280,
			  background: GRADIENT,
		  }
	  }}
	  variant={'permanent'}>
		{content}
	</Drawer>
	);
};