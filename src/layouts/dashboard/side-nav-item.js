import NextLink from 'next/link';
import PropTypes from 'prop-types';
import { Box, ButtonBase } from '@mui/material';
import { ourColor } from '../../theme/colors';
import { alpha } from '@mui/material/styles';
import { palette } from '@mui/system';
import { grey } from '@mui/material/colors';

export const SideNavItem = (props) => {
	const { active = false, disabled, external, icon, path, title } = props;

	const linkProps = path
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
			<ButtonBase
				sx={{
					alignItems: 'center',
					borderRadius: 1,
					display: 'flex',
					justifyContent: 'flex-start',
					pl: '16px',
					pr: '16px',
					py: '6px',
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
					...(!active && {'&:hover': {
						backgroundColor: alpha(ourColor.main, 0.05),
						borderColor: 'rgba(0,0,0,0.1)'
					}})
				}}
				{...linkProps}
			>
				{icon && (
					<Box
						component="span"
						sx={{
							alignItems: 'center',
							color: grey[500],
							display: 'inline-flex',
							justifyContent: 'center',
							mr: 2,
							...(active && {
								color: alpha(ourColor.light, 1)
							})
						}}
					>
						{icon}
					</Box>
				)}
				<Box
					component="span"
					sx={{
						color: grey[500],
						flexGrow: 1,
						fontFamily: (theme) => theme.typography.fontFamily,
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
					}}
				>
					{title}
				</Box>
			</ButtonBase>
		</li>
	);
};

SideNavItem.propTypes = {
	active: PropTypes.bool,
	disabled: PropTypes.bool,
	external: PropTypes.bool,
	icon: PropTypes.node,
	path: PropTypes.string,
	title: PropTypes.string.isRequired
};
