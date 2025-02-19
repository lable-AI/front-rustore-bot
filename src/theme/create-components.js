import {
	createTheme,
	filledInputClasses,
	inputLabelClasses,
	outlinedInputClasses,
	paperClasses,
	tableCellClasses
} from '@mui/material';


// Used only to create transitions
const muiTheme = createTheme();


export function createComponents(config) {
	const { palette, borderRadius, transition } = config;

	const MuiPersonCard = {
		MuiCard: {
			styleOverrides: {
				root: {
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					boxShadow: 'none'
				}
			}
		}, MuiCardContent: {
			styleOverrides: {
				root: {
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center'
				}
			}
		}, MuiCardHeader: {
			defaultProps: {
				titleTypographyProps: {
					variant: 'h6'
				}, subheaderTypographyProps: {
					variant: 'body2'
				}
			}, styleOverrides: {
				root: {}
			}
		}
	};

	const MuiInput = {
		MuiInputBase: {
			styleOverrides: {
				input: {
					'&::placeholder': {
						opacity: 1
					}
				}
			}
		}, MuiInput: {
			styleOverrides: {
				input: {
					fontSize: 14, fontWeight: 500, lineHeight: '24px', '&::placeholder': {
						color: palette.text.secondary
					}
				}
			}
		},
		MuiFilledInput: {
			styleOverrides: {
				root: {
					backgroundColor: 'transparent',
					borderRadius,
					borderStyle: 'solid',
					borderWidth: 1,
					overflow: 'hidden',
					borderColor: palette.primary[200],
					transition: muiTheme.transitions.create([
						'border-color', 'box-shadow'
					]),
					'&:hover': {
						backgroundColor: palette.action.hover
					},
					'&:before': {
						display: 'none'
					},
					'&:after': {
						display: 'none'
					},
					[`&.${filledInputClasses.disabled}`]: {
						backgroundColor: 'transparent'
					},
					[`&.${filledInputClasses.focused}`]: {
						backgroundColor: 'transparent',
						borderColor: palette.primary.main,
						boxShadow: `${palette.primary.main} 0 0 0 2px`
					},
					[`&.${filledInputClasses.error}`]: {
						borderColor: palette.error.main,
						boxShadow: `${palette.error.main} 0 0 0 2px`
					}
				}, input: {
					fontSize: 14, fontWeight: 500, lineHeight: '24px'
				}
			}
		},
		MuiOutlinedInput: {
			styleOverrides: {
				root: {
					'&:hover': {
						backgroundColor: palette.action.hover,
						[`& .${outlinedInputClasses.notchedOutline}`]: {
							borderColor: palette.primary[200]
						}
					}, [`&.${outlinedInputClasses.focused}`]: {
						backgroundColor: 'transparent',
						[`& .${outlinedInputClasses.notchedOutline}`]: {
							borderColor: palette.primary.main,
							boxShadow: `${palette.primary.main} 0 0 0 2px`
						}
					}, [`&.${filledInputClasses.error}`]: {
						[`& .${outlinedInputClasses.notchedOutline}`]: {
							borderColor: palette.error.main,
							boxShadow: `${palette.error.main} 0 0 0 2px`
						}
					}
				}, input: {
					fontSize: 14, fontWeight: 500, lineHeight: '24px'
				}, notchedOutline: {
					borderColor: palette.primary[200], transition: muiTheme.transitions.create([
						'border-color', 'box-shadow'
					])
				}
			}
		},
		MuiTextField: {
			defaultProps: {
				variant: 'filled'
			}
		}
	}

	return {
		...MuiPersonCard,
		...MuiInput,
		MuiBox:{
			styleOverrides: {
				root:{
					transition,
				}
			}
		},
		MuiTypography:{
			styleOverrides: {
				root: {
					transition
				}
			}
		},
		MuiButtonBase: {
			styleOverrides: {
				root: {
					borderRadius,
					transition
				}
			}
		},
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius,
					transition,
				}, sizeSmall: {
					padding: '6px 16px'
				}, sizeMedium: {
					padding: '8px 20px'
				}, sizeLarge: {
					padding: '11px 24px'
				}, textSizeSmall: {
					padding: '7px 12px'
				}, textSizeMedium: {
					padding: '9px 16px'
				}, textSizeLarge: {
					padding: '12px 16px'
				}
			}
		},

		MuiCssBaseline: {
			styleOverrides: {
				'*': {
					boxSizing: 'border-box'
				}, html: {
					MozOsxFontSmoothing: 'grayscale',
					WebkitFontSmoothing: 'antialiased',
					display: 'flex',
					flexDirection: 'column',
					minHeight: '100%',
					width: '100%'
				}, body: {
					display: 'flex',
					flex: '1 1 auto',
					flexDirection: 'column',
					minHeight: '100%',
					width: '100%'
				}, '#__next': {
					display: 'flex',
					flex: '1 1 auto',
					flexDirection: 'column',
					height: '100%',
					width: '100%'
				}, '#nprogress': {
					pointerEvents: 'none'
				}, '#nprogress .bar': {
					backgroundColor: palette.primary.main,
					height: 3,
					left: 0,
					position: 'fixed',
					top: 0,
					width: '100%',
					zIndex: 2000
				}
			}
		},
		MuiFormLabel: {
			styleOverrides: {
				root: {
					fontSize: 14, fontWeight: 500, [`&.${inputLabelClasses.filled}`]: {
						transform: 'translate(12px, 18px) scale(1)'
					}, [`&.${inputLabelClasses.shrink}`]: {
						[`&.${inputLabelClasses.standard}`]: {
							transform: 'translate(0, -1.5px) scale(0.85)'
						}, [`&.${inputLabelClasses.filled}`]: {
							transform: 'translate(12px, 6px) scale(0.85)'
						}, [`&.${inputLabelClasses.outlined}`]: {
							transform: 'translate(14px, -9px) scale(0.85)'
						}
					}
				}
			}
		},
		MuiTab: {
			styleOverrides: {
				root: {
					fontSize: 14,
					fontWeight: 500,
					lineHeight: 1.71,
					minWidth: 'auto',
					paddingLeft: 0,
					paddingRight: 0,
					textTransform: 'none',
					'& + &': {
						marginLeft: 24
					}
				}
			}
		}, MuiTableCell: {
			styleOverrides: {
				root: {
					borderBottomColor: palette.divider, padding: '15px 16px'
				}
			}
		}, MuiTableHead: {
			styleOverrides: {
				root: {
					borderBottom: 'none', [`& .${tableCellClasses.root}`]: {
						borderBottom: 'none',
						backgroundColor: palette.primary[50],
						color: palette.primary[700],
						fontSize: 12,
						fontWeight: 600,
						lineHeight: 1,
						letterSpacing: 0.5,
						textTransform: 'uppercase'
					}, [`& .${tableCellClasses.paddingCheckbox}`]: {
						paddingTop: 4, paddingBottom: 4
					}
				}
			}
		},
	};
}
