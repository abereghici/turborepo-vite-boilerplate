import { Box, AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <DashboardIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <code>@monorepo/shell</code>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export function Dashboard({ children }: { children?: React.ReactNode }) {
  return (
    <Box>
      <Header />
      <main role="main">{children}</main>
    </Box>
  );
}
