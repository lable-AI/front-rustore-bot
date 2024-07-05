import { common, grey } from '@mui/material/colors';
import { alpha } from '@mui/material/styles';
import { error, info, neutral, ourColor, success, warning } from './colors';

export function createPalette() {
	return {
		action: {
			active: grey[200],
			disabled: alpha(grey[200], 0.38),
			disabledBackground: alpha(grey[200], 0.12),
			focus: alpha(grey[200], 0.26),
			hover: alpha(grey[200], 0.04),
			selected: grey[200]
		},
		background: {
			default: common.white,
			paper: common.white
		},
		divider: grey[300],
		error,
		info,
		mode: 'light',
		primary: grey,
		success,
		text: {
			accent: ourColor.main,
			primary: grey[900],
			secondary: grey[500],
			disabled: alpha(grey[900], 0.38)
		},
		warning
	};
}
