import { usePathname } from 'next/navigation';
import PropTypes from 'prop-types';
import {
	Box,
	Button,
	Divider,
	Drawer,
	keyframes,
	Link,
	ListItem,
	Stack,
	SvgIcon,
	Typography,
	useMediaQuery
} from '@mui/material';
import { Scrollbar } from 'src/components/scrollbar';
import { items } from './config';
import { SideNavItem } from './side-nav-item';
import { grey } from '@mui/material/colors';
import { alpha } from '@mui/material/styles';
import { ourColor } from '../../theme/colors';
import { Handyman } from '@mui/icons-material';

const SIDE_TOP_HEIGHT = 64;
const GRADIENT = 'linear-gradient(0deg,'
  + ' rgba(23, 21, 59,0.2) 0%,'
  + ' rgba(119,118,179,0.2) 35%,'
  + ' rgba(155,134,189,0.2) 65%,'
  + ' rgba(238, 206, 185,0.2) 100%)';


export const SideNav = (props) => {
	const pathname = usePathname();

	const content = (
	  <Box
	  sx={{
		  display: 'flex', flexDirection: 'column', height: '100%'
	  }}>
		<Stack sx={{ py:2,px:2, height: SIDE_TOP_HEIGHT }} justifyContent='center'>
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
					<Link href="/about-us"
						  style={{ textDecoration: 'none', color: grey[900] }}>Label AI</Link>
				</Typography>
			</Stack>

		</Stack>
		<Box
		  component="nav"
		  sx={{
			  flexGrow: 1, px: 2, py:2
		  }}>
			<Stack spacing={'auto'} height={'100%'}>
				<Stack
				  component="ul"
				  spacing={1}
				  sx={{
					  listStyle: 'none', p: 0, m: 0
				  }}>
					{items.map((item) => {
						const active = item.path ? (pathname === item.path) : false;

						return (<SideNavItem
						  active={active}
						  disabled={item.disabled}
						  external={item.external}
						  icon={item.icon}
						  key={item.title}
						  path={item.path}
						  title={item.title}
						/>);
					})}
				</Stack>
				<Link href={'https://caila.io/app/just-ai/mlp-gpt-chat-app'} target={'_blank'} sx={{textDecoration: 'none', cursor: 'pointer'}}>
					<Stack direction={'row'} spacing={1}>
						<Handyman sx={{opacity: '0.6'}} fontSize={'small'}/>
						<Typography variant={'subtitle2'}>Режим отладки</Typography>
					</Stack>
				</Link>
			</Stack>

		</Box>
	</Box>);

	return (<Drawer
	  anchor="left"
	  open
	  PaperProps={{
		  sx: {
			  backgroundColor: 'neutral.200', color: 'common.white', width: 280,
			  background: GRADIENT
		  }
	  }}
	  variant={'permanent'}>
		{content}
	</Drawer>);
};

SideNav.propTypes = {
	onClose: PropTypes.func, open: PropTypes.bool
};
