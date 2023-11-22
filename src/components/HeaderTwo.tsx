
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const pages = ['Best Sellers', 'Brand', 'Products', 'Outlet', 'Offers', 'Our Story'];

function ResponsiveAppBar() {
  
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
