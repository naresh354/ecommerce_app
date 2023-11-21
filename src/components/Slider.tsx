import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  CardActions,
  Button,
  Grid,
} from "@mui/material";
import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import SliderImage from "../assets/Sliderimage.png";

function Slider() {
  return (
    <Box
      sx={{
        margin: "auto",
        width: "70%",
        borderRadius: "10px",
        mt: 10,
        mb: 10,
      }}
    >
      <Grid container>
        <Grid xs={5} sx={{ backgroundColor: "#FFFFFF", borderRadius: "10px" }}>
          <CardContent>
            <Typography
              sx={{ fontSize: "2rem", fontWeight: "700", color: "#23222A" }}
            >
              Best deals for
            </Typography>
            <Typography
              sx={{ fontSize: "2rem", fontWeight: "700", color: "#68C2EE" }}
            >
              Vitamin Tablets
            </Typography>
            <Typography sx={{ color: "#616161B0", fontWeight: "0.6rem" }}>
              In publishing and graphic design, Lorem ipsum is a placeholder
            </Typography>
            <Button
              endIcon={<KeyboardArrowRightIcon></KeyboardArrowRightIcon>}
              sx={{
                width: "70%",
                backgroundImage: "linear-gradient(#65C2ED, #F1ADFF)",
                color: "#FFFFFF",
                outline: "none",
                border: "none",
                p: 1.5,
                mt: 2,
                fontSize: "0.7rem",
                fontWeight: "700",
                textAlign: "align",
              }}
             
            >
              Proceed to order
            </Button>
          </CardContent>
        </Grid>
        <Grid xs={7}>
          <Box
            src={SliderImage}
            sx={{ width: 500, height: 250, borderRadius: "10px" }}
            component="img"
          ></Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Slider;
