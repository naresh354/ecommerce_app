import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Logo from "../assets/logo.png";
import { Button, InputAdornment, TextField } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Cart from "../assets/cart.png";
import heart from "../assets/heart.png";
import searchImg from "../assets/search.png";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1, mt: -1, width: "100%" }}>
      <AppBar position="absolute" sx={{ backgroundColor: "#ffffff", boxShadow: "none" }}>
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <Box sx={{ width: "80%" }} component="img" src={Logo}></Box>
          </IconButton>
          {/* <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography> */}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Search sx={{ ml: 2 }}>
              <TextField
                sx={{ p: 1 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Box sx={{ width: 15 }} component="img" src={searchImg} />
                    </InputAdornment>
                  ),
                }}
                type="text"
                placeholder="Search for Products"
                size="small"
              ></TextField>
            </Search>
            <Box component="img" sx={{ ml: 2 }} src={heart}></Box>
            <Box component="img" sx={{ ml: 2 }} src={Cart}></Box>
            <Button
              endIcon={<ArrowOutwardIcon></ArrowOutwardIcon>}
              sx={{
                ml: 2,
                pl: 2,
                pr: 2,
                backgroundImage: "linear-gradient(#65C2ED, #F1ADFF)",
                color: "#FFFFFF",
                fontSize: "0.7rem",
                fontWeight: "700"
              }}
            >
              Get Start
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
