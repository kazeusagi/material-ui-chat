import { useAtomValue, useSetAtom } from 'jotai';

import { mainListItems, secondaryListItems } from './ListItems';
import { isOpenSidebarAtom, toggleSidebarAtom } from '@/util/atom';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Drawer as MuiDrawer, Toolbar, IconButton, Divider, List, styled } from '@mui/material';

type Props = {
  items?: React.ReactNode;
};

export function Sidebar({}: Props) {
  const isOpenSidebar = useAtomValue(isOpenSidebarAtom);
  const toggleSidebar = useSetAtom(toggleSidebarAtom);

  return (
    <Drawer variant='permanent' open={isOpenSidebar}>
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          px: [1],
        }}
      >
        <IconButton onClick={toggleSidebar}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List component='nav'>
        {mainListItems}
        <Divider sx={{ my: 1 }} />
        {secondaryListItems}
      </List>
    </Drawer>
  );
}

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: 240,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);
