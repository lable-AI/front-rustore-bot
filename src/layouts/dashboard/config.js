import ChartBarIcon from '@heroicons/react/24/solid/ChartBarIcon';
import CogIcon from '@heroicons/react/24/solid/CogIcon';
import LockClosedIcon from '@heroicons/react/24/solid/LockClosedIcon';
import ShoppingBagIcon from '@heroicons/react/24/solid/ShoppingBagIcon';
import UserIcon from '@heroicons/react/24/solid/UserIcon';
import UserPlusIcon from '@heroicons/react/24/solid/UserPlusIcon';
import UsersIcon from '@heroicons/react/24/solid/UsersIcon';
import XCircleIcon from '@heroicons/react/24/solid/XCircleIcon';
import { SvgIcon } from '@mui/material';
import { ChatBubbleLeftEllipsisIcon, TagIcon } from '@heroicons/react/20/solid';
import { Handyman, Newspaper } from '@mui/icons-material';

export const items = [
	{
		title: 'О нас',
		path: '/',
		icon: (
			<SvgIcon fontSize="small">
				<UserIcon />
			</SvgIcon>
		)
	},
	{
		title: 'Статьи',
		path: '/articles',
		icon: (
			<SvgIcon fontSize="small">
				<Newspaper />
			</SvgIcon>
		)
	},
	{
		title: 'Кейсы',
		path: '/cases',
		icon: (
		  <SvgIcon fontSize="small">
			  <Handyman />
		  </SvgIcon>
		)
	}
];
