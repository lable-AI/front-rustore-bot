import React from 'react';
import {Box, ButtonBase} from "@mui/material";
import {alpha} from "@mui/material/styles";
import {ourColor} from "../../../theme/colors";
import {grey} from "@mui/material/colors";
import {styled} from "@mui/system";
import NextLink from "next/link";

const StyledSideTab = styled(ButtonBase)(({theme, active}) => ({
	alignItems: 'center',
	display: 'flex',
	justifyContent: 'flex-start',
	padding: '6px 16px',
	transition: '0.1s',
	border: '1px solid transparent',
	textAlign: 'left',
	width: '100%',
	...(active && {
		backgroundColor: alpha('rgb(255,255,255)', 0.25),
		borderColor: alpha('rgb(0,0,0)', 0.1),
		boxShadow: '0px 0px 24px rgba(0,0,0,0.05)',
		cursor: 'default',
	}),
	...(!active && {
		'&:hover': {
			backgroundColor: alpha(ourColor.main, 0.05),
			borderColor: 'rgba(0,0,0,0.1)'
		}
	})
}));

const StyledIcon = styled(Box)(({theme, active}) => ({
	alignItems: 'center',
	color: grey[500],
	display: 'inline-flex',
	justifyContent: 'center',
	marginRight: '8px', // Changed to marginRight for better understanding
	...(active && {
		color: alpha(ourColor.light, 1)
	})
}));

const StyledTitle = styled(Box)(({theme, active, disabled}) => ({
	color: grey[500],
	flexGrow: 1,
	fontFamily: theme.typography.fontFamily,
	fontSize: 14,
	fontWeight: 600,
	lineHeight: '24px',
	whiteSpace: 'nowrap',
	...(active && {
		color: alpha(grey[800], 1)
	}),
	...(disabled && {
		color: alpha(grey[300], 1)
	})
}));

export const SideNavItem = ({active = false, disabled, external, icon, path, title}) => {
	const linkProps= path
		? external
			? {
				component: 'a',
				href: path,
				target: '_blank'
			}
			: {
				component: NextLink,
				href: path
			}
		: {};

	return (
		<li>
			<StyledSideTab active={active} {...linkProps}>
				{icon && <StyledIcon active={active}>{icon}</StyledIcon>}
				<StyledTitle active={active} disabled={disabled}>{title}</StyledTitle>
			</StyledSideTab>
		</li>
	);
}
