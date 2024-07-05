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

export const items = [
  {
    title: 'Информация о продукте',
    path: '/readme',
    icon: (
      <SvgIcon fontSize="small">
        <ChartBarIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Продукт',
    path: '/main',
    icon: (
      <SvgIcon fontSize="small">
        <ShoppingBagIcon />
      </SvgIcon>
    )
  },
  {
    title: 'О нас',
    path: '/about-us',
    icon: (
      <SvgIcon fontSize="small">
        <UserIcon />
      </SvgIcon>
    )
  },
  {
    title: "Чат",
    path: '/chat',
    icon: (
      <SvgIcon fontSize="small">
        <ChatBubbleLeftEllipsisIcon />
      </SvgIcon>
    )
  },
  {
    title: "Поиск",
    path: '/search',
    icon: (
      <SvgIcon fontSize="small">
        <TagIcon />
      </SvgIcon>
    )
  }
];
