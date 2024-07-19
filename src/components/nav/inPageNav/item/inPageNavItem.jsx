import {ButtonBase, Typography} from "@mui/material";
import {styled} from "@mui/system";
import NextLink from "next/link";

const StyledTitle = styled(Typography)(({theme, active}) => ({
	color: theme.palette.text.primary,
	textDecoration: 'none',
	...(!active && {
		opacity: 0.4
	})
}))

export function InPageNavItem({active = false, disabled, external, icon, path, title}) {
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
		<StyledTitle variant={'h5'} active={active} {...linkProps}>
			{title}
		</StyledTitle>
	)
}