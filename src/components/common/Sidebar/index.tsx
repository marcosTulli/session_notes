import { useSidebar } from '@hooks/ui';
import { navigationItems } from './config/navigation';
import { NavigationItem } from './NavigationItem';
import { SidebarContainer } from './SidebarContainer';
import { Drawer } from '../Drawer';
import { layoutConfig } from '@config/index';
import { Box, Typography } from '@mui/material';

export function Sidebar() {
  const { isSideBarOpen } = useSidebar();
  const { topBarHeight, collapsedDrawerWidth, drawerWidth } = layoutConfig;
  return (
    <Drawer
      collapsedDrawerWidth={collapsedDrawerWidth}
      drawerWidth={drawerWidth}
      topBarHeight={topBarHeight}
      variant="permanent"
      open={isSideBarOpen}
    >
      <SidebarContainer>
        {navigationItems.map((item) => (
          <NavigationItem
            href={item.href}
            icon={item.icon}
            isOpen={isSideBarOpen}
            text={item.label}
            key={item.label}
          />
        ))}
      </SidebarContainer>
      {isSideBarOpen && (
        <Box sx={{ bgcolor: 'background.default' }}>
          <Typography
            sx={{ mb: 1, ml: 2, color: 'text.disabled', userSelect: 'none', fontSize: '16px' }}
          >
            v: {window.APP_VERSION}
          </Typography>
        </Box>
      )}
    </Drawer>
  );
}
