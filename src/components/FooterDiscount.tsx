import { Box, TextField, Typography } from "@mui/material";


function FooterDiscount() {
  return (
    <Box sx={{ height: "200px" ,width: "100%", display: "flex",  flexDirection: "row", alignItems: "center", justifyContent: "center", margin: "auto", backgroundColor: "#FFF7EC" }}>
     <Box>
        
     <Typography sx={{ fontSize: "1.5rem", fontWeight: "700" }}>
            Grab an extra 5% 
          </Typography>
          <Typography sx={{ fontSize: "1.5rem", fontWeight: "700" }}>
            duscount
          </Typography>
          <Typography sx={{ fontSize: "0.8rem", width: "50%", color: "#616161B0" }}>
            Subscribe to monthly newsletter. Get the latest product updates and
            special offers delivered right to your inbox.{" "}
          </Typography>
     </Box>
       
       <Box>
       <TextField
            size="small"
            type="text"
            sx={{
              "& .MuiFormLabel-root": {
                fontSize: "0.7rem",
              },
              border: "1px solid #F0AEFF",
              width: "100%",
              borderRadius: "10px"
            }}
            placeholder="Enter Email Address"
          ></TextField>
       </Box>
       
    </Box>
  );
}

export default FooterDiscount;
