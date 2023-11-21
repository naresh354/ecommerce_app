import { Box, Typography } from "@mui/material";
import Category1 from "../assets/category2.png";
import Category2 from "../assets/category1.png";
import Category3 from "../assets/category3.png";
import Category4 from "../assets/category4.png";

const CategoryItems = [
  {
    name: "Vitamins",
    color: "#EBF8E6",
    image: Category1,
  },
  {
    name: "Medicine ",
    color: "#FFE8ED",
    image: Category2,
  },
  {
    name: "Home Healthcare",
    color: "#E5EDFA",
    image: Category3,
  },
  {
    name: "Fish Oil & Omega",
    color: "#FFEFB6",
    image: Category4,
  },
];

function Category() {
  return (
    <Box sx={{ mb: 10 }}>
         <Box sx={{  display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "78%",
        margin: "auto",
        mb: 1,
        alignItems: "center", }}>
        <Typography sx={{ fontWeight: "800", fontSize: "0.9rem" }}>Top Category’s </Typography>
        <Typography sx={{ fontWeight: "800", fontSize: "0.9rem" }}>View All</Typography>
      </Box>

      <Box
      sx={{
        width: "82%",
        margin: "auto",
        mb: 2,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
     

      {CategoryItems?.map((e: any) => (
        <Box
          sx={{
            justifyContent: "space-evenly",
            display: "flex",
            alignItems: "center",
            width: "200px",
            borderRadius: "10px",
            backgroundColor: `${e?.color}`,
            p: 2,
            height: "100px",
          }}
        >
          <Typography
            sx={{ fontSize: "0.8rem", color: "#393846", fontWeight: "700" }}
          >
            {e?.name}
          </Typography>
          <Box
            component="img"
            sx={{ width: "50%", height: "100%" }}
            src={e?.image}
          ></Box>
        </Box>
      ))}
    </Box>
    </Box>
   
  );
}

export default Category;
