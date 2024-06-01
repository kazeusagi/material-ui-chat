import { useAtomValue, useSetAtom } from 'jotai';

import { isOpenSidebarAtom, toggleSidebarAtom } from '@/util/atom';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {
  AppBar as MuiAppBar,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  AppBarProps as MuiAppBarProps,
  styled,
  Box,
} from '@mui/material';

export type Props = {};

export function Header({}: Props) {
  const isOpenSidebar = useAtomValue(isOpenSidebarAtom);
  const toggleSidebar = useSetAtom(toggleSidebarAtom);

  return (
    <AppBar position='absolute' open={isOpenSidebar}>
      <Toolbar
        sx={{
          pr: '24px', // keep right padding when drawer closed
        }}
      >
        <IconButton
          edge='start'
          color='inherit'
          aria-label='open drawer'
          onClick={toggleSidebar}
          sx={{
            overflow: 'hidden',
            width: '36px',
            opacity: 100,
            marginRight: '36px',
            transition: 'all 0.2s ease-in-out',
            ...(isOpenSidebar && { width: 0, marginRight: 0, opacity: 0, padding: 0 }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography component='h1' variant='h6' color='inherit' noWrap sx={{ flexGrow: 1 }}>
          Dashboard
        </Typography>
        <IconButton color='inherit'>
          <Badge badgeContent={4} color='secondary'>
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: 240,
    width: 'calc(100% - 240px)',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
