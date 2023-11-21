import { Box, Button, Grid, Typography } from '@mui/material'
import BannerImg from "../assets/banner.png"

function Banner() {
  return (
    <Box sx={{ display: "flex", margin: "auto", backgroundImage: "linear-gradient(#EAF0FF, #FFF8F300)", height: "80vh", borderRadius: "10px"}}>

        <Grid container sx={{ width: "80%", p: 10, margin: "auto" }}  >
            <Grid xs={8} sx={{ p: 5}} >
                 <Box>
                 <Typography sx={{  color: "#100F1A", fontSize: "2.5rem", fontWeight: "700", textTransform: "uppercase"  }}>Workout Essential </Typography>
                 <Typography sx={{  color: "#100F1A", fontSize: "2.5rem", fontWeight: "700", textTransform: "uppercase"   }}>supplements  </Typography>
                 
                 <Typography sx={{ fontSize: "0.8rem", color: "#1E1E1E", mt: 1 }} >In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface.</Typography>
                 <Button
            
              sx={{
                pl: 2,
                pr: 2,
                mt: 4,
                backgroundImage: "linear-gradient(#65C2ED, #F1ADFF)",
                color: "#FFFFFF",
                fontSize: "0.7rem",
                fontWeight: "700",
                width: "30%"


              }}
            >
              Buy Now
            </Button>
                 </Box>
            </Grid>
            <Grid xs={4}>
                <Box component="img" sx={{ height: "100%", width: "100%" }} src={BannerImg}>

                </Box>
            </Grid>
        </Grid>
        
    </Box>
  )
}

export default Banner