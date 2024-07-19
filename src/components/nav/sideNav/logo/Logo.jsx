import {Box, Link, Stack, Typography} from "@mui/material";
import {ourColor} from "../../../../theme/colors";
import {grey} from "@mui/material/colors";

export function Logo(){
	return (
		<Stack direction="row" spacing={2} alignItems="center">
			<Box sx={{
				height: '18px',
				width: '18px',
				background: ourColor.light,
				borderRadius: '4px',
			}}/>
			<Typography variant="h6"
						component="h6"
			>
				<Link href="/src/pages"
					  style={{ textDecoration: 'none', color: grey[900] }}>Label AI</Link>
			</Typography>
		</Stack>
	)
}