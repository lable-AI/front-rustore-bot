import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { usePathname } from 'next/navigation';
import { InPageNav } from '../components/nav/inPageNav/inPageNav';

const LayoutRoot = styled('div')(({ theme }) => ({
	display: 'flex',
	flex: '1 1 auto',
	maxWidth: '100%'
}));

const LayoutContainer = styled('div')({
	display: 'flex',
	flex: '1 1 auto',
	flexDirection: 'column',
	width: '100%',
	padding: '48px 24px'
});

export const Layout = (props) => {
	const { children } = props;
	const pathname = usePathname();
	return (
	  <>
		  <LayoutRoot>
			  <LayoutContainer sx={{
				  background: 'radial-gradient(at center top, #F1D7F5, #FFFFFF,#FFFFFF,#FFFFFF)',
			  }}>
				  <InPageNav/>
				  {children}
			  </LayoutContainer>
		  </LayoutRoot>
	  </>
	);
};
