import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { SideNavBar } from '../../components/sideNav/SideNavBar';
import { TopNav } from './top-nav';
import { usePathname } from 'next/navigation';
import { Box } from '@mui/material';

const SIDE_NAV_WIDTH = 280;

const LayoutRoot = styled('div')(({ theme }) => ({
	display: 'flex',
	flex: '1 1 auto',
	maxWidth: '100%',
	[theme.breakpoints.up('lg')]: {
		paddingLeft: SIDE_NAV_WIDTH
	}
}));

const LayoutContainer = styled('div')({
	display: 'flex',
	flex: '1 1 auto',
	flexDirection: 'column',
	width: '100%',
	padding: "48px 24px",
});

export const Layout = (props) => {
	const { children } = props;
	const pathname = usePathname();
	const [openNav, setOpenNav] = useState(true);

	useEffect(
		() => {
			if (openNav) {
				setOpenNav(false);
			}
		},
		[pathname, openNav]
	);

	return (
	  <>
		  <TopNav onNavOpen={() => setOpenNav(true)} />
		  <SideNavBar
			onClose={() => setOpenNav(false)}
			open={openNav}
		  />
		  <LayoutRoot>
			  <LayoutContainer>
				  {children}
			  </LayoutContainer>
		  </LayoutRoot>
	  </>
	);
};
