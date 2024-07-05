import { common, grey } from '@mui/material/colors';
import { alpha } from '@mui/material/styles';
import { error, info, neutral, success, warning } from './colors';

export function createPalette() {
  return {
    action: {
      active: grey[500],
      disabled: alpha(grey[900], 0.38),
      disabledBackground: alpha(grey[900], 0.12),
      focus: alpha(grey[900], 0.26),
      hover: alpha(grey[900], 0.04),
      selected: alpha(grey[900], 0.12)
    },
    background: {
      default: common.white,
      paper: common.white
    },
    divider: grey['300'],
    error,
    info,
    mode: 'light',
    neutral,
    primary: grey,
    success,
    text: {
      primary: grey[900],
      secondary: grey[500],
      disabled: alpha(grey[900], 0.38)
    },
    warning
  };
}
