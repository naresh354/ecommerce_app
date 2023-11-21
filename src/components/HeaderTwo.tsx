import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

const pages = ['Best Sellers', 'Brand', 'Products', 'Outlet', 'Offers', 'Our Story'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ background: "rgb(242, 242, 242)", mt: 9, boxShadow: "none" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
         
          <Box sx={{ flexGrow: 1, ml: 30, display: { xs: 'none', md: 'flex' }, color: "#111" }}>
            {pages.map((page) => (
              <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                 <Typography sx={{ fontSize:"0.8rem" , textAlign: "center" , ml: 2, color: "##100F1A", fontWeight: "700" }}>
                {page}
                </Typography>
                </Box>
            
            ))}
          </Box>

          
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
