import {Stack, Typography} from "@mui/material";

export function Quote(){
	return (
		<Stack sx={{opacity: '0.5',transition: '0.25s',cursor: 'help',userSelect: 'none', "&:hover": {opacity: '1'}}}>
			<Typography variant="caption" sx={{opacity: '0.5'}}>
				Цитатник
			</Typography>
			<Typography variant="subtitle1">
				Талант выигрывает игры, но команда Label AI выигрывает хакатоны
			</Typography>
		</Stack>
	)
}