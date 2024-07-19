import React from 'react';
import {Box, ButtonBase, Typography} from "@mui/material";
import {alpha} from "@mui/material/styles";
import {ourColor} from "../../../../theme/colors";
import {styled} from "@mui/system";
import NextLink from "next/link";

const StyledSideTab = styled(ButtonBase)(({theme, active}) => ({
	alignItems: 'center',
	display: 'flex',
	justifyContent: 'flex-start',
	padding: '6px 16px',
	border: '1px solid transparent',
	textAlign: 'left',
	width: '100%',
	...(active && {
		backgroundColor: alpha('rgb(255,255,255)', 0.25),
		borderColor: theme.palette.divider,
		boxShadow: '0px 4px 40px rgba(0,0,0,0.07)',
		transform: 'translateY(-1px)',
		cursor: 'default',
	}),
	...(!active && {
		'&:hover': {
			backgroundColor: alpha(ourColor.main, 0.05),
			borderColor: theme.palette.divider
		}
	})
}));

const StyledIcon = styled(Box)(({theme, active}) => ({
	alignItems: 'center',
	color: theme.palette.text.secondary,
	display: 'inline-flex',
	justifyContent: 'center',
	marginRight: '8px', // Changed to marginRight for better understanding
	...(active && {
		color: theme.palette.text.accent
	})
}));

const StyledTitle = styled(Box)(({theme, active, disabled}) => ({
	color: theme.palette.text.secondary,

	...(active && {
		color: theme.palette.text.primary
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
				<StyledTitle active={active} disabled={disabled}>
					<Typography variant="tab">{title}</Typography>
				</StyledTitle>
			</StyledSideTab>
		</li>
	);
}
