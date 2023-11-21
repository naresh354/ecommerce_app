import { Box, Grid, Typography } from "@mui/material";
import Logo from "../assets/logo.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import telegram from "../assets/telegram.png";
import youtube from "../assets/youtube.png";

function Footer() {
  return (
    <Box sx={{ backgroundColor: "#000000", p: 10,  }}>
      <Grid container sx={{ ml: 10 }}>
        <Grid xs={2.4}>
          <Box>
            <Box sx={{ display: "flex", mb: 2, alignItems: "center" }}>
              <Box component="img" src={Logo}></Box>
              <Typography sx={{ color: "#ffffff", fontWeight: "700" }}>Site Name</Typography>
            </Box>
          </Box>
          <Typography
            sx={{ color: "#ffffff", mb: 2, fontSize: "0.8rem", width: "70%" }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </Typography>
          <Box
            component="img"
            sx={{
              backgroundColor: "#17171A",
              p: 1.5,
              borderRadius: "50%",
              ml: -1
            }}
            src={facebook}
          ></Box>
          <Box
            component="img"
            src={twitter}
            sx={{
              backgroundColor: "#17171A",
              p: 1.5,
              borderRadius: "50%",
              ml: 1,
            }}
          ></Box>
          <Box
            component="img"
            src={youtube}
            sx={{
              backgroundColor: "#17171A",
              p: 1.5,
              borderRadius: "50%",
              ml: 1,
            }}
          ></Box>
          <Box
            component="img"
            src={telegram}
            sx={{
              backgroundColor: "#17171A",
              p: 1.5,
              borderRadius: "50%",
              ml: 1,
            }}
          ></Box>
        </Grid>

        <Grid xs={2.4}>
          <Typography sx={{ color: "#FFFFFF", fontWeight: "700" }}>
            Customer Support
          </Typography>
          <Box sx={{}}>
            <Typography sx={{ color: "#FFFFFF", fontSize: "0.8rem", mt: 1.5 }}>
              Returns & Warranty
            </Typography>
            <Typography sx={{ color: "#FFFFFF", fontSize: "0.8rem", mt: 1.5 }}>
              Payments
            </Typography>
            <Typography sx={{ color: "#FFFFFF", fontSize: "0.8rem", mt: 1.5 }}>
              Shipping
            </Typography>
            <Typography sx={{ color: "#FFFFFF", fontSize: "0.8rem", mt: 1.5 }}>
              Terms and Services
            </Typography>
            <Typography sx={{ color: "#FFFFFF", fontSize: "0.8rem", mt: 1.5 }}>
              Privacy Policy
            </Typography>
          </Box>
        </Grid>

        <Grid xs={2.4}>
          <Typography sx={{ color: "#FFFFFF", fontWeight: "700" }}>
            Corporate Info
          </Typography>
          <Box sx={{}}>
            <Typography sx={{ color: "#FFFFFF", fontSize: "0.8rem", mt: 1.5 }}>
              About Us
            </Typography>
            <Typography sx={{ color: "#FFFFFF", fontSize: "0.8rem", mt: 1.5 }}>
              Brands
            </Typography>
            <Typography sx={{ color: "#FFFFFF", fontSize: "0.8rem", mt: 1.5 }}>
              Investors
            </Typography>
            <Typography sx={{ color: "#FFFFFF", fontSize: "0.8rem", mt: 1.5 }}>
              Cookies
            </Typography>
          </Box>
        </Grid>

        <Grid xs={2.4}>  
          <Typography sx={{ color: "#FFFFFF", fontWeight: "700" }}>
            Gift Card
          </Typography>
          <Box sx={{}}>
            <Typography sx={{ color: "#FFFFFF", fontSize: "0.8rem", mt: 1.5 }}>
              Buy Gift Cards
            </Typography>
            <Typography sx={{ color: "#FFFFFF", fontSize: "0.8rem", mt: 1.5 }}>
              Redeem Card
            </Typography>
          </Box>
        </Grid>

        <Grid xs={2.4}>
          <Typography sx={{ color: "#FFFFFF", fontWeight: "700" }}>
            Location
          </Typography>
          <Box sx={{}}>
            <Typography sx={{ color: "#FFFFFF", fontSize: "0.8rem", mt: 1.5 }}>
            United State
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
