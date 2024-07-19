import { common, grey } from '@mui/material/colors';
import { alpha } from '@mui/material/styles';
import { error, info, neutral, ourColor, success, system, warning } from './colors';

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
		divider: system.divider,
		error,
		info,
		mode: 'light',
		primary: grey,
		success,
		text: {
			accent: "#8E7AB5",
			primary: grey[900],
			secondary: grey[600],
			disabled: alpha(grey[900], 0.38)
		},
		warning,
		gradient: 'linear-gradient(0deg,'
		  + ' rgb(238 240 244) 0%,'
		  + ' rgb(231 232 246) 33%,'
		  + ' rgb(241 225 241) 100%)',
	};
}
