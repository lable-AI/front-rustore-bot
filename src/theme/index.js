import { createTheme as createMuiTheme } from '@mui/material';
import { createPalette } from './create-palette';
import { createComponents } from './create-components';
import { createShadows } from './create-shadows';
import { createTypography } from './create-typography';

export function createTheme() {
	const borderRadius = 8;

	const palette = createPalette();
	const components = createComponents({ palette, borderRadius });
	const shadows = createShadows();
	const typography = createTypography();

	return createMuiTheme({
		components,
		palette,
		shadows,
		typography
	});
}
